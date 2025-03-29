import { Transaction } from "@/interfaces/app.types";

export const convertToCSV = (transactions: Transaction[]): string => {
    const headers = ['ID', 'Monto', 'Método de Pago', 'Tarjeta', 'Cuotas', 'Fecha de Creación', 'Fecha de Actualización'];
    const rows = transactions.map(transaction => [
        transaction.id,
        transaction.amount.toString(),
        transaction.paymentMethod,
        transaction.card,
        transaction.installments.toString(),
        new Date(transaction.createdAt).toLocaleDateString(),
        new Date(transaction.updatedAt).toLocaleDateString()
    ]);

    return [
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');
};

export const downloadCSV = (csvContent: string, filename: string) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};