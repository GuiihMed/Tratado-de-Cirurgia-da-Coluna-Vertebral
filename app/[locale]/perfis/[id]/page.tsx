import { redirect } from "next/navigation";

interface PerfilDetailPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function PerfilDetailPage({ params }: PerfilDetailPageProps) {
  const { locale, id } = await params;
  redirect(`/${locale}/autor/${id}`);
}
