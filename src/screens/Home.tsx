import { useState } from 'react';
import { PaymentPeriodSelector } from '@/components/Home/PaymentPeriodSelector';
import { TransactionList } from '@/components/Home/TransactionList';
import { Text } from '@/components/UI/Typography/Text';
import { Amount, DashboardContainer, MetricsCard, mockTransactions } from './Home.styles';

const Home = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  return (
    <DashboardContainer>
      <PaymentPeriodSelector selectedPeriod={selectedPeriod} onPeriodChange={setSelectedPeriod} />

        <MetricsCard>
          <Text variant="body2" color="#666666">
            Total de cobros{' '}
            {selectedPeriod === 'daily'
              ? 'del día'
              : selectedPeriod === 'weekly'
                ? 'de la semana'
                : 'del mes'}
          </Text>
          <Amount variant="h1">$2,300.50</Amount>
        </MetricsCard>

        <TransactionList transactions={mockTransactions} />
    </DashboardContainer>
  );
};

export default Home;
