/* eslint-disable no-unused-vars */
export enum SecurityTypeEnum {
  STOCK = 'STOCK',
  BOND = 'BOND',
  FUTURE = 'FUTURE',
  OPTION_CALL = 'OPTION_CALL',
  OPTION_PUT = 'OPTION_PUT',
}

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum AlgorithmEnum {
  BLACK_SCHOLES = 'black_scholes',
  BINOMIAL = 'binomial',
}

export enum OperationTypeEnum {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum LanguageEnum{
  ES = 'es',
  EN = 'en',
}

export enum NumberSeparatorEnum{
  DOT = '.',
  COMMA = ',',
}

export type OperationType = OperationTypeEnum.BUY | OperationTypeEnum.SELL;

export type ThemeType = ThemeEnum.DARK | ThemeEnum.LIGHT;

export type LanguageType = LanguageEnum.ES | LanguageEnum.EN;

export type DecimalSeparatorType = NumberSeparatorEnum.DOT | NumberSeparatorEnum.COMMA;

export type ThousandsSeparatorType = NumberSeparatorEnum.DOT | NumberSeparatorEnum.COMMA;

export type Algorithm = AlgorithmEnum.BINOMIAL | AlgorithmEnum.BLACK_SCHOLES;

export type SecurityType =
  | SecurityTypeEnum.STOCK
  | SecurityTypeEnum.BOND
  | SecurityTypeEnum.FUTURE
  | SecurityTypeEnum.OPTION_CALL
  | SecurityTypeEnum.OPTION_PUT;


export type OptionsMatrixType = {
  ContextData: ContextData;
  Maturity: Maturity;
  Security: Security;
  SecurityType: SecurityType;
  Market: Market;
  MarketSegment: MarketSegment;
  MarketData: MarketData;
};

export type Security = {
  id: string;
  marketSegment: MarketSegment;
  symbol: string;
  description: string;
  sortCode: string;
  type: string;
  isUnderlying: boolean;
  underlying: string;
  pricePrecision: number;
  sizePrecision: number;
  strikePrice?: number;
};

export type MarketSegment = {
  id: string;
  description: string;
  market: Market;
};

export type Market = {
  id: string;
  description: string;
};

export type Maturity = {
  date: string;
  label?: string;
  daysToExpiration?: number;
};

export type ContextData = {
  volatility: number;
  riskFreeRate: number;
  maturityMonthYearList: Maturity[];
};

export type MarketData = {
  seqNumber: number;
  id: string;
  bidSize?: number;
  bidPrice?: number;
  askSize?: number;
  askPrice?: number;
  lastPrice?: number;
  change?: number;
  volume?: number;
  effectiveVolume?: number;
  settlementOrClosePrice?: number;
  impliedVolatility?: number | undefined;
  lastPriceDateTime: string;
  bidSizeStr?: string;
  bidPriceStr?: string;
  askSizeStr?: string;
  askPriceStr?: string;
  lastPriceStr?: string;
  changeStr?: string;
  volumeStr?: string;
  effectiveVolumeStr?: string;
  settlementOrClosePriceStr?: string;
  impliedVolatilityStr?: string;
};

export type StrategyLeg = {
  security: Security;
  type: OperationType;
  quantity: number;
  price: number;
};
export type UpdatePriceFn = (marketData: MarketData) => void;