import Calendar from '@/components/UI/Molecules/Calendar/Calendar';
import { useState } from 'react';
import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
`;

interface DateFilterProps {
    onApply?: () => void;
}

export const DateFilter = ({ onApply }: DateFilterProps) => {
    const [selectedValues, setSelectedValues] = useState<[Date | null, Date | null]>([null, null]);

    const handleChange = (dates: [Date | null, Date | null]) => {
        setSelectedValues(dates);
    };

    const handleApply = () => {
        console.log('selectedValues in date filter', selectedValues);
        onApply?.();
    };

    return (
        <FilterContainer>
            <Calendar onRangeChange={handleChange} />
        </FilterContainer>
    );
};
