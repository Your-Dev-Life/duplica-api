import { v4 } from 'uuid';
import { createCompanyEntity, putItem } from '../test/helpers';
import { getListOfCompanies, createCompany, getCompanyById } from '../repositories/companies';

let company: Entity.Company;

describe('Companies', () => {
  beforeAll(async () => {
    company = createCompanyEntity();
    await putItem(company);
  });

  describe('createCompanies()', () => {
    test('create companies', async () => {
      const idCompany1 = v4();
      const idCompany2 = v4();
      const company1 = createCompanyEntity(idCompany1, { Name: 'Company 1', BusinessId: '12.345.678/0001-90' });
      const company2 = createCompanyEntity(idCompany2, { Name: 'Company 2', BusinessId: '12.345.678/0002-90' });
      expect(await createCompany(company1)).toEqual(idCompany1);
      expect(await createCompany(company2)).toEqual(idCompany2);
    });
  });

  describe('getCompany()', () => {
    test('returns the company with the specified Id', async () => {
      expect(await getCompanyById(company.Id)).toEqual(company);
    });
  });

  describe('getCompanies()', () => {
    test('returns the list of companies with one company', async () => {
      expect(await getListOfCompanies()).toContainEqual(company);
    });
  });
});
