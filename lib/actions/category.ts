"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategoryAction(formData: FormData) {
  return prisma.category.create({
    data: {
      id: formData.get("id") as string,
      name: formData.get("name") as string,
    },
  });
}

export async function getCategoriesAction() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return categories.map((category) => ({
    id: category.id,
    name: category.name,
  }));
}

export async function getAllCategoriesAction() {
  const allCategories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return allCategories.map((category) => ({
    id: category.id,
    name: category.name,
  }));
}

export async function deleteCategory(id) {
  await prisma.category.delete({
    where: { id },
  });
  console.log("category deleted.");
  revalidatePath("/categories");
}
