const CompanyAddress: Entity.Address = {
  addressNumber: '2822',
  line1: 'Rua Julio de Castilhos',
  line2: 'Sala 203',
  city: 'Taquara',
  state: 'RS',
  country: 'Brasil',
  zipcode: '95600-100',
};

const Account: Entity.Account = {
  name: 'CREDYPAYTON FOMENTO MERCANTIL LTDA',
  bsb: '04162',
  accountNumber: '700002',
  agreement: '2985981',
  wallet: '17',
  walletVariation: '43',
  interest: '0.9971',
  instruction1: '03',
  instruction2: '01',
};

const TaxConfiguration: Entity.TaxConfiguration = {
  pis: '10.0000',
  cofins: '4.0000',
  iof: '0.0000',
  irrf: '3.0000',
  pisPercentage: '0.6500',
  cofinsPercentage: '3.0000',
  iofPercentage: '0.0041',
  iofAdditionalPercentage: '0.3800',
  irrfPercentage: '0.0000',
  pisNumber: '8109',
  cofinsNumber: '2172',
  iofNumber: '6895',
  irrfNumber: '0',
};

const CompanyContacts: Entity.Contact[] = [
  {
    name: 'Commercial',
    type: ContactTypeEnum.Phone,
    value: '(51) 3541-8080',
  },
];

const companies: Entity.Company[] = [
  {
    PK: 'COMPANY',
    SK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    Id: '81e1102c-416d-4442-9349-351ae403e0b8',
    Entity: 'Company',
    Name: 'CREDYPAYTON FOMENTO MERCANTIL LTDA',
    BusinessId: '08.593.379/0001-00',
    Address: CompanyAddress,
    Account,
    TaxConfiguration,
    Contacts: CompanyContacts,
    CreatedAt: '2021-01-01T3:00:00.000Z',
  },
];

module.exports = companies;
