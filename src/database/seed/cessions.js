const { dinero, toSnapshot } = require('dinero.js');
const { BRL } = require('@dinero.js/currencies');
const { Entity } = require('../../repositories/entity');

const dineroValue1 = dinero({ amount: 1000, currency: BRL });
const dineroValue2 = dinero({ amount: 2000, currency: BRL });

const cessions: Entity.Cession[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CESSION#ID#c62e5bd6-c8b8-4187-85be-a9ed7afc1a47',
    Id: 'c62e5bd6-c8b8-4187-85be-a9ed7afc1a47',
    Entity: Entity.Cession,
    Name: 'Cession 1',
    Value: toSnapshot(dineroValue1),
    Signature: true,
    GSI4PK: 'CLIENT#ID#72d020e6-988f-4fa1-8e4c-d149667c0323',
    GSI4SK: 'CESSION#ID#c62e5bd6-c8b8-4187-85be-a9ed7afc1a47',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CESSION#ID#6f7cd55d-d195-434b-aa9d-38a46a9273bd',
    Id: '6f7cd55d-d195-434b-aa9d-38a46a9273bd',
    Entity: Entity.Cession,
    Name: 'Cession 2',
    Value: toSnapshot(dineroValue2),
    Signature: true,
    GSI4PK: 'CLIENT#ID#bdb12e26-2886-4436-8979-2ebe76f97b11',
    GSI4SK: 'CESSION#ID#6f7cd55d-d195-434b-aa9d-38a46a9273bd',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = cessions;
