import React, { FC } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  DatePickerProps,
} from '@material-ui/pickers';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

type Props = DatePickerProps;

const materialTheme = createTheme({
  overrides: {
    // @ts-ignore
    MuiPickersDay: {
      daySelected: {
        color: '#fff',
        backgroundColor: 'darkseagreen',
        '&:hover': {
          backgroundColor: 'rgb(126, 166, 126)',
        },
      },
    },
  },
});

const CalendarPicker: FC<Props> = (props) => {
  return (
    <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          // disablePast
          disableToolbar
          autoOk
          variant="static"
          openTo="date"
          {...props}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default CalendarPicker;
