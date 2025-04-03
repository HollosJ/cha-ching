import ErrorMessage from "@/app/components/ErrorMessage";
import { Field } from "formik";

export default function Utilities() {
  return (
    <>
      <p>Now, enter your monthly utility expenses.</p>

      {/* Electricity */}
      <div className="field-row mt-8">
        <label htmlFor="utilitiesElectricity">Electricity</label>

        <Field
          className="input"
          id="utilitiesElectricity"
          name="utilitiesElectricity"
          type="number"
          min={0}
        />

        <ErrorMessage name="utilitiesElectricity" />
      </div>

      {/* Water */}
      <div className="field-row mt-8">
        <label htmlFor="utilitiesWater">Water</label>

        <Field
          className="input"
          id="utilitiesWater"
          name="utilitiesWater"
          type="number"
          min={0}
        />

        <ErrorMessage name="utilitiesWater" />
      </div>

      {/* Gas */}
      <div className="field-row mt-8">
        <label htmlFor="utilitiesGas">Gas</label>

        <Field
          className="input"
          id="utilitiesGas"
          name="utilitiesGas"
          type="number"
          min={0}
        />

        <ErrorMessage name="utilitiesGas" />
      </div>
    </>
  );
}
