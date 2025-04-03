import ErrorMessage from "@/app/components/ErrorMessage";
import { Field } from "formik";

export default function Transport() {
  return (
    <>
      <p>Next, enter your monthly car payments.</p>

      <div className="field-row mt-8">
        <label htmlFor="publicTransport">Public Transport</label>

        <Field
          className="input"
          id="publicTransport"
          name="publicTransport"
          type="number"
          min={0}
        />

        <ErrorMessage name="publicTransport" />
      </div>

      {/* Car Payment */}
      <div className="field-row mt-8">
        <label htmlFor="carFinance">Finance Payments</label>

        <Field
          className="input"
          id="carFinance"
          name="carFinance"
          type="number"
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
          min={0}
        />

        <ErrorMessage name="carFuel" />
      </div>
    </>
  );
}
