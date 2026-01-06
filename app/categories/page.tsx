import { deleteCategory, getAllCategoriesAction } from "@/lib/actions/category";
import DeleteItemButton from "./components/delete-item-button";
import DeleteCategoryButton from "./components/delete-category-button";

export default async function CategoriesPage() {
  const allCategories = await getAllCategoriesAction();

  return (
    <section>
      <h1 className="text-2xl font-bold">All categories</h1>

      <table>
        <caption>All categories</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allCategories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td><DeleteCategoryButton categoryId={category.id} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
