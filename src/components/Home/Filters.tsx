import { useState } from 'react';
import { ClearButton, FiltersContainer, FiltersHeader, OptionIcon } from './Filters.styles';
import { FilterOption } from './Filters/FilterOption';
import { DateFilter } from './Filters/DateFilter';
import { CardFilter } from './Filters/CardFilter';
import { InstallmentsFilter } from './Filters/InstallmentsFilter';
import { PaymentMethodsFilter } from './Filters/PaymentMethodsFilter';
import { AmountFilter } from './Filters/AmountFilter';
import { Typography } from '../UI/Atoms/Typography';

interface FilterState {
    date: boolean;
    card: boolean;
    installments: boolean;
    amount: boolean;
    paymentMethods: boolean;
}

export interface FilterValues {
    date: [Date | null, Date | null];
    card: string[];
    installments: string[];
    amount: [number | null, number | null];
    paymentMethods: string[];
}

const initialFilterState: FilterState = {
    date: false,
    card: false,
    installments: false,
    amount: false,
    paymentMethods: false,
};

export const Filters = () => {
    const initialFilterValues: FilterValues = {
        date: [null, null],
        card: [],
        installments: [],
        amount: [0, 1000],
        paymentMethods: [],
    };

    const [openFilters, setOpenFilters] = useState<FilterState>(initialFilterState);
    const [filters, setFilters] = useState<FilterValues>(initialFilterValues);

    const handleToggleFilter = (filterName: keyof FilterState) => {
        setOpenFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName],
        }));
    };

    const handleClearFilter = () => {
        // Add logic to clear specific filter
        console.log(`Clearing all filters`);
        setOpenFilters(initialFilterState);
        setFilters(initialFilterValues);
    };

    const handleChangeFilter = (filterName: keyof FilterState, values: [Date | null, Date | null] | [number | null, number | null] | string[] | string) => {
        setFilters(prev => ({ ...prev, [filterName]: values }));
    };

    return (
        <FiltersContainer>
            <FiltersHeader>
                <Typography variant="h3">Todos los filtros</Typography>
                <ClearButton onClick={handleClearFilter}>Limpiar</ClearButton>
            </FiltersHeader>
            <FilterOption
                icon={<OptionIcon src="/icons/calendar-icon.svg" />}
                label="Fecha"
                isOpen={openFilters.date}
                onToggle={() => handleToggleFilter('date')}
            >
                <DateFilter values={filters.date} onChange={values => handleChangeFilter('date', values)} />
            </FilterOption>

            <FilterOption
                icon={<OptionIcon src="/icons/card-icon.svg" />}
                label="Tarjeta"
                isOpen={openFilters.card}
                onToggle={() => handleToggleFilter('card')}
            >
                <CardFilter values={filters.card} onChange={values => handleChangeFilter('card', values)} />
            </FilterOption>

            <FilterOption
                icon={<OptionIcon src="/icons/installments-icon.svg" />}
                label="Cuotas"
                isOpen={openFilters.installments}
                onToggle={() => handleToggleFilter('installments')}
            >
                <InstallmentsFilter values={filters.installments} onChange={values => handleChangeFilter('installments', values)} />
            </FilterOption>

            <FilterOption
                icon={<OptionIcon src="/icons/money-icon.svg" />}
                label="Monto"
                isOpen={openFilters.amount}
                onToggle={() => handleToggleFilter('amount')}
            >
                <AmountFilter values={filters.amount} onChange={values => handleChangeFilter('amount', values)} />
            </FilterOption>

            <FilterOption
                icon={<OptionIcon src="/icons/payment-method-icon.svg" />}
                label="Métodos de cobro"
                isOpen={openFilters.paymentMethods}
                onToggle={() => handleToggleFilter('paymentMethods')}
            >
                <PaymentMethodsFilter values={filters.paymentMethods} onChange={values => handleChangeFilter('paymentMethods', values)} />
            </FilterOption>
        </FiltersContainer>
    );
};
