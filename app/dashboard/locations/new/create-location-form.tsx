"use client";

import Form from "next/form";
import { createLocationAction } from "@/lib/actions/location";
import FormFieldComponent from "../../../../components/form-field";
import FormSelectComponent from "./components/form-select";

const inputFields = [
  {
    name: "name",
    label: "Name",
    defaultValue: "",
    placeholder: "location name here",
  },
];

export default function CreateLocationForm() {
  return (
    <Form
      className="flex flex-col locations-start gap-4"
      action={createLocationAction}
    >
      {inputFields.map((field) => (
        <FormFieldComponent
          name={field.name}
          label={field.label}
          defaultValue={field.defaultValue}
          placeholder={field.placeholder}
          key={field.name}
        />
      ))}

      <FormSelectComponent />
      <button className="bg-stone-300 border border-stone-300 hover:bg-stone-200 hover:border-stone-300 px-4 py-1 rounded-sm cursor-pointer transition">
        Submit
      </button>
    </Form>
  );
}
