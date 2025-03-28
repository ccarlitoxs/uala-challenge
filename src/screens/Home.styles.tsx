import { Typography } from '@/components/UI/Atoms/Typography';
import { Transaction } from '@/interfaces/app.types';
import styled from 'styled-components';

export const Dashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  max-width: 44rem;
  margin-top: 4rem;
  width: 100%;
`;

export const DashboardTitle = styled(Typography)`
  text-align: left;
  width: 100%;
`;

export const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 2.4rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`;

export const Amount = styled(Typography)`
  margin-top: 0.8rem;
`;

// Mock data - Replace with real data from your API
export const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: 1500.0,
    createdAt: new Date(),
    updatedAt: new Date(),
    paymentMethod: 'qr',
    card: 'visa',
    installments: 1,
  },
  {
    id: '2',
    amount: 800.5,
    createdAt: new Date(),
    updatedAt: new Date(),
    paymentMethod: 'qr',
    card: 'visa',
    installments: 1,
  },
  {
    id: '3',
    amount: 250.0,
    createdAt: new Date(),
    updatedAt: new Date(),
    paymentMethod: 'qr',
    card: 'visa',
    installments: 1,
  },
];
