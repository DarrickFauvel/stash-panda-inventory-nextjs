import { getAllLocationsAction } from "@/lib/actions/location";
import DeleteLocationButton from "./components/delete-location-button";

export default async function LocationsPage() {
  const allLocations = await getAllLocationsAction();

  return (
    <section>
      <h1 className="text-2xl font-bold">Locations</h1>

      <table>
        <caption>Locations</caption>
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
          {allLocations.map((location) => {
            return (
              <tr key={location.id}>
                <td>{location.name}</td>
                <td>
                  <DeleteLocationButton locationId={location.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
