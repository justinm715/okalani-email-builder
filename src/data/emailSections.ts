import type { EmailSection } from '../types';

export const emailSections: EmailSection[] = [
  {
    id: 1,
    title: 'Becoming a Member',
    content:
      "Hello, \n\n This is Justin Martinez. I'm the membership secretary for O Kalani. Here's some information to help you get set up with our club",
    isSelected: false,
    category: 'Introduction',
  },
  {
    id: 2,
    title: 'Waiver Done',
    content:
      '# Waiver\n It looks like you already did the 2025 NCOCA Smartwaiver. No further action needed for this. The waiver is good until next year around February 2026. Please do not do it again for this year.',
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 2,
    title: 'Waiver Not Done',
    content:
      "# Waiver\n It looks like you haven't done the 2025 NCOCA Smartwaiver yet. This is required before getting on the water at O Kalani, whether you are a member or not. Please complete the waiver here: https://www.smartwaiver.com/w/545a755dca9a9/web/ You will receive an email with a confirmation link. Be sure to click that link to complete the waiver.",
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 2,
    title: 'Membership Form',
    content: 'XXX',
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 2,
    title: 'Teamsnap Invite Sent',
    content:
      "# Teamsnap\nI've invited your email address to join our Teamsnap group. Please check for an invite and get yourself set up. We use Teamsnap to send announcements to the club, see who is interested in attending races, schedule official club practices, and keep a member roster. I also recommend getting the mobile app on iOS/Android. ",
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 2,
    title: 'Dues',
    content: 'XXX',
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 2,
    title: 'WhatsApp Men',
    content: 'XXX',
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 2,
    title: 'WhatsApp Women',
    content: 'XXX',
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 2,
    title: 'Newsletter',
    content: 'XXX',
    isSelected: false,
    category: 'Administrative',
  },
  {
    id: 5,
    title: 'Practice Schedule During the Season',
    content: 'XXX',
    isSelected: false,
    category: 'Training',
  },
  {
    id: 5,
    title: 'Practice Schedule During the Off-Season',
    content: 'XXX',
    isSelected: false,
    category: 'Training',
  },
  {
    id: 8,
    title: 'Racing - Interested? Need ID',
    content: 'XXX',
    isSelected: false,
    category: 'Racing',
  },
  {
    id: 11,
    title: 'Questions',
    content:
      'Please let me know if you have any questions.\n\nCheers,\n\nJustin M.',
    isSelected: false,
    category: 'Closing',
  },
];
