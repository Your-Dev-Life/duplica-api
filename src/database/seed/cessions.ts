import { dinero, toSnapshot } from 'dinero.js';
import { BRL } from '@dinero.js/currencies';

const dineroValue1 = dinero({ amount: 96600, currency: BRL });
const dineroValue2 = dinero({ amount: 178500, currency: BRL });

const cessions: Entity.Cession[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CESSION#ID#c62e5bd6-c8b8-4187-85be-a9ed7afc1a47',
    Id: 'c62e5bd6-c8b8-4187-85be-a9ed7afc1a47',
    Entity: EntityTypesEnum.Cession,
    Name: 'PRISCILA FERREIRA DE SOUZA - CASSIA JESUS REIS',
    Value: toSnapshot(dineroValue1),
    Signature: true,
    GSI4PK: 'CLIENT#ID#14.089.816/0001-48',
    GSI4SK: 'CESSION#ID#c62e5bd6-c8b8-4187-85be-a9ed7afc1a47',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CESSION#ID#6f7cd55d-d195-434b-aa9d-38a46a9273bd',
    Id: '6f7cd55d-d195-434b-aa9d-38a46a9273bd',
    Entity: EntityTypesEnum.Cession,
    Name: 'PRISCILA FERREIRA DE SOUZA - ASSOC. DOS FUNC. PUBL. DO ESTADO DO RIO GRANDE DO SUL',
    Value: toSnapshot(dineroValue2),
    Signature: true,
    GSI4PK: 'CLIENT#ID#92.741.016/0004-16',
    GSI4SK: 'CESSION#ID#6f7cd55d-d195-434b-aa9d-38a46a9273bd',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = cessions;
