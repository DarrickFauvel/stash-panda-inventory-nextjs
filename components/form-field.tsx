import { FieldProps } from "@/lib/types";

export default function FormFieldComponent({
  name,
  label,
  defaultValue,
  placeholder,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        className="bg-stone-200 px-2 py-1"
        type="text"
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
}
