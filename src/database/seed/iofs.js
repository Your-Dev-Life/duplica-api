const { Entity } = require('../../repositories/entity');

const iofs: Entity.Iof[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'IOF#ID#e32f9bb4-749b-4ce2-b470-3df7db930cff',
    Id: 'e32f9bb4-749b-4ce2-b470-3df7db930cff',
    Entity: Entity.Iof,
    InitialDate: '2021-04-21',
    EndDate: '2021-04-30',
    DueDate: '2021-05-05',
    GSI6PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI6SK: 'IOF#DUE_DATE#2021-05-05',
    CreatedAt: '2021-04-20T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'IOF#ID#4699174c-2c80-4bd9-ac59-d87a14aec265',
    Id: '4699174c-2c80-4bd9-ac59-d87a14aec265',
    Entity: Entity.Iof,
    InitialDate: '2021-05-01',
    EndDate: '2021-05-10',
    DueDate: '2021-05-13',
    GSI6PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI6SK: 'IOF#DUE_DATE#2021-05-13',
    CreatedAt: '2021-04-30T3:00:00.000Z',
  },
];

module.exports = iofs;
