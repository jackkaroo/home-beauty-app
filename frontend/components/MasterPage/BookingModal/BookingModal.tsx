import React, { useEffect, useState } from 'react';
import { Box, Modal } from '@material-ui/core';
import CalendarPicker from 'components/MasterPage/BookingModal/CalendarPicker';
import CrossLine from 'assets/icons/crossline.svg';
import styles from './BookingModal.module.scss';
import { ISlot } from '_types';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import SuccessModal from 'components/MasterPage/BookingModal/SuccessModal/SuccessModal';
import { API_URL } from 'services/api/base';
import { getUserId } from 'services/api/users/localStorage';

const styleModal = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: 40,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  selectedService: any;
  masterId: number;
}

const getSlotsArray = (
  slots: ISlot[] | null
): { time: string; arr: ISlot[] }[] => {
  if (!slots) return [];
  const morningSlots = slots.filter(
    (slot) => slot.slotStartTime < '13:00' && !slot.clientId
  );
  const afternoonSlots = slots.filter(
    (slot) =>
      slot.slotStartTime >= '13:00' &&
      slot.slotStartTime < '18:00' &&
      !slot.clientId
  );
  const eveningSlots = slots.filter(
    (slot) => slot.slotStartTime >= '18:00' && !slot.clientId
  );

  return [
    { time: 'Morning', arr: morningSlots },
    { time: 'Afternoon', arr: afternoonSlots },
    { time: 'Evening', arr: eveningSlots },
  ];
};

const BookingModal: React.FC<Props> = ({
  open,
  handleClose,
  selectedService,
  masterId,
}: Props) => {
  const [selectedDate, setSelectedDate] =
    useState<MaterialUiPickersDate | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<ISlot | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [freeSlots, setFreeSlots] = useState<ISlot[] | null>(null);

  const slotsArrays = getSlotsArray(freeSlots);
  const isSlotSelected = (slotId: number): boolean => {
    return slotId === selectedSlot?.id;
  };

  const handleConfirmBooking = async (): Promise<void> => {
    if (selectedSlot) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId: parseInt(getUserId() as string),
          serviceId: selectedService.id,
        }),
      };

      try {
        const resJson = await fetch(
          `${API_URL}/service-slots/${selectedSlot.id}`,
          requestOptions
        );
        const res = await resJson.json();
        if (res.error) throw Error(res.error.message);
        setBookingConfirmed(true);
      } catch (err) {
        alert(err);
      }
    }
  };

  const handleModalClose = (): void => {
    setSelectedSlot(null);
    setBookingConfirmed(false);
    handleClose();
  };

  useEffect(() => {
    const event = new Date(selectedDate!);
    event.setMinutes(0);
    event.setHours(3);

    const fetchData = async (): Promise<void> => {
      const slotsJson = await fetch(
        `${API_URL}/service-slots/${masterId}/${event.toISOString()}`
      );
      const slots = await slotsJson.json();
      setFreeSlots(slots);
    };

    // call the function
    fetchData();
  }, [selectedDate]);

  return (
    <div>
      {bookingConfirmed && (
        <SuccessModal
          open={open}
          handleModalClose={handleModalClose}
          selectedService={selectedService}
          selectedSlot={selectedSlot}
        />
      )}
      {!bookingConfirmed && (
        <Modal open={open} onClose={handleModalClose}>
          <Box sx={styleModal}>
            <CrossLine onClick={handleModalClose} className={styles.cross} />
            <div style={{ maxWidth: 325, margin: '0 auto' }}>
              <CalendarPicker
                disablePast
                value={selectedDate}
                onChange={(date): void => setSelectedDate(date)}
              />
            </div>
            <div className={styles.slots_wrapper}>
              {slotsArrays.map((slotsArray, index) => (
                <div key={index}>
                  <div className={styles.period}>{slotsArray.time}</div>
                  {slotsArray.arr.map((el) => (
                    <div
                      key={el.id}
                      className={
                        isSlotSelected(el.id)
                          ? styles.slot_selected
                          : styles.slot
                      }
                      onClick={(): void => setSelectedSlot(el)}
                    >
                      {el.slotStartTime}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.service_info}>
              <div>
                <div>{selectedService.name}</div>
                {selectedSlot && (
                  <div className={styles.time}>
                    {`${selectedSlot.slotStartTime} - ${selectedSlot.slotEndTime}`}
                  </div>
                )}
              </div>
              <div>{selectedService.price} UAH</div>
            </div>
            <button
              type="submit"
              className={styles.button}
              onClick={handleConfirmBooking}
              disabled={!selectedSlot}
            >
              CONFIRM
            </button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default BookingModal;
