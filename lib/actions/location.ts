"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createLocationAction(formData: FormData) {
  return await prisma.location.create({
    data: {
      name: formData.get("name") as string,
    },
  });
}

export async function getAllLocationsAction() {
  const allLocations = await prisma.location.findMany({
    orderBy: { name: "asc" },
  });

  return allLocations.map((location) => ({
    id: location.id,
    name: location.name,
  }));
}

export async function deleteLocation(id: string) {
  await prisma.location.delete({
    where: { id },
  });
  console.log("Location deleted.");
  revalidatePath("/locations");
}
