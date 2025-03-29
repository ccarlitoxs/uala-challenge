import { useState, useEffect, useRef } from 'react';
import { Typography } from '../UI/Atoms/Typography';
import { FilterIcon } from '@/assets/Icons/FilterIcon';
import { ExportIcon } from '@/assets/Icons/ExportIcon';
import { ButtonPresets } from '../UI/Atoms/Button';
import TransactionItem from './TransactionItem';
import { Transaction } from '@/interfaces/app.types';
import Calendar from '../UI/Molecules/Calendar/Calendar';
import { Drawer } from '../UI/Molecules/Drawer/Drawer';
import {
    ListContainer,
    ExportCalendarContainer,
    CalendarButtonContainer,
    CalendarHeader,
    CalendarIcon,
    ListHeader,
    HeaderActions,
    HeaderButton,
    EmptyStateContainer,
    EmptyStateIcon,
    ListContent,
} from './TransactionList.styles';
import { Filters } from './Filters';

export interface TransactionListProps {
    transactions?: Transaction[];
}

export const TransactionList = ({ transactions = [] }: TransactionListProps) => {
    const [isExportCalendarOpen, setIsExportCalendarOpen] = useState(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsExportCalendarOpen(false);
            }
        };

        if (isExportCalendarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExportCalendarOpen]);

    const handleCloseCalendar = () => {
        setIsExportCalendarOpen(false);
    };

    const handleExport = () => {
        setIsExportCalendarOpen(false);
    };

    const handleApplyFilters = () => {
        // Handle filter application logic here
        setIsFiltersOpen(false);
    };

    return (
        <ListContainer>
            <Drawer isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} title="Filtros" onApply={handleApplyFilters}>
                <Filters />
            </Drawer>
            <ExportCalendarContainer ref={calendarRef} isOpen={isExportCalendarOpen}>
                <Calendar
                    onRangeChange={() => {}}
                    footer={
                        <CalendarButtonContainer>
                            <ButtonPresets.OutlinedPrimaryButton onClick={handleCloseCalendar}>Cerrar</ButtonPresets.OutlinedPrimaryButton>
                            <ButtonPresets.RoundedPrimaryButton onClick={handleExport}>Descargar</ButtonPresets.RoundedPrimaryButton>
                        </CalendarButtonContainer>
                    }
                    header={
                        <CalendarHeader>
                            <CalendarIcon src="/icons/calendar-icon.svg" alt="" />
                            <Typography variant="h2">Elegí las fechas que querés descargar</Typography>
                        </CalendarHeader>
                    }
                />
            </ExportCalendarContainer>
            <ListHeader>
                <Typography variant="h3" size="sm">
                    Historial de transacciones
                </Typography>
                <HeaderActions>
                    <HeaderButton onClick={() => setIsFiltersOpen(true)}>
                        <FilterIcon />
                    </HeaderButton>
                    <HeaderButton onClick={() => setIsExportCalendarOpen(true)}>
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
