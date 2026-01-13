"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createItemAction(formData: FormData) {
  return await prisma.item.create({
    data: {
      name: formData.get("name") as string,
      sku: formData.get("sku") as string,
      description: formData.get("description") as string,
      categoryId: formData.get("category") as string,
    },
  });
}

export async function getAllItemsAction() {
  const allItems = await prisma.item.findMany({
    orderBy: { name: "asc" },
  });

  return allItems.map((item) => ({
    id: item.id,
    name: item.name,
    sku: item.sku,
    description: item.description,
    categoryId: item.categoryId,
  }));
}

export async function deleteItem(id: string) {
  await prisma.item.delete({
    where: { id },
  });
  console.log("Item deleted.");
  revalidatePath("/items");
}
