import { Transaction as TransactionType } from '@/interfaces/app.types';
import {
    IconContainer,
    Transaction,
    TransactionDetails,
    TransactionIcon,
    TransactionInfo,
    PaymentMethod,
    OperationType,
    Amount,
    DateText,
} from './TransactionItem.styles';

export interface TransactionItemProps extends TransactionType {
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

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
