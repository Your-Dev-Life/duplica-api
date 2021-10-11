import { dinero, toSnapshot } from 'dinero.js';
import { BRL } from '@dinero.js/currencies';
const factories = require('./factories');
const clients = require('./clients');
const transactions = require('./transactions');
const cessions = require('./cessions');
const quotes = require('./quotes');

const zeroValue = dinero({ amount: 0, currency: BRL }); // It represents R$0,00

const dueDate1 = '2021-06-04';
const desagioValue1 = dinero({ amount: 4202, currency: BRL }); // It represents R$42,02
const iofValue1 = dinero({ amount: 461, currency: BRL }); // It represents R$4,61
const interestValue1 = dinero({ amount: 281, currency: BRL }); // It represents R$2,81
const netValue1 = dinero({ amount: 91937, currency: BRL }); // It represents R$919,37
const totalValue1 = dinero({ amount: 96600, currency: BRL }); // It represents R$966,00
const factory1 = factories[0];
const client1 = clients[0];
const transaction1 = transactions[0];
const cession1 = cessions[0];
const quote1 = quotes[0];

const dueDate2 = '2021-06-04';
const desagioValue2 = dinero({ amount: 7765, currency: BRL }); // It represents R$77,65
const iofValue2 = dinero({ amount: 852, currency: BRL }); // It represents R$8,52
const interestValue2 = dinero({ amount: 519, currency: BRL }); // It represents R$5,19
const netValue2 = dinero({ amount: 169883, currency: BRL }); // It represents R$1.698,83
const totalValue2 = dinero({ amount: 178500, currency: BRL }); // It represents R$1.785,00
const factory2 = factories[0];
const client2 = clients[1];
const transaction2 = transactions[1];
const cession2 = cessions[1];
const quote2 = quotes[1];

const duplicates: Entity.Duplicate[] = [
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'DUPLICATE#ID#8a980083-a90c-4d23-842e-e821c530842b',
    Id: '8a980083-a90c-4d23-842e-e821c530842b',
    Entity: EntityTypesEnum.Duplicate,
    Status: DuplicateStatus.DONE,
    DuplicateNumber: '4648001',
    DuplicateDate: '2021-05-07',
    DueDate: dueDate1,
    PaymentDate: '2021-01-31',
    BankNumber: '',
    Desagio: BigInt(15),
    DesagioValue: toSnapshot(desagioValue1),
    CostValue: toSnapshot(zeroValue),
    IofValue: toSnapshot(iofValue1),
    InterestValue: toSnapshot(interestValue1),
    NetValue: toSnapshot(netValue1),
    PaidValue: toSnapshot(zeroValue),
    TotalValue: toSnapshot(totalValue1),
    ProtestType: '00', // It will change to use an enum
    Receipt: '4648',
    GSI7PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI7SK: `DUPLICATE#STATUS#${DuplicateStatus.DONE}`,
    GSI8PK: `FACTORY#ID#${factory1.Id}`,
    GSI8SK: `DUPLICATE#DUE_DATE#${dueDate1}`,
    GSI9PK: `CLIENT#ID#${client1.Id}`,
    GSI9SK: `DUPLICATE#DUE_DATE#${dueDate1}`,
    GSI10PK: `TRANSACTION#ID#${transaction1.Id}`,
    GSI10SK: `DUPLICATE#DUE_DATE#${dueDate1}`,
    GSI11PK: `CESSION#ID#${cession1.Id}`,
    GSI11SK: `DUPLICATE#DUE_DATE#${dueDate1}`,
    GSI12PK: `QUOTE#ID#${quote1.Id}`,
    GSI12SK: `DUPLICATE#DUE_DATE#${dueDate1}`,
    CreatedAt: '2021-05-07T3:00:00.000Z',
  },
  {
    PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    SK: 'DUPLICATE#ID#9e959255-df86-4223-a360-660b9159d11c',
    Id: '9e959255-df86-4223-a360-660b9159d11c',
    Entity: EntityTypesEnum.Duplicate,
    Status: DuplicateStatus.PENDING,
    DuplicateNumber: '4647001',
    DuplicateDate: '2021-05-07',
    DueDate: dueDate2,
    PaymentDate: '2021-01-31',
    BankNumber: '',
    Desagio: BigInt(15),
    DesagioValue: toSnapshot(desagioValue2),
    CostValue: toSnapshot(zeroValue),
    IofValue: toSnapshot(iofValue2),
    InterestValue: toSnapshot(interestValue2),
    NetValue: toSnapshot(netValue2),
    PaidValue: toSnapshot(zeroValue),
    TotalValue: toSnapshot(totalValue2),
    ProtestType: '00', // It will change to use an enum
    Receipt: '4647',
    GSI7PK: 'COMPANY#ID#81e1102c-416d-4442-9349-351ae403e0b8',
    GSI7SK: `DUPLICATE#STATUS#${DuplicateStatus.PENDING}`,
    GSI8PK: `FACTORY#ID#${factory2.Id}`,
    GSI8SK: `DUPLICATE#DUE_DATE#${dueDate2}`,
    GSI9PK: `CLIENT#ID#${client2.Id}`,
    GSI9SK: `DUPLICATE#DUE_DATE#${dueDate2}`,
    GSI10PK: `TRANSACTION#ID#${transaction2.Id}`,
    GSI10SK: `DUPLICATE#DUE_DATE#${dueDate2}`,
    GSI11PK: `CESSION#ID#${cession2.Id}`,
    GSI11SK: `DUPLICATE#DUE_DATE#${dueDate2}`,
    GSI12PK: `QUOTE#ID#${quote2.Id}`,
    GSI12SK: `DUPLICATE#DUE_DATE#${dueDate2}`,
    CreatedAt: '2021-05-07T3:00:00.000Z',
  },
];

module.exports = duplicates;
