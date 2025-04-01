export type Data = {
  income: number;
  homePayment: number;
  homeCouncilTax: number;
  carFinance: number;
  carInsurance: number;
  carFuel: number;
  foodGroceries: number;
  foodEatingOut: number;
  utilitiesElectricity: number;
  utilitiesWater: number;
  utilitiesGas: number;
  subscriptions: Expense[];
};

export type Expense = {
  name: string;
  cost: number;
};

export type LayoutItem = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
