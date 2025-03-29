import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { es } from 'date-fns/locale';
import { capitalizeFirstLetter } from '@/helpers/utils';
import { CalendarContainer, DatePickerContainer } from './Calendar.styles';

registerLocale('es', es);

export interface CalendarContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onRangeChange?: (dates: [Date | null, Date | null]) => void;
}

const Calendar = ({ header, footer, onRangeChange, ...props }: CalendarContainerProps) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onRangeChange?.(dates);
    };

    return (
        <CalendarContainer {...props}>
            {header}
            <DatePickerContainer>
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
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
