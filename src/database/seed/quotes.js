const { dinero, toSnapshot } = require('dinero.js');
const { BRL } = require('@dinero.js/currencies');
const { Entity } = require('../../repositories/entity');

const dineroValue1 = dinero({ amount: 1000, currency: BRL });
const dineroValue2 = dinero({ amount: 2000, currency: BRL });

const quotes: Entity.Quote[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'QUOTE#ID#b302c269-43fa-405c-89c6-c5df08b3ef33',
    Id: 'b302c269-43fa-405c-89c6-c5df08b3ef33',
    Entity: Entity.Quote,
    Name: 'Quote 1',
    Value: toSnapshot(dineroValue1),
    GSI5PK: 'FACTORY#ID#0ba50aff-1565-4e4b-b225-6989e352e4d4',
    GSI5SK: 'QUOTE#ID#b302c269-43fa-405c-89c6-c5df08b3ef33',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'QUOTE#ID#e8e0c7e7-3a28-40d1-a7c8-1c8a724c517c',
    Id: 'e8e0c7e7-3a28-40d1-a7c8-1c8a724c517c',
    Entity: Entity.Quote,
    Name: 'Quote 2',
    Value: toSnapshot(dineroValue2),
    GSI5PK: 'FACTORY#ID#0a5648be-fca0-4717-ac5f-aef7f9310d5d',
    GSI5SK: 'QUOTE#ID#e8e0c7e7-3a28-40d1-a7c8-1c8a724c517c',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = quotes;
