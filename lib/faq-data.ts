export type FaqItem = {
  question: { sr: string; en: string }
  answer: { sr: string; en: string }
}

export type FaqCategoryId =
  | "general"
  | "traffic"
  | "civil"
  | "family"
  | "labor"
  | "real-estate"
  | "debt-collection"

export type FaqCategory = {
  id: FaqCategoryId
  title: { sr: string; en: string }
  description: { sr: string; en: string }
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    title: { sr: "Opšta pitanja", en: "General Questions" },
    description: {
      sr: "Odgovori na najčešća pitanja o prvom kontaktu sa advokatom, toku saradnje i osnovnim očekivanjima klijenta.",
      en: "Answers to the most common questions about the first contact with an attorney, the course of cooperation, and what clients can expect.",
    },
    items: [
      {
        question: {
          sr: "Da li ima smisla da se javim advokatu i kada još nisam siguran da li imam problem?",
          en: "Does it make sense to contact an attorney even if I am not yet sure I have a legal problem?",
        },
        answer: {
          sr: "U većini slučajeva ljudi se advokatu jave tek kada problem već eskalira. Međutim, pravni savet na vreme često spreči mnogo veće komplikacije. Ako imate dilemu da li je nešto sporno, najbolje je da to proverite na vreme.",
          en: "In most cases, people contact an attorney only after the issue has already escalated. Timely legal advice often prevents much bigger complications. If you are unsure whether something is legally problematic, it is best to check early.",
        },
      },
      {
        question: {
          sr: "Šta advokat realno može da uradi za mene u prvoj fazi?",
          en: "What can an attorney realistically do for me in the initial phase?",
        },
        answer: {
          sr: "U prvoj fazi advokat analizira situaciju, pregleda dokumenta i objašnjava vam pravne mogućnosti. Često se već tada vidi da li je spor moguće rešiti pregovorima ili je potrebno pokrenuti postupak.",
          en: "At the beginning, an attorney reviews the situation, examines your documents, and explains the available legal options. It is often already possible to determine whether the matter can be resolved through negotiation or whether formal proceedings are needed.",
        },
      },
      {
        question: {
          sr: "Da li advokat može unapred da kaže da li ću dobiti spor?",
          en: "Can an attorney tell me in advance whether I will win the case?",
        },
        answer: {
          sr: "Iskusan advokat može proceniti pravnu osnovanost zahteva i potencijalne rizike. Međutim, nijedan advokat ne može garantovati ishod postupka, jer odluku donosi sud.",
          en: "An experienced attorney can assess the legal merits of a claim and the related risks. However, no attorney can guarantee the outcome of proceedings, because the final decision is made by the court.",
        },
      },
      {
        question: {
          sr: "Da li je kasno da angažujem advokata kada je postupak već počeo?",
          en: "Is it too late to hire an attorney once proceedings have already started?",
        },
        answer: {
          sr: "Nije. Advokat može preuzeti zastupanje u bilo kojoj fazi postupka, analizirati dosadašnji tok i predložiti dalju strategiju.",
          en: "No. An attorney can take over representation at any stage of the proceedings, analyze what has already happened, and propose the next legal strategy.",
        },
      },
      {
        question: {
          sr: "Šta treba da pripremim pre nego što dođem kod advokata?",
          en: "What should I prepare before meeting with an attorney?",
        },
        answer: {
          sr: "Najvažnije je da ponesete svu dokumentaciju koju imate: ugovore, dopise, sudska rešenja, zapisnike ili poruke koje su povezane sa problemom.",
          en: "The most important thing is to bring all documentation you have: contracts, letters, court decisions, records, or messages related to the issue.",
        },
      },
      {
        question: {
          sr: "Da li sve što kažem advokatu ostaje poverljivo?",
          en: "Is everything I tell an attorney confidential?",
        },
        answer: {
          sr: "Da. Advokat je po zakonu obavezan na čuvanje advokatske tajne. Sve informacije koje klijent iznese u vezi sa svojim slučajem ostaju strogo poverljive.",
          en: "Yes. By law, an attorney is obligated to preserve professional secrecy. All information a client shares about a case remains strictly confidential.",
        },
      },
      {
        question: {
          sr: "Da li advokat može da pregovara umesto mene?",
          en: "Can an attorney negotiate on my behalf?",
        },
        answer: {
          sr: "Da. U mnogim situacijama advokat preuzima komunikaciju sa drugom stranom upravo da bi se spor rešio bez nepotrebne eskalacije.",
          en: "Yes. In many situations, an attorney handles communication with the other side precisely to resolve the matter without unnecessary escalation.",
        },
      },
      {
        question: {
          sr: "Koliko obično traje rešavanje pravnog problema?",
          en: "How long does resolving a legal issue usually take?",
        },
        answer: {
          sr: "To zavisi od vrste postupka i složenosti slučaja. Neki sporovi mogu biti rešeni za nekoliko meseci, dok drugi mogu trajati duže.",
          en: "That depends on the type of proceedings and the complexity of the case. Some disputes may be resolved in a few months, while others may take longer.",
        },
      },
    ],
  },
  {
    id: "traffic",
    title: { sr: "Saobraćajni prekršaji", en: "Traffic Misdemeanors" },
    description: {
      sr: "Praktična pitanja o saobraćajnim kaznama, pozivima iz prekršajnog suda, kaznenim poenima i mogućnostima odbrane.",
      en: "Practical questions about traffic fines, summons from the misdemeanor court, penalty points, and defense options.",
    },
    items: [
      {
        question: { sr: "Da li ima smisla angažovati advokata zbog saobraćajne kazne?", en: "Is it worth hiring an attorney because of a traffic fine?" },
        answer: { sr: "U mnogim slučajevima ima. Često je moguće smanjiti kaznu, izbeći zabranu upravljanja vozilom ili u potpunosti izbeći kaznu.", en: "In many cases, yes. It is often possible to reduce the penalty, avoid a driving ban, or even avoid the penalty entirely." },
      },
      {
        question: { sr: "Dobio sam poziv iz prekršajnog suda – šta to zapravo znači?", en: "I received a summons from the misdemeanor court. What does that actually mean?" },
        answer: { sr: "Poziv znači da je pokrenut prekršajni postupak i da sud želi da se izjasnite o prekršaju koji vam se stavlja na teret. Važno je reagovati na vreme.", en: "The summons means that misdemeanor proceedings have been initiated and that the court wants you to state your position regarding the offense you are charged with. It is important to respond in time." },
      },
      {
        question: { sr: "Da li je moguće osporiti kaznu koju je izdala kamera?", en: "Is it possible to challenge a fine issued based on a camera recording?" },
        answer: { sr: "U određenim situacijama jeste, naročito ako postoje proceduralne nepravilnosti ili nedovoljno dokaza.", en: "In certain situations, yes, especially if there are procedural irregularities or insufficient evidence." },
      },
      {
        question: { sr: "Šta se dešava ako ne odem na sud po pozivu?", en: "What happens if I do not appear in court after receiving a summons?" },
        answer: { sr: "Sud može doneti odluku i bez vašeg prisustva ili odrediti da budete prinudno dovedeni.", en: "The court may issue a decision without your presence or order that you be brought in by force." },
      },
      {
        question: { sr: "Da li je moguće izbeći da vam sud izrekne meru zabrane vožnje?", en: "Is it possible to avoid the court imposing a driving ban?" },
        answer: { sr: "U pojedinim slučajevima moguće je kroz sporazum o priznanju prekršaja ili kroz ukazivanje na relevantne činjenice i okolnosti od strane advokata sudu.", en: "In some cases it is possible through a plea agreement in misdemeanor proceedings or by presenting relevant facts and circumstances to the court through legal counsel." },
      },
      {
        question: { sr: "Šta je sporazum o priznanju prekršaja?", en: "What is a misdemeanor plea agreement?" },
        answer: { sr: "To je dogovor sa podnosiocem zahteva za pokretanje prekršajnog postupka, najčešće policijom, kojim se priznaje prekršaj u zamenu za blažu kaznu.", en: "It is an agreement with the authority that initiated the misdemeanor proceedings, most often the police, by which the offense is admitted in exchange for a lighter sanction." },
      },
      {
        question: { sr: "Koliko kaznenih poena može da dovede do oduzimanja vozačke dozvole?", en: "How many penalty points can lead to the suspension of a driving licence?" },
        answer: { sr: "Ako vozač sakupi određeni broj kaznenih poena u predviđenom periodu, može doći do privremenog oduzimanja dozvole.", en: "If a driver accumulates a certain number of penalty points within the prescribed period, the driving licence may be temporarily suspended." },
      },
      {
        question: { sr: "Da li kazna može zastareti?", en: "Can a misdemeanor fine become time-barred?" },
        answer: { sr: "Da. Prekršaji podležu zastarelosti, ali je važno znati tačne rokove i okolnosti koje ih prekidaju.", en: "Yes. Misdemeanors are subject to limitation periods, but it is important to know the exact deadlines and the circumstances that interrupt them." },
      },
    ],
  },
  {
    id: "civil",
    title: { sr: "Građanski sporovi", en: "Civil Disputes" },
    description: {
      sr: "Pitanja o parničnom postupku, sudskim sporovima, naplati duga i prinudnom izvršenju.",
      en: "Questions about civil litigation, court disputes, debt collection, and enforcement.",
    },
    items: [
      { question: { sr: "Kada spor mora da ide na sud, a kada može da se reši dogovorom?", en: "When must a dispute go to court and when can it be resolved by agreement?" }, answer: { sr: "Mnogi sporovi se mogu rešiti pregovorima ili poravnanjem. Sud je obično poslednja opcija kada dogovor nije moguć.", en: "Many disputes can be resolved through negotiation or settlement. Court is usually the last option when an agreement is not possible." } },
      { question: { sr: "Šta znači kada neko kaže da će me tužiti?", en: "What does it mean when someone says they will sue me?" }, answer: { sr: "To znači da druga strana planira da pokrene sudski postupak radi prinudnog ostvarivanja svog zahteva.", en: "It means that the other party plans to initiate court proceedings in order to enforce its claim." } },
      { question: { sr: "Koliko traje jedna parnica u praksi?", en: "How long does a civil lawsuit usually take in practice?" }, answer: { sr: "Trajanje postupka zavisi od složenosti spora, broja dokaza i dinamike suda.", en: "The duration depends on the complexity of the dispute, the amount of evidence, and the court’s schedule." } },
      { question: { sr: "Da li mogu da naplatim dug ako dužnik odbija da plati?", en: "Can I collect a debt if the debtor refuses to pay?" }, answer: { sr: "Da. Ako je vaše potraživanje osnovano, moguće je pokrenuti postupak i nakon presude sprovesti prinudnu naplatu.", en: "Yes. If your claim is well-founded, legal proceedings may be initiated and, after judgment, enforcement can be carried out." } },
      { question: { sr: "Šta ako druga strana ignoriše sudsku presudu?", en: "What if the other side ignores a court judgment?" }, answer: { sr: "U tom slučaju pokreće se izvršni postupak kojim se dug prinudno naplaćuje. Javni izvršitelj sprovodi naplatu na imovini dužnika, poput zarade, računa u banci ili nepokretnosti.", en: "In that case, enforcement proceedings are initiated in order to collect the debt compulsorily. A public enforcement officer may collect from the debtor’s assets, such as salary, bank accounts, or real estate." } },
      { question: { sr: "Da li se sudski spor uvek mora završiti presudom?", en: "Does a court dispute always have to end with a judgment?" }, answer: { sr: "Ne. Spor može biti završen i sudskim poravnanjem.", en: "No. A dispute may also be resolved through a court settlement." } },
      { question: { sr: "Ko snosi troškove postupka?", en: "Who bears the costs of the proceedings?" }, answer: { sr: "Po pravilu ih snosi strana koja izgubi spor.", en: "As a rule, they are borne by the party who loses the dispute." } },
      { question: { sr: "Da li advokat može pomoći da se spor izbegne?", en: "Can an attorney help avoid a dispute entirely?" }, answer: { sr: "Da. Pravovremeni pravni savet često spreči nepotrebne sudske sporove, ali ukoliko dođe do spora advokat je neophodan kako bi zaštitili vaša prava.", en: "Yes. Timely legal advice often prevents unnecessary court disputes, but if a dispute does arise, an attorney is essential for protecting your rights." } },
    ],
  },
  {
    id: "family",
    title: { sr: "Porodično pravo", en: "Family Law" },
    description: {
      sr: "Osnovna pitanja o razvodu, starateljstvu, alimentaciji i podeli imovine.",
      en: "Essential questions about divorce, custody, child support, and division of property.",
    },
    items: [
      { question: { sr: "Kako izgleda postupak razvoda braka?", en: "What does divorce proceedings look like?" }, answer: { sr: "Razvod može biti sporazumni ili sporni. U sporazumnom razvodu supružnici se dogovaraju o ključnim pitanjima, dok sud kod spornog razvoda odlučuje o njima.", en: "A divorce may be consensual or contested. In a consensual divorce, the spouses agree on key issues, while in a contested divorce the court decides them." } },
      { question: { sr: "Šta sud gleda kada odlučuje kome će pripasti dete?", en: "What does the court consider when deciding who the child will live with?" }, answer: { sr: "Osnovni kriterijum je najbolji interes deteta.", en: "The primary criterion is the best interest of the child." } },
      { question: { sr: "Kako se određuje visina alimentacije?", en: "How is the amount of child support determined?" }, answer: { sr: "Sud uzima u obzir potrebe deteta i finansijske mogućnosti roditelja.", en: "The court takes into account the child’s needs and the financial abilities of the parents." } },
      { question: { sr: "Da li roditelj može izgubiti starateljstvo?", en: "Can a parent lose custody?" }, answer: { sr: "U određenim situacijama, kada to nalaže interes deteta, sud može doneti takvu odluku.", en: "In certain situations, when required by the child’s best interest, the court may issue such a decision." } },
      { question: { sr: "Šta ako drugi roditelj ne plaća alimentaciju?", en: "What if the other parent does not pay child support?" }, answer: { sr: "Moguće je pokrenuti izvršni postupak za prinudnu naplatu.", en: "It is possible to initiate enforcement proceedings for compulsory collection." } },
      { question: { sr: "Da li je moguće sporazumno podeliti imovinu posle razvoda?", en: "Is it possible to divide property by agreement after divorce?" }, answer: { sr: "Da, i to je često brže i jednostavnije rešenje.", en: "Yes, and that is often a faster and simpler solution." } },
      { question: { sr: "Koliko traje spor oko starateljstva?", en: "How long does a custody dispute usually take?" }, answer: { sr: "To zavisi od složenosti slučaja i broja dokaza.", en: "That depends on the complexity of the case and the amount of evidence." } },
    ],
  },
  {
    id: "labor",
    title: { sr: "Radno pravo", en: "Labor Law" },
    description: {
      sr: "Najčešća pitanja zaposlenih i poslodavaca o otkazu, zaradi, otpremnini i zaštiti prava iz radnog odnosa.",
      en: "Common questions from employees and employers about dismissal, salary, severance, and protection of employment rights.",
    },
    items: [
      { question: { sr: "Da li je svaki otkaz zakonit?", en: "Is every termination of employment lawful?" }, answer: { sr: "Ne. Poslodavac mora imati zakonski osnov i poštovati proceduru.", en: "No. The employer must have a legal basis and follow the required procedure." } },
      { question: { sr: "Koliko imam vremena da reagujem ako dobijem otkaz?", en: "How much time do I have to react if I receive a dismissal?" }, answer: { sr: "Rokovi su relativno kratki, pa je važno reagovati odmah.", en: "Deadlines are relatively short, so it is important to react immediately." } },
      { question: { sr: "Šta ako poslodavac ne isplati zaradu?", en: "What if the employer does not pay salary?" }, answer: { sr: "Radnik ima pravo da potražuje zaradu sudskim putem.", en: "The employee has the right to claim salary through court proceedings." } },
      { question: { sr: "Da li imam pravo na otpremninu?", en: "Am I entitled to severance pay?" }, answer: { sr: "U određenim situacijama, da.", en: "In certain situations, yes." } },
      { question: { sr: "Da li mogu da se vratim na posao nakon nezakonitog otkaza?", en: "Can I return to work after an unlawful dismissal?" }, answer: { sr: "Sud može doneti odluku o vraćanju zaposlenog na posao.", en: "The court may order that the employee be returned to work." } },
    ],
  },
  {
    id: "real-estate",
    title: { sr: "Nekretnine", en: "Real Estate" },
    description: {
      sr: "Praktična pitanja o kupovini stana, proveri tereta, ugovorima i troškovima prenosa vlasništva.",
      en: "Practical questions about buying an apartment, checking encumbrances, contracts, and transfer costs.",
    },
    items: [
      { question: { sr: "Da li je kupovina stana bez advokata rizična?", en: "Is buying an apartment without an attorney risky?" }, answer: { sr: "Može biti, jer se često propuste pravni detalji koji kasnije stvaraju probleme.", en: "It can be, because important legal details are often overlooked and can later create serious problems." } },
      { question: { sr: "Kako proveriti da li stan ima terete?", en: "How do I check whether an apartment has encumbrances?" }, answer: { sr: "Proverom podataka u katastru nepokretnosti.", en: "By reviewing the records in the real estate cadastre." } },
      { question: { sr: "Da li advokat može sastaviti kupoprodajni ugovor?", en: "Can an attorney draft a sale and purchase agreement?" }, answer: { sr: "Da, i to je često najbezbedniji način da se zaštite interesi obe strane.", en: "Yes, and this is often the safest way to protect the interests of both parties." } },
      { question: { sr: "Da li je moguće kupiti stan koji je pod hipotekom?", en: "Is it possible to buy an apartment that is under mortgage?" }, answer: { sr: "Moguće je, ali uz posebne pravne korake.", en: "It is possible, but it requires special legal steps." } },
      { question: { sr: "Ko snosi troškove prenosa vlasništva?", en: "Who bears the costs of the transfer of ownership?" }, answer: { sr: "To zavisi od dogovora između kupca i prodavca.", en: "That depends on the agreement between the buyer and the seller." } },
    ],
  },
  {
    id: "debt-collection",
    title: { sr: "Naplata dugova", en: "Debt Collection" },
    description: {
      sr: "Osnovna pitanja o naplati potraživanja, izvršnom postupku i mogućnostima naplate kada dužnik izbegava isplatu.",
      en: "Key questions about debt collection, enforcement proceedings, and collection options when the debtor avoids payment.",
    },
    items: [
      { question: { sr: "Šta uraditi kada neko uporno odbija da vrati dug?", en: "What should I do when someone persistently refuses to repay a debt?" }, answer: { sr: "U tom slučaju se pokreće sudski postupak za naplatu potraživanja.", en: "In that case, court proceedings are initiated to collect the claim." } },
      { question: { sr: "Da li je moguće naplatiti dug bez suda?", en: "Is it possible to collect a debt without going to court?" }, answer: { sr: "U nekim slučajevima jeste, kroz pregovore ili opomene.", en: "In some cases, yes, through negotiation or formal notices." } },
      { question: { sr: "Šta je izvršni postupak?", en: "What are enforcement proceedings?" }, answer: { sr: "To je postupak kojim se dug naplaćuje prinudnim putem.", en: "It is a procedure by which a debt is collected compulsorily." } },
      { question: { sr: "Šta ako dužnik nema novca?", en: "What if the debtor does not have money?" }, answer: { sr: "U tom slučaju poverilac se može naplatiti iz druge imovine, ukoliko dužnik ima drugu imovinu.", en: "In that case, the creditor may collect from other assets, if the debtor has them." } },
      { question: { sr: "Koliko traje naplata duga?", en: "How long does debt collection take?" }, answer: { sr: "Zavisi od konkretne situacije i imovine dužnika.", en: "It depends on the specific situation and the debtor’s assets." } },
    ],
  },
]

export function getFaqCategory(id: FaqCategoryId) {
  return faqCategories.find((category) => category.id === id)
}
