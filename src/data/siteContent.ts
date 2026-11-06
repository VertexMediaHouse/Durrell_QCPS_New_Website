// Headings use *asterisks* to mark the words rendered in the teal accent color.

export const brand = {
  name: 'QCPS',
  fullName: 'Quick Close Property Solutions',
  wordmarkTitle: 'Quick Close',
  wordmarkSub: 'Property Solutions',
}

export const ui = {
  readMore: 'Read more',
  viewAll: 'View All',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  prevImage: 'Previous image',
  nextImage: 'Next image',
  goToImage: 'Show image',
}

export const navCta = { label: 'Get My Cash Offer', href: '/get-offer' }
export const processCta = { label: 'How Our Process Works', href: '/how-it-works' }

// Header menu mirrors the original QCPS site: company pages grouped under a "Company" dropdown.
export const navCompany = {
  label: 'Company',
  items: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About Us', href: '/about' },
    { label: 'Who We Help', href: '/who-we-help' },
    { label: 'Areas We Serve', href: '/areas' },
  ],
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Cash Offer vs. Agent', href: '/cash-vs-agent' },
  { label: 'Why Sellers Choose Us', href: '/why-sellers-choose-us' },
  { label: 'FAQ', href: '/faq' },
]

export const footer = {
  // TODO: confirm final tagline copy with QCPS
  tagline: 'We buy houses for cash, as-is, on your timeline.',
  columns: [
    {
      title: 'Main Pages',
      links: [
        { label: 'Home', href: '/' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'About Us', href: '/about' },
        { label: 'Who We Help', href: '/who-we-help' },
        { label: 'Cash Offer vs. Agent', href: '/cash-vs-agent' },
      ],
    },
    {
      title: 'Sellers',
      links: [
        { label: 'Areas We Serve', href: '/areas' },
        { label: 'Why Sellers Choose Us', href: '/why-sellers-choose-us' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Privacy Policy & Terms', href: '/privacy-terms' },
      ],
    },
  ],
  contactTitle: 'Contact',
  // TODO: add QCPS's full business address if it should be public
  address: 'Jacksonville, FL',
  // TODO: replace with real QCPS contact number
  phone: '+1 234 56 78 89',
  // TODO: replace with real QCPS contact email
  email: 'offers@qcps.com',
  // TODO: replace with QCPS's real social profile URLs (or remove)
  socials: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
  copyright: '© 2026 Quick Close Property Solutions. All rights reserved.',
  designedByLabel: 'Designed by',
  designedBy: 'Waqar',
}

export const hero = {
  title: 'Sell Your House Without the Stress. On Your Timeline.',
  // TODO: confirm final hero subtitle copy with QCPS
  subtitle:
    'Get a fair cash offer on your house in any condition. No repairs, no agent fees, no showings — and you pick the closing date.',
  cta: navCta,
  secondaryCta: processCta,
  // Process facts, not performance stats — swap in real deal numbers once QCPS approves them.
  // TODO: confirm each fact with QCPS
  stats: [
    { value: '$0', label: 'Agent Commissions' },
    { value: '0', label: 'Repairs Required' },
    { value: '0', label: 'Showings' },
  ],
}

export const servicesSection = {
  badge: 'Who We Help',
  // TODO: confirm heading copy with QCPS
  heading: 'Whatever your situation, *we buy houses* as-is',
  items: [
    {
      title: 'Foreclosure help',
      // TODO: confirm final copy with QCPS / legal review
      description:
        'Behind on payments? We can make a cash offer quickly to help you avoid foreclosure and move on with less stress.',
    },
    {
      title: 'Inherited homes',
      description:
        'Inherited a property you don’t want to manage or renovate? We buy inherited homes as-is, often without probate delays.',
    },
    {
      title: 'Homes needing repairs',
      description:
        'Skip the contractors and renovation costs. We buy houses in any condition, as-is, so you don’t have to fix a thing.',
    },
    {
      title: 'Relocation',
      description: 'Moving for work or family? We can close fast so you’re not carrying two homes at once.',
    },
    {
      title: 'Tired landlords',
      description: 'Done dealing with tenants and maintenance? We buy rental properties with or without tenants in place.',
    },
  ],
}

export const featuredOffer = {
  badge: 'Why sell to us',
  title: 'Sell *As-Is, For Cash*',
  // TODO: confirm service-area wording with QCPS
  location: 'Serving Jacksonville, FL and surrounding areas',
  // TODO: confirm final copy with QCPS
  description:
    'Skip the listing, the repairs and the waiting. QCPS makes a straightforward cash offer on your house exactly as it is, and you choose the day you close.',
  features: ['No repairs needed', 'No agent fees', 'No showings', 'Close in days'],
  cta: navCta,
  // TODO: confirm with QCPS that sellers pay no commission before publishing
  priceValue: '$0',
  priceCaption: 'Agent commissions',
}

export const whyChooseUs = {
  badge: 'Why Choose Us',
  heading: 'Selling made *simple, fast* and *fair*',
  items: [
    { title: 'No repairs needed', description: 'We buy your house exactly as it is — no cleaning, no repairs, no staging.' },
    {
      title: 'No agent fees',
      description: 'Sell directly to us and skip commissions and closing costs that come with a traditional listing.',
    },
    {
      title: 'Fast, fair cash offers',
      description: 'Get a no-obligation cash offer within days, based on your home and your local market.',
    },
    {
      title: 'You pick the closing date',
      description: 'Close in as little as a week, or take the time you need — the timeline is yours.',
    },
    {
      title: 'No showings, no open houses',
      description: 'Skip the hassle of strangers walking through your home — we work directly with you.',
    },
    {
      title: 'Honest, straightforward process',
      description: 'We explain every step clearly so you know exactly what to expect, with no hidden surprises.',
    },
  ],
}

export const howItWorks = {
  badge: 'How It Works',
  heading: 'How the QCPS *process works* from start to close',
  steps: [
    {
      title: 'Tell us about your house',
      description:
        'Fill out our short form or give us a call with some basic details about your property and your situation.',
    },
    {
      title: 'Get your cash offer',
      description: 'We’ll review your property and present a fair, no-obligation cash offer — usually within a few days.',
    },
    {
      title: 'Close on your timeline',
      description:
        'Accept the offer and pick a closing date that works for you. We handle the paperwork and you get paid.',
    },
  ],
}

export const areas = {
  badge: 'Areas We Serve',
  heading: 'We buy houses across *Jacksonville*',
  intro: 'Jacksonville is our home market. We make cash offers on houses in neighborhoods all over the city.',
  cardPill: 'Buying now',
  cta: { label: 'See all areas', href: '/areas' },
  // TODO: replace with QCPS's official service-area list when provided (Jacksonville is the primary market)
  cities: [
    { name: 'Downtown & Urban Core', region: 'Jacksonville, FL', neighborhoods: ['Downtown', 'Brooklyn', 'Springfield'] },
    { name: 'Riverside & Avondale', region: 'Jacksonville, FL', neighborhoods: ['Riverside', 'Avondale', 'Murray Hill'] },
    { name: 'San Marco & Southbank', region: 'Jacksonville, FL', neighborhoods: ['San Marco', 'Southbank', 'St. Nicholas'] },
    { name: 'Arlington', region: 'Jacksonville, FL', neighborhoods: ['Arlington', 'Fort Caroline', 'Lake Lucina'] },
    { name: 'Mandarin', region: 'Jacksonville, FL', neighborhoods: ['Mandarin', 'Loretto', 'Beauclerc'] },
    { name: 'Westside', region: 'Jacksonville, FL', neighborhoods: ['Normandy', 'Cedar Hills', 'Ortega'] },
  ],
}

export const whoWeHelp = {
  badge: 'Who We Help',
  heading: 'Real *situations*, real *solutions* for every *seller*',
  intro: 'Every sale is different. These are some of the situations we help homeowners with most often.',
  featuredTag: 'Featured',
  cta: { label: 'View All', href: '/who-we-help' },
  items: [
    {
      tag: 'Foreclosure',
      title: 'Facing foreclosure',
      description:
        'If you’re behind on mortgage payments, a fast cash sale can help you avoid foreclosure and protect your credit.',
    },
    {
      tag: 'Inherited',
      title: 'Inherited a property',
      description: 'We buy inherited homes as-is, so you don’t have to manage repairs, cleanouts, or a long listing process.',
    },
    {
      tag: 'Repairs',
      title: 'Home needs major repairs',
      description: 'Foundation issues, an outdated interior, storm damage — we buy homes in any condition, no fix-up required.',
    },
    {
      tag: 'Divorce',
      title: 'Going through a divorce',
      description: 'Selling quickly can simplify dividing assets and let both parties move forward sooner.',
    },
    {
      tag: 'Relocation',
      title: 'Relocating for work or family',
      description: 'Need to move fast? We can close on a timeline that fits your relocation plans.',
    },
    {
      tag: 'Landlords',
      title: 'Tired of being a landlord',
      description: 'We purchase rental properties, including those with tenants currently in place.',
    },
  ],
}

export const ctaBanner = {
  badge: 'Get Started',
  heading: 'Find out what your *house* is worth',
  subtitle: 'Enter your address to start your free, no-obligation cash offer.',
  placeholder: 'Enter your property address',
  inputLabel: 'Property address',
  button: 'Get My Cash Offer',
  footnote: processCta,
}

export const faq = {
  badge: 'FAQ',
  heading: 'Frequently asked *questions* about *QCPS*',
  items: [
    {
      question: 'How do you decide how much to offer for my house?',
      // TODO: confirm exact valuation methodology language with QCPS / legal
      answer:
        'We look at your home’s condition, location, and recent comparable sales in your area to put together a fair cash offer.',
    },
    { question: 'Are there any fees or commissions?', answer: 'No. There are no agent commissions or hidden fees when you sell directly to us.' },
    {
      question: 'Do I need to make repairs before selling?',
      answer: 'No. We buy houses as-is, in any condition, so you don’t need to fix or clean anything before selling.',
    },
    {
      question: 'How fast can we close?',
      answer: 'We can often close in as little as 7 days, but we’re happy to work around a timeline that suits you.',
    },
    {
      question: 'Am I obligated to accept your offer?',
      answer: 'No. Our offers are free and come with no obligation — you decide if and when to move forward.',
    },
    {
      question: 'What if I’m behind on my mortgage or facing foreclosure?',
      answer: 'We regularly help sellers in this situation. Reach out and we’ll walk you through your options.',
    },
  ],
}

export const cashVsAgent = {
  badge: 'Compare',
  heading: 'Cash offer *vs.* listing with an *agent*',
  intro: 'A side-by-side look at selling to QCPS for cash versus listing with a traditional real estate agent.',
  columns: { label: 'What you’ll deal with', qcps: 'QCPS Cash Offer', agent: 'Traditional Agent' },
  // TODO: confirm every row with QCPS before publishing — these are illustrative placeholders, not guaranteed terms
  rows: [
    { label: 'Fees & commissions', qcps: 'None', agent: 'Typically 5–6% of sale price' },
    { label: 'Repairs required', qcps: 'None — sold as-is', agent: 'Often required before listing' },
    { label: 'Time to close', qcps: 'As little as 7 days', agent: '30–90+ days on average' },
    { label: 'Showings / open houses', qcps: 'None', agent: 'Multiple showings typical' },
    { label: 'Financing fall-through risk', qcps: 'None — cash purchase', agent: 'Buyer financing can fall through' },
    { label: 'Closing costs', qcps: 'We cover standard closing costs', agent: 'Seller typically pays a share' },
  ],
}

export const chips = ['No repairs', 'No agent fees', 'No showings', 'Cash offers', 'Close on your timeline', 'No obligation']

export const pageHeroes = {
  howItWorks: {
    badge: 'How It Works',
    title: 'Three Simple Steps',
    subtitle: 'From first call to closing day, here’s exactly what selling your house to QCPS looks like.',
  },
  about: {
    badge: 'About Us',
    title: 'Real Help For Home Sellers',
    subtitle: 'A local team giving homeowners a simpler, fairer way to sell.',
  },
  whoWeHelp: {
    badge: 'Who We Help',
    title: 'Every Situation Is Different',
    subtitle: 'Foreclosure, an inherited house, major repairs — we buy homes as-is, whatever brought you here.',
  },
  cashVsAgent: {
    badge: 'Cash Offer vs. Agent',
    title: 'Compare Your Options',
    subtitle: 'See how a direct cash sale stacks up against a traditional listing on fees, time and repairs.',
  },
  areas: {
    badge: 'Areas We Serve',
    title: 'Where We Buy Houses',
    subtitle: 'Jacksonville is our primary market. We make cash offers on homes across the neighborhoods below.',
  },
  whySellers: {
    badge: 'Why Sellers Choose Us',
    title: 'Why Sellers Choose Us',
    subtitle: 'A straightforward, no-pressure way to sell — built around your situation and your timeline.',
  },
  faq: {
    badge: 'FAQ',
    title: 'Honest Answers',
    subtitle: 'Straight answers to the questions homeowners ask us most.',
  },
  getOffer: {
    badge: 'Get My Offer',
    title: 'Get Your Cash Offer',
    subtitle: 'Tell us a bit about your property and we’ll get back to you with a fair, no-obligation cash offer.',
  },
  privacy: {
    badge: 'Privacy & Terms',
    title: 'Privacy Policy & Terms',
    subtitle: 'How we collect, use and protect your information, and how we may contact you.',
  },
}

export const about = {
  // Process facts, not performance stats — swap in real deal numbers once QCPS approves them.
  // TODO: confirm each fact with QCPS
  stats: [
    { value: '$0', label: 'Agent commissions' },
    { value: '0', label: 'Repairs required' },
    { value: '0', label: 'Showings' },
    { value: '1', label: 'Simple cash offer' },
  ],
  intro: {
    badge: 'Who we are',
    heading: 'A *simpler way* to sell your *house*',
    // TODO: confirm final "our story" copy with QCPS
    tabs: [
      {
        label: 'Our Mission',
        text: 'QCPS was started to give homeowners a simpler alternative to the traditional listing process — one fair cash offer, no repairs, no commissions, and a closing date that works for you.',
      },
      { label: 'Our Approach', text: 'Straightforward cash offers with no repairs or fees. We buy the house as it stands and handle the paperwork.' },
      { label: 'Our Values', text: 'Honest communication and a transparent process, start to finish. No pressure and no surprises.' },
    ],
    checklist: [
      'One fair, no-obligation cash offer',
      'No repairs, cleaning or staging',
      'No agent commissions',
      'A closing date you choose',
    ],
  },
  principles: {
    badge: 'Why Choose Us',
    heading: 'The *principles* that shape *our work*',
    items: [
      {
        title: 'Local & experienced',
        // TODO: confirm specifics (years in business, markets served) with QCPS
        description: 'We know the local market and have helped sellers in a wide range of situations.',
      },
      { title: 'Transparent process', description: 'We walk you through every step so there are never any surprises.' },
      { title: 'No pressure, ever', description: 'Our offers are free and come with zero obligation to accept.' },
    ],
  },
  process: {
    badge: 'Our Process',
    heading: '*Simple* steps to a *fast sale*',
    intro: 'Selling your house shouldn’t take months. Here’s how we keep it quick and stress-free.',
    steps: [
      { title: 'Reach out', description: 'Tell us about your property and situation — it only takes a few minutes.' },
      { title: 'Get an offer', description: 'We evaluate your home and present a fair, no-obligation cash offer.' },
      { title: 'Close on your terms', description: 'Pick your closing date and get paid — no repairs, no fees, no waiting around.' },
    ],
    cta: navCta,
  },
  team: {
    badge: 'Our Team',
    heading: 'Meet the *local team* behind *your offer*',
    // TODO: replace with real QCPS team members, roles and photos before launch
    members: [
      { name: 'Team Member', role: 'Founder' },
      { name: 'Team Member', role: 'Acquisitions' },
      { name: 'Team Member', role: 'Seller Support' },
    ],
  },
}

export const faqPage = {
  help: {
    badge: 'Still have questions?',
    heading: 'Talk to a *real person*',
    text: 'Every home and every seller is different. If your question isn’t answered here, call or email us and we’ll give you a straight answer.',
    cta: navCta,
  },
}

export const offerPage = {
  formTitle: 'Tell us about your property',
  fields: {
    name: { label: 'Name', placeholder: 'Jane Smith' },
    phone: { label: 'Phone Number', placeholder: '(555) 123-4567' },
    email: { label: 'Email', placeholder: 'jane@example.com' },
    address: { label: 'Property Address', placeholder: '123 Main St, City, ST' },
  },
  errors: {
    name: 'Name is required.',
    phone: 'Enter a valid phone number.',
    email: 'Enter a valid email.',
    address: 'Property address is required.',
    consent: 'Consent is required to contact you about your offer.',
  },
  // TODO: have legal counsel review this consent language before launch (TCPA)
  consentLabel:
    'I agree to receive calls and texts from QCPS about my property, including by autodialer and prerecorded message. Consent is not a condition of any purchase. Message/data rates may apply. See our',
  consentLink: { label: 'Privacy Policy & Terms', href: '/privacy-terms' },
  submit: 'Get My Cash Offer',
  successTitle: 'Thank you!',
  successMessage: 'Thanks — we’ve got your details and will be in touch shortly with your cash offer.',
  contactTitle: 'Prefer to talk?',
  contactLabels: { phone: 'Call us', email: 'Email us', address: 'Visit us' },
}

export const privacyPolicy = {
  // TODO: have legal counsel review/finalize this page before launch — required to justify SMS/call outreach (TCPA)
  sections: [
    {
      heading: 'Introduction',
      body: 'This Privacy Policy & Terms page explains how QCPS collects, uses, and protects your information, and the terms under which we may contact you by phone or text.',
    },
    {
      heading: 'Information We Collect',
      body: 'We collect information you provide directly, such as your name, phone number, email, and property address when you submit the "Get My Offer" form.',
    },
    {
      heading: 'Consent to Be Contacted',
      body: '',
      list: [
        'By submitting the form and checking the consent box, you agree that QCPS and its representatives may call or text you about your property, including using an autodialer or prerecorded messages.',
        'Consent is not required as a condition of any purchase.',
        'Message and data rates may apply.',
        'Reply STOP to opt out of text messages at any time, or contact us directly to be removed from our call list.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      body: '',
      list: [
        'To evaluate your property and prepare a cash offer.',
        'To communicate with you about your submission and the offer process.',
        'To comply with applicable legal requirements.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      body: 'We may update this Privacy Policy & Terms page from time to time. Changes will be posted on this page.',
    },
  ],
}
