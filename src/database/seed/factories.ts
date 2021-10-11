const FactoryAddress: Entity.Address = {
  addressNumber: '384',
  line1: 'Rua Amazonas, Sala 1',
  line2: 'Santa Terezinha',
  city: 'Taquara',
  state: 'RS',
  country: 'Brasil',
  zipcode: '95603-092',
};

const FactoryContact: Entity.Contact = {
  name: 'Comercial',
  type: ContactTypeEnum.Email,
  value: 'liquiduslimpeza@hotmail.com',
};

const factories: Entity.Factory[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'FACTORY#ID#23.570.616/0001-01',
    Id: '23.570.616/0001-01',
    Entity: EntityTypesEnum.Factory,
    ContractNumber: '72',
    Name: 'PRISCILA FERREIRA DE SOUZA',
    Address: FactoryAddress,
    Contact: FactoryContact,
    GSI2PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI2SK: 'FACTORY#NAME#PRISCILA FERREIRA DE SOUZA',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = factories;
