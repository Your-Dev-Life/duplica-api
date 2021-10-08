import { expect } from '@jest/globals';
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as utc from 'dayjs/plugin/utc';
import * as dotenv from 'dotenv';

dotenv.config({ path: './src/test/.env.test' });

dayjs.extend(duration);
dayjs.extend(utc);

expect.extend({
  toHaveBody(response: HandlerResponse, body: Message) {
    const { body: bodyInResponse } = response;
    const stringBody = JSON.stringify(body, null, 2);

    if (bodyInResponse !== stringBody) {
      return {
        pass: false,
        message: () => `Expected ${bodyInResponse} to match ${stringBody}`,
      };
    }

    return {
      pass: true,
      message: () => '',
    };
  },
});

beforeAll(() => {
  console.error = jest.fn();
});
