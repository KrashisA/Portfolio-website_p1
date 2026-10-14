import type { TrackItem, CatalogRelease, PricingTier, FaqItem } from '../types';

export const TRACKS: TrackItem[] = [
  {
    id: '01',
    title: 'Yeke Yeke (David Deneyer Club Mix)',
    artist: 'Mory Kanté feat. David Deneyer',
    label: 'Mostiko Records',
    bpm: '128 BPM',
    key: 'F MIN',
    lufs: '-8.2 LUFS',
  },
  {
    id: '02',
    title: 'Never Let The Party Stop (Original Mix)',
    artist: 'David Deneyer',
    label: 'Mostiko Records • 2005',
    bpm: '130 BPM',
    key: 'G MIN',
    lufs: '-7.9 LUFS',
  },
  {
    id: '03',
    title: 'Yeah (Studio Elektrokid Dub)',
    artist: 'Elektrokid',
    label: 'Studio Elektrokid',
    bpm: '126 BPM',
    key: 'D MIN',
    lufs: '-8.5 LUFS',
  },
  {
    id: '04',
    title: 'The Teacher (Analog Master Cut)',
    artist: 'David Deneyer',
    label: 'Elektrokid Recordings',
    bpm: '127 BPM',
    key: 'A MIN',
    lufs: '-8.0 LUFS',
  },
];

export const CATALOG_RELEASES: CatalogRelease[] = [
  {
    catNo: 'ELK-014',
    title: 'Subterranean Frequencies EP',
    format: '180g Heavyweight Vinyl • Mastered at Studio Elektrokid',
    status: 'OUT NOW',
  },
  {
    catNo: 'ELK-012',
    title: 'Nightfall Monolith',
    format: '24-bit 96kHz Lossless Master • Club Extended',
    status: 'BEATPORT / BANDCAMP',
  },
  {
    catNo: 'ELK-009',
    title: 'Resonance Chamber Vol. 2',
    format: 'Limited Clear Wax • 300 Hand-numbered units',
    status: 'SOLD OUT',
  },
  {
    catNo: 'ELK-005',
    title: 'The Teacher / Yeah',
    format: 'Original Pressing • Analog Master Cut',
    status: 'ARCHIVE',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'stereo',
    category: '01 // STEREO MASTER',
    price: '€75',
    unit: '/ track',
    description: 'Precision analog chain & limiter polish tailored for streaming, club PA, and Apple Digital Masters.',
    features: [
      '24-bit 48kHz WAV master',
      '16-bit 44.1kHz CD master',
      '3 revision rounds included',
      '48h delivery turnaround',
    ],
    cta: 'Book Stereo',
  },
  {
    id: 'stem',
    category: '02 // STEM MASTER',
    price: '€140',
    unit: '/ track',
    description: 'Up to 8 sub-mix stems (Kick, Bass, Drums, Vocals, Synths, FX). Surgical phase alignment & multiband dynamics.',
    popular: true,
    features: [
      'Up to 8 stems processed',
      'Deep sub/bass mono alignment',
      'Instrumental & club edits',
      '3-4 days turnaround',
    ],
    cta: 'Book Stems',
  },
  {
    id: 'mix',
    category: '03 // FULL MIX & MASTER',
    price: '€320',
    unit: '/ track',
    description: 'Up to 48 multitrack audio channels summed through the SSL analog desk and outboard hardware compressors.',
    features: [
      'Full multitrack stem mix',
      'Analog desk summing',
      'Vocal tuning & pitch edits',
      'Radio, Club & Acapella',
    ],
    cta: 'Book Mix',
  },
  {
    id: 'album',
    category: '04 // ALBUM / EP SUITE',
    price: 'QUOTE',
    unit: '/ project',
    description: 'Volume package for 4+ track EPs or full albums. DDP image file creation for vinyl cutting and Red Book CD pressing.',
    features: [
      'Volume discount tiers',
      'Album continuity mastering',
      'DDP image & ISRC encoding',
      'Vinyl pre-master specs',
    ],
    cta: 'Inquire Rates',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '01 // How should I prep my pre-master files?',
    answer:
      'Send 24-bit WAV or AIFF files rendered at your native session sample rate (44.1kHz, 48kHz, or 96kHz). Ensure true peak levels peak between -3dBFS and -6dBFS. Please disable all limiters, clippers, or multi-band maximizers on the master stereo bus.',
  },
  {
    question: '02 // What is the typical turnaround time?',
    answer:
      'Stereo masters are delivered within 48 to 72 hours. Stem mastering and multitrack mixing are delivered within 4 to 6 business days. Express 24-hour turnaround is available for urgent release deadlines.',
  },
  {
    question: '03 // How do revisions work?',
    answer:
      'Every booking includes up to 3 rounds of minor revisions at no additional cost. Clear, timestamped feedback ensures fast turnarounds, usually updated within 24 hours.',
  },
  {
    question: '04 // Can you optimize masters specifically for vinyl pressings?',
    answer:
      'Yes. We produce dedicated vinyl pre-masters with controlled high-frequency sibilance (de-essing), elliptical mono-bass filtering below 100Hz, and preserved micro-dynamics to prevent lathe cutter head distortion.',
  },
];
