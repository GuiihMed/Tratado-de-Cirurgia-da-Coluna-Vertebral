import { redirect } from "next/navigation";

interface PerfisPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PerfisPage({ params }: PerfisPageProps) {
  const { locale } = await params;
  redirect(`/${locale}/autores`);
}
