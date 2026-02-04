import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import CategoryClient from "./CategoryClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Not Found",
    };
  }

  const baseUrl = "https://https://bankerohanmarket.vercel.app"; 

  return {
    title: `${category.name} Prices`,
    description: `Updated prices for ${category.name}.`,
    openGraph: {
      title: `${category.name} Prices`,
      description: `Updated prices for ${category.name}.`,
      url: `${baseUrl}/categories/${category.slug}`,
      images: [
        {
          url: `${baseUrl}${category.previewImage || category.items[0].image}`,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = categories.find((c) => c.slug === slug);
  if (!category) return notFound();

  return <CategoryClient category={category} />;
}
