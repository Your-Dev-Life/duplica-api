import { QueryCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { sendQuery } from '../database/client';

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
