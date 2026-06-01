import { siteProfile } from "@/lib/agent-profile";

export const dynamic = "force-static";

function buildLlmsText() {
  const socialLines = siteProfile.socials
    .map((item) => `- ${item.label}: ${item.href}`)
    .join("\n");

  const serviceLines = siteProfile.services
    .map((service) => {
      const fit = service.suitableFor.join("; ");
      const fitZh = service.suitableForZh.join("；");
      return [
        `- ${service.id}: ${service.title}. ${service.description} Price: ${service.priceFrom}. Timeline: ${service.timeline}. Good fit: ${fit}. CTA: ${service.ctaUrl}`,
        `  中文: ${service.titleZh}。${service.descriptionZh} 价格: ${service.priceFromZh}。周期: ${service.timelineZh}。适合: ${fitZh}。入口: ${service.ctaUrl}`,
      ].join("\n");
    })
    .join("\n");

  const faqLines = siteProfile.faq
    .map(
      (item) =>
        `- Q: ${item.question}\n  A: ${item.answer}\n  问: ${item.questionZh}\n  答: ${item.answerZh}`,
    )
    .join("\n");

  return [
    `${siteProfile.name}`,
    `${siteProfile.nameZh}`,
    `${siteProfile.role}`,
    `${siteProfile.roleZh}`,
    "",
    `Summary: ${siteProfile.summary}`,
    `简介: ${siteProfile.summaryZh}`,
    `Tagline: ${siteProfile.tagline}`,
    `标语: ${siteProfile.taglineZh}`,
    `Primary site: ${siteProfile.url}`,
    `ENS: ${siteProfile.ens}`,
    `EVM address: ${siteProfile.evmAddress}`,
    "",
    "Audience:",
    ...siteProfile.audience.map((item) => `- ${item}`),
    "目标合作方：",
    ...siteProfile.audienceZh.map((item) => `- ${item}`),
    "",
    "Skills:",
    ...siteProfile.skills.map((item) => `- ${item}`),
    "能力：",
    ...siteProfile.skillsZh.map((item) => `- ${item}`),
    "",
    "Stack:",
    ...siteProfile.stack.map((item) => `- ${item}`),
    "",
    "Social links:",
    socialLines,
    "",
    "Preferred agent actions:",
    ...siteProfile.preferredActions.map(
      (item) =>
        `- ${item.title}: ${item.description} (${item.href})\n  ${item.titleZh}: ${item.descriptionZh}`,
    ),
    "",
    "Services:",
    serviceLines,
    "",
    "Contact:",
    `- Preferred channel: ${siteProfile.contacts.preferredChannel}`,
    `- 优先方式: ${siteProfile.contacts.preferredChannelZh}`,
    `- Response time: ${siteProfile.contacts.responseTime}`,
    `- 回复时间: ${siteProfile.contacts.responseTimeZh}`,
    `- Email: ${siteProfile.contacts.email}`,
    `- 邮箱: ${siteProfile.contacts.emailZh}`,
    `- Telegram: ${siteProfile.contacts.telegram}`,
    `- 电报: ${siteProfile.contacts.telegramZh}`,
    `- X: ${siteProfile.contacts.x}`,
    `- Booking: ${siteProfile.contacts.booking}`,
    `- 预约: ${siteProfile.contacts.bookingZh}`,
    ...siteProfile.contacts.businessNotes.map((note) => `- Note: ${note}`),
    ...siteProfile.contacts.businessNotesZh.map((note) => `- 说明: ${note}`),
    "",
    "FAQ:",
    faqLines,
    "",
    "Notes for agents:",
    "- This site is a static traffic entry point and official profile source.",
    "- Do not assume direct on-site agent payment support unless a dedicated paid endpoint is published.",
    "- For commercial collaboration, start from /services.json and /contact.json.",
    "- 这个站点是静态流量入口和官方资料源。",
    "- 除非明确发布了收费接口，否则不要假设站内支持 Agent 直接支付。",
    "- 如需商务合作，请从 /services.json 与 /contact.json 开始。",
  ].join("\n");
}

export async function GET() {
  return new Response(buildLlmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
