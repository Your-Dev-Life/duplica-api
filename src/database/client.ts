import {
  BatchWriteItemCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const getDatabaseConfig = (region, isTest) => {
  if (isTest) {
    return {
      endpoint: 'http://localhost:9000',
      tls: false,
      region: 'local-env',
      credentials: {
        accessKeyId: 'fakeMyKeyId',
        secretAccessKey: 'fakeSecretAccessKey',
      },
    };
  }

  if (region === 'localhost') {
    return {
      endpoint: process.env.LOCAL_DYNAMODB_ENDPOINT,
    };
  }

  return {
    region,
  };
};

const client = new DynamoDBClient(getDatabaseConfig(process.env.REGION, process.env.JEST_WORKER_ID !== undefined));

export const maxItemsPerBatch = 25;

export const sendQuery = async <EntityType extends unknown>(command: QueryCommand): Promise<EntityType[]> => {
  const commandOutput = await client.send(command);

  return (commandOutput?.Items ?? []).map((item) => unmarshall(item)) as EntityType[];
};

export const sendGetItem = async <EntityType extends unknown>(command: GetItemCommand): Promise<EntityType> => {
  const commandOutput = await client.send(command);
  const entity = commandOutput?.Item ? unmarshall(commandOutput.Item) : undefined;

  return entity as EntityType;
};

export const sendPutItem = async (command: PutItemCommand): Promise<boolean> => {
  const commandOutput = await client.send(command);

  const capacityUnits = commandOutput.ConsumedCapacity?.CapacityUnits;

  return capacityUnits ? Promise.resolve(capacityUnits > 0) : Promise.reject(false);
};

export const sendUpdateItem = async (command: UpdateItemCommand) => {
  const commandOutput = await client.send(command);

  const capacityUnits = commandOutput.ConsumedCapacity?.CapacityUnits;

  return capacityUnits ? capacityUnits > 0 : false;
};

export const sendBatchWriteItem = async (command: BatchWriteItemCommand) => {
  const commandOutput = await client.send(command);

  return commandOutput.UnprocessedItems;
};
