const { Entity } = require("../../repositories/entity");

const Address: Entity.Address = {
  //TODO Add values here
};

const Contact: Entity.Contact = {
  //TODO Add values here
};

const clients: Entity.Client[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CLIENT#ID#72d020e6-988f-4fa1-8e4c-d149667c0323',
    Id: '72d020e6-988f-4fa1-8e4c-d149667c0323',
    Entity: Entity.Client,
    Name: 'Client 1',
    Address,
    Contact,
    GSI3PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI3SK: 'CLIENT#NAME#Client 1',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CLIENT#ID#bdb12e26-2886-4436-8979-2ebe76f97b11',
    Id: 'bdb12e26-2886-4436-8979-2ebe76f97b11',
    Entity: Entity.Client,
    Name: 'Client 2',
    Address,
    Contact,
    GSI3PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI3SK: 'CLIENT#NAME#Client 2',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = clients;
