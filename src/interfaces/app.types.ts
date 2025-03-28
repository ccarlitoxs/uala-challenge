export interface APIResponse {
   metadata: Metadata;
   transactions: Transaction[];
}

export interface Metadata {
   paymentMethods: CardElement[];
   cards: CardElement[];
}

export interface CardElement {
   value: string;
   label: string;
}

export interface Transaction {
   id: string;
   amount: number;
   card: CardEnum;
   installments: number;
   createdAt: Date;
   updatedAt: Date;
   paymentMethod: PaymentMethod;
}

export type CardEnum = 'amex' | 'visa' | 'mastercard';

export type PaymentMethod = 'link' | 'mpos' | 'pospro' | 'qr';
