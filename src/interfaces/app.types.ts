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
    card: CardElement['value'];
    installments: number;
    createdAt: Date;
    updatedAt: Date;
    paymentMethod: CardElement['value'];
}
