import { Expense } from "@/app/types";
import { Field, FieldArray } from "formik";
import ErrorMessage from "../ErrorMessage";

type SubscriptionsProps = {
  subscriptions: Expense[];
};

export default function Subscriptions({ subscriptions }: SubscriptionsProps) {
  return (
    <>
      <p>Finally, enter your monthly subscriptions.</p>

      <div className="field-row mt-8">
        <label htmlFor="subscriptions">Subscriptions</label>

        <FieldArray
          name="subscriptions"
          render={(arrayHelpers) => (
            <div>
              {Array.isArray(subscriptions) && subscriptions.length > 0 ? (
                subscriptions.map((_, index) => (
                  <div key={index}>
                    <div className="mb-2 flex gap-2">
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

                    <ErrorMessage name={`subscriptions.${index}.name`} />
                    <ErrorMessage name={`subscriptions.${index}.cost`} />
                  </div>
                ))
              ) : (
                <p>No subscriptions added yet.</p>
              )}
              <button
                type="button"
                onClick={() => arrayHelpers.push({ name: "", cost: "" })}
                className="button button--secondary mt-4"
              >
                Add Subscription
              </button>
            </div>
          )}
        />
      </div>
    </>
  );
}
