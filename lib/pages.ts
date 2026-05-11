import { services } from "@/lib/content";

export const servicePages = services.map((service) => ({
  ...service,
  slug: service.id,
  promise:
    service.id === "paid-acquisition"
      ? "Scale media spend around contribution margin, incrementality, and payback windows."
      : service.id === "creative-strategy"
        ? "Turn creative into a weekly testing engine that compounds learnings and lowers CAC."
        : service.id === "retention"
          ? "Build lifecycle systems that lift repeat purchase, LTV, and owned-channel revenue."
          : "Give every growth decision a cash, margin, and inventory-aware forecast.",
  proof:
    service.id === "paid-acquisition"
      ? ["Geo lift testing", "Daily margin pacing", "Meta, TikTok, Google", "Board-ready spend plans"]
      : service.id === "creative-strategy"
        ? ["Weekly concept sprints", "UGC and motion briefs", "Hook testing matrix", "Creator production loops"]
        : service.id === "retention"
          ? ["Klaviyo architecture", "RFM segmentation", "VIP and winback", "Subscription and replenishment"]
          : ["CAC:LTV model", "Contribution P&L", "Inventory-aware plans", "Scenario forecasting"],
}));

export const processSteps = [
  {
    n: "01",
    title: "Diagnose",
    body: "Audit the P&L, channels, creative library, retention flows, analytics, inventory constraints, and cohort economics.",
  },
  {
    n: "02",
    title: "Model",
    body: "Build the operating model: CAC, payback, contribution margin, repeat purchase, and cash requirements by scenario.",
  },
  {
    n: "03",
    title: "Build",
    body: "Stand up the acquisition, creative, lifecycle, and reporting cadence needed to move from tactics to system.",
  },
  {
    n: "04",
    title: "Operate",
    body: "Run weekly decisions, creative sprints, pacing calls, experiments, and monthly forecast updates with your team.",
  },
  {
    n: "05",
    title: "Compound",
    body: "Turn winning tests into operating standards, then keep reallocating spend and resources toward the highest-return work.",
  },
];

export const testimonials = [
  {
    quote:
      "Leading Social gave us the operating cadence we were missing. Media, creative, and retention finally started pulling in the same direction.",
    name: "Maya Supply",
    role: "Founder",
    metric: "+62% LTV uplift",
  },
  {
    quote:
      "The difference was the forecasting layer. We knew when to push, when to hold, and what each decision meant for cash.",
    name: "North/House",
    role: "CEO",
    metric: "97% forecast accuracy",
  },
  {
    quote:
      "Creative testing stopped being random. Every sprint had a hypothesis, a scoreboard, and a next move.",
    name: "Form Athletic",
    role: "Head of Growth",
    metric: "84 tests / month",
  },
];

export const playbooks = [
  {
    title: "The 90-day contribution-margin sprint",
    category: "Forecasting",
    body: "A board-level sprint for brands that need profitable scale without starving cash flow.",
  },
  {
    title: "Creative velocity without brand drift",
    category: "Creative",
    body: "How to ship enough ad creative to learn fast while keeping the brand system intact.",
  },
  {
    title: "Retention revenue share teardown",
    category: "Lifecycle",
    body: "The flow, segmentation, and offer architecture behind a healthy owned-channel engine.",
  },
  {
    title: "Paid acquisition incrementality map",
    category: "Media",
    body: "A practical framework for finding the spend that is actually creating new demand.",
  },
];
