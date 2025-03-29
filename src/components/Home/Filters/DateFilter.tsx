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
    values?: [Date | null, Date | null];
    onChange?: (values: [Date | null, Date | null]) => void;
}

export const DateFilter = ({ values, onChange }: DateFilterProps) => {
    return (
        <FilterContainer>
            <Calendar onChange={onChange} values={values} />
        </FilterContainer>
    );
};
