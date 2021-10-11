const enum DuplicateStatus {
  REGULAR_PAYMENT = 'REGULAR_PAYMENT',
  NOTARY_PAYMENT = 'NOTARY_PAYMENT',
  PROTESTED = 'PROTESTED',
  PENDING = 'PENDING',
  DONE = 'DONE',
}

const enum EntityTypesEnum {
  Company = 'Company',
  Transaction = 'Transaction',
  Factory = 'Factory',
  Client = 'Client',
  Cession = 'Cession',
  Quote = 'Quote',
  Iof = 'Iof',
  Duplicate = 'Duplicate',
}

const enum ContactTypeEnum {
  Email = 'Email',
  Phone = 'Phone',
}

type Currency<TAmount> = {
  readonly code: string;
  readonly base: TAmount;
  readonly exponent: TAmount;
};

type DineroSnapshot<TAmount> = {
  readonly amount: TAmount;
  readonly currency: Currency<TAmount>;
  readonly scale: TAmount;
};

declare namespace Entity {
  type Id = string;
  type Name = string;
  type BusinessId = string;
  type ContractNumber = string;
  type Value = DineroSnapshot<number>; // Refer to https://v2.dinerojs.com/docs/guides/transporting-and-restoring
  type DateAndTimeInISOString = string; // Format: 2021-09-29T02:00:00.000Z
  type DateInISOString = string; // Format: 2021-09-29
  type DuplicateNumber = string;
  type Desagio = bigint; // Any value here will be divided by 100 to have it's real value (Example: 100 = 1.00, 15 = 0.15)
  type Receipt = string;
  type FinancialRemittance = string | null;
  type FinancialReturn = string | null;

  type Status = keyof typeof DuplicateStatus;

  type ContactType = keyof typeof ContactTypeEnum;

  // TODO Validate this. It may be removed from here May use a library or I will create one
  type ProtestTypes = '00' | '01' | '03' | '04' | '05' | '06' | '07' | '10' | '15' | '20' | '22' | '25' | '30' | '45';

  type EntityTypes = keyof typeof EntityTypesEnum;

  interface BaseEntity<EntityType extends EntityTypes, PKType, SKType> {
    PK: PKType;
    SK: SKType;
    Id: Id;
    Entity: EntityType;
    CreatedAt: DateAndTimeInISOString;
    UpdatedAt?: DateAndTimeInISOString;
  }

  interface Company extends BaseEntity<'Company', 'COMPANY', `COMPANY#ID#${Id}`> {
    Name: Name;
    BusinessId: BusinessId;
    Address: Address;
    Account: Account;
    TaxConfiguration: TaxConfiguration;
    Contact: Contact[];
  }

  interface Transaction extends BaseEntity<'Transaction', `COMPANY#ID#${Id}`, `TRANSACTION#ID#${Id}`> {
    Name: Name;
    Value: Value;
    TransactionDate: DateAndTimeInISOString;
    FinancialRemittance: FinancialRemittance;
    FinancialReturn: FinancialReturn;
    GSI1PK: `COMPANY#ID#${Id}`;
    GSI1SK: `FACTORY#ID#${Id}`;
  }

  interface Factory extends BaseEntity<'Factory', `COMPANY#ID#${Id}`, `FACTORY#ID#${Id}`> {
    Name: Name;
    ContractNumber: ContractNumber;
    Address: Address;
    Contact: Contact;
    GSI2PK: `COMPANY#ID#${Id}`;
    GSI2SK: `FACTORY#NAME#${Name}`;
  }

  interface Client extends BaseEntity<'Client', `COMPANY#ID#${Id}`, `CLIENT#ID#${Id}`> {
    Name: Name;
    Address: Address;
    Contact: Contact;
    GSI3PK: `COMPANY#ID#${Id}`;
    GSI3SK: `CLIENT#NAME#${Name}`;
  }

  interface Cession extends BaseEntity<'Cession', `COMPANY#ID#${Id}`, `CESSION#ID#${Id}`> {
    Name: Name;
    Value: Value;
    Signature: boolean;
    GSI4PK: `CLIENT#ID#${Id}`;
    GSI4SK: `CESSION#ID#${Id}`;
  }

  interface Quote extends BaseEntity<'Quote', `COMPANY#ID#${Id}`, `QUOTE#ID#${Id}`> {
    Name: Name;
    Value: Value;
    GSI5PK: `FACTORY#ID#${Id}`;
    GSI5SK: `QUOTE#ID#${Id}`;
  }

  interface Iof extends BaseEntity<'Iof', `COMPANY#ID#${Id}`, `IOF#ID#${Id}`> {
    DueDate: DateInISOString;
    InitialDate: DateInISOString;
    EndDate: DateInISOString;
    GSI6PK: `COMPANY#ID#${Id}`;
    GSI6SK: `IOF#DUE_DATE#${DateInISOString}`;
  }

  interface Duplicate extends BaseEntity<'Duplicate', `COMPANY#ID#${Id}`, `DUPLICATE#ID#${Id}`> {
    Status: Status;
    DuplicateNumber: DuplicateNumber;
    DuplicateDate: DateInISOString;
    DueDate: DateInISOString;
    PaymentDate: DateInISOString;
    BankNumber: BankNumber;
    Desagio: Desagio;
    DesagioValue: Value;
    InterestValue: Value;
    CostValue: Value;
    IofValue: Value;
    NetValue: Value;
    PaidValue: Value;
    TotalValue: Value;
    ProtestType: ProtestTypes;
    Receipt: Receipt;
    GSI7PK: `COMPANY#ID#${Id}`;
    GSI7SK: `DUPLICATE#STATUS#${Status}`;
    GSI8PK: `FACTORY#ID#${Id}`;
    GSI8SK: `DUPLICATE#DUE_DATE#${DateInISOString}`;
    GSI9PK: `CLIENT#ID#${Id}`;
    GSI9SK: `DUPLICATE#DUE_DATE#${DateInISOString}`;
    GSI10PK: `TRANSACTION#ID#${Id}`;
    GSI10SK: `DUPLICATE#DUE_DATE#${DateInISOString}`;
    GSI11PK: `CESSION#ID#${Id}`;
    GSI11SK: `DUPLICATE#DUE_DATE#${DateInISOString}`;
    GSI12PK: `QUOTE#ID#${Id}`;
    GSI12SK: `DUPLICATE#DUE_DATE#${DateInISOString}`;
  }

  interface Address {
    name?: string;
    addressNumber?: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
  }

  interface Contact {
    name: string;
    type: ContactType;
    value: string;
  }

  interface Account {
    name: string;
    bsb: string;
    accountNumber: string;
    agreement: string;
    wallet: string;
    walletVariation: string;
    interest?: string;
    instruction1: string;
    instruction2: string;
  }

  interface TaxConfiguration {
    pis: string;
    cofins: string;
    iof: string;
    irrf: string;
    pisPercentage: string;
    cofinsPercentage: string;
    iofPercentage: string;
    iofAdditionalPercentage: string;
    irrfPercentage: string;
    pisNumber?: string;
    cofinsNumber?: string;
    iofNumber?: string;
    irrfNumber?: string;
  }

  type Any = Company | Transaction | Factory | Client | Cession | Quote | Iof | Duplicate;
}
