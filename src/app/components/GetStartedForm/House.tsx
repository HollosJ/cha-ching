import { Field } from "formik";
import ErrorMessage from "../ErrorMessage";

export default function House() {
  return (
    <>
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

        <ErrorMessage name="homePayment" />
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

        <ErrorMessage name="homeCouncilTax" />
      </div>
    </>
  );
}
