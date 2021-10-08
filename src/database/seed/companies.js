const { Entity } = require("../../repositories/entity");

const Address: Entity.Address = {
  //TODO Add values here
};

const Account: Entity.Account = {
  //TODO Add values here
};

const TaxConfiguration: Entity.TaxConfiguration = {
  //TODO Add values here
};

const Contact: Entity.Contact = {
  //TODO Add values here
};

const companies: Entity.Company[] = [
  {
    PK: 'COMPANY',
    SK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    Id: '81e1102c-416d-4442-9349-351ae403e0b8',
    Entity: 'Company',
    Name: 'CREDYPAYTON FOMENTO MERCANTIL LTDA',
    BusinessId: '08.593.379/0001-00',
    Address,
    Account,
    TaxConfiguration,
    Contact,
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = companies;
