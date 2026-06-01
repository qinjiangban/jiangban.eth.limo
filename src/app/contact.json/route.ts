import { siteProfile } from "@/lib/agent-profile";

export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    role: siteProfile.role,
    roleZh: siteProfile.roleZh,
    preferredChannel: siteProfile.contacts.preferredChannel,
    preferredChannelZh: siteProfile.contacts.preferredChannelZh,
    responseTime: siteProfile.contacts.responseTime,
    responseTimeZh: siteProfile.contacts.responseTimeZh,
    email: siteProfile.contacts.email,
    emailZh: siteProfile.contacts.emailZh,
    telegram: siteProfile.contacts.telegram,
    telegramZh: siteProfile.contacts.telegramZh,
    x: siteProfile.contacts.x,
    booking: siteProfile.contacts.booking,
    bookingZh: siteProfile.contacts.bookingZh,
    businessNotes: siteProfile.contacts.businessNotes,
    businessNotesZh: siteProfile.contacts.businessNotesZh,
  });
}
