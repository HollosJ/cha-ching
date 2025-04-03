export type FormData = {
  income: number;
  homePayment: number;
  homeCouncilTax: number;
  publicTransport: number;
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
