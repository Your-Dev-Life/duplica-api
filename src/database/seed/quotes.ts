import { dinero, toSnapshot } from 'dinero.js';
import { BRL } from '@dinero.js/currencies';
const factories = require('./factories');

const dineroValue1 = dinero({ amount: 96600, currency: BRL });
const dineroValue2 = dinero({ amount: 178500, currency: BRL });

const quotes: Entity.Quote[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'QUOTE#ID#e8e0c7e7-3a28-40d1-a7c8-1c8a724c517c',
    Id: 'e8e0c7e7-3a28-40d1-a7c8-1c8a724c517c',
    Entity: EntityTypesEnum.Quote,
    Name: 'Cassia Jesus Reis',
    Value: toSnapshot(dineroValue1),
    GSI5PK: `FACTORY#ID#${factories[0].Id}`,
    GSI5SK: 'QUOTE#ID#e8e0c7e7-3a28-40d1-a7c8-1c8a724c517c',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'QUOTE#ID#b302c269-43fa-405c-89c6-c5df08b3ef33',
    Id: 'b302c269-43fa-405c-89c6-c5df08b3ef33',
    Entity: EntityTypesEnum.Quote,
    Name: 'ASSOC. DOS FUNC. PUBL. DO ESTADO DO RIO GRANDE DO SUL',
    Value: toSnapshot(dineroValue2),
    GSI5PK: `FACTORY#ID#${factories[0].Id}`,
    GSI5SK: 'QUOTE#ID#b302c269-43fa-405c-89c6-c5df08b3ef33',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = quotes;
