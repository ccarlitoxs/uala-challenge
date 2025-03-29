import styled from 'styled-components';
import { CalendarContainerProps } from './Calendar';

export const CalendarContainer = styled.div<CalendarContainerProps>`
    background-color: var(--background-calendar);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    padding: 1.6rem 2rem;
    max-width: 28rem;
    border-radius: 1.6rem;
    box-shadow: 0px 2px 24px 0px #55555514;
`;

export const DatePickerContainer = styled.div`
    .react-datepicker {
        border: none;
        box-shadow: none;
        font-size: 1.2rem;
        font-family: 'Public Sans', sans-serif;
    }
    .react-datepicker__header {
        background-color: var(--background-calendar);
        border: none;
        gap: 0.4rem;
        display: flex;
        flex-direction: column;
    }
    .react-datepicker__month-container {
        width: 24rem;
        height: 24.8rem;
        gap: 1.6rem;
        display: flex;
        flex-direction: column;
    }
    .react-datepicker__month {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 40px);
        gap: 0.4rem;
    }
    .react-datepicker__current-month {
        font-size: 1.4rem;
        font-weight: 600;
    }
    .react-datepicker__week {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    .react-datepicker__day {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        border-radius: 0;
    }
    .react-datepicker__day-names {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .react-datepicker__day-name {
        color: var(--text-disabled);
    }
    .react-datepicker__navigation-icon::before {
        border-color: var(--primary);
        border-width: 2px 2px 0 0;
    }
    .react-datepicker__day--in-range {
        background-color: var(--background-calendar-range);
        color: var(--text-primary);
    }
    .react-datepicker__day--range-end,
    .react-datepicker__day--range-start,
    .react-datepicker__day--selected,
    .react-datepicker__day--selected:not([aria-disabled='true']):hover,
    .react-datepicker__day--keyboard-selected:not([aria-disabled='true']):hover {
        background-color: var(--primary);
        color: var(--text-secondary);
    }
    .react-datepicker__day--range-end {
        border-top-right-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
    }
    .react-datepicker__day--range-start {
        border-top-left-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
    }
`;
