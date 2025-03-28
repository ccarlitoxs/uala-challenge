import styled from 'styled-components';
import { Typography } from '../UI/Atoms/Typography';
import { Button } from '../UI/Atoms/Button';

interface PaymentPeriodSelectorProps {
    selectedPeriod: 'daily' | 'weekly' | 'monthly';
    onPeriodChange: (period: 'daily' | 'weekly' | 'monthly') => void;
}

const SelectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;

    @media (max-width: 768px) {
        gap: 2.4rem;
        margin-bottom: 1.6rem;
    }
`;

const PeriodButton = styled(Button)<{ isSelected: boolean }>`
    background: none;
    border: none;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    .text-container {
        transform: translateY(${({ isSelected }) => (isSelected ? '-0.4rem' : '0')});
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &::after {
        content: '';
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: var(--primary);
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s ease;
        display: none;
    }

    ${({ isSelected }) =>
        isSelected &&
        `&::after {
      display: block;
      opacity: 1;
      transform: scale(1);
    }`}

    &:hover::after {
        background-color: ${({ isSelected }) => (isSelected ? 'var(--primary)' : 'var(--primary-hover)')};
        display: block;
        transform: scale(1);
    }
`;

export const PaymentPeriodSelector = ({ selectedPeriod, onPeriodChange }: PaymentPeriodSelectorProps) => {
    return (
        <SelectorContainer>
            <PeriodButton isSelected={selectedPeriod === 'daily'} onClick={() => onPeriodChange('daily')}>
                <div className="text-container">
                    <Typography weight={selectedPeriod === 'daily' ? 'semibold' : 'regular'} color={'var(--dark-hover)'}>
                        Diario
                    </Typography>
                </div>
            </PeriodButton>
            <PeriodButton isSelected={selectedPeriod === 'weekly'} onClick={() => onPeriodChange('weekly')}>
                <div className="text-container">
                    <Typography weight={selectedPeriod === 'weekly' ? 'semibold' : 'regular'} color={'var(--dark-hover)'}>
                        Semanal
                    </Typography>
                </div>
            </PeriodButton>
            <PeriodButton isSelected={selectedPeriod === 'monthly'} onClick={() => onPeriodChange('monthly')}>
                <div className="text-container">
                    <Typography weight={selectedPeriod === 'monthly' ? 'semibold' : 'regular'} color={'var(--dark-hover)'}>
                        Mensual
                    </Typography>
                </div>
            </PeriodButton>
        </SelectorContainer>
    );
};
