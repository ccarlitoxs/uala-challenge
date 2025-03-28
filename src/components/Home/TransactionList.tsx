import styled from 'styled-components';
import { Typography } from '../UI/Atoms/Typography';
import { FilterIcon } from '@/assets/Icons/FilterIcon';
import { ExportIcon } from '@/assets/Icons/ExportIcon';
import { ButtonPresets } from '../UI/Atoms/Button';
import TransactionItem from './TransactionItem';
import { Transaction } from '@/interfaces/app.types';

interface TransactionListProps {
    transactions?: Transaction[];
}

const ListContainer = styled.div`
    overflow-y: auto;
    width: 100%;
`;

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 0.8rem;
    border-bottom: 1px solid #eeeeee;

    @media (max-width: 768px) {
        padding: 1.2rem 1.6rem;
    }
`;

const ListContent = styled.div`
    padding: 0;
`;

const HeaderActions = styled.div`
    display: flex;
    gap: 1.2rem;
`;

const HeaderButton = styled(ButtonPresets.TextPrimaryButton)`
    padding: 0;
    width: 2em;
    height: 2em;
`;

const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    gap: 1.6rem;
    max-width: 32rem;
    margin: 0 auto;
    margin-top: 4.8rem;
`;

const EmptyStateIcon = styled.img`
    width: 7rem;
    height: 7rem;
`;

export const TransactionList = ({ transactions = [] }: TransactionListProps) => {
    return (
        <ListContainer>
            <ListHeader>
                <Typography variant="h3" size="sm">
                    Historial de transacciones
                </Typography>
                <HeaderActions>
                    <HeaderButton>
                        <FilterIcon />
                    </HeaderButton>
                    <HeaderButton>
                        <ExportIcon />
                    </HeaderButton>
                </HeaderActions>
            </ListHeader>
            <ListContent>
                {transactions.length === 0 ? (
                    <EmptyStateContainer>
                        <EmptyStateIcon src="/icons/empty-search-icon.svg" alt="" />
                        <Typography align="center" weight="thin">
                            No hay resultados que mostrar. Podés probar usando los filtros.
                        </Typography>
                    </EmptyStateContainer>
                ) : (
                    transactions.map(transaction => (
                        <TransactionItem
                            key={transaction.id}
                            id={transaction.id}
                            amount={transaction.amount}
                            createdAt={transaction.createdAt}
                            paymentMethod={transaction.paymentMethod}
                            card={transaction.card}
                            installments={transaction.installments}
                            updatedAt={transaction.updatedAt}
                        />
                    ))
                )}
            </ListContent>
        </ListContainer>
    );
};
