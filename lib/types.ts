export type ItemProps = {
  name: string;
  sku: string;
  description: string;
  categoryId: string;
};

export type FieldProps = {
  name: string;
  label: string;
  defaultValue: string;
  placeholder: string;
};

export type CategoryProps = {
  id: string;
  name: string;
};
