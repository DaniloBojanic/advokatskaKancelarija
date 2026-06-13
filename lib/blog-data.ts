export interface BlogPost {
  id: string
  slug: string
  date: string
  category: { sr: string; en: string }
  title: { sr: string; en: string }
  excerpt: { sr: string; en: string }
  content: { sr: string; en: string }
}

export const blogPosts: BlogPost[] = [
  {
    id: "real-estate-purchase-serbia-guide",
    slug: "kupovina-nepokretnosti-u-srbiji",
    date: "2026-06-13",
    category: {
      sr: "Pravni saveti",
      en: "Legal Advice",
    },
    title: {
      sr: "Kupovina nepokretnosti u Srbiji: šta treba da znate pre potpisivanja ugovora",
      en: "Buying Real Estate in Serbia: What You Should Know Before Signing the Contract",
    },
    excerpt: {
      sr: "Kupovina nepokretnosti u Srbiji podrazumeva proveru vlasništva, tereta, bračnog statusa prodavca, poreskih obaveza i troškova pre potpisivanja predugovora ili ugovora.",
      en: "Buying real estate in Serbia requires checking ownership, encumbrances, the seller's marital status, tax treatment, and transaction costs before signing a preliminary agreement or sale contract.",
    },
    content: {
      sr: `Kupovina nepokretnosti u Srbiji je jedna od najvažnijih finansijskih odluka za fizička lica. Bilo da kupujete stan, kuću, garažu, plac ili poslovni prostor, pre potpisivanja ugovora važno je proveriti pravni status nepokretnosti, vlasništvo, terete, poreske obaveze i sve troškove koji prate kupovinu.

U nastavku donosimo kratak vodič za kupce nepokretnosti u Srbiji.

## Provera nepokretnosti pre kupovine

Pre kupovine nepokretnosti, kupac treba da proveri da li je prodavac zaista upisan kao vlasnik u katastru nepokretnosti i da li na nepokretnosti postoje tereti ili ograničenja.

Pravna provera nepokretnosti najčešće obuhvata:

- proveru vlasništva u katastru
- proveru hipoteka, zabeležbi, službenosti, prava zakupa i drugih tereta
- proveru da li je nepokretnost predmet restitucije ili sudskog postupka
- proveru građevinske i upotrebne dozvole
- proveru prethodnog lanca sticanja vlasništva

Ova provera je posebno važna jer kupac ne treba da se osloni samo na usmeni dogovor sa prodavcem ili oglas za prodaju nepokretnosti.

## Katastar nepokretnosti i list nepokretnosti

Katastar nepokretnosti je osnovni javni registar u kojem se proverava vlasništvo nad nepokretnošću u Srbiji. Iz lista nepokretnosti može se videti ko je upisan kao vlasnik, koja je površina nepokretnosti, koja je namena objekta ili zemljišta i da li postoje upisani tereti.

Međutim, iako podaci iz katastra imaju veliki značaj, u pojedinim slučajevima je potrebno proveriti i dodatnu dokumentaciju, naročito ako postoje raniji ugovori, porodični odnosi, nasleđivanje, nelegalizovani objekti ili zabeležbe sporova.

## Predugovor o kupoprodaji nepokretnosti

Predugovor o kupoprodaji nepokretnosti se često zaključuje kada strane žele da rezervišu nepokretnost, ali još uvek nisu ispunjeni svi uslovi za potpisivanje glavnog ugovora.

To može biti slučaj kada:

- kupac čeka odobrenje stambenog kredita
- prodavac treba da obriše hipoteku
- potrebno je pribaviti dodatnu dokumentaciju
- kupac plaća kaparu
- strane žele da preciziraju rokove i uslove za zaključenje glavnog ugovora

Važno je znati da predugovor nije neformalni dogovor. Ako je pravilno zaključen i overen, predugovor je pravno obavezujući dokument.

## Ugovor o kupoprodaji nepokretnosti

Ugovor o kupoprodaji nepokretnosti mora biti zaključen u pisanoj formi i overen kod javnog beležnika. Bez odgovarajuće javnobeležničke overe, kupac se ne može upisati kao vlasnik u katastar nepokretnosti.

Ugovor o kupoprodaji nepokretnosti treba da sadrži:

- podatke o kupcu i prodavcu
- tačan opis nepokretnosti
- kupoprodajnu cenu
- način i rok plaćanja
- izjavu prodavca da dozvoljava upis kupca kao vlasnika u katastar
- rok za predaju nepokretnosti
- odredbe o troškovima, porezima i eventualnim teretima

## Kupovina stana u braku i saglasnost supružnika

Ako je prodavac u braku, kupac treba da proveri da li je nepokretnost bračna tekovina. Prema pravilima porodičnog prava, nepokretnost može predstavljati zajedničku imovinu supružnika čak i kada je u katastru upisan samo jedan supružnik.

Zbog toga je u praksi preporučljivo pribaviti saglasnost drugog supružnika za prodaju nepokretnosti. Bez takve saglasnosti, postoji rizik da drugi supružnik kasnije osporava kupoprodaju.

## Plaćanje kupoprodajne cene

Kupoprodajna cena se po pravilu plaća preko bankovnog računa. Kod kupovine nepokretnosti u Srbiji važno je jasno ugovoriti kada se cena plaća, da li se plaća u celosti ili u ratama, kao i da li je isplata uslovljena brisanjem hipoteke, predajom nepokretnosti ili upisom kupca u katastar.

Kod kupovine stana na kredit, ugovor mora biti usklađen sa procedurama banke, naročito u pogledu hipoteke, rokova isplate i dokumentacije koju banka zahteva.

## Upis vlasništva u katastar

Nakon overe ugovora, javni beležnik dostavlja ugovor katastru nepokretnosti. Kupac postaje vlasnik tek kada se pravo svojine upiše u katastar.

Postupak upisa prava svojine najčešće traje oko dve nedelje, ali u praksi može trajati duže, u zavisnosti od nadležnog katastra i konkretnog predmeta.

## Porez na kupovinu nepokretnosti

Poreski tretman zavisi od toga da li se kupuje novogradnja ili stara gradnja.

Kod prve prodaje novoizgrađenog stana plaća se PDV po stopi od 10%. Kod prve prodaje novoizgrađenog poslovnog prostora plaća se PDV po stopi od 20%.

Kod stare gradnje, odnosno druge i svake naredne prodaje nepokretnosti, plaća se porez na prenos apsolutnih prava po stopi od 2,5%.

Iako je zakonski obveznik poreza na prenos apsolutnih prava najčešće prodavac, u praksi se ugovorom često predviđa da ovaj porez plaća kupac. Zato je važno da kupac pre potpisivanja ugovora zna koji porez plaća i koliki će biti ukupan trošak kupovine nepokretnosti.

## Povraćaj PDV-a za kupovinu prvog stana

Kupci prvog stana mogu, pod određenim uslovima, ostvariti pravo na povraćaj PDV-a kod kupovine novogradnje ili poresko oslobođenje kod kupovine stare gradnje.

Ovo pravo zavisi od više uslova, uključujući prethodno vlasništvo kupca, površinu stana, članove domaćinstva i druge zakonske kriterijume. Zbog toga je pre kupovine prvog stana preporučljivo proveriti da li kupac ispunjava uslove za poresku olakšicu.

## Troškovi kupovine nepokretnosti

Pored same kupoprodajne cene, kupac treba da računa i na dodatne troškove kupovine nepokretnosti, kao što su:

- javnobeležnička naknada
- porez na prenos apsolutnih prava ili PDV
- takse za katastar
- bankarski troškovi kod kupovine na kredit
- troškovi procene vrednosti nepokretnosti
- troškovi advokata
- troškovi prevoda, ako postoje dokumenti na stranom jeziku
- troškovi prenosa računa za komunalne usluge

Ovi troškovi mogu značajno uticati na ukupan budžet, pa ih treba planirati pre zaključenja ugovora.

## Šta uraditi nakon kupovine nepokretnosti

Nakon što kupac bude upisan kao vlasnik u katastar, potrebno je sprovesti i nekoliko praktičnih koraka:

- preneti račune za struju, vodu, grejanje i druge komunalne usluge
- obavestiti upravnika zgrade, ako se kupuje stan
- proveriti stanje dugovanja za komunalne usluge
- preuzeti ključeve i sačiniti zapisnik o primopredaji, ako je potrebno

Ovi koraci su važni kako bi kupac u potpunosti preuzeo nepokretnost i izbegao kasnije administrativne ili finansijske probleme.

## Zaključak: kako bezbedno kupiti nepokretnost u Srbiji

Bezbedna kupovina nepokretnosti u Srbiji počinje detaljnom proverom. Pre potpisivanja predugovora ili ugovora, kupac treba da proveri vlasništvo, terete, građevinsku dokumentaciju, poreski tretman, bračni status prodavca i sve dodatne troškove.

Dobra pravna provera smanjuje rizik od sporova, problema sa upisom u katastar i nepredviđenih troškova. Zato se kupcima savetuje da pre kupovine nepokretnosti zatraže stručnu pravnu pomoć i jasno definišu sve uslove transakcije pre overe ugovora kod javnog beležnika.`,
      en: `Buying real estate in Serbia is one of the most important financial decisions for individuals. Whether you are buying an apartment, house, garage, plot of land, or commercial premises, it is important to review the legal status of the property, ownership, encumbrances, tax treatment, and all related transaction costs before signing a contract.

Below is a practical guide for real estate buyers in Serbia.

## Reviewing the property before purchase

Before purchasing a property, the buyer should verify whether the seller is actually registered as the owner in the real estate cadastre and whether there are any encumbrances or restrictions on the property.

Legal due diligence usually includes:

- checking ownership records in the cadastre
- checking mortgages, annotations, easements, lease rights, and other encumbrances
- checking whether the property is subject to restitution or court proceedings
- checking construction and occupancy permits
- checking the previous chain of title

This review is particularly important because the buyer should not rely solely on an oral agreement with the seller or on the sale advertisement.

## Real estate cadastre and property title sheet

The real estate cadastre is the main public register used to verify ownership of property in Serbia. From the title sheet, one can see who is registered as the owner, the size of the property, the purpose of the building or land, and whether there are registered encumbrances.

However, although cadastral data is highly relevant, in some cases additional documentation should also be reviewed, especially where there are prior contracts, family law issues, inheritance matters, unlegalized buildings, or litigation annotations.

## Preliminary real estate sale agreement

A preliminary sale agreement is often concluded when the parties wish to reserve the property, but not all requirements for signing the main agreement have yet been fulfilled.

This may happen when:

- the buyer is waiting for mortgage loan approval
- the seller needs to remove a mortgage
- additional documents must be obtained
- the buyer is paying a deposit
- the parties want to define the deadlines and conditions for signing the final contract

It is important to understand that a preliminary agreement is not merely an informal arrangement. If properly concluded and notarized, it is a legally binding document.

## Real estate sale contract

A real estate sale contract must be concluded in writing and notarized before a public notary. Without proper notarization, the buyer cannot be registered as the owner in the real estate cadastre.

A real estate sale contract should contain:

- buyer and seller identification data
- a precise description of the property
- the purchase price
- the method and deadline for payment
- the seller's statement allowing the buyer to register ownership in the cadastre
- the deadline for handover of the property
- provisions on costs, taxes, and any existing encumbrances

## Buying property from a married seller and spouse consent

If the seller is married, the buyer should verify whether the property is marital property. Under family law rules, a property may constitute joint marital property even if only one spouse is registered in the cadastre.

For that reason, in practice it is advisable to obtain the consent of the other spouse for the sale. Without such consent, there is a risk that the other spouse may later challenge the transaction.

## Payment of the purchase price

As a rule, the purchase price is paid through a bank account. In Serbian real estate transactions, it is important to define clearly when the price is paid, whether it is paid in full or in instalments, and whether payment is conditioned on the removal of a mortgage, handover of the property, or registration of the buyer in the cadastre.

When purchasing an apartment through a bank loan, the contract must also be aligned with the bank's procedures, especially regarding the mortgage, payment deadlines, and the documentation required by the bank.

## Registration of ownership in the cadastre

After the contract is notarized, the public notary forwards it to the real estate cadastre. The buyer becomes the owner only once the ownership right is formally registered.

The ownership registration process often takes around two weeks, but in practice it may take longer depending on the competent cadastral office and the specific case.

## Tax on real estate purchase

Tax treatment depends on whether the buyer is purchasing newly built property or an older property.

For the first sale of a newly built apartment, VAT is paid at the rate of 10%. For the first sale of newly built commercial premises, VAT is paid at the rate of 20%.

For older properties, meaning the second and each subsequent sale, transfer tax on absolute rights is paid at the rate of 2.5%.

Although the statutory taxpayer for transfer tax is most often the seller, in practice contracts frequently provide that the buyer will bear this tax. For that reason, the buyer should know before signing the contract which tax applies and what the total transaction cost will be.

## VAT refund for the purchase of a first apartment

First-time apartment buyers may, under certain conditions, be entitled to a VAT refund when purchasing new construction or a tax relief when purchasing older property.

This right depends on a number of conditions, including the buyer's previous ownership, the apartment size, household members, and other statutory criteria. Because of that, it is advisable to verify before purchasing a first apartment whether the buyer meets the conditions for tax relief.

## Additional transaction costs

In addition to the purchase price itself, the buyer should take into account additional transaction costs, such as:

- notary fees
- transfer tax or VAT
- cadastral fees
- banking costs when the purchase is financed by a loan
- valuation costs
- attorney's fees
- translation costs, where documents are in a foreign language
- utility account transfer costs

These expenses may significantly affect the overall budget, so they should be planned before the contract is concluded.

## What should be done after the purchase

Once the buyer is registered as the owner in the cadastre, several practical steps should also be completed:

- transfer electricity, water, heating, and other utility accounts
- notify the building manager, if an apartment is being purchased
- check whether there are any outstanding utility debts
- take over the keys and prepare a handover record, if necessary

These steps are important so that the buyer fully takes possession of the property and avoids later administrative or financial issues.

## Conclusion: how to purchase real estate in Serbia safely

A safe real estate purchase in Serbia begins with thorough due diligence. Before signing a preliminary agreement or the final contract, the buyer should check ownership, encumbrances, construction documents, tax treatment, the seller's marital status, and all additional transaction costs.

Proper legal review reduces the risk of disputes, problems with cadastral registration, and unexpected costs. For that reason, buyers are advised to seek professional legal assistance before purchasing property and to define all transaction terms clearly before notarization before a public notary.`,
    },
  },
  {
    id: "traffic-fine-challenge-serbia",
    slug: "kako-osporiti-saobracajnu-kaznu-u-srbiji",
    date: "2026-04-07",
    category: {
      sr: "Pravni saveti",
      en: "Legal Advice",
    },
    title: {
      sr: "Kako osporiti saobraćajnu kaznu u Srbiji – vodič kroz postupak pred prekršajnim sudom",
      en: "How to Challenge a Traffic Fine in Serbia – A Guide Through Misdemeanor Court Proceedings",
    },
    excerpt: {
      sr: "Kako osporiti saobraćajnu kaznu u Srbiji: kada postoji osnov za odbranu, kako izgleda postupak pred prekršajnim sudom i kada advokat može pomoći da se izbegnu teže sankcije.",
      en: "How to challenge a traffic fine in Serbia: when there is a basis for defense, how misdemeanor court proceedings work, and when an attorney can help avoid more serious sanctions.",
    },
    content: {
      sr: `Saobraćajne kazne su jedan od najčešćih razloga zbog kojih se građani obraćaju advokatu. Mnogi vozači pretpostavljaju da je kaznu nemoguće osporiti i da je jedina opcija da je plate. Međutim, zakon predviđa više mogućnosti odbrane, a u određenim situacijama kazna može biti smanjena ili čak izbegnuta.

U nastavku objašnjavamo kako funkcioniše postupak pred prekršajnim sudom, kada je moguće osporiti saobraćajnu kaznu i u kojim situacijama advokat može pomoći da se izbegnu teže sankcije, poput zabrane upravljanja vozilom.

## Kada se može osporiti saobraćajna kazna

Saobraćajna kazna može se osporiti ukoliko postoje razlozi koji dovode u pitanje način na koji je prekršaj utvrđen ili vođenje postupka.

Najčešće situacije u kojima se kazna osporava su:

- pogrešno utvrđene činjenice o događaju
- nedostatak dokaza
- proceduralne greške u postupku
- pogrešna identifikacija vozača
- nepravilno evidentiran prekršaj putem kamere ili radara

Važno je naglasiti da se svaka situacija procenjuje pojedinačno. Čak i kada prekršaj nije sporan, moguće je uticati na vrstu i visinu sankcije.

## Kako počinje postupak pred prekršajnim sudom

Postupak obično počinje na jedan od dva načina.

Prvi je kada vozač dobije prekršajni nalog koji izdaje policija. U tom slučaju postoji rok u kojem se može podneti sudu radi pravilnog utvrđivanja okolnosti iz prekršajnog naloga.

Drugi način je kada vozač dobije poziv iz prekršajnog suda, odnosno zahtev za pokretanje prekršajnog postupka što znači da je pokrenut sudski postupak.

U tom trenutku je važno:

- reagovati na vreme
- pripremiti dokumentaciju
- razmotriti strategiju odbrane

Sud može doneti odluku i bez prisustva okrivljenog ukoliko se poziv ignoriše, ili odrediti prinudno dovođenje okrivljenog.

## Šta je sporazum o priznanju prekršaja

Jedan od najčešćih načina rešavanja saobraćajnih prekršaja je sporazum o priznanju prekršaja.

To je postupak u kojem okrivljeni priznaje prekršaj, ali se zauzvrat dogovara blaža sankcija.

U praksi to može značiti:

- manju novčanu kaznu
- manji broj kaznenih poena
- izbegavanje zabrane upravljanja vozilom

Ovaj postupak se često koristi kod prekršaja koji nose teže posledice za vozače, naročito za profesionalne vozače kojima je vozačka dozvola neophodna za posao.

## Kazneni poeni i oduzimanje vozačke dozvole

Jedan od najtežih oblika sankcije za vozače jeste zabrana upravljanja vozilom.

Zabrana vožnje može nastati:

- kao direktna kazna za određeni prekršaj
- kao posledica skupljenog broja kaznenih poena

Zakon o bezbednosti saobraćaja predviđa sistem kaznenih poena koji se upisuju vozaču za određene prekršaje. Kada se dostigne zakonski limit, može doći do oduzimanja vozačke dozvole.

Zbog toga je u mnogim slučajevima cilj postupka da se:

- smanji broj kaznenih poena
- izbegne zabrana vožnje

U takvim situacijama pravna strategija može imati značajan uticaj na konačan ishod postupka.

## Saobraćajne kamere i dokazivanje prekršaja

Veliki broj saobraćajnih kazni danas nastaje na osnovu snimaka sa kamera.

Kamera može zabeležiti:

- prekoračenje brzine
- prolazak kroz crveno svetlo
- vožnju u zabranjenoj traci

Međutim, i kod ovakvih kazni postoje situacije u kojima je moguće osporiti prekršaj.

Na primer:

- ako snimak ne dokazuje jasno identitet vozača
- ako postoje tehničke nepravilnosti
- ako procedura izdavanja kazne nije sprovedena pravilno

U praksi se svaki slučaj analizira pojedinačno.

## Šta se dešava ako se kazna ignoriše

Ignorisanje kazne ili sudskog poziva obično nije dobra strategija.

U tom slučaju sud može:

- doneti odluku bez saslušanja okrivljenog
- izreći kaznu u punom iznosu
- pokrenuti postupak prinudne naplate
- odrediti da novčana kazna bude zamenjena kaznom zatvora

Takođe, mogu nastati dodatni troškovi postupka.

Zbog toga je uvek bolje reagovati na vreme i proceniti pravne mogućnosti.

## Kada je korisno angažovati advokata za saobraćajne kazne

Advokat može pomoći u više situacija.

Najčešće kada:

- postoji rizik od zabrane vožnje
- postoji veći broj kaznenih poena
- vozač koristi vozilo za posao
- postoji spor oko činjenica u postupku

U takvim slučajevima advokat analizira dokumentaciju, procenjuje rizike i predlaže najbolju strategiju odbrane.

U mnogim situacijama moguće je postići povoljniji ishod postupka.

## Koliko traje postupak pred prekršajnim sudom

Trajanje postupka zavisi od više faktora.

Na primer:

- složenosti slučaja
- broja dokaza
- opterećenosti suda

Jednostavniji postupci mogu se završiti relativno brzo, dok složeniji slučajevi mogu trajati duže.

## Zaključak

Saobraćajna kazna ne znači automatski da je postupak završen. Zakon predviđa mogućnost odbrane, osporavanja kazne i ublažavanja sankcije.

Najvažnije je reagovati na vreme, analizirati dokumentaciju i proceniti pravne mogućnosti.

U određenim situacijama pravilno vođen postupak može dovesti do značajno povoljnijeg ishoda za vozača.`,
      en: `Traffic fines are one of the most common reasons why people contact an attorney. Many drivers assume that a fine cannot be challenged and that paying it is the only option. However, the law provides several defense options, and in certain situations the sanction may be reduced or even avoided.

Below we explain how misdemeanor court proceedings work, when a traffic fine may be challenged, and in which situations an attorney can help avoid more serious sanctions, such as a driving ban.

## When can a traffic fine be challenged?

A traffic fine may be challenged when there are reasons to question how the offense was established or how the proceedings were conducted.

The most common situations include:

- incorrectly established facts
- lack of evidence
- procedural errors
- incorrect identification of the driver
- improperly recorded offenses through cameras or radar

Each situation must be assessed individually. Even when the offense itself is not disputed, it may still be possible to influence the type and severity of the sanction.

## How do misdemeanor court proceedings begin?

Proceedings usually begin in one of two ways.

The first is when the driver receives a misdemeanor ticket issued by the police. In that situation, there is a legal deadline within which the matter may be brought before the court so that the circumstances from the ticket can be properly examined.

The second is when the driver receives a summons from the misdemeanor court or a formal request to initiate misdemeanor proceedings, which means that court proceedings have already started.

At that point, it is important to:

- react in time
- prepare documentation
- consider the defense strategy

If the summons is ignored, the court may render a decision without the defendant’s presence or may order compulsory appearance.

## What is a plea agreement in misdemeanor proceedings?

One of the most common ways to resolve traffic misdemeanor cases is a plea agreement.

In that procedure, the defendant admits the offense but negotiates a lighter sanction in return.

In practice, that may mean:

- a lower fine
- fewer penalty points
- avoiding a driving ban

This option is often used in cases with more serious consequences for drivers, especially professional drivers who need a driving licence for work.

## Penalty points and suspension of the driving licence

One of the most serious sanctions for drivers is a driving ban.

A driving ban may arise:

- as a direct sanction for a particular offense
- as a consequence of accumulated penalty points

Serbian road traffic law provides a penalty point system for certain offenses. Once the legal limit is reached, suspension of the driving licence may occur.

That is why, in many cases, the objective of the proceedings is to:

- reduce the number of penalty points
- avoid a driving ban

In such situations, legal strategy may have a significant effect on the final outcome.

## Traffic cameras and proving the offense

Many traffic fines today are based on camera footage.

A camera may record:

- speeding
- driving through a red light
- driving in a prohibited lane

However, even in these situations there are circumstances in which the offense may be challenged.

For example:

- if the footage does not clearly prove the identity of the driver
- if there are technical irregularities
- if the sanction was not issued in accordance with the required procedure

In practice, each case must be reviewed individually.

## What happens if the fine is ignored?

Ignoring a fine or a court summons is usually not a good strategy.

In that case, the court may:

- issue a decision without hearing the defendant
- impose the fine in full
- initiate enforcement proceedings
- replace the monetary fine with imprisonment

Additional procedural costs may also arise.

That is why it is always better to react in time and assess the available legal options.

## When is it useful to hire an attorney for traffic fines?

An attorney may help in several situations.

Most commonly when:

- there is a risk of a driving ban
- there is already a large number of penalty points
- the driver uses the vehicle for work
- there is a factual dispute in the proceedings

In such cases, an attorney analyzes the documentation, assesses the risks, and proposes the best defense strategy.

In many situations, it is possible to achieve a more favorable outcome.

## How long do misdemeanor court proceedings take?

The duration depends on several factors, for example:

- the complexity of the case
- the amount of evidence
- the workload of the court

Simpler proceedings may be completed relatively quickly, while more complex cases may take longer.

## Conclusion

A traffic fine does not automatically mean that the matter is over. The law provides possibilities for defense, challenging the sanction, and mitigating the consequences.

The most important thing is to react in time, review the documentation, and assess the legal options.

In certain situations, a properly managed case may lead to a significantly more favorable result for the driver.`,
    },
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatDate(dateString: string, language: "sr" | "en"): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(language === "sr" ? "sr-RS" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
