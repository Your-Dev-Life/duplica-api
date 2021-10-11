const ClientAddress1: Entity.Address = {
  line1: 'EST RS 486 / KM 04',
  line2: 'ARATINGA ROTA DO SOL',
  city: 'Itati',
  state: 'RS',
  country: 'Brasil',
  zipcode: '95538-000',
};

const ClientAddress2: Entity.Address = {
  addressNumber: '1008',
  line1: 'Rua Rio Branco',
  line2: 'Centro',
  city: 'Sao Jeronimo',
  state: 'RS',
  country: 'Brasil',
  zipcode: '96700-000',
};

const ClientContact1: Entity.Contact = {
  name: 'Celular',
  type: ContactTypeEnum.Phone,
  value: '(54) 99636-5312',
};

const ClientContact2: Entity.Contact = {
  name: 'Comercial',
  type: ContactTypeEnum.Phone,
  value: '(51) 3651-8500',
};

const clients: Entity.Client[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CLIENT#ID#14.089.816/0001-48',
    Id: '14.089.816/0001-48',
    Entity: EntityTypesEnum.Client,
    Name: 'Cassia Jesus Reis',
    Address: ClientAddress1,
    Contact: ClientContact1,
    GSI3PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI3SK: 'CLIENT#NAME#Cassia Jesus Reis',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'CLIENT#ID#92.741.016/0004-16',
    Id: '92.741.016/0004-16',
    Entity: EntityTypesEnum.Client,
    Name: 'ASSOC. DOS FUNC. PUBL. DO ESTADO DO RIO GRANDE DO SUL',
    Address: ClientAddress2,
    Contact: ClientContact2,
    GSI3PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI3SK: 'CLIENT#NAME#ASSOC. DOS FUNC. PUBL. DO ESTADO DO RIO GRANDE DO SUL',
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = clients;
