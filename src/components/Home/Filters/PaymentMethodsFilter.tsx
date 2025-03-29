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
    onApply?: () => void;
}

export const PaymentMethodsFilter = ({ onApply }: PaymentMethodsFilterProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const options = [
        { value: 'link', label: 'Link de pago' },
        { value: 'qr', label: 'Código QR' },
        { value: 'mPOS', label: 'mPOS' },
        { value: 'POS', label: 'POS Pro' },
    ];

    const handleChange = (values: string[]) => {
        setSelectedValues(values);
    };

    const handleApply = () => {
        console.log('selectedValues in payment methods filter', selectedValues);
        onApply?.();
    };

    return (
        <FilterContainer>
            <ChipsSelect options={options} selectedValues={selectedValues} onChange={handleChange} />
        </FilterContainer>
    );
};
