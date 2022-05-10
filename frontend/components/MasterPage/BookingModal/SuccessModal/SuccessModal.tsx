import React, { FC } from 'react';
import { Box, Modal } from '@material-ui/core';
import styles from 'components/MasterPage/BookingModal/BookingModal.module.scss';
import Check from 'assets/icons/check.svg';
import { ISlot } from '_types';

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
  handleModalClose: any;
  selectedService: any;
  selectedSlot: ISlot | null;
  open: boolean;
}

const SuccessModal: FC<Props> = ({
  handleModalClose,
  selectedService,
  selectedSlot,
  open,
}) => {
  return (
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
  );
};

export default SuccessModal;
