import { siteProfile } from "@/app/for-agents/agent-profile";

export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    role: siteProfile.role,
    roleZh: siteProfile.roleZh,
    pricingNotes: {
      currency: ["USD", "CNY"],
      note: "All pricing is indicative and depends on scope, delivery timeline, and integration complexity.",
      noteZh:
        "所有价格均为参考区间，实际报价取决于需求范围、交付周期和集成复杂度。",
    },
    services: siteProfile.services,
  });
}
