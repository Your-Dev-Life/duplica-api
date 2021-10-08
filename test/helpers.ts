import { sign } from 'jsonwebtoken';
import { Entity } from "../src/repositories/entity";

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

// export const createCompanyEntity = (
//   id: string,
//   attributes: Partial<Entity.Company> = {},
// ): Entity.Company => ({
//   PK: 'COMPANY',
//   SK: `COMPANY#ID#${id}`,
//   Entity: 'Company',
//   Id: id,
//   Name: 'Test Company 1';
//   BusinessId: '08.593.379/0001-00',
//   Address: {
//     addressNumber: '',
//     line1: '',
//     line2: '',
//     city: '',
//     state: '',
//     country: '',
//     zipcode: '',
//   },
//   Account: Account,
//   TaxConfiguration: TaxConfiguration;
//   Contact: Contact;
//   Status: AccessRequestStatus.pending,
//   CreatedAt: '2021-01-01T03:00:00.000Z',
//   ...attributes,
// });
