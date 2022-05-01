import React, { useEffect, useState } from 'react';
import { Box, Modal, TextField } from '@material-ui/core';
import CalendarPicker from 'components/CalendarPicker';
import slots, { DayPeriod } from 'data/slots';
import CrossLine from 'assets/icons/crossline.svg';
import styles from './BookingModal.module.scss';

const style = {
  position: 'absolute' as 'absolute',
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
}

const BookingModal: React.FC<Props> = ({
  open, handleClose, selectedService,
}: Props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // передавати саме слот на бекенд. у слоті інфа про дату
  const [freeSlots, setFreeSlots] = useState(slots);

  const morningSlots = freeSlots.filter((slot) => slot.period === DayPeriod.Morning);
  const afternoonSlots = freeSlots.filter((slot) => slot.period === DayPeriod.Afternoon);
  const eveningSlots = freeSlots.filter((slot) => slot.period === DayPeriod.Evening);

  const isSlotSelected = (slot): boolean => {
    return slot === selectedSlot?.id;
  };

  const handleChangeDate = (date): void => {
    setSelectedDate(date);
  };

  const handleSelectSlot = (slot): void => {
    setSelectedSlot(slot);
  };

  useEffect(() => {
    // fetch free sloots here by master id
    // setFreeSlots(sloots)
  }, [selectedDate]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <CrossLine onClick={handleClose} className={styles.cross} />
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
                  className={isSlotSelected(el.id) ? styles.slot_selected : styles.slot}
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
                  className={isSlotSelected(el.id) ? styles.slot_selected : styles.slot}
                  onClick={():void => handleSelectSlot(el)}
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
                  className={isSlotSelected(el.id) ? styles.slot_selected : styles.slot}
                  onClick={():void => handleSelectSlot(el)}
                >
                  {el.slotStart}
                </div>
              ))}
            </div>
          </div>
          <div>
            {selectedService.service}
            {' '}
            {selectedService.price}
          </div>
          <div className={styles.comments}>Comments</div>
          <button type="submit" className={styles.button}>CONFIRM</button>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
