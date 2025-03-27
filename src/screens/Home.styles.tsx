import { Text } from "@/components/UI/Typography/Text";
import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MetricsCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Amount = styled(Text)`
  margin-top: 8px;
`;

// Mock data - Replace with real data from your API
export const mockTransactions = [
  {
    id: '1',
    amount: 1500.00,
    date: '2024-03-26',
    description: 'Pago de servicio',
    type: 'income' as const,
  },
  {
    id: '2',
    amount: 800.50,
    date: '2024-03-25',
    description: 'Transferencia recibida',
    type: 'income' as const,
  },
  {
    id: '3',
    amount: 250.00,
    date: '2024-03-24',
    description: 'Comisión',
    type: 'expense' as const,
  },
];