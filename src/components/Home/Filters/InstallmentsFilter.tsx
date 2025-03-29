import styled from 'styled-components';
import { ChipsSelect } from '@/components/UI/Molecules/ChipsSelect/ChipsSelect';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
`;

interface InstallmentsFilterProps {
    values: string[];
    onChange?: (values: string | string[]) => void;
}

export const InstallmentsFilter = ({ values, onChange: onChangeValues }: InstallmentsFilterProps) => {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '6', label: '6' },
        { value: '12', label: '12' },
    ];

    return (
        <FilterContainer>
            <ChipsSelect placeholder="Todas" options={options} selectedValues={values} onChange={onChangeValues} />
        </FilterContainer>
    );
};
