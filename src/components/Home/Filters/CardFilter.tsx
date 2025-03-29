import { ChipsSelect } from '@/components/UI/Molecules/ChipsSelect/ChipsSelect';
import { useState } from 'react';
import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
`;

interface CardFilterProps {
    values: string[];
    onChange?: (values: string[] | string) => void;
}

export const CardFilter = ({ values, onChange: onChangeValues }: CardFilterProps) => {
    const options = [
        { value: 'visa', label: 'Visa' },
        { value: 'mastercard', label: 'Mastercard' },
        { value: 'amex', label: 'Amex' },
    ];

    return (
        <FilterContainer>
            <ChipsSelect placeholder="Todas" options={options} selectedValues={values} onChange={onChangeValues} />
        </FilterContainer>
    );
};
