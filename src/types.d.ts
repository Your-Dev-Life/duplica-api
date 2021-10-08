type Headers = Record<string, string>;
type Message = Record<string, unknown> | Object[] | string | null | undefined;

interface HandlerResponse {
  statusCode: import('http-status-codes').StatusCodes;
  headers: Headers;
  body: string;
}

interface HandlerEvent<PathParameters = {}, QueryStringParameters = {}> {
  pathParameters: PathParameters;
  queryStringParameters: QueryStringParameters;
  headers: Headers;
  body?: string;
}

type AwsHandler<PathParameters = {}, QueryStringParameters = {}> = import('aws-lambda').Handler<
  HandlerEvent<PathParameters, QueryStringParameters>,
  HandlerResponse | void
  >;

type Handler<PathParameters = Record<string, string>, QueryStringParameters = Record<string, string>> = AwsHandler<
  PathParameters,
  QueryStringParameters
  >;

interface AppError {
  type: string;
  message: string;
}

interface HttpError {
  statusCode: import('http-status-codes').StatusCodes;
  message: string;
}

declare namespace DUPLICA {}
