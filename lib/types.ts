export type Locale = "zh" | "en";

/** A string localized into both supported languages. */
export type Localized = Record<Locale, string>;

export type ChinaAccess = "direct" | "vpn" | "blocked";

export interface TryCost {
  /** Minutes from landing page to first "wow" result, actually measured. */
  timeToWowMinutes: number;
  /** What the free tier really allows, in one line. */
  money: Localized;
  requiresCreditCard: boolean;
  requiresWaitlist: boolean;
  chinaAccess: ChinaAccess;
  /** The psychological cost: does it need your face/voice/social exposure? */
  psych: Localized;
}

export interface SuccessPath {
  day1: Localized;
  day7: Localized;
  day30: Localized;
}

export interface TryCard {
  slug: string;
  /** Publish date, YYYY-MM-DD. */
  date: string;
  tool: {
    name: string;
    url: string;
    category: Localized;
    /** Affiliate link if available; falls back to url. */
    affiliateUrl?: string;
  };
  /** Hook headline, e.g. "10 分钟把一篇论文变成一档播客". */
  title: Localized;
  /** One-line verdict. */
  verdict: Localized;
  /** 0–10, how much this is worth trying today. */
  tryScore: number;
  cost: TryCost;
  /** How hard it is to walk away: subscriptions, data lock-in, sunk cost. */
  exitCost: Localized;
  /** The minimal path: what to do in the first 15 minutes, step by step. */
  firstSteps: Localized[];
  /** The wow moment we actually hit while testing. */
  wowMoment: Localized;
  /** Paywalls and friction points we hit, in order. */
  walls: Localized[];
  /** Who should NOT bother trying this. */
  whoShouldSkip: Localized;
  successPath: SuccessPath;
  /** Transparency: what the AI did, what the human verified. */
  disclosure: Localized;
}
