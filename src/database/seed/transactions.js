const { dinero, toSnapshot } = require('dinero.js');
const { BRL } = require('@dinero.js/currencies');
const { EntityTypesEnum, Entity } = require('../../repositories/entity');

const dineroValue1 = dinero({ amount: 1000, currency: BRL });
const dineroValue2 = dinero({ amount: 2000, currency: BRL });

const transactions: Entity.Transaction[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'TRANSACTION#ID#db882097-8952-4615-be49-0626f6de6c8d',
    Id: 'db882097-8952-4615-be49-0626f6de6c8d',
    Entity: EntityTypesEnum.Transaction,
    Name: 'Transaction 1',
    Value: toSnapshot(dineroValue1),
    TransactionDate: '2021-01-01T3:00:00.000Z',
    FinancialRemittance: null,
    FinancialReturn: null,
    GSI1PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI1SK: 'FACTORY#ID#0ba50aff-1565-4e4b-b225-6989e352e4d4',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'TRANSACTION#ID#6b3b8c7a-1350-4daa-b394-c251ae097662',
    Id: '6b3b8c7a-1350-4daa-b394-c251ae097662',
    Entity: EntityTypesEnum.Transaction,
    Name: 'Transaction 2',
    Value: toSnapshot(dineroValue2),
    TransactionDate: '2021-01-01T3:00:00.000Z',
    FinancialRemittance: null,
    FinancialReturn: null,
    GSI1PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI1SK: 'FACTORY#ID#0a5648be-fca0-4717-ac5f-aef7f9310d5d',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = transactions;
