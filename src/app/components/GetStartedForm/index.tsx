"use client";

import ProgressBar from "@/app/components/ProgressBar";
import { Expense } from "@/app/types";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { array, number, object, string } from "yup";
import Car from "./Car";
import Food from "./Food";
import House from "./House";
import Income from "./Income";
import Subscriptions from "./Subscriptions";
import Utilities from "./Utilities";

// Form values - these could be a number, or blank (unfilled)
type FormValues = {
  income: number | "";

  homePayment: number | "";
  homeCouncilTax: number | "";

  carFinance: number | "";
  carInsurance: number | "";
  carFuel: number | "";

  foodGroceries: number | "";
  foodEatingOut: number | "";

  utilitiesElectricity: number | "";
  utilitiesWater: number | "";
  utilitiesGas: number | "";

  subscriptions: Expense[];
};

type Step = {
  name: string;
  component: React.ComponentType<FormValues>;
};

const initialValues: FormValues = {
  income: "",

  homePayment: "",
  homeCouncilTax: "",

  carFinance: "",
  carInsurance: "",
  carFuel: "",

  foodGroceries: "",
  foodEatingOut: "",

  utilitiesElectricity: "",
  utilitiesWater: "",
  utilitiesGas: "",

  subscriptions: [],
};

const validationSchema = object({
  income: number()
    .required("Income is required")
    .min(0, "Income must be greater than 0"),

  homePayment: number().min(0, "Rent/Mortgage Payments must be greater than 0"),
  homeCouncilTax: number().min(0, "Council Tax must be greater than 0"),

  carFinance: number().min(0, "Finance Payments must be greater than 0"),
  carInsurance: number().min(0, "Car Insurance must be greater than 0"),
  carFuel: number().min(0, "Fuel must be greater than 0"),

  foodGroceries: number().min(0, "Groceries must be greater than 0"),
  foodEatingOut: number().min(0, "Eating Out must be greater than 0"),

  utilitiesElectricity: number().min(0, "Electricity must be greater than 0"),
  utilitiesWater: number().min(0, "Water must be greater than 0"),
  utilitiesGas: number().min(0, "Gas must be greater than 0"),

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
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const steps: Step[] = [
    {
      name: "Income 💰",
      component: Income,
    },
    {
      name: "House 🏠",
      component: House,
    },
    {
      name: "Car 🚗",
      component: Car,
    },
    {
      name: "Food 🍔",
      component: Food,
    },
    {
      name: "Utilities 💡",
      component: Utilities,
    },
    {
      name: "Subscriptions 📺",
      component: Subscriptions,
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
    <div className="relative border-2 border-black bg-white p-4 text-black md:p-8">
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
