"use client";

import Form from "next/form";
import { createCategoryAction } from "@/lib/actions/category";
import FormFieldComponent from "@/components/form-field";

const inputFields = [
  {
    name: "id",
    label: "Category ID",
    defaultValue: "",
    placeholder: "toys-games",
  },
  {
    name: "name",
    label: "Category Name",
    defaultValue: "",
    placeholder: "Toys & Games",
  },
];

export default function CreateCategoryForm() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Create new category</h1>

      <Form
        className="flex flex-col items-start gap-4"
        action={createCategoryAction}
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

        <button className="bg-stone-300 border border-stone-300 hover:bg-stone-200 hover:border-stone-300 px-4 py-1 rounded-sm cursor-pointer transition">
          Submit
        </button>
      </Form>
    </section>
  );
}
