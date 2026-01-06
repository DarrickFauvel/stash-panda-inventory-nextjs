import { deleteItem, getAllItemsAction } from "@/lib/actions/item";
import DeleteItemButton from "./components/delete-item-button";

export default async function ItemsPage() {
  const allItems = await getAllItemsAction();

  return (
    <section>
      <h1 className="text-2xl font-bold">Items</h1>

      <table>
        <caption>Items</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>{item.description}</td>
                <td>{item.categoryId}</td>
                <td>
                  <DeleteItemButton itemId={item.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
