import { useState } from 'react';
import { PaymentPeriodSelector } from '@/components/Home/PaymentPeriodSelector';
import { TransactionList } from '@/components/Home/TransactionList';
import { Typography } from '@/components/UI/Atoms/Typography';
import {
  Dashboard,
  DashboardContainer,
  DashboardTitle,
  MetricsContainer,
  mockTransactions,
} from './Home.styles';
import Skeleton from '@/components/UI/Atoms/Skeleton';
import { ButtonPresets } from '@/components/UI/Atoms/Button';
import { AnalyticsIcon } from '@/assets/Icons/AnalyticsIcon';

const Home = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  return (
    <Dashboard>
      <DashboardContainer>
        <MetricsContainer>
          <DashboardTitle variant="h3">Tus cobros</DashboardTitle>
          <PaymentPeriodSelector
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />

          {/* <Skeleton width="100%" height="4rem" /> */}
          <Typography size="xl" weight="light">
            {'+'}{' $ '}
            {(12300.3).toLocaleString('es-AR', {
              style: 'decimal',
              minimumFractionDigits: 2,
              currency: 'ARS',
            })}
          </Typography>
          <ButtonPresets.TextPrimaryButton>
            <AnalyticsIcon />
            Ver métricas
          </ButtonPresets.TextPrimaryButton>
        </MetricsContainer>

        <TransactionList 
        // transactions={mockTransactions}
         />
      </DashboardContainer>
    </Dashboard>
  );
};

export default Home;
