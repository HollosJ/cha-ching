import { Field } from "formik";
import ErrorMessage from "../ErrorMessage";

export default function Income() {
  return (
    <>
      <p>Start by entering your household monthly income after taxes.</p>

      <div className="field-row mt-8">
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

        <ErrorMessage name="income" />
      </div>
    </>
  );
}
