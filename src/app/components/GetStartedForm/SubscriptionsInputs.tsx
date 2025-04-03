import ErrorMessage from "@/app/components/ErrorMessage";
import { Expense } from "@/app/types";
import { Field, FieldArray } from "formik";

export default function Subscriptions({
  subscriptions,
}: {
  subscriptions: Expense[];
}) {
  return (
    <>
      <p>Finally, enter your monthly subscriptions.</p>

      <div className="field-row mt-8">
        <FieldArray
          name="subscriptions"
          render={(arrayHelpers) => (
            <div>
              {Array.isArray(subscriptions) && subscriptions.length > 0 ? (
                subscriptions.map((_, index) => (
                  <div key={index}>
                    <div className="flex">
                      <Field
                        name={`subscriptions.${index}.name`}
                        placeholder="Name"
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
                        className="button button--secondary w-24"
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
