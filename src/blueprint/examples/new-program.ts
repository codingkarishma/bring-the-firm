import type { BringTheFirmExamples } from './types';

export const newProgramExamples = {
  slug: 'new-program',
  description:
    "Examples to use when the firm is still building Bring the firm adoption and account teams need low-risk, trust-preserving recommendations",
  questionGuidance:
    'What will make account teams most comfortable acting on these recommendations?',
  examples: [
    {
      slug: 'executive-sponsorship',
      description:
        'Email folks about Bring the firm opportunities while highlighting executives who are participating in the program',
      matchSignals: ['executive sponsorship', 'CEO involvement'],
      emailDraft: {
        to: ['Relationship owner'],
        cc: [],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'You have an upcoming meeting with Liam Taylor from Allianz. As you know, Nicolas and the broader leadership team has been pushing Bring the firm and here are some ideas of colleagues you might bring along',
          },
          {
            type: 'bullets',
            items: [
              'Ajay Agrawal in the Tech practice - other carriers seem to be increasing their AI spend',
              'Amelia Fernandez in the Tech practice - if you want someone more junior than Ajay',
            ],
          },
        ],
      },
    },
    {
      slug: 'relationship-owner-friendly-intro',
      description:
        'Email a relationship owner about one useful colleague without making the program feel like an account takeover',
      matchSignals: ['new program', 'relationship owner', 'lightweight intro', 'account trust'],
      emailDraft: {
        to: ['Relationship owner'],
        cc: [],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'You are seeing Priya Menon at Zurich next Thursday about claims operations. One Bring the firm idea worth considering: invite Daniel Cho from Insurance Analytics if you think the room would benefit from a practical claims leakage view.',
          },
          {
            type: 'bullets',
            items: [
              'Why Daniel: he helped a peer carrier quantify leakage across FNOL and subrogation',
              'Suggested role: 10 minutes on what the team usually sees, then hand back to you',
              'Next step: I can ask Daniel to send you two talking points before you decide',
            ],
          },
        ],
      },
    },
    {
      slug: 'new-program-single-senior-expert',
      description:
        'Email an account lead with a single senior expert recommendation when adoption is still low',
      matchSignals: ['senior expert', 'low adoption', 'one recommendation', 'client meeting'],
      emailDraft: {
        to: ['Account lead'],
        cc: ['Client service partner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'Ahead of the finance transformation check-in with National Grid, one person may be worth bringing in: Maya Shah, who leads our utilities finance modernization work.',
          },
          {
            type: 'bullets',
            items: [
              'Why now: the client is moving from design into implementation planning',
              'What Maya adds: peer benchmarks on close acceleration and controls redesign',
              'Low lift: she can join for the first 15 minutes or send you a sharper framing note',
            ],
          },
        ],
      },
    },
  ],
} satisfies BringTheFirmExamples;

export const establishedProgramExamples = {
  slug: 'established-program',
  description:
    'Examples to use when Bring the firm is established and the main challenge is prioritizing the best specialist action across real client moments',
  questionGuidance:
    'Should the recommendation usually name one strongest colleague or show a short ranked set when the client situation is complex?',
  examples: [
    {
      slug: 'ranked-meeting-recommendations',
      description:
        'Send a relationship owner a ranked list of colleagues to consider for a scheduled client meeting',
      matchSignals: ['established program', 'ranked recommendations', 'upcoming meeting'],
      emailDraft: {
        to: ['Relationship owner'],
        cc: ['Account partner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: "For Wednesday's operating model session with Santander, here are the best Bring the firm options based on the meeting topic and recent work in the account.",
          },
          {
            type: 'bullets',
            items: [
              '1. Elena Ruiz, Banking Operations - strongest fit for branch-to-digital migration tradeoffs',
              '2. Marcus Hill, Workforce Transformation - useful if the CHRO joins the discussion',
              '3. Anika Patel, Cloud Cost - good backup if the agenda moves toward platform economics',
            ],
          },
          {
            type: 'paragraph',
            text: 'If you want one person only, Elena is the clearest recommendation.',
          },
        ],
      },
    },
    {
      slug: 'availability-confirmed',
      description:
        'Notify the account team only after a recommended colleague has been checked for availability',
      matchSignals: ['availability confirmed', 'senior colleague', 'low friction'],
      emailDraft: {
        to: ['Client service partner'],
        cc: ['Pursuit lead'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: "Ravi Kapoor is available for the first 20 minutes of Friday's Adobe renewal prep with Telstra. He is the best fit if you want a senior view on customer data platform adoption.",
          },
          {
            type: 'bullets',
            items: [
              'Why him: he led two CDP value-realization reviews after large Adobe renewals',
              "Client angle: Telstra's marketing team is asking about adoption, not implementation",
              'Suggested ask: add Ravi for the adoption and value case section only',
            ],
          },
        ],
      },
    },
    {
      slug: 'client-team-digest',
      description:
        'Send a short weekly digest of Bring the firm opportunities across a priority account',
      matchSignals: ['weekly digest', 'priority account', 'multiple meetings'],
      emailDraft: {
        to: ['Account team'],
        cc: ['Industry lead'],
        attachment: {
          filename: 'HSBC Bring the firm opportunities.xlsx',
          cells: [
            ['Client moment', 'Recommended colleague', 'Reason', 'Action'],
            ['Treasury modernization meeting', 'Leah Grant, Payments', 'Peer bank benchmark', 'Invite for 15 minutes'],
            ['Cloud cost review', 'Omar Malik, FinOps', 'Spend spike after migration', 'Send prep note'],
            ['Risk leadership dinner', 'Nina Bose, Model Risk', 'New AI governance questions', 'Consider intro'],
          ],
        },
        body: [
          {
            type: 'paragraph',
            text: 'Three HSBC opportunities look strong for Bring the firm this week. The attached sheet has the quick rationale and suggested action for each client moment.',
          },
          {
            type: 'paragraph',
            text: 'Best immediate move: invite Leah Grant to the treasury modernization meeting because the agenda maps closely to her recent peer-bank work.',
          },
        ],
      },
    },
  ],
} satisfies BringTheFirmExamples;

export const salesLifecycleExamples = {
  slug: 'sales-lifecycle',
  description:
    'Examples to use when the opportunity depends on account growth stage, stakeholder mapping, renewal timing, delivery risk, buying committee gaps, or pursuit strategy',
  questionGuidance:
    'Should the recommendation emphasize the sales stage, the stakeholder gap, or the business risk being addressed?',
  examples: [
    {
      slug: 'account-planning-whitespace',
      description:
        'Recommend colleagues during account planning when a client priority creates credible whitespace',
      matchSignals: ['account planning', 'whitespace', 'executive priority', 'relationship mapping'],
      emailDraft: {
        to: ['Account partner'],
        cc: ['Relationship owner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'For the AstraZeneca account plan refresh, the manufacturing resilience priority creates a good Bring the firm opening beyond the current ERP work.',
          },
          {
            type: 'bullets',
            items: [
              'Invite: Claire Donovan, Operations Strategy - strong fit for sterile manufacturing network design',
              'Why now: the COO agenda links resilience, quality, and capacity planning',
              'Suggested action: use Claire to shape one account-plan hypothesis before any client intro',
            ],
          },
        ],
      },
    },
    {
      slug: 'buying-committee-gap',
      description:
        'Use buying committee context to recommend a colleague who can cover a missing stakeholder concern',
      matchSignals: ['buying committee', 'economic buyer', 'technical buyer', 'procurement', 'risk'],
      emailDraft: {
        to: ['Pursuit lead'],
        cc: ['Client service partner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'The Barclays risk analytics pursuit looks strong with the CRO team, but the technology buyer is not yet covered. Consider bringing in Hannah Park before orals.',
          },
          {
            type: 'bullets',
            items: [
              'Gap: architecture and model-governance ownership may sit with the CTO organization',
              'Why Hannah: she can translate the risk case into platform, data lineage, and controls language',
              'Suggested role: 30-minute prep with the team, then join orals only if the agenda includes technology questions',
            ],
          },
        ],
      },
    },
    {
      slug: 'stalled-pursuit-executive-sponsor',
      description:
        'Recommend a senior colleague when a pursuit is stalled and needs executive-level credibility',
      matchSignals: ['stalled pursuit', 'executive sponsor', 'commercial strategy', 'win probability'],
      emailDraft: {
        to: ['Sales lead'],
        cc: ['Account lead'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'The Maersk operating model pursuit has not moved since procurement asked for a revised commercial case. A senior Bring the firm touch may help reopen the business conversation.',
          },
          {
            type: 'bullets',
            items: [
              'Recommend: Victor Jensen, Global Supply Chain - credible with COO-level operating model decisions',
              'Why now: the issue appears to be value confidence, not scope clarity',
              'Suggested ask: have Victor pressure-test the value story before deciding whether he contacts the client sponsor',
            ],
          },
        ],
      },
    },
    {
      slug: 'delivery-to-expansion',
      description:
        'Recommend a careful expansion conversation from an active delivery engagement',
      matchSignals: ['delivery', 'expansion', 'current engagement', 'client trust', 'next funded problem'],
      emailDraft: {
        to: ['Engagement partner'],
        cc: ['Account partner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'The Target merchandising transformation is entering rollout, and the client is now raising store labor questions. This may be a useful Bring the firm moment if handled through the current engagement lead.',
          },
          {
            type: 'bullets',
            items: [
              'Invite: Luis Moreno, Workforce Analytics - relevant to store labor forecasting and adoption risk',
              'Why now: labor planning is becoming a delivery dependency, not a separate sales pitch',
              'Suggested role: help the team frame one risk and one option for the next steering committee',
            ],
          },
        ],
      },
    },
    {
      slug: 'renewal-value-defense',
      description:
        'Recommend a colleague who can help defend value and shape the next phase before a renewal or extension',
      matchSignals: ['renewal', 'extension', 'value defense', 'next phase', 'adoption'],
      emailDraft: {
        to: ['Client service partner'],
        cc: ['Engagement lead'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'The ServiceNow managed services extension at Philips is six weeks out. Consider bringing in Aisha Bell before the renewal discussion to sharpen the value and adoption story.',
          },
          {
            type: 'bullets',
            items: [
              'Why Aisha: she has helped healthcare clients connect platform adoption to service cost and experience metrics',
              'Client moment: renewal will likely depend on proof of realized value, not more functionality',
              'Suggested action: ask Aisha for a one-page value narrative the account team can use first',
            ],
          },
        ],
      },
    },
  ],
} satisfies BringTheFirmExamples;

export const pursuitExpansionExamples = {
  slug: 'pursuit-expansion',
  description:
    'Examples to use when the opportunity is tied to win probability, account expansion, cross-sell, upsell, whitespace, or proposal quality',
  questionGuidance:
    'Should the recommendation focus only on the immediate pursuit or include adjacent expansion potential for the account team?',
  examples: [
    {
      slug: 'active-pursuit-specialist',
      description:
        'Recommend a specialist who can strengthen an active pursuit before the next client touchpoint',
      matchSignals: ['active pursuit', 'proposal', 'specialist', 'next client touchpoint'],
      emailDraft: {
        to: ['Pursuit lead'],
        cc: ['Account partner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'For the Novartis commercial analytics pursuit, consider adding Sarah Kim from Life Sciences Data Strategy before the final solution review.',
          },
          {
            type: 'bullets',
            items: [
              'Why now: the client is comparing operating models, not just analytics tooling',
              'What Sarah adds: recent pharma launch analytics work and data governance tradeoffs',
              'Suggested use: 30-minute pressure test of the proposal, then join the client workshop if useful',
            ],
          },
        ],
      },
    },
    {
      slug: 'whitespace-expansion',
      description:
        'Notify an account lead about adjacent whitespace after a current engagement creates a credible opening',
      matchSignals: ['whitespace', 'account expansion', 'current engagement', 'adjacent opportunity'],
      emailDraft: {
        to: ['Account lead'],
        cc: ['Engagement partner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'The supply chain diagnostic at Diageo is creating a credible opening for our tax technology team. If you agree, bring in Marta Silva before the next steering committee.',
          },
          {
            type: 'bullets',
            items: [
              'Signal: the client is redesigning procurement flows across three regions',
              'Why Marta: she has helped global consumer clients connect procurement change to indirect tax controls',
              'Suggested role: help you frame one question for the CFO, not pitch a separate project',
            ],
          },
        ],
      },
    },
    {
      slug: 'proposal-red-team',
      description:
        'Ask the pursuit team to bring in internal expertise for a fast red-team review',
      matchSignals: ['red team', 'proposal quality', 'competitive pursuit'],
      emailDraft: {
        to: ['Pursuit team'],
        cc: ['Client service partner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'The Shell energy transition proposal would benefit from a quick Bring the firm review before it goes out. Two colleagues look useful for a focused red team.',
          },
          {
            type: 'bullets',
            items: [
              'Tom Alvarez, Energy Strategy - can test whether the transition roadmap is executive-level enough',
              'Iris Chen, Capital Projects - can pressure-test delivery risk and governance language',
            ],
          },
          {
            type: 'paragraph',
            text: 'Suggested ask: 45 minutes tomorrow, with comments limited to the executive summary and workplan.',
          },
        ],
      },
    },
  ],
} satisfies BringTheFirmExamples;

export const ecosystemSignalsExamples = {
  slug: 'ecosystem-signals',
  description:
    'Examples to use when partner signals, alliance data, co-selling motions, product usage, renewals, marketplace spend, or implementation risk point to a client opportunity',
  questionGuidance:
    'Should the recommendation explain the partner signal directly or translate it into the client action the account owner should take?',
  examples: [
    {
      slug: 'partner-renewal-signal',
      description:
        'Use an ecosystem partner renewal signal to recommend a colleague for an account conversation',
      matchSignals: ['ecosystem partner', 'renewal', 'alliance data', 'account signal'],
      emailDraft: {
        to: ['Alliance account lead'],
        cc: ['Relationship owner'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'Microsoft renewal activity at Unilever points to a Bring the firm opening before the next account planning call. Consider inviting Beatrice Long from Cloud Economics.',
          },
          {
            type: 'bullets',
            items: [
              'Signal: Azure commitment is expanding while cost ownership is still split across regions',
              'Why Beatrice: she has helped consumer clients connect renewal sizing to FinOps governance',
              'Suggested action: ask her for a two-slide view before deciding whether she joins the call',
            ],
          },
        ],
      },
    },
    {
      slug: 'implementation-risk-signal',
      description:
        'Recommend implementation expertise when partner data shows adoption or delivery risk',
      matchSignals: ['implementation risk', 'adoption gap', 'partner signal', 'delivery'],
      emailDraft: {
        to: ['Client service partner'],
        cc: ['Sales lead'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'Salesforce adoption data for Aetna suggests the service transformation meeting could use someone with field enablement experience. Jordan Ellis is the strongest fit.',
          },
          {
            type: 'bullets',
            items: [
              'Signal: licenses are live, but case-management adoption is uneven by region',
              'What Jordan adds: practical rollout lessons from two payer service programs',
              'Suggested role: join only the adoption section and help frame risks the client can act on',
            ],
          },
        ],
      },
    },
    {
      slug: 'marketplace-spend-opportunity',
      description:
        'Turn cloud marketplace spend into a specific Bring the firm recommendation',
      matchSignals: ['marketplace spend', 'cloud', 'partner ecosystem', 'budget event'],
      emailDraft: {
        to: ['Account partner'],
        cc: ['Cloud alliance lead'],
        attachment: null,
        body: [
          {
            type: 'paragraph',
            text: 'AWS marketplace spend at Baxter increased after the ERP migration. That creates a practical reason to bring in Priya Raman from Cloud Controls for the post-go-live review.',
          },
          {
            type: 'bullets',
            items: [
              'Client moment: finance is asking whether run-rate spend is explainable',
              'Why Priya: she connects cloud controls, chargeback, and ERP operating model decisions',
              'Suggested ask: have Priya send three questions for the review before inviting her',
            ],
          },
        ],
      },
    },
  ],
} satisfies BringTheFirmExamples;

export const bringTheFirmExamples = [
  newProgramExamples,
  establishedProgramExamples,
  salesLifecycleExamples,
  pursuitExpansionExamples,
  ecosystemSignalsExamples,
];
