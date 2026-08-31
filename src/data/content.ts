import { FaqItem, BenefitItem, ShowcaseProject } from '../types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How fast will I receive my designs?',
    answer: 'On average, most requests are completed in just two business days or less. However, more complex requests can take longer.'
  },
  {
    id: 'faq-2',
    question: 'How does onboarding work?',
    answer: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock.\n\nFurther instructions on how to use the Trello board to request designs can be found on the board itself."
  },
  {
    id: 'faq-3',
    question: 'Who are the designers?',
    answer: "Designjoy is a one-man agency, ran by Brett, the founder. Designjoy does not employ other designers, or outsource work to any other entity. You'll work directly with me through the entirety of your experience."
  },
  {
    id: 'faq-4',
    question: 'Is there a limit to how many requests I can make?',
    answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
  },
  {
    id: 'faq-5',
    question: 'How does the pause feature work?',
    answer: "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.\n\nBilling cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future."
  },
  {
    id: 'faq-6',
    question: 'How do you handle larger requests?',
    answer: "Larger requests are broken down on Designjoy's end. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done."
  },
  {
    id: 'faq-7',
    question: 'What programs do you design in?',
    answer: 'Most requests are designed using Figma.'
  },
  {
    id: 'faq-8',
    question: 'How does Webflow development work?',
    answer: 'Webflow development is included with all subscriptions and is simply treated as a design request. As long as your website can be supported by the Webflow platform, Designjoy will take care of the development to ensure maximum fidelity when it comes to the final product.\n\nOnce the website is fully developed, the site will be transferred to your account, where you will own it from that point forward. Therefore, a Designjoy subscription is not necessary to maintain your website.'
  },
  {
    id: 'faq-9',
    question: 'How will I request designs?',
    answer: "Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game."
  },
  {
    id: 'faq-10',
    question: 'What if I don’t like the design?',
    answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
  },
  {
    id: 'faq-11',
    question: 'Are there any requests you don’t support?',
    answer: 'Absolutely. Designjoy does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), video, document design (medical forms, etc.), complex packaging, extensive print design (magazines, books, etc.), and Adobe InDesign documents.'
  },
  {
    id: 'faq-12',
    question: 'What if I only have a single request?',
    answer: "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
  },
  {
    id: 'faq-13',
    question: 'Are there any refunds?',
    answer: 'Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work.'
  },
  {
    id: 'faq-14',
    question: 'Can I use Designjoy for just a month?',
    answer: 'For sure. Whether you need Designjoy for a month or a year, the choice is yours. Just feel free to come back when you have additional design needs.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Nectar Sleep', url: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1986_Nectar-sleep-logo-vector%201.svg' },
  { name: 'Buy Me a Coffee', url: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1987_bmc-full-logo%201.svg' },
  { name: 'beehiiv', url: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec198a_svg.svg' },
  { name: 'Laravel', url: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1989_Vector.svg' },
  { name: 'Xfinity', url: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1988_6203180d8e14605fb2d2c003_Vector%201.svg' }
];

export const SERVICE_TAGS_ROW_1 = [
  'Mobile apps',
  'Presentations',
  'Logos',
  'Social Media',
  'Email',
  'Design systems',
  'Wireframes'
];

export const SERVICE_TAGS_ROW_2 = [
  'Webflow',
  'Print design',
  'Packaging',
  'Ad creative',
  'Landing pages',
  'SaaS interfaces',
  'Pitch decks'
];

export const SERVICE_TAGS_ROW_3 = [
  'Branding',
  'Email templates',
  'Display ads',
  'Design tokens',
  'User interface',
  'Icons',
  'Brand guides'
];

export const ALL_SERVICES_MATRIX = [
  'Web design',
  'Logos',
  'Slide decks',
  'Branding',
  'Social media',
  'UI/UX design',
  'Webflow development',
  'Mobile apps',
  'Print design',
  'Email',
  'Display ads',
  'Icons',
  'Brand guides',
  '+ more'
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png',
    title: 'Design board',
    description: 'Easily manage your design queue with a Trello board.'
  },
  {
    id: 'benefit-2',
    icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png',
    title: 'Fixed monthly rate',
    description: 'No surprises here! Pay the same fixed price each month.'
  },
  {
    id: 'benefit-3',
    icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png',
    title: 'Fast delivery',
    description: 'Get your design one at a time in just a couple days on average.'
  },
  {
    id: 'benefit-4',
    icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199d_Star--Streamline-Nova.png',
    title: 'Top-notch quality',
    description: 'Senior design quality at your fingertips, whenever you need it.'
  },
  {
    id: 'benefit-5',
    icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png',
    title: 'Flexible and scalable',
    description: 'Scale up or down as needed, and pause or cancel at anytime.'
  },
  {
    id: 'benefit-6',
    icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png',
    title: 'Unique and all yours',
    description: 'Every design is made especially for you and is 100% yours.'
  }
];

export const SHOWCASE_IMAGES = [
  'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19ea_Group%201171274558.png',
  'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19ee_Group%201171274560.png',
  'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19de_Group%201171274563.png',
  'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19e6_Group%201171274559.png',
  'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19e2_Group%201171274561.png',
  'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19da_Group%201171274562.png'
];

export const DETAILED_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-1',
    title: 'Buy Me A Coffee',
    category: 'Product & Web Design',
    awards: 'Fintech Product of the Year',
    client: 'Buy Me A Coffee',
    description: 'Complete product overhaul and interactive brand identity that helped scale BMAC to millions of creators globally.',
    image: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19ea_Group%201171274558.png'
  },
  {
    id: 'proj-2',
    title: 'Switchboard',
    category: 'Remote Work OS',
    awards: 'Remote Work Product of the Year',
    client: 'Switchboard Cloud',
    description: 'Next-generation multiplayer workspace interface with seamless browser canvas integration.',
    image: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19ee_Group%201171274560.png'
  },
  {
    id: 'proj-3',
    title: 'Nectar Sleep Redesign',
    category: 'E-commerce & Webflow',
    client: 'Nectar',
    description: 'High-converting direct-to-consumer digital storefront and custom Webflow design system.',
    image: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19de_Group%201171274563.png'
  },
  {
    id: 'proj-4',
    title: 'Beehiiv Growth Engine',
    category: 'SaaS Platform & Landing Pages',
    client: 'beehiiv',
    description: 'Newsletter creator platform onboarding, analytics visualization, and marketing website.',
    image: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19e6_Group%201171274559.png'
  },
  {
    id: 'proj-5',
    title: 'Modern Mobile Experience',
    category: 'iOS & Android App Design',
    client: 'FinTech Studio',
    description: 'Intuitive touch ergonomics, dark mode palettes, and frictionless micro-interactions.',
    image: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19e2_Group%201171274561.png'
  },
  {
    id: 'proj-6',
    title: 'Brand Systems & Tokens',
    category: 'Design Systems',
    client: 'Enterprise Suite',
    description: 'Comprehensive multi-brand Figma UI library with 400+ cohesive components.',
    image: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19da_Group%201171274562.png'
  }
];
