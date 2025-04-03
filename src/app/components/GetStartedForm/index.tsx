"use client";

import FoodInputs from "@/app/components/GetStartedForm/FoodInputs";
import HouseInputs from "@/app/components/GetStartedForm/HouseInputs";
import IncomeInputs from "@/app/components/GetStartedForm/IncomeInputs";
import SubscriptionsInputs from "@/app/components/GetStartedForm/SubscriptionsInputs";
import TransportInputs from "@/app/components/GetStartedForm/TransportInputs";
import UtilitiesInputs from "@/app/components/GetStartedForm/UtilitiesInputs";
import ProgressBar from "@/app/components/ProgressBar";
import { Expense, FormData } from "@/app/types";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { array, number, object, string } from "yup";

// Form values - these could be a number, or blank (unfilled)
type FormValues = {
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

type Step = {
  name: string;
  component: React.ComponentType<FormValues>;
};

const initialValues: FormData = {
  income: 0,

  homePayment: 0,
  homeCouncilTax: 0,

  publicTransport: 0,
  carFinance: 0,
  carInsurance: 0,
  carFuel: 0,

  foodGroceries: 0,
  foodEatingOut: 0,

  utilitiesElectricity: 0,
  utilitiesWater: 0,
  utilitiesGas: 0,

  subscriptions: [],
};

const validationSchema = object({
  income: number()
    .required("Income is required")
    .min(0, "Income cannot be below 0"),

  homePayment: number().min(0, "Rent/Mortgage Payments cannot be below 0"),
  homeCouncilTax: number().min(0, "Council Tax cannot be below 0"),

  publicTransport: number().min(0, "Public Transport cannot be below 0"),
  carFinance: number().min(0, "Finance Payments cannot be below 0"),
  carInsurance: number().min(0, "Car Insurance cannot be below 0"),
  carFuel: number().min(0, "Fuel cannot be below 0"),

  foodGroceries: number().min(0, "Groceries cannot be below 0"),
  foodEatingOut: number().min(0, "Eating Out cannot be below 0"),

  utilitiesElectricity: number().min(0, "Electricity cannot be below 0"),
  utilitiesWater: number().min(0, "Water cannot be below 0"),
  utilitiesGas: number().min(0, "Gas cannot be below 0"),

  subscriptions: array().of(
    object({
      name: string().required("Subscription name is required"),
      cost: number()
        .typeError("Cost must be a number")
        .required("Subscription cost is required")
        .min(0, "Cost must be greater than or equal to 0"),
    }),
  ),
});

const GetStartedForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [data, setData] = useState<FormData | null>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const steps: Step[] = [
    {
      name: "Income 💰",
      component: IncomeInputs,
    },
    {
      name: "House 🏠",
      component: HouseInputs,
    },
    {
      name: "Transport 🚗",
      component: TransportInputs,
    },
    {
      name: "FoodInputs 🍔",
      component: FoodInputs,
    },
    {
      name: "Utilities 💡",
      component: UtilitiesInputs,
    },
    {
      name: "Subscriptions 📺",
      component: SubscriptionsInputs,
    },
  ];

  // Handle form submit
  const handleFormSubmit = (values: FormValues) => {
    // On each step, merge the old data with the new values
    const mergedData = {
      ...data,
      ...values,
    };

    setData(mergedData);

    // If last step, we should submit all this data and redirect to the dashboard
    // Else, move to next step
    if (currentStep === steps.length - 1) {
      setSubmitting(true);

      localStorage.setItem("data", JSON.stringify(mergedData));
      router.push("/dashboard");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  // Form controls
  const FormControls = () => {
    return (
      <div className="mt-8 flex gap-2">
        {currentStep > 0 && (
          <button
            type="button"
            className="button button--secondary"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </button>
        )}

        {currentStep < steps.length - 1 && (
          <button type="submit" className="button button--primary">
            Next
          </button>
        )}

        {currentStep === steps.length - 1 && (
          <button
            type="submit"
            className="button button--primary"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="relative border-2 border-black bg-white p-4 text-black md:p-8 dark:bg-slate-800 dark:text-slate-300">
      <ProgressBar progress={(currentStep / (steps.length - 1)) * 100} />

      <h2>{steps[currentStep].name}</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            {React.createElement(steps[currentStep].component, values)}

            <FormControls />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GetStartedForm;
