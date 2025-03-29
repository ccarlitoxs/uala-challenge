import Slider from '@/components/UI/Molecules/Slider/Slider';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
`;

interface AmountFilterProps {
    onApply?: () => void;
}

export const AmountFilter = ({ onApply }: AmountFilterProps) => {
    const [selectedValues, setSelectedValues] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });

    const handleChange = useCallback((values: { min: number; max: number }) => {
        setSelectedValues(values);
    }, []);

    const handleApply = () => {
        console.log('selectedValues in amount filter', selectedValues);
        onApply?.();
    };

    return (
        <FilterContainer>
            <Slider 
                min={0} 
                max={1000} 
                onChange={handleChange}
                initialMin={selectedValues.min}
                initialMax={selectedValues.max}
            />
        </FilterContainer>
    );
};
