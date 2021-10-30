import { PutItemCommand, QueryCommand, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { sendPutItem, sendQuery, sendGetItem } from '../database/client';
import { companyCreateError } from 'app/errors/errors';

export const getListOfCompanies = async () => {
  const PK = 'COMPANY';
  const SK = 'COMPANY#';

  return sendQuery<Entity.Company>(
    new QueryCommand({
      TableName: process.env.DUPLICA_TABLE,
      KeyConditionExpression: 'PK = :PK AND begins_with(SK, :SK)',
      ExpressionAttributeValues: marshall({
        ':PK': PK,
        ':SK': SK,
      }),
    }),
  );
};

export const createCompany = async (company: Entity.Company): Promise<string> => {
  try {
    await sendPutItem(
      new PutItemCommand({
        TableName: process.env.DUPLICA_TABLE,
        Item: marshall(company),
        ConditionExpression: 'attribute_not_exists(#businessId)',
        ExpressionAttributeNames: {
          '#businessId': 'BusinessId',
        },
        ReturnConsumedCapacity: 'TOTAL',
      }),
    );

    return company.Id;
  } catch (error) {
    throw companyCreateError;
  }
};

export const getCompanyById = async (id: Entity.Id) => {
  const PK = 'COMPANY';
  const SK = `COMPANY#ID#${id}`;

  return sendGetItem<Entity.Company>(
    new GetItemCommand({
      TableName: process.env.DUPLICA_TABLE,
      Key: marshall({ PK, SK }),
    }),
  );
};
