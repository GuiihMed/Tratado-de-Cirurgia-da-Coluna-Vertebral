import { redirect } from "next/navigation";

interface CapituloRootProps {
  params: Promise<{ numero: string }>;
}

export default async function CapituloRootPage({ params }: CapituloRootProps) {
  const resolvedParams = await params;
  redirect(`/pt/capitulo/${resolvedParams.numero}`);
}
