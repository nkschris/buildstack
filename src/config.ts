/**
 * Buildstack site config.
 * Paste your Stripe Payment Link below (or set NEXT_PUBLIC_STRIPE_PAYMENT_LINK in .env).
 */
export const siteConfig = {
  name: "Buildstack",
  tagline: "AI tools to build income",
  description:
    "A curated directory of AI tools for vibe coders and builders making money online — coding agents, writing, design, video, automation, freelancing, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://buildstack.dev",
  // TODO: paste Stripe Payment Link URL here (or set NEXT_PUBLIC_STRIPE_PAYMENT_LINK)
  stripePaymentLink:
    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "",
  social: {
    twitter: "@buildstack",
  },
  sponsorTiers: [
    {
      id: "featured",
      name: "Featured listing",
      price: "$199",
      period: "/ month",
      description: "Sponsored slot on the homepage Featured section — clearly labeled Sponsored.",
      perks: [
        "Homepage Sponsored card (above the fold)",
        "Category highlight badge",
        "Link out to your product",
        "Listed for 30 days",
      ],
      cta: "Get Featured",
      highlighted: false,
    },
    {
      id: "sponsored-plus",
      name: "Sponsored Plus",
      price: "$499",
      period: "/ month",
      description: "Top Sponsored placement + newsletter mention for builders who want reach.",
      perks: [
        "Prime Sponsored slot on homepage",
        "Mention in one weekly newsletter",
        "Category pin for 30 days",
        "Priority review for new releases shelf",
      ],
      cta: "Go Sponsored Plus",
      highlighted: true,
    },
    {
      id: "launch",
      name: "Launch blast",
      price: "$799",
      period: "/ campaign",
      description: "One-time launch package for new AI tools hitting the market.",
      perks: [
        "Featured + New badge for 14 days",
        "Dedicated newsletter callout",
        "Social share (when channel live)",
        "Sponsored label — always transparent",
      ],
      cta: "Book Launch",
      highlighted: false,
    },
  ],
} as const;
