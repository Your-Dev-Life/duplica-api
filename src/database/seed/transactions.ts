import { dinero, toSnapshot } from 'dinero.js';
import { BRL } from '@dinero.js/currencies';

const dineroValue1 = dinero({ amount: 96600, currency: BRL });
const dineroValue2 = dinero({ amount: 178500, currency: BRL });

const transactions: Entity.Transaction[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'TRANSACTION#ID#db882097-8952-4615-be49-0626f6de6c8d',
    Id: 'db882097-8952-4615-be49-0626f6de6c8d',
    Entity: EntityTypesEnum.Transaction,
    Name: 'PRISCILA FERREIRA DE SOUZA',
    Value: toSnapshot(dineroValue1),
    TransactionDate: '2021-01-01T3:00:00.000Z',
    FinancialRemittance: null,
    FinancialReturn: null,
    GSI1PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI1SK: 'FACTORY#ID#23.570.616/0001-01',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'TRANSACTION#ID#6b3b8c7a-1350-4daa-b394-c251ae097662',
    Id: '6b3b8c7a-1350-4daa-b394-c251ae097662',
    Entity: EntityTypesEnum.Transaction,
    Name: 'PRISCILA FERREIRA DE SOUZA',
    Value: toSnapshot(dineroValue2),
    TransactionDate: '2021-01-01T3:00:00.000Z',
    FinancialRemittance: null,
    FinancialReturn: null,
    GSI1PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI1SK: 'FACTORY#ID#23.570.616/0001-01',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = transactions;
