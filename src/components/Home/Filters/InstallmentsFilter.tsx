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

interface InstallmentsFilterProps {
    onApply?: () => void;
}

export const InstallmentsFilter = ({ onApply }: InstallmentsFilterProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '6', label: '6' },
        { value: '12', label: '12' },
    ];

    const handleChange = (values: string[]) => {
        setSelectedValues(values);
    };

    const handleApply = () => {
        console.log('selectedValues in installments filter', selectedValues);
        onApply?.();
    };

    return (
        <FilterContainer>
            <ChipsSelect placeholder="Todas" options={options} selectedValues={selectedValues} onChange={handleChange} />
        </FilterContainer>
    );
};
