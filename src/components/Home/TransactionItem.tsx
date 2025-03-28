import styled from 'styled-components';
import { Typography } from '../UI/Atoms/Typography';
import { Transaction as TransactionType } from '@/interfaces/app.types';

interface TransactionItemProps extends TransactionType {
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Transaction = styled.div`
    display: flex;
    align-items: center;
    padding: 1.2rem 0.8rem;
    gap: 1.2rem;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
        border-bottom: none;
    }
`;

const IconContainer = styled.div`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--success);
`;

const TransactionDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
`;

const TransactionInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const PaymentMethod = styled(Typography)`
    font-size: 1.4rem;
    font-weight: 500;
    color: #242424;
`;

const OperationType = styled(Typography)`
    font-size: 1.2rem;
    color: #757575;
`;

const Amount = styled(Typography)<{ type: 'income' | 'expense' }>`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ type }) => (type === 'income' ? '#00875A' : '#DE350B')};
    text-align: right;
`;

const DateText = styled(Typography)`
    font-size: 1.2rem;
    color: #757575;
    text-align: right;
`;

const TransactionIcon = styled.img`
    width: 2rem;
    height: 2rem;
`;

const TransactionItem = ({ id, amount, createdAt, paymentMethod, card, installments, ...containerProps }: TransactionItemProps) => {
    return (
        <Transaction {...containerProps}>
            <IconContainer>
                <TransactionIcon src={`/icons/transaction-icon.svg`} alt={paymentMethod} />
            </IconContainer>
            <TransactionDetails>
                <PaymentMethod>{paymentMethod}</PaymentMethod>
                <OperationType>Venta</OperationType>
            </TransactionDetails>
            <TransactionInfo>
                <Amount type={amount > 0 ? 'income' : 'expense'}>
                    +$
                    {amount.toLocaleString('es-AR', {
                        style: 'decimal',
                        minimumFractionDigits: 2,
                        currency: 'ARS',
                    })}
                </Amount>
                <DateText>{new Date(createdAt).toLocaleDateString()}</DateText>
            </TransactionInfo>
        </Transaction>
    );
};

export default TransactionItem;
