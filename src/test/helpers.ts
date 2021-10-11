import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { sign } from 'jsonwebtoken';
import { v4 } from 'uuid';
import { sendGetItem, sendPutItem } from 'app/database/client';

export const pendingPromise = new Promise(() => {
  // this is a pending promise that does nothing
});

export const fakeAuthorizationHeader = (userId, loginId?) => {
  const token = sign(
    {
      sub: userId,
      email: loginId || 'test@yourdev.life',
    },
    'foo',
  );

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const createCompanyEntity = (id: string = v4(), attributes: Partial<Entity.Company> = {}): Entity.Company => ({
  PK: 'COMPANY',
  SK: `COMPANY#ID#${id}`,
  Entity: 'Company',
  Id: id,
  Name: 'CREDYPAYTON FOMENTO MERCANTIL LTDA',
  BusinessId: '08.593.379/0001-00',
  Address: {
    addressNumber: '2822',
    line1: 'Rua Julio de Castilhos',
    line2: 'Sala 203',
    city: 'Taquara',
    state: 'RS',
    country: 'Brasil',
    zipcode: '95600-100',
  },
  Account: {
    name: 'CREDYPAYTON FOMENTO MERCANTIL LTDA',
    bsb: '04162',
    accountNumber: '700002',
    agreement: '2985981',
    wallet: '17',
    walletVariation: '43',
    interest: '0.9971',
    instruction1: '03',
    instruction2: '01',
  },
  TaxConfiguration: {
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
  },
  Contact: [
    {
      name: 'Commercial',
      type: ContactTypeEnum.Phone,
      value: '(51) 3541-8080',
    },
  ],
  CreatedAt: '2021-01-01T03:00:00.000Z',
  ...attributes,
});

export const putItem = async (entity: Entity.Any) =>
  sendPutItem(
    new PutItemCommand({
      TableName: process.env.DUPLICA_TABLE,
      Item: marshall(entity, { removeUndefinedValues: true }),
      ReturnConsumedCapacity: 'TOTAL',
    }),
  );
