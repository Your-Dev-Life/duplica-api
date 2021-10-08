const { Entity } = require("../../repositories/entity");

const Address: Entity.Address = {
  //TODO Add values here
};

const Contact: Entity.Contact = {
  //TODO Add values here
};

const factories: Entity.Factory[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'FACTORY#ID#0ba50aff-1565-4e4b-b225-6989e352e4d4',
    Id: '0ba50aff-1565-4e4b-b225-6989e352e4d4',
    Entity: Entity.Factory,
    Name: 'Factory 1',
    BusinessId: '31.451.067/0001-11',
    Address,
    Contact,
    GSI2PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI2SK: 'FACTORY#NAME#Factory 1',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'FACTORY#ID#0a5648be-fca0-4717-ac5f-aef7f9310d5d',
    Id: '0a5648be-fca0-4717-ac5f-aef7f9310d5d',
    Entity: Entity.Factory,
    Name: 'Factory 2',
    BusinessId: '31.451.067/0002-22',
    Address,
    Contact,
    GSI2PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI2SK: 'FACTORY#NAME#Factory 2',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = factories;
