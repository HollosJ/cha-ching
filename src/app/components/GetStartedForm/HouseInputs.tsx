import ErrorMessage from "@/app/components/ErrorMessage";
import { Field } from "formik";

export default function House() {
  return (
    <>
      <p>Next, enter your monthly house payments.</p>

      {/* Rent/Mortgage */}
      <div className="field-row mt-8">
        <label htmlFor="homePayment">Rent/Mortgage Payments</label>

        <Field
          className="input"
          id="homePayment"
          name="homePayment"
          type="number"
          min={0}
        />

        <ErrorMessage name="homePayment" />
      </div>

      {/* Council Tax */}
      <div className="field-row mt-8">
        <label htmlFor="homeCouncilTax">Council Tax</label>

        <Field
          className="input"
          id="homeCouncilTax"
          name="homeCouncilTax"
          type="number"
          min={0}
        />

        <ErrorMessage name="homeCouncilTax" />
      </div>
    </>
  );
}
