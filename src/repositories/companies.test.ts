import { createCompanyEntity, putItem } from "app/test/helpers";

import Company = Entity.Company;
import { getListOfCompanies } from "app/repositories/companies";

// const companies: Company[] = [];
let company: Company;

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
