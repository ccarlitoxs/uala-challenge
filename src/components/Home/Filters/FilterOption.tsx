import styled from 'styled-components';
import { Switch } from '@/components/UI/Atoms/Switch/Switch';
import { Typography } from '@/components/UI/Atoms/Typography';

export const FilterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
`;

export const FilterContent = styled.div<{ isOpen: boolean }>`
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

interface FilterOptionProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

export const FilterOption = ({ icon, label, isOpen, onToggle, children, ...props }: FilterOptionProps) => {
    const handleToggleFilter = () => {
        if (isOpen) {
            onToggle();
        } else {
            onToggle();
        }
    };

    return (
        <FilterItem {...props}>
            <FilterHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    {icon}
                    <Typography weight="semibold" size="md">
                        {label}
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <Switch checked={isOpen} onChange={handleToggleFilter} />
                </div>
            </FilterHeader>
            <FilterContent isOpen={isOpen}>{children}</FilterContent>
        </FilterItem>
    );
};
