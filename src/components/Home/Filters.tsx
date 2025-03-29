import { useState } from 'react';
import { FilterContainer, OptionIcon } from './Filters.styles';
import { FilterOption } from './Filters/FilterOption';
import { DateFilter } from './Filters/DateFilter';
import { CardFilter } from './Filters/CardFilter';
import { InstallmentsFilter } from './Filters/InstallmentsFilter';
import { PaymentMethodsFilter } from './Filters/PaymentMethodsFilter';
import { AmountFilter } from './Filters/AmountFilter';

interface FilterState {
    date: boolean;
    card: boolean;
    installments: boolean;
    amount: boolean;
    paymentMethods: boolean;
}

export const Filters = () => {
    const [openFilters, setOpenFilters] = useState<FilterState>({
        date: false,
        card: false,
        installments: false,
        amount: false,
        paymentMethods: false,
    });

    const handleToggleFilter = (filterName: keyof FilterState) => {
        setOpenFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName],
        }));
    };

    const handleClearFilter = (filterName: keyof FilterState) => {
        // Add logic to clear specific filter
        console.log(`Clearing ${filterName} filter`);
    };

    return (
        <FilterContainer>
            <FilterOption
                icon={<OptionIcon src="/icons/calendar-icon.svg" />}
                label="Fecha"
                isOpen={openFilters.date}
                onToggle={() => handleToggleFilter('date')}
            >
                <DateFilter />
            </FilterOption>
            <FilterOption
                icon={<OptionIcon src="/icons/card-icon.svg" />}
                label="Tarjeta"
                isOpen={openFilters.card}
                onToggle={() => handleToggleFilter('card')}
            >
                <CardFilter />
            </FilterOption>
            <FilterOption
                icon={<OptionIcon src="/icons/installments-icon.svg" />}
                label="Cuotas"
                isOpen={openFilters.installments}
                onToggle={() => handleToggleFilter('installments')}
            >
                <InstallmentsFilter />
            </FilterOption>
            <FilterOption
                icon={<OptionIcon src="/icons/money-icon.svg" />}
                label="Monto"
                isOpen={openFilters.amount}
                onToggle={() => handleToggleFilter('amount')}
            >
                <AmountFilter />
            </FilterOption>
            <FilterOption
                icon={<OptionIcon src="/icons/payment-method-icon.svg" />}
                label="Métodos de cobro"
                isOpen={openFilters.paymentMethods}
                onToggle={() => handleToggleFilter('paymentMethods')}
            >
                <PaymentMethodsFilter />
            </FilterOption>
        </FilterContainer>
    );
};
