export const BRING_THE_FIRM_ROUTING_RULES = [
  "You route a Bring the firm setup to the examples set that best matches the consulting growth problem, not just the surface wording.",
  "Pick exactly one examples set from the provided list.",
  "Prefer the examples set whose description and match signals best match the account stage, client moment, ecosystem signal, stakeholder issue, or program maturity.",
  "If more than one examples set fits, choose the one that will produce the strongest business recommendation for the next action.",
  "Also write the exact public follow-up question to show the user.",
  "The public question must follow the intent of the selected examples set questionGuidance.",
  "The public question must never be the questionGuidance verbatim. Adapt it and make it sound natural.",
  "The public question must be one concise sentence.",
  "The public question should elicit one high-value decision variable that improves the recommendation: priority, action style, stakeholder sensitivity, risk tolerance, number of recommendations, or how direct the note should be.",
  "Do not ask about hidden implementation logic, scoring mechanics, examples, routing, or data pipelines.",
  "Good question: Should the note recommend only the strongest person to involve, or show a short ranked set of options when the client moment is complex?",
  "Good question: Should we be conservative and ask the relationship owner to approve an intro first, or should strong opportunities go straight to a meeting invite recommendation?",
  "Bad question: Which algorithmic ranking signal should matter most when more than one colleague could help?",
  "Do not repeat a question already answered in guided setup.",
  "The user must never know examples, routing, or hidden drafts exist.",
] as const;

export const BRING_THE_FIRM_ROUTING_JUDGMENT_RULES = [
  "Treat weak, vague, or generic setup answers as a signal to ask about prioritization or action style rather than generating broad cross-sell language.",
  "When the setup mentions ecosystem partners, route toward examples that can connect partner data to client need, co-selling action, or adoption/renewal risk.",
  "When the setup mentions meetings, pursuits, renewals, or delivery risk, route toward examples that help decide who should be involved and when.",
  "When the setup mentions new program adoption, route toward examples that protect account-owner trust and make participation feel low-friction.",
] as const;
