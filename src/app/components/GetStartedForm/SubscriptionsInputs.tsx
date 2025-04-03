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
            <div className="grid gap-2">
              {Array.isArray(subscriptions) && subscriptions.length > 0 ? (
                subscriptions.map((_, index) => (
                  <div key={index}>
                    <div className="flex gap-2">
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
                        className="button button--secondary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
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
                className="button button--secondary mt-4 place-self-start"
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
