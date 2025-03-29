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

interface PaymentMethodsFilterProps {
    values: string[];
    onChange?: (values: string[] | string) => void;
}

export const PaymentMethodsFilter = ({ values, onChange: onChangeValues }: PaymentMethodsFilterProps) => {
    const options = [
        { value: 'link', label: 'Link de pago' },
        { value: 'qr', label: 'Código QR' },
        { value: 'mPOS', label: 'mPOS' },
        { value: 'POS', label: 'POS Pro' },
    ];

    return (
        <FilterContainer>
            <ChipsSelect options={options} selectedValues={values} onChange={onChangeValues} />
        </FilterContainer>
    );
};
