import { createCompanyEntity, putItem } from 'app/test/helpers';
import { getListOfCompanies } from 'app/repositories/companies';

let company: Entity.Company;

describe('Companies', () => {
  beforeAll(async () => {
    company = createCompanyEntity();
    await putItem(company);
  });

  describe('getCompanies()', () => {
    test('returns the list of companies with one company', async () => {
      expect(await getListOfCompanies()).toContainEqual(company);
    });
  });
});
