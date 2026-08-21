import { redirect } from "next/navigation";
import { getAuthorByIdOrSlug } from "@/lib/data/authors";

interface RootAutorPageProps {
  params: Promise<{ id: string }>;
}

export default async function RootAutorPage({ params }: RootAutorPageProps) {
  const { id } = await params;
  const author = getAuthorByIdOrSlug(id);
  const slug = author?.slug || id;
  redirect(`/pt/autor/${slug}`);
}
