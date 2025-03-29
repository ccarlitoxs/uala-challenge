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
    onApply?: () => void;
}

export const CardFilter = ({ onApply }: CardFilterProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const options = [
        { value: 'visa', label: 'Visa' },
        { value: 'mastercard', label: 'Mastercard' },
        { value: 'amex', label: 'Amex' },
    ];

    const handleChange = (values: string[]) => {
        setSelectedValues(values);
    };

    const handleApply = () => {
        console.log('selectedValues in card filter', selectedValues);
        onApply?.();
    };

    return (
        <FilterContainer>
            <ChipsSelect placeholder="Todas" options={options} selectedValues={selectedValues} onChange={handleChange} />
        </FilterContainer>
    );
};
