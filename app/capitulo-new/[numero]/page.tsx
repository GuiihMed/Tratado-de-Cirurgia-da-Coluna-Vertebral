import { redirect } from "next/navigation";

interface CapituloNewRootProps {
  params: Promise<{ numero: string }>;
}

export default async function CapituloNewRootPage({ params }: CapituloNewRootProps) {
  const resolvedParams = await params;
  redirect(`/pt/capitulo-new/${resolvedParams.numero}`);
}
