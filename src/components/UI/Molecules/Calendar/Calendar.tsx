import { useState } from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { es } from 'date-fns/locale';
import { capitalizeFirstLetter } from '@/helpers/utils';
import { CalendarContainer, DatePickerContainer } from './Calendar.styles';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es);

export type CalendarProps = {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onChange?: (dates: [Date | null, Date | null]) => void;
    values?: [Date | null, Date | null];
}

const Calendar = ({ header, footer, onChange, values }: CalendarProps) => {
    return (
        <CalendarContainer>
            {header}
            <DatePickerContainer>
                <DatePicker
                    onChange={onChange}
                    startDate={values?.[0]}
                    endDate={values?.[1]}
                    selectsRange
                    inline
                    className="date-picker"
                    locale="es"
                    formatWeekDay={day => capitalizeFirstLetter(day).substring(0, 3)}
                />
            </DatePickerContainer>
            {footer}
        </CalendarContainer>
    );
};

export default Calendar;

