import styled from 'styled-components';
import { ButtonPresets } from '../UI/Atoms/Button';

export const ListContainer = styled.div`
    overflow-y: auto;
    width: 100%;
    min-height: 45rem;
    position: relative;
`;

export const ExportCalendarContainer = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 6.1rem;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    transition: opacity 0.2s ease-in-out;
`;

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 0.8rem;
    border-bottom: 1px solid #eeeeee;

    @media (max-width: 768px) {
        padding: 1.2rem 1.6rem;
    }
`;

export const ListContent = styled.div`
    padding: 0;
`;

export const HeaderActions = styled.div`
    display: flex;
    gap: 1.2rem;
`;

export const HeaderButton = styled(ButtonPresets.TextPrimaryButton)`
    padding: 0;
    width: 2em;
    height: 2em;
`;

export const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    gap: 1.6rem;
    max-width: 32rem;
    margin: 0 auto;
    margin-top: 4.8rem;
`;

export const EmptyStateIcon = styled.img`
    width: 7rem;
    height: 7rem;
`;

export const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`;

export const CalendarIcon = styled.img`
    width: 2rem;
    height: 2rem;
`;

export const CalendarButtonContainer = styled.div`
    display: flex;
    gap: 1.6rem;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
