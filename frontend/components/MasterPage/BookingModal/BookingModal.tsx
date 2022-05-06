import React, { useEffect, useState } from 'react';
import { Box, Modal } from '@material-ui/core';
import CalendarPicker from 'components/MasterPage/BookingModal/CalendarPicker';
import slots, { DayPeriod } from 'data/slots';
import CrossLine from 'assets/icons/crossline.svg';
import Check from 'assets/icons/check.svg';
import styles from './BookingModal.module.scss';
import { ISlot } from '_types';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

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

const styleSuccess = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#14751E',
  boxShadow: 24,
  padding: 40,
  height: 300,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  selectedService: any;
}

const BookingModal: React.FC<Props> = ({
  open,
  handleClose,
  selectedService,
}: Props) => {
  const [selectedDate, setSelectedDate] =
    useState<MaterialUiPickersDate | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<ISlot | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // передавати саме слот на бекенд. у слоті інфа про дату
  const [freeSlots, setFreeSlots] = useState(slots);

  const morningSlots = freeSlots.filter(
    (slot) => slot.period === DayPeriod.Morning
  );
  const afternoonSlots = freeSlots.filter(
    (slot) => slot.period === DayPeriod.Afternoon
  );
  const eveningSlots = freeSlots.filter(
    (slot) => slot.period === DayPeriod.Evening
  );

  console.log(selectedSlot);

  const isSlotSelected = (slotId: number): boolean => {
    return slotId === selectedSlot?.id;
  };

  const handleChangeDate = (date: MaterialUiPickersDate): void => {
    setSelectedDate(date);
  };

  const handleSelectSlot = (slot: ISlot): void => {
    setSelectedSlot(slot);
  };

  const handleConfirmBooking = (): void => {
    // api call
    // validate and call props function
    setBookingConfirmed(true);
  };

  const handleModalClose = (): void => {
    setSelectedSlot(null);
    setBookingConfirmed(false);
    handleClose();
  };

  useEffect(() => {
    // fetch free sloots here by master id
    // setFreeSlots(sloots)
  }, [selectedDate]);

  return (
    <div>
      {bookingConfirmed && (
        <Modal open={open} onClose={handleModalClose}>
          <Box sx={styleSuccess}>
            <div className={styles.success}>
              <Check />
              Success
            </div>
            <div className={styles.sub_success}>
              {`you were booked for a ${selectedService.service} on Thursday at ${selectedSlot?.slotStart}`}
            </div>
          </Box>
        </Modal>
      )}
      {!bookingConfirmed && (
        <Modal open={open} onClose={handleModalClose}>
          <Box sx={styleModal}>
            <CrossLine onClick={handleModalClose} className={styles.cross} />
            <div style={{ maxWidth: 325, margin: '0 auto' }}>
              <CalendarPicker
                disablePast
                value={selectedDate}
                onChange={(date): void => {
                  handleChangeDate(date);
                }}
              />
            </div>
            <div className={styles.slots_wrapper}>
              <div>
                <div className={styles.period}>Morning</div>
                {morningSlots.map((el) => (
                  <div
                    key={el.id}
                    className={
                      isSlotSelected(el.id) ? styles.slot_selected : styles.slot
                    }
                    onClick={(): void => handleSelectSlot(el)}
                  >
                    {el.slotStart}
                  </div>
                ))}
              </div>
              <div>
                <div className={styles.period}>Afternoon</div>
                {afternoonSlots.map((el) => (
                  <div
                    key={el.id}
                    className={
                      isSlotSelected(el.id) ? styles.slot_selected : styles.slot
                    }
                    onClick={(): void => handleSelectSlot(el)}
                  >
                    {el.slotStart}
                  </div>
                ))}
              </div>
              <div>
                <div className={styles.period}>Evening</div>
                {eveningSlots.map((el) => (
                  <div
                    key={el.id}
                    className={
                      isSlotSelected(el.id) ? styles.slot_selected : styles.slot
                    }
                    onClick={(): void => handleSelectSlot(el)}
                  >
                    {el.slotStart}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.service_info}>
              <div>
                <div>{selectedService.service}</div>
                {selectedSlot && (
                  <div className={styles.time}>
                    {`${selectedSlot.slotStart} - ${selectedSlot.slotEnd}`}
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
