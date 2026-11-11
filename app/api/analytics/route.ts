import { NextRequest, NextResponse } from "next/server";
import { getUnifiedAnalytics } from "@/lib/services/analytics";
import { AnalyticsTimeRange } from "@/lib/types/analytics";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const rangeParam = searchParams.get("range") as AnalyticsTimeRange | null;

    const validRanges: AnalyticsTimeRange[] = ["7d", "30d", "90d", "all"];
    const range: AnalyticsTimeRange =
      rangeParam && validRanges.includes(rangeParam) ? rangeParam : "30d";

    const data = await getUnifiedAnalytics(range);

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error generating analytics:", error);
    return NextResponse.json(
      { error: "Erro ao compilar relatório de analytics" },
      { status: 500 }
    );
  }
}
