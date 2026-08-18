import { redirect } from "next/navigation";

interface AutorNewRedirectProps {
  params: Promise<{ id: string }>;
}

export default async function AutorNewRootPage({ params }: AutorNewRedirectProps) {
  const { id } = await params;
  redirect(`/pt/autor-new/${id}`);
}
