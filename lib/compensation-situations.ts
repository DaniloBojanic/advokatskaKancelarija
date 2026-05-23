export type LocalizedText = {
  sr: string
  en: string
}

export type CompensationSubtopic = {
  key: string
  title: LocalizedText
  description: LocalizedText
  href: string
  cta?: LocalizedText
}

export const compensationSubtopics: CompensationSubtopic[] = [
  {
    key: 'vehicle-damage',
    title: {
      sr: 'Šteta na vozilu',
      en: 'Vehicle damage',
    },
    description: {
      sr: 'Naknada materijalne štete na vozilu nakon saobraćajne nezgode i postupak prema osiguranju.',
      en: 'Compensation for property damage to a vehicle after a traffic accident and the insurance claim procedure.',
    },
    href: '/oblast-rada/naknada-stete#steta-na-vozilu',
  },
  {
    key: 'low-payout',
    title: {
      sr: 'Premala isplata štete na vozilu',
      en: 'Underpaid vehicle damage claim',
    },
    description: {
      sr: 'Ako isplaćeni iznos ne pokriva stvarnu cenu popravke, može se proveriti da li postoji osnov za doplatu ili potraživanje razlike.',
      en: 'If the paid amount does not cover the actual repair cost, it may be possible to review whether there is a basis for an additional claim.',
    },
    href: '/premala-isplata-stete-na-vozilu',
    cta: {
      sr: 'Proverite mogućnost doplate',
      en: 'Check whether an additional claim is possible',
    },
  },
  {
    key: 'traffic-injuries',
    title: {
      sr: 'Povrede u saobraćaju',
      en: 'Traffic injuries',
    },
    description: {
      sr: 'Naknada zbog fizičkih bolova, straha, umanjenja životne aktivnosti i drugih posledica povreda.',
      en: 'Compensation for physical pain, fear, reduced life activity and other consequences of injuries.',
    },
    href: '/oblast-rada/naknada-stete#povrede-u-saobracaju',
  },
  {
    key: 'death-of-close-person',
    title: {
      sr: 'Smrt bliskog lica',
      en: 'Death of a close family member',
    },
    description: {
      sr: 'Pravo na naknadu nematerijalne štete zbog smrti bliskog lica u najtežim posledicama nezgode.',
      en: 'The right to non-material damages due to the death of a close family member in the most serious accident outcomes.',
    },
    href: '/oblast-rada/naknada-stete#smrt-bliskog-lica',
  },
  {
    key: 'dog-bite',
    title: {
      sr: 'Ujed psa',
      en: 'Dog bite',
    },
    description: {
      sr: 'Pravna procena odgovornosti i mogućnosti ostvarivanja naknade zbog ujeda psa i posledica po zdravlje.',
      en: 'Legal assessment of liability and the possibility of compensation for a dog bite and its health consequences.',
    },
    href: '/oblast-rada/naknada-stete#ujed-psa',
  },
  {
    key: 'public-surface-fall',
    title: {
      sr: 'Pad na javnoj površini',
      en: 'Fall on a public surface',
    },
    description: {
      sr: 'Naknada štete zbog pada na trotoaru, stepeništu ili drugoj javnoj površini usled nebezbednih uslova.',
      en: 'Compensation for a fall on a sidewalk, staircase or other public surface due to unsafe conditions.',
    },
    href: '/oblast-rada/naknada-stete#pad-na-javnoj-povrsini',
  },
]

export const concreteSituationCards = compensationSubtopics.filter((topic) =>
  ['low-payout', 'traffic-injuries', 'dog-bite', 'public-surface-fall'].includes(topic.key),
)
