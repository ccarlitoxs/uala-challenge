import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { InputPresets } from '@/components/UI/Atoms/Input';
import Slider from '@/components/UI/Molecules/Slider/Slider';
import { Typography } from '@/components/UI/Atoms/Typography';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const FilterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    max-width: 32rem;
`;

const InputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: space-between;
    width: 100%;

    & .Input-Container {
        border: 1px solid var(--primary);
        border-radius: 0.8rem;
        padding: 0 1.5rem;
        max-width: 10rem;
    }
`;

interface AmountFilterProps {
    values: [number | null, number | null];
    onChange?: (values: [number | null, number | null]) => void;
}

export const AmountFilter = ({ values, onChange }: AmountFilterProps) => {
    const handleChange = useCallback((values: number[]) => {
        // min can't be greater than max
        if (values[0] < values[1]) {
            onChange?.([values[0], values[1]]);
        } else {
            onChange?.([values[1], values[0]]);
        }
    }, []);

    return (
        <FilterContainer>
            <FilterContent>
                <Slider value={[values[0] || 0, values[1] || 0]} min={0} max={1000} onValueChange={handleChange} />
                <InputsContainer>
                    <InputPresets.TextInput
                        value={values[0]?.toString() || ''}
                        onChange={e => onChange?.([Number(e.target.value), values[1]])}
                        iconLeft={<Typography>$</Typography>}
                        type="number"
                        label="Monto mínimo"
                        containerProps={{ className: 'Input-Container' }}
                    />
                    <InputPresets.TextInput
                        value={values[1]?.toString() || ''}
                        onChange={e => onChange?.([values[0], Number(e.target.value)])}
                        iconLeft={<Typography>$</Typography>}
                        type="number"
                        label="Monto máximo"
                        containerProps={{ className: 'Input-Container' }}
                    />
                </InputsContainer>
            </FilterContent>
        </FilterContainer>
    );
};
