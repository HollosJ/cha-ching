'use client';

import { Field, FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import ProgressBar from '@/app/components/ProgressBar';
import { useRouter } from 'next/navigation';
import { object, string, number, array } from 'yup';
import ErrorMessage from './ErrorMessage';
import { Expense } from '../types';

// Form values - these could be a number, or blank (unfilled)
type FormValues = {
  income: number | '';

  homePayment: number | '';
  homeCouncilTax: number | '';

  carFinance: number | '';
  carInsurance: number | '';
  carFuel: number | '';

  foodGroceries: number | '';
  foodEatingOut: number | '';

  utilitiesElectricity: number | '';
  utilitiesWater: number | '';
  utilitiesGas: number | '';

  subscriptions: Expense[];
};

// Initial values
const initialValues: FormValues = {
  income: '',

  homePayment: '',
  homeCouncilTax: '',

  carFinance: '',
  carInsurance: '',
  carFuel: '',

  foodGroceries: '',
  foodEatingOut: '',

  utilitiesElectricity: '',
  utilitiesWater: '',
  utilitiesGas: '',

  subscriptions: [],
};

const validationSchema = object({
  income: number()
    .required('Income is required')
    .min(0, 'Income must be greater than 0'),

  homePayment: number().min(0, 'Rent/Mortgage Payments must be greater than 0'),
  homeCouncilTax: number().min(0, 'Council Tax must be greater than 0'),

  carFinance: number().min(0, 'Finance Payments must be greater than 0'),
  carInsurance: number().min(0, 'Car Insurance must be greater than 0'),
  carFuel: number().min(0, 'Fuel must be greater than 0'),

  foodGroceries: number().min(0, 'Groceries must be greater than 0'),
  foodEatingOut: number().min(0, 'Eating Out must be greater than 0'),

  utilitiesElectricity: number().min(0, 'Electricity must be greater than 0'),
  utilitiesWater: number().min(0, 'Water must be greater than 0'),
  utilitiesGas: number().min(0, 'Gas must be greater than 0'),

  subscriptions: array().of(
    object({
      name: string().required('Subscription name is required'),
      cost: number()
        .typeError('Cost must be a number')
        .required('Subscription cost is required')
        .min(0, 'Cost must be greater than or equal to 0'),
    })
  ),
});

const GetStartedForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  const router = useRouter();

  const steps: { [key: number]: string } = {
    0: 'Income',
    1: 'House',
    2: 'Car',
    3: 'Food',
    4: 'Utilities',
    5: 'Subscriptions',
  };

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
    if (currentStep === Object.keys(steps).length - 1) {
      console.log('Submitting all data:', mergedData);
      localStorage.setItem('data', JSON.stringify(mergedData));

      router.push('/dashboard');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  // Form controls
  const FormControls = () => {
    return (
      <div className="flex gap-2 mt-8">
        {currentStep > 0 && (
          <button
            type="button"
            className="button button--secondary"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </button>
        )}

        {currentStep < Object.keys(steps).length - 1 && (
          <button type="submit" className="button button--primary">
            Next
          </button>
        )}

        {currentStep === Object.keys(steps).length - 1 && (
          <button type="submit" className="button button--primary">
            Submit
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-8 text-black bg-white relative border-2 border-black">
      <ProgressBar
        progress={(currentStep / (Object.keys(steps).length - 1)) * 100}
      />

      <h2>{steps[currentStep]}</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <>
            {/* Income */}
            {currentStep === 0 && (
              <Form>
                <p>Start by entering your household monthly income.</p>

                <div className="mt-8 field-row ">
                  <label htmlFor="income">Income</label>

                  <Field
                    className="input"
                    id="income"
                    name="income"
                    type="number"
                    placeholder="e.g. 2000"
                    min={0}
                    prefix="$"
                  />

                  <ErrorMessage message={props.errors.income} />
                </div>

                <FormControls />
              </Form>
            )}

            {/* House */}
            {currentStep === 1 && (
              <Form>
                <p>Next, enter your monthly house payments.</p>

                {/* Rent/Mortgage */}
                <div className="mt-8 field-row">
                  <label htmlFor="homePayment">Rent/Mortgage Payments</label>

                  <Field
                    className="input"
                    id="homePayment"
                    name="homePayment"
                    type="number"
                    placeholder="e.g. 1000"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.homePayment} />
                </div>

                {/* Council Tax */}
                <div className="mt-8 field-row">
                  <label htmlFor="homeCouncilTax">Council Tax</label>

                  <Field
                    className="input"
                    id="homeCouncilTax"
                    name="homeCouncilTax"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.homeCouncilTax} />
                </div>

                <FormControls />
              </Form>
            )}

            {/* Car */}
            {currentStep === 2 && (
              <Form>
                <p>Next, enter your car payments.</p>

                {/* Car finance */}
                <div className="mt-8 field-row">
                  <label htmlFor="carFinance">Finance Payments</label>

                  <Field
                    className="input"
                    id="carFinance"
                    name="carFinance"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.carFinance} />
                </div>

                {/* Car Insurance */}
                <div className="mt-8 field-row">
                  <label htmlFor="carInsurance">Car Insurance</label>

                  <Field
                    className="input"
                    id="carInsurance"
                    name="carInsurance"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.carInsurance} />
                </div>

                {/* Fuel */}
                <div className="mt-8 field-row">
                  <label htmlFor="carFuel">Fuel</label>

                  <Field
                    className="input"
                    id="carFuel"
                    name="carFuel"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.carFuel} />
                </div>

                <FormControls />
              </Form>
            )}

            {/* Food */}
            {currentStep === 3 && (
              <Form>
                <p>Next, enter your monthly food expenses.</p>

                {/* Groceries */}
                <div className="mt-8 field-row">
                  <label htmlFor="foodGroceries">Groceries</label>

                  <Field
                    className="input"
                    id="foodGroceries"
                    name="foodGroceries"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.foodGroceries} />
                </div>

                {/* Eating Out */}
                <div className="mt-8 field-row">
                  <label htmlFor="foodEatingOut">Eating Out</label>

                  <Field
                    className="input"
                    id="foodEatingOut"
                    name="foodEatingOut"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.foodEatingOut} />
                </div>

                <FormControls />
              </Form>
            )}

            {/* Utilities */}
            {currentStep === 4 && (
              <Form>
                <p>Now, enter your monthly utility expenses.</p>

                {/* Electricity */}
                <div className="mt-8 field-row">
                  <label htmlFor="utilitiesElectricity">Electricity</label>

                  <Field
                    className="input"
                    id="utilitiesElectricity"
                    name="utilitiesElectricity"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.utilitiesElectricity} />
                </div>

                {/* Water */}
                <div className="mt-8 field-row">
                  <label htmlFor="utilitiesWater">Water</label>

                  <Field
                    className="input"
                    id="utilitiesWater"
                    name="utilitiesWater"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.utilitiesWater} />
                </div>

                {/* Gas */}
                <div className="mt-8 field-row">
                  <label htmlFor="utilitiesGas">Gas</label>

                  <Field
                    className="input"
                    id="utilitiesGas"
                    name="utilitiesGas"
                    type="number"
                    placeholder="e.g. 100"
                    min={0}
                  />

                  <ErrorMessage message={props.errors.utilitiesGas} />
                </div>

                <FormControls />
              </Form>
            )}

            {/* Subscriptions */}
            {currentStep === 5 && (
              <Form>
                <p>Finally, enter your monthly subscriptions.</p>

                <div className="mt-8 field-row">
                  <label htmlFor="subscriptions">Subscriptions</label>

                  <FieldArray
                    name="subscriptions"
                    render={(arrayHelpers) => (
                      <div>
                        {Array.isArray(props.values.subscriptions) &&
                        props.values.subscriptions.length > 0 ? (
                          props.values.subscriptions.map((_, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 mb-2"
                            >
                              <Field
                                name={`subscriptions.${index}.name`}
                                placeholder="Subscription name"
                                className="input flex-grow"
                              />
                              <Field
                                name={`subscriptions.${index}.cost`}
                                type="number"
                                placeholder="Cost"
                                className="input w-24"
                                min={0}
                              />
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                                className="button button--secondary"
                              >
                                Remove
                              </button>
                            </div>
                          ))
                        ) : (
                          <p>No subscriptions added yet.</p>
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ name: '', cost: '' })
                          }
                          className="button button--secondary mt-2"
                        >
                          Add Subscription
                        </button>
                      </div>
                    )}
                  />
                </div>

                <FormControls />
              </Form>
            )}
          </>
        )}
      </Formik>
    </div>
  );
};

export default GetStartedForm;
