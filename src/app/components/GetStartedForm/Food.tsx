import { Field } from "formik";
import ErrorMessage from "../ErrorMessage";

export default function FoodForm() {
  return (
    <>
      <p>Next, enter your monthly food expenses.</p>

      {/* Groceries */}
      <div className="field-row mt-8">
        <label htmlFor="foodGroceries">Groceries</label>

        <Field
          className="input"
          id="foodGroceries"
          name="foodGroceries"
          type="number"
          placeholder="e.g. 100"
          min={0}
        />

        <ErrorMessage name="foodGroceries" />
      </div>

      {/* Eating Out */}
      <div className="field-row mt-8">
        <label htmlFor="foodEatingOut">Eating Out</label>

        <Field
          className="input"
          id="foodEatingOut"
          name="foodEatingOut"
          type="number"
          placeholder="e.g. 100"
          min={0}
        />

        <ErrorMessage name="foodEatingOut" />
      </div>
    </>
  );
}
