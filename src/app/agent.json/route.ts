import { siteProfile } from "@/lib/agent-profile";

export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    name: siteProfile.name,
    nameZh: siteProfile.nameZh,
    role: siteProfile.role,
    roleZh: siteProfile.roleZh,
    url: siteProfile.url,
    ens: siteProfile.ens,
    evmAddress: siteProfile.evmAddress,
    tagline: siteProfile.tagline,
    taglineZh: siteProfile.taglineZh,
    summary: siteProfile.summary,
    summaryZh: siteProfile.summaryZh,
    audience: siteProfile.audience,
    audienceZh: siteProfile.audienceZh,
    skills: siteProfile.skills,
    skillsZh: siteProfile.skillsZh,
    stack: siteProfile.stack,
    socials: siteProfile.socials,
    preferredActions: siteProfile.preferredActions,
  });
}
