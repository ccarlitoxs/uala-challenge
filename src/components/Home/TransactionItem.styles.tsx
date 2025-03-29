import styled from 'styled-components';
import { Typography } from '../UI/Atoms/Typography';

export const Transaction = styled.div`
    display: flex;
    align-items: center;
    padding: 1.2rem 0.8rem;
    gap: 1.2rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
        border-bottom: none;
    }
`;

export const IconContainer = styled.div`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--success);
`;

export const TransactionDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
`;

export const TransactionInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const PaymentMethod = styled(Typography)`
    font-size: 1.4rem;
    font-weight: 500;
    color: #242424;
`;

export const OperationType = styled(Typography)`
    font-size: 1.2rem;
    color: #757575;
`;

export const Amount = styled(Typography)<{ type: 'income' | 'expense' }>`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ type }) => (type === 'income' ? 'var(--success)' : 'var(--error)')};
    text-align: right;
`;

export const DateText = styled(Typography)`
    font-size: 1.2rem;
    color: #757575;
    text-align: right;
`;

export const TransactionIcon = styled.img`
    width: 2rem;
    height: 2rem;
`;
