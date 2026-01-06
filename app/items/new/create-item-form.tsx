"use client";

import Form from "next/form";
import { createItemAction } from "@/lib/actions/item";
import FormFieldComponent from "../../../components/form-field";
import FormSelectComponent from "./components/form-select";

const inputFields = [
  {
    name: "name",
    label: "Name",
    defaultValue: "",
    placeholder: "item name here",
  },
  {
    name: "sku",
    label: "SKU",
    defaultValue: "",
    placeholder: "sku name here (unique)",
  },
  {
    name: "description",
    label: "Description",
    defaultValue: "",
    placeholder: "description here",
  },
];

export default function CreateItemForm() {
  return (
    <Form className="flex flex-col items-start gap-4" action={createItemAction}>
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
