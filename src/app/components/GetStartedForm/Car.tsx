import { Field } from "formik";
import ErrorMessage from "../ErrorMessage";

export default function Car() {
  return (
    <>
      <p>Next, enter your monthly car payments.</p>

      {/* Car Payment */}
      <div className="field-row mt-8">
        <label htmlFor="carFinance">Finance Payments</label>

        <Field
          className="input"
          id="carFinance"
          name="carFinance"
          type="number"
          placeholder="e.g. 100"
          min={0}
        />

        <ErrorMessage name="carFinance" />
      </div>

      {/* Car Insurance */}
      <div className="field-row mt-8">
        <label htmlFor="carInsurance">Car Insurance</label>

        <Field
          className="input"
          id="carInsurance"
          name="carInsurance"
          type="number"
          placeholder="e.g. 100"
          min={0}
        />

        <ErrorMessage name="carInsurance" />
      </div>

      {/* Fuel */}
      <div className="field-row mt-8">
        <label htmlFor="carFuel">Fuel</label>

        <Field
          className="input"
          id="carFuel"
          name="carFuel"
          type="number"
          placeholder="e.g. 100"
          min={0}
        />

        <ErrorMessage name="carFuel" />
      </div>
    </>
  );
}
