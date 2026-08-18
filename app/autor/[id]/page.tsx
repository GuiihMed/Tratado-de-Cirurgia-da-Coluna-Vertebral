import { redirect } from "next/navigation";

interface AutorRedirectProps {
  params: Promise<{ id: string }>;
}

export default async function AutorRootPage({ params }: AutorRedirectProps) {
  const { id } = await params;
  redirect(`/pt/autor/${id}`);
}
