// Bank soal Literasi Bahasa Inggris 2 (quiz id "litinggris2"): 20 soal Tryout SNBT Gratis Naufal Academy #5, pilihan A sampai E,
// semuanya berjawaban tunggal, berbasis 8 bacaan: deep-sea mining Teks 1 dan Teks 2 (1-3), precision fermentation (4-8),
// jaringan jamur mikoriza (9-12), de-extinction (13-16), trophic cascade serigala Yellowstone (17), urban vertical farming (18),
// neuroplasticity (19), dan kendaraan otonom (20). Jenis soal: gagasan utama dan titik pertentangan, tanggapan penulis, kesepakatan dua teks,
// tujuan dan tesis penulis, fungsi paragraf, target pembaca, struktur teks, informasi rinci, rujukan kata ganti, makna kata,
// makna ungkapan, sikap penulis, strategi retorika, analogi, pernyataan yang benar, dan inferensi.
// Dibuat dari dokumen "Soal_Literasi_Inggris_Tryout5.docx" (teks bacaan, soal, kunci, dan pembahasan kilat).
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// SUMBER KUNCI (penting): menurut catatan di dokumen, kunci dan pembahasan nomor 1-5 mengacu pada kunci dan pembahasan resmi di foto,
// sedangkan nomor 6-20 tidak menampilkan kunci di foto sehingga "dijawab dan dibahas lewat analisis isi teks". Kunci nomor 6-20 belum
// dicocokkan dengan kunci resmi. Saat dibaca ulang terhadap teks bacaan, kunci nomor 6-20 konsisten dengan isi teks.
//
// Catatan teks bacaan (dibiarkan seperti di dokumen, mungkin perlu dicek dengan sumber aslinya):
//  - Teks 1 (deep-sea mining), paragraf 2: kalimat "This fundamental disparity => that smaller physical footprints could produce ..."
//    memakai tanda panah di tempat kata kerja. Kemungkinan ada kata yang hilang saat transkripsi (mis. "implies"). Tidak ada soal yang menanyakan kalimat ini.
//  - Teks urban vertical farming, paragraf 1: kata "biocure" kemungkinan salah ketik dari "biosecure". Tidak ditanyakan.
//
// Catatan penyesuaian dari dokumen:
//  - Paragraf tiap bacaan diberi label P1, P2, dan seterusnya, serta Teks 1 dan Teks 2 pada bacaan pertama, karena soal dan pembahasan
//    menyebut "paragraf 2", "kalimat 3 pada paragraf 2", dan sejenisnya. Pemisah paragraf mengikuti dokumen (jumlah paragraf cocok dengan
//    keterangan "empat paragraf", "tiga paragraf", dan seterusnya). Judul bacaan memakai judul di dokumen, termasuk "Jaringan Jamur Mikoriza".
//  - Penanda di dokumen (kotak hijau jawaban, tanda centang dan silang, keterangan "Soal 1-3 ..." di bawah judul bacaan) tidak ditampilkan di soal.
//  - Susunan pembahasan kilat dipertahankan: "Kunci" (kotak kuning, ditulis "Kunci cepat"), lalu alasan tiap pilihan lain salah sebagai kotak
//    merah muda. Judul bacaan ditulis di baris jawaban ("Bacaan: ..."). Kotak "Jadi, jawaban yang tepat adalah ..." ditambahkan di akhir seperti quiz lain.
//  - Kunci cocok dengan baris "JAWABAN" di tiap soal dan dengan tabel "Kunci Jawaban Cepat" di dokumen.
//
// Kunci (soal 1 sampai 20): B B B B A A B B D A A A B A B B B C C C
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const PASSAGES = {
  "dsm": {
    "title": "Deep-Sea Mining: Teks 1 dan Teks 2",
    "range": "1–3",
    "html": "<p><b>Teks 1</b></p>\n<p><b>P1</b> As the global transition toward renewable energy accelerates, the demand for critical minerals such as nickel, cobalt, copper, and manganese has surged exponentially. Traditional terrestrial mining has long been plagued by severe human rights concerns, widespread deforestation, and massive carbon footprints, particularly in biodiverse tropical regions. In response, proponents argue that deep-sea mining—specifically the harvesting of polymetallic nodules from the abyssal plains—presents an indispensable alternative. These mineral-rich nodules lie unattached on the ocean floor at depths between 4,000 and 6,000 meters, theoretically requiring no blasting, deforestation, or displacement of human populations.</p>\n<p><b>P2</b> Advocates maintain that seafloor extraction yields significantly higher ore grades compared to depleting terrestrial reserves. This fundamental disparity ⇒ that smaller physical footprints could produce the vast quantities of metals needed for electric vehicle batteries and renewable grids. Furthermore, industry analysts emphasize that harvesting these seafloor nodules generates substantially fewer direct greenhouse gas emissions and eliminates the need for toxic tailings dams, which frequently cause catastrophic disasters on land. For many industrialized nations, deep-sea minerals represent a vital pathway to secure supply chains while meeting urgent decarbonization targets.</p>\n<p><b>Teks 2</b></p>\n<p><b>P1</b> While the promise of abundant battery metals from the ocean floor appears tempting, marine scientists and conservationists warn that deep-sea mining poses catastrophic, irreversible risks to vulnerable oceanic systems. The abyssal plains, once considered barren underwater deserts, are now known to harbor unique and fragile ecosystems composed of slow-growing organisms. Scraping nodules from the seabed directly destroys habitats that have taken millions of years to form. Moreover, heavy extraction machinery produces massive underwater sediment plumes and acoustic noise that can travel across hundreds of kilometers, suffocating midwater fauna and disrupting the marine carbon cycle.</p>\n<p><b>P2</b> Rather than opening a new, unregulated frontier of ecological destruction, researchers emphasize that technological and economic alternatives render seafloor exploitation unnecessary. Rapid advancements in battery chemistry—such as lithium-iron-phosphate (LFP) and sodium-ion designs—are already decreasing the technological dependence on nickel and cobalt. Furthermore, scaling up circular economy infrastructure, including advanced electronic waste recycling and urban mining, could supply a substantial portion of future material demands. Sacrificing the deep ocean floor before establishing sustainable terrestrial material loops is an unwarranted ecological gamble.</p>"
  },
  "pf": {
    "title": "Precision Fermentation",
    "range": "4–8",
    "html": "<p><b>P1</b> Precision fermentation (PF) has emerged as a transformative frontier in biotechnology, utilizing genetically engineered microorganisms—such as yeasts, bacteria, and microalgae—to synthesize complex organic molecules identical to animal proteins and fats. While the underlying science echoes long-established techniques used in the pharmaceutical production of synthetic insulin and the dairy sector's adoption of microbial chymosin, contemporary developments aim at a far more disruptive target: superseding conventional livestock as the foundational pillar of the global protein supply. Proponents laud this paradigm as an ecological panacea capable of decoupling human nutrition from intensive pastoral agriculture. However, this nascent technological shift carries profound socioeconomic and structural implications that warrant balanced, rigorous interrogation.</p>\n<p><b>P2</b> From an environmental perspective, the arguments favoring precision fermentation are undeniably compelling. Industrial livestock farming is notoriously resource-inefficient, consuming massive quantities of arable land and freshwater while generating roughly 14.5% of anthropogenic greenhouse gas emissions, notably enteric methane. In contrast, life-cycle assessments indicate that commercial-scale microbial fermentation can yield equivalent nutritional yields with up to 90% less land and 80% less freshwater. By drastically shrinking the agricultural footprint, PF opens unprecedented avenues for landscape-scale ecological restoration, known as rewilding, which could significantly sequester atmospheric carbon and arrest biodiversity loss.</p>\n<p><b>P3</b> Yet, treating precision fermentation solely through a techno-optimistic lens obscures severe socioeconomic vulnerabilities. The potential contraction of animal husbandry threatens the livelihoods of hundreds of millions of smallholders and pastoral communities worldwide, particularly in rural regions where economic diversification remains scarce. Furthermore, the high capital costs of industrial bioreactors and the aggressively guarded intellectual property (IP) surrounding engineered microbial strains threaten to consolidate control of the global food system into the hands of a few dominant agribusiness conglomerates. Such corporate monopolization could exacerbate existing food sovereignty inequities rather than resolve them.</p>\n<p><b>P4</b> Consequently, navigating this biological transition requires moving beyond pure market forces. To harness the transformative potential of precision fermentation without devastating agricultural communities, governance frameworks must adopt an integrative approach. Public sector investments should champion open-source genomic platforms to dismantle proprietary barriers, coupled with proactive retraining programs and transition funds for displaced livestock farmers. Only through deliberate, equitable policy design can the agricultural transformation fulfill its ecological promise without compromising societal resilience.</p>"
  },
  "mikoriza": {
    "title": "Jaringan Jamur Mikoriza",
    "range": "9–12",
    "html": "<p><b>P1</b> Underneath the forest floor lies a dense subterranean web of fungal filaments known as mycorrhizal networks, which interlace the root systems of individual trees. Far from functioning as solitary, competing organisms, trees utilize these fungal conduits to share vital resources such as water, carbon, phosphorus, and defensive biochemicals. Central to this subterranean infrastructure are the mycorrhizae—symbiotic associations between plant roots and soil fungi—wherein the fungus receives photosynthetically fixed carbohydrates from the host tree in exchange for water and mineral nutrients harvested from the surrounding substrate. Recent ecological studies have underscored that this subterranean commerce not only sustains individual specimens but also orchestrates community-wide resilience against environmental stresses.</p>\n<p><b>P2</b> The structural framework of these networks typically hinges on older, mature trees often designated by ecologists as \"hub trees\" or \"mother trees.\" Possessing expansive root systems and crown canopies that capture substantial solar radiation, these arboreal giants generate a surplus of carbon. Through the mycorrhizal lattice, they shunt a portion of these assimilates to younger saplings growing in the shaded understory where sunlight is critically limited. Experiments utilizing stable carbon isotope tracers (¹³C) have demonstrated that understory seedlings connected to mature hub trees exhibit significantly higher survival rates and nitrogen uptake than isolated counterparts. Furthermore, when mature trees are subjected to localized pest infestations, they can transmit biochemical alarm signals through the hyphal strands, prompting neighboring trees to preemptively synthesize chemical deterrents such as tannins and phenolics.</p>\n<p><b>P3</b> Despite the collaborative nature of this subterranean mutualism, mycorrhizal interactions are not strictly altruistic. Evolutionary biologists emphasize that both parties continually engage in strategic negotiation governed by biological supply and demand. Fungi are capable of discriminating between host trees; empirical trials indicate that mycorrhizal hyphae selectively allocate phosphorus and nitrogen to the root tips of plants providing greater concentrations of sucrose, effectively hoarding nutrients from less generous partners. Conversely, some parasitic plant species, such as non-photosynthetic ghost pipes (Monotropa uniflora), exploit the network by siphoning carbon without providing nutritional reciprocity. Consequently, the subterranean network functions as a dynamic biological marketplace governed by complex trade-offs rather than pure ecological benevolence.</p>\n<p><b>P4</b> Anthropogenic disturbances, however, pose a profound threat to the integrity of these delicate fungal systems. Intensive clear-cutting, chemical fertilizer runoff, and heavy soil compaction disrupt the brittle hyphal architecture, severing communicative pathways between forest cohorts. When these underground links are fractured, forest stands demonstrate diminished structural stability and heightened vulnerability to prolonged droughts and pathogen outbreaks. Restoring damaged woodlands, researchers assert, necessitates looking beneath the canopy and preserving the intact fungal soil microbiome, which serves as the invisible linchpin of terrestrial forest health.</p>"
  },
  "deext": {
    "title": "De-Extinction",
    "range": "13–16",
    "html": "<p><b>P1</b> Advances in synthetic biology and CRISPR-based gene editing have recently propelled 'de-extinction' from speculative fiction into tangible scientific enterprise. Proponents passionately envision resurrected herds of woolly mammoths roaming the Siberian tundra, arguing that these proxy megaherbivores could trample permafrost, stimulate grass growth, and ultimately sequester atmospheric carbon. Such technological optimism is undeniably seductive. It packages environmental restitution as a triumphant narrative of human ingenuity, suggesting that the ecological sins of the past can simply be bio-engineered away.</p>\n<p><b>P2</b> However, beneath this alluring veneer lies a constellation of profound ecological and practical concerns. Conservation biologists rightly emphasize that a genetically engineered facsimile—often born from a surrogate Asian elephant carrying synthesized mammoth traits—is neither an exact genetic replica nor an organism naturally socialized into an existing ecological niche. Decades of habitat destruction, climatic shifts, and modern anthropogenic pressures mean that contemporary ecosystems may no longer support the ancestral roles these creatures once fulfilled. Furthermore, the financial capital and research bandwidth funneled into high-profile resurrection spectacles risk diverting indispensable resources from current biodiversity crises, where thousands of extant species face imminent, preventable extinction.</p>\n<p><b>P3</b> Ultimately, while the technical feats underpinning de-extinction are formidable, conflating biotechnological wizardry with genuine conservation is a perilous mistake. True ecological stewardship requires humility, habitat preservation, and immediate mitigation of ongoing threats, rather than theatrical technological salvations. Championing the resurrection of long-lost species should not serve as an ethical moral hazard that excuses contemporary neglect. Until humanity can reliably protect and coexist with the fragile biodiversity that currently survives, our scientific priorities ought to remain firmly anchored in preservation rather than speculative resurrective hubris.</p>"
  },
  "trophic": {
    "title": "Trophic Cascade: Serigala Yellowstone",
    "range": "17",
    "html": "<p><b>P1</b> Ecosystem resilience often relies on what ecologists term \"trophic cascades\"—powerful indirect interactions that can control and shape entire ecosystems. In the classic reintroduction of gray wolves to Yellowstone National Park, the return of an apex predator suppressed the overgrown elk population not merely through direct predation, but through the \"ecology of fear.\" Constantly wary of ambush, elk altered their foraging behavior, avoiding exposed river valleys and gorges. Consequently, overbrowsed willow and aspen groves regenerated rapidly.</p>\n<p><b>P2</b> This vegetation resurgence stabilized stream banks, decreased soil erosion, and cooled water temperatures, which subsequently revived beaver populations. The beavers constructed dams, creating wetland habitats that supported songbirds, amphibians, and diverse aquatic life. Thus, suppressing a dominant, unrestrained consumer restored structural balance and catalyzed widespread systemic renewal across interconnected ecological tiers.</p>"
  },
  "vfarm": {
    "title": "Urban Vertical Farming",
    "range": "18",
    "html": "<p><b>P1</b> Urban vertical farming has emerged as an innovative agricultural practice designed to meet the nutritional demands of growing city populations. Unlike traditional soil-based farming, vertical farms cultivate crops in vertically stacked layers, predominantly utilizing controlled-environment agriculture (CEA) technology. In these facilities, vital environmental factors such as artificial LED lighting, temperature, humidity, and gas concentrations are meticulously monitored and regulated.</p>\n<p><b>P2</b> A notable feature of vertical farms is their extensive use of hydroponic or aeroponic irrigation systems. These methods mist or circulate nutrient-rich water solutions directly to plant roots, consuming up to 95% less water than conventional outdoor fields. Furthermore, because these farms operate in enclosed, biocure indoor environments, crops remain shielded from variable weather conditions and pests, completely eliminating the necessity for chemical synthetic pesticides. However, the operational viability of vertical farming is currently constrained by immense electrical power consumption required to run high-intensity grow lights and climate systems around the clock.</p>"
  },
  "neuro": {
    "title": "Neuroplasticity",
    "range": "19",
    "html": "<p><b>P1</b> For decades, neuroscientists operated under the dogma that the adult human brain was a static, unchangeable organ. According to this traditional view, brain development was believed to cease entirely after critical periods in early childhood, after which damaged neural circuits could never be restored and cognitive functions inevitably entered a gradual decline.</p>\n<p><b>P2</b> However, groundbreaking discoveries in recent decades have thoroughly dismantled this rigid doctrine through the concept of neuroplasticity. Researchers demonstrated that the brain retains an extraordinary ability to reorganize itself throughout life by forming new neural pathways and adjusting existing ones in response to environmental demands, learning, and physical trauma.</p>\n<p><b>P3</b> To harness this adaptive capacity, modern medical researchers are pioneering targeted cognitive training regimens and non-invasive brain stimulation therapies. These innovative interventions are already yielding promising results in rehabilitating stroke victims and slowing down neurodegenerative symptoms, providing tangible proof that targeted mental engagement can physically rebuild human neural architecture.</p>"
  },
  "av": {
    "title": "Autonomous Vehicles",
    "range": "20",
    "html": "<p><b>P1</b> The widespread deployment of autonomous vehicles (AVs) has long been heralded as the ultimate remedy for automotive accidents, over 90 percent of which stem from human error such as distraction, fatigue, and intoxication. By replacing imperfect human reflex with algorithmic precision, lidar, and real-time sensor processing, technologists project a future with virtually zero roadway collisions.</p>\n<p><b>P2</b> Nonetheless, transportation safety analysts caution that focusing solely on human driver replacement obscures a critical dilemma: the transition era. For decades, autonomous vehicles will inevitably share road networks with unpredictable human drivers, pedestrians, and cyclists. Current machine learning algorithms excel in closed systems and predictable scenarios, but they routinely struggle with edge cases—rare, chaotic interactions, such as an erratic driver cutting across lanes or ambiguous hand signals from traffic directors.</p>\n<p><b>P3</b> Furthermore, the widespread availability of effortless autonomous transit may paradoxically exacerbate traffic congestion. If travel time becomes productive or relaxing work time, the perceived cost of commuting drops dramatically. Consequently, citizens who previously chose dense urban living or public mass transit may relocate farther to suburban peripheries, substantially increasing overall vehicle miles traveled and straining municipal road infrastructure beyond design limits.</p>"
  }
};

export const QUESTIONS = [
  {
    "n": 1,
    "passage": "dsm",
    "text": "Which of the following best captures the central point of contention between the authors of both texts?",
    "options": [
      "The exact geological depth at which polymetallic nodules can be extracted economically.",
      "Whether deep-sea mining is an ecologically viable and necessary solution for meeting critical mineral demands.",
      "The legal jurisdiction governing international waters and environmental accountability.",
      "Whether renewable energy technologies actually require rare mineral inputs to function.",
      "The degree to which terrestrial mining causes severe human displacement and habitat destruction."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: Deep-Sea Mining</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Teks 1 membela deep-sea mining sebagai <b>alternatif penting &amp; rendah dampak</b>. Teks 2 menolaknya sebagai <b>bahaya ekologis yang tak perlu</b> karena sudah ada daur ulang dan teknologi baterai baru. Jadi inti pertentangannya = <b>layak dan perlukah</b> deep-sea mining.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Kedalaman 4.000–6.000 m hanya detail teknis di Teks 1.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Yurisdiksi hukum tidak dibahas di teks mana pun.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Kedua penulis sepakat transisi energi butuh mineral kritis.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Teks 2 tidak membantah kerusakan tambang darat.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 2,
    "passage": "dsm",
    "text": "Based on the ideas presented in Text 2, how would its author most likely respond to the assertion in Text 1 that deep-sea mining is an \"indispensable alternative\" to secure supply chains for decarbonization?",
    "options": [
      "By supporting the claim and recommending immediate deployment of underwater extraction machinery.",
      "By disputing the claim, arguing that battery innovations and circular recycling can satisfy mineral demands without oceanic destruction.",
      "By agreeing with the assertion, provided that mining companies fully compensate indigenous populations.",
      "By conceding that deep-sea mining is unavoidable, but demanding that operations remain restricted to shallow waters.",
      "By dismissing the necessity of transitioning away from fossil fuels to prevent any increase in mineral demand."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: Deep-Sea Mining</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf 2 Teks 2 menyebut eksploitasi dasar laut <b>tidak perlu</b> karena inovasi baterai (LFP, natrium-ion) dan <b>daur ulang</b> sudah cukup. Jadi penulisnya <b>membantah</b> klaim \"tak tergantikan\".</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Teks 2 menentang keras tambang laut dalam.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Isu masyarakat adat ada di konteks tambang darat (Teks 1), bukan syarat Teks 2.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Teks 2 tidak menganggapnya tak terhindarkan dan tidak menyarankan perairan dangkal.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Yang ditolak adalah metode tambang laut, bukan transisi dari bahan bakar fosil.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 3,
    "passage": "dsm",
    "text": "Both authors would most likely agree that ...",
    "options": [
      "deep-sea ecosystems recover rapidly after industrial extraction activities.",
      "the ongoing shift toward green energy technologies involves a high demand for battery metals.",
      "traditional terrestrial mining has negligible impacts on terrestrial biodiversity.",
      "polymetallic nodules should be extracted immediately to prevent economic slowdowns.",
      "battery chemistry will never be able to replace the use of nickel and cobalt."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: Deep-Sea Mining</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Kedua teks mengakui transisi energi bersih = <b>kebutuhan logam baterai melonjak</b> (Teks 1: permintaan mineral kritis melonjak; Teks 2: membahas kebutuhan logam baterai). Itu satu-satunya titik <b>sepakat</b>.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Teks 2: organisme laut dalam tumbuh sangat lambat, habitat butuh jutaan tahun.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks 1 justru menyoroti deforestasi &amp; kerusakan tambang darat.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Hanya didukung Teks 1; Teks 2 menolaknya.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Teks 2: baterai LFP &amp; natrium-ion sudah mengurangi ketergantungan nikel-kobalt.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 4,
    "passage": "pf",
    "text": "What is the primary communicative purpose of the author in writing the passage?",
    "options": [
      "To advocate for the complete and unhindered replacement of traditional animal husbandry with precision fermentation.",
      "To examine both the ecological advantages and socioeconomic risks of precision fermentation while proposing proactive governance measures.",
      "To provide technical biochemical instructions on how genetically modified microorganisms synthesize complex proteins.",
      "To condemn multinational agribusiness corporations for monopolizing intellectual property in cellular agriculture.",
      "To chronicle the chronological evolution of biotechnology from pharmaceutical insulin to modern microbial chymosin."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: Precision Fermentation</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Alur penulis seimbang: <b>pengenalan PF → manfaat ekologis → risiko sosioekonomi → rekomendasi kebijakan</b>. Maka tujuan utamanya = <b>menelaah dua sisi sekaligus menawarkan solusi tata kelola</b>.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Penulis tidak mendukung penggantian tanpa syarat (unhindered).</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Tidak ada instruksi teknis biokimia.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Monopoli korporasi hanya satu poin di paragraf 3, bukan tujuan utama.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Sejarah insulin &amp; kimosin hanya latar belakang di paragraf 1.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 5,
    "passage": "pf",
    "text": "Which of the following statements best encapsulates the central thesis of the passage?",
    "options": [
      "The profound ecological promises of precision fermentation can only be ethically and safely achieved if supported by comprehensive regulatory interventions addressing economic displacement and corporate monopolization.",
      "Precision fermentation is intrinsically detrimental to global food security because high bioreactor costs completely outweigh its environmental efficiency gains.",
      "Because precision fermentation reduces land and freshwater consumption by up to 90%, free-market mechanisms will naturally resolve rural unemployment.",
      "The historical development of pharmaceutical synthetic insulin proves that traditional farming will become fully extinct within the coming decade.",
      "Intellectual property laws surrounding microbial strains must be entirely abolished before precision fermentation can produce consumable proteins."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Bacaan: Precision Fermentation</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Tesis ada di paragraf 4: PF hanya memenuhi <b>janji ekologisnya tanpa merusak masyarakat</b> jika ada <b>kebijakan terpadu</b> yang mengatasi disrupsi ekonomi &amp; monopoli.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> Penulis mengakui efisiensi lingkungan PF, tidak menyebutnya merugikan.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks justru bilang pasar bebas murni tidak cukup.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Memelintir perbandingan sejarah dan terlalu ekstrem.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Penulis menyarankan platform open-source, bukan menghapus seluruh hukum IP.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 6,
    "passage": "pf",
    "text": "The information presented in the second paragraph is primarily utilized by the author to ....",
    "options": [
      "substantiate the environmental efficiency claims that make precision fermentation an attractive alternative to livestock farming",
      "disprove the assertion that livestock agriculture is responsible for greenhouse gas emissions and land degradation",
      "demonstrate that bioreactor technologies have entirely solved global water depletion across all industrial sectors",
      "illustrate the biochemical steps through which engineered yeast cells metabolize nutrients in commercial vats",
      "highlight the economic losses experienced by livestock farmers due to recent ecological conservation policies"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Bacaan: Precision Fermentation</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf 2 berisi data keunggulan lingkungan PF (peternakan ±14,5% emisi; PF hemat <b>90% lahan &amp; 80% air</b>). Fungsinya: <b>menguatkan klaim efisiensi lingkungan</b> PF.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> Penulis tidak membantah peran peternakan; datanya justru jadi dasar argumen.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Tidak ada klaim krisis air global \"tuntas\" di semua sektor.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Langkah biokimia sel ragi tidak dibahas.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Kerugian peternak ada di paragraf 3 dan bukan karena kebijakan konservasi.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 7,
    "passage": "pf",
    "text": "Based on its overarching content and structural recommendations, for which of the following audiences would this passage be most useful?",
    "options": [
      "Molecular biologists searching for specific laboratory protocols to edit microbial DNA sequences.",
      "Public policy analysts formulating comprehensive transition frameworks for agricultural sustainability and rural welfare.",
      "Corporate patent attorneys aiming to enforce aggressive intellectual property protections over engineered genetic strains.",
      "Smallholder pastoralists seeking daily practical tips on enhancing animal feed conversion efficiency.",
      "Retail investors evaluating immediate quarterly financial performance metrics of public food-tech stocks."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: Precision Fermentation</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Teks ditutup dengan <b>rekomendasi tata kelola</b> (investasi publik, platform open-source, pelatihan ulang petani). Paling bermanfaat bagi <b>analis kebijakan publik</b>.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Tidak ada protokol laboratorium.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks justru mengkritik monopoli IP.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Tidak ada tips praktis harian untuk peternak.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Tidak ada data kinerja keuangan saham.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 8,
    "passage": "pf",
    "text": "How does the author strategically structure their discourse across the passage to achieve their communicative goal?",
    "options": [
      "By initially dismissing the environmental benefits of biotechnology, contrasting them with pastoral traditions, and advocating for an immediate return to ancestral farming.",
      "By presenting an emerging technological breakthrough, validating its environmental merits, delineating its systemic socioeconomic pitfalls, and prescribing constructive policy interventions.",
      "By detailing personal narratives of displaced farmers, establishing corporate malfeasance through investigative data, and calling for a blanket ban on cellular agriculture.",
      "By alternating between strict numerical data and ethical philosophy in every sentence to avoid taking any definitive stand on food systems.",
      "By outlining historical agricultural paradigms, demonstrating that modern innovations consistently fail, and urging the preservation of conventional livestock subsidies."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: Precision Fermentation</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Urutan teks: <b>P1 teknologi baru → P2 manfaat lingkungan → P3 risiko sosioekonomi → P4 kebijakan</b>. Persis dengan opsi B.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Penulis tidak menolak manfaat lingkungan dan tidak ingin kembali ke pertanian leluhur.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Tidak ada narasi personal atau tuntutan larangan total.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Penulis punya sikap jelas (tesis di paragraf 4).</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Tidak ada pernyataan inovasi selalu gagal atau pembelaan subsidi ternak.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 9,
    "passage": "mikoriza",
    "text": "According to paragraph 1, what do soil fungi receive from the host trees in the symbiotic mycorrhizal relationship?",
    "options": [
      "Nitrogen and phosphorus gathered from adjacent soil layers",
      "Defensive biochemicals designed to deter invasive pests",
      "Water absorbed through deep underground root systems",
      "Carbohydrates produced through the process of photosynthesis",
      "Structural support to withstand severe subterranean compaction"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Bacaan: Jaringan Jamur Mikoriza</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf 1: fungi menerima <b>karbohidrat hasil fotosintesis</b> dari pohon inang, dan sebagai imbalan memberi <b>air &amp; mineral</b>.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Nitrogen &amp; fosfor justru disuplai oleh fungi ke pohon.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Biokimia pertahanan dibagi antar pohon, bukan diterima fungi.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Air juga diberikan fungi ke pohon (arah sebaliknya).</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Dukungan struktural tidak disebut di teks.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 10,
    "passage": "mikoriza",
    "text": "The pronoun \"they\" in paragraph 2 (sentence 3) refers to...",
    "options": [
      "older, mature trees",
      "crown canopies",
      "mycorrhizal lattices",
      "younger saplings",
      "fungal filaments"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Bacaan: Jaringan Jamur Mikoriza</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Kalimat 2: \"these arboreal giants generate a surplus of carbon\" → kalimat 3: \"<b>they</b> shunt…\". Jadi <b>they = pohon tua dewasa</b> (hub/mother trees) yang menyalurkan kelebihan karbon ke bibit.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> Kanopi hanya bagian pohon, bukan pelaku yang menyalurkan.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Lattice adalah jalurnya (\"through the mycorrhizal lattice\").</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Saplings adalah penerima karbon.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Filamen jamur bukan penghasil karbon berlebih.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 11,
    "passage": "mikoriza",
    "text": "The word \"shunt\" in paragraph 2 is closest in meaning to...",
    "options": [
      "divert",
      "dissipate",
      "withhold",
      "manufacture",
      "conceal"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Bacaan: Jaringan Jamur Mikoriza</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p><b>Shunt = mengalihkan / menyalurkan</b> ke arah lain. Pohon besar mengalihkan sebagian karbon ke bibit di bawahnya. Sinonim terdekat: <b>divert</b>.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> dissipate = menghamburkan / lenyap.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> withhold = menahan (arah berlawanan).</p>\n<p class=\"ev no\"><b>Pilihan D.</b> manufacture = memproduksi.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> conceal = menyembunyikan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 12,
    "passage": "mikoriza",
    "text": "Based on paragraph 3, the depiction of the mycorrhizal network as a \"dynamic biological marketplace governed by complex trade-offs\" primarily signifies that...",
    "options": [
      "resource allocation is contingent upon conditional exchanges, where organisms calibrate their investments according to the returns they obtain",
      "mature hub trees unilaterally dominate underground commerce by coercively suppressing nutrient access to less vigorous vegetation",
      "the interaction operates purely as a cooperative welfare system designed to distribute minerals equally across all woodland species",
      "parasitic organisms systematically control the network by overriding fungal decision-making and exhausting tree carbohydrate reserves",
      "fungal symbionts prioritize long-term ecosystem stability over short-term nutritional gains when trading with diverse host species"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Bacaan: Jaringan Jamur Mikoriza</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf 3: fungi memberi nutrisi lebih ke tanaman yang menyumbang <b>lebih banyak sukrosa</b>. Artinya alokasi sumber daya itu <b>bersyarat &amp; timbal balik</b>, seperti pasar, bukan kebaikan murni.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> Hub trees tidak \"menindas\"; yang selektif justru fungi.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks menegaskan interaksi tidak murni altruistik dan tidak dibagi rata.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Parasit hanya sebagian kecil dan tidak mengendalikan jaringan.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Tidak ada bukti fungi mengutamakan stabilitas jangka panjang.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 13,
    "passage": "deext",
    "text": "Which of the following best describes the author's overall attitude toward de-extinction technology?",
    "options": [
      "Enthusiastic and fully supportive of using genetic interventions to reverse past ecological destruction",
      "Cautious and skeptical, arguing that prioritizing high-tech resurrection over existing conservation is misguided",
      "Hostile and dismissive of synthetic biology as an entirely invalid branch of scientific inquiry",
      "Detached and strictly neutral, withholding personal judgment while outlining both sides equally",
      "Overly optimistic that proxy organisms will easily thrive within altered modern ecosystems"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: De-Extinction</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Penulis mengakui capaian teknisnya <b>\"formidable\"</b>, tapi menegaskan itu <b>bukan pengganti konservasi sejati</b>. Prioritas harus tetap pada <b>pelestarian</b> yang ada. Nadanya <b>hati-hati &amp; skeptis</b>, bukan menolak sains.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Penulis tidak antusias; ia menyebutnya \"hubris\" dan \"perilous mistake\".</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Tidak memusuhi sains: kemampuan teknisnya diakui sebagai hebat.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Tidak netral; ada penilaian tegas dan kata-kata bernada kuat.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Justru ragu: ekosistem modern mungkin tak lagi mendukung peran leluhur.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 14,
    "passage": "deext",
    "text": "In the first paragraph, the author refers to technological optimism as 'undeniably seductive' primarily to ....",
    "options": [
      "concede the initial appeal of the proponents' concept before unveiling its underlying complications",
      "persuade readers to contribute financially to gene-editing research centers",
      "celebrate the human ability to completely undo past environmental damage",
      "mock the public for being gullible when evaluating scientific claims",
      "demonstrate that technological fixes are inherently superior to traditional ecological methods"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Bacaan: De-Extinction</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Penulis lebih dulu <b>mengakui daya tarik</b> gagasan itu (konsesi), lalu paragraf 2 dibuka dengan <b>\"However\"</b> untuk membongkar masalah di baliknya.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> Tidak ada ajakan donasi.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Penulis menolak anggapan \"dosa ekologis\" bisa dihapus begitu saja.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Tidak ada ejekan kepada publik.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Penulis tidak menyimpulkan teknologi lebih unggul dari cara ekologis.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 15,
    "passage": "deext",
    "text": "What rhetorical strategy does the author primarily employ in the second paragraph to challenge the feasibility of de-extinction?",
    "options": [
      "Citing survey data showing widespread public rejection of genetic cloning",
      "Detailing ecological hurdles and the diversion of vital conservation resources",
      "Recounting personal experiences of working with endangered Asian elephants",
      "Referencing classic literature to illustrate the moral downfalls of modern science",
      "Explaining the technical step-by-step procedures involved in CRISPR DNA splicing"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: De-Extinction</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf 2 memaparkan <b>hambatan ekologis</b> (replika tak sempurna, habitat sudah berubah) dan <b>pengalihan dana</b> dari krisis biodiversitas yang lebih mendesak.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Tidak ada data survei.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Tidak ada pengalaman pribadi penulis.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Tidak ada rujukan sastra klasik.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Langkah teknis CRISPR tidak dijelaskan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 16,
    "passage": "deext",
    "text": "Based on the final paragraph, what perspective does the author convey regarding genuine ecological stewardship?",
    "options": [
      "It should depend primarily on high-tech interventions to replace damaged natural ecosystems.",
      "It demands humility, protection of natural habitats, and safeguarding currently living species.",
      "It requires prioritizing ambitious biotechnology over existing environmental laws.",
      "It encourages scientists to disregard existing species in favor of reviving prehistoric creatures.",
      "It considers the revival of extinct organisms an urgent moral duty that humanity must fulfill."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: De-Extinction</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf akhir: stewardship sejati menuntut <b>kerendahan hati, pelestarian habitat, dan mitigasi ancaman saat ini</b>, bukan \"penyelamatan\" teknologi yang teatrikal.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Penulis menolak ketergantungan pada teknologi tinggi.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Tidak ada pernyataan biotek di atas hukum lingkungan.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Penulis justru menekankan perlindungan spesies yang masih hidup.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Menghidupkan spesies punah bukan kewajiban moral mendesak menurut penulis.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 17,
    "passage": "trophic",
    "text": "Based on the mechanism of ecological recovery described in the passage, which of the following corporate scenarios is most analogous to the reintroduction of gray wolves?",
    "options": [
      "A company injecting capital into several underperforming departments simultaneously to stimulate cross-functional collaboration and drive revenue.",
      "A corporation instituting a strict auditing oversight that curbs unchecked budget hogging by a dominant division, enabling resource-starved smaller teams to flourish.",
      "An organization conducting voluntary feedback workshops so middle managers can express grievances without fear of losing their jobs.",
      "A business enterprise merging two competing departments to form an entirely new unit tasked with exploring innovative product ideas.",
      "A firm eliminating its lower-tier customer service positions to invest exclusively in artificial intelligence automation software."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Bacaan: Trophic Cascade: Serigala Yellowstone</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Mekanisme di teks: predator puncak <b>menekan konsumen dominan yang tak terkendali</b> (rusa) → sumber daya pulih → seluruh tingkat ekosistem ikut pulih. Analoginya: <b>audit ketat membatasi divisi dominan</b> yang menyedot anggaran → tim kecil bisa berkembang.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Suntik modal ke banyak departemen: tidak ada pihak dominan yang dibatasi.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Workshop sukarela tidak menekan pihak dominan.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Penggabungan = membentuk unit baru, bukan mengendalikan konsumen dominan.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Memangkas posisi demi AI tidak memulihkan keseimbangan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 18,
    "passage": "vfarm",
    "text": "According to the passage, which of the following statements is TRUE regarding vertical farming?",
    "options": [
      "It requires significantly more water than conventional outdoor farming due to artificial misting.",
      "It operates without monitoring humidity and gas concentrations because of enclosed structures.",
      "It eliminates the need for chemical synthetic pesticides by growing crops in shielded indoor environments.",
      "It relies entirely on natural sunlight directed through transparent glass ceilings to nourish crops.",
      "It has already achieved low electrical energy consumption through cutting-edge LED technologies."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Bacaan: Urban Vertical Farming</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf 2: ruang tertutup melindungi tanaman dari cuaca &amp; hama, sehingga <b>tidak perlu pestisida kimia sintetis</b>. Soal \"TRUE\" = cari yang <b>persis sesuai teks</b>.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Justru hemat air hingga 95%.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Suhu, kelembapan &amp; gas dipantau ketat.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Memakai lampu LED buatan, bukan sinar matahari.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Konsumsi listrik masih sangat besar; itulah kendala utamanya.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 19,
    "passage": "neuro",
    "text": "How is the passage structured across its three paragraphs?",
    "options": [
      "It introduces a theoretical hypothesis, tests it using empirical statistical models, and refutes the premise based on negative experimental results.",
      "It describes a historical problem, delineates economic reasons for its occurrence, and recommends policy changes to solve it.",
      "It presents a long-standing scientific belief, introduces a paradigm shift that overturns it, and illustrates practical applications stemming from the new discovery.",
      "It outlines two competing theories of neurogenesis, weighs their respective merits objectively, and concludes that both are equally valid.",
      "It recounts a personal medical anecdote, generalizes the phenomenon to human biology, and questions the safety of modern neural interventions."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Bacaan: Neuroplasticity</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p><b>P1</b> kepercayaan lama (otak statis) → <b>P2</b> paradigma baru yang membantahnya (neuroplastisitas) → <b>P3</b> penerapan praktis (rehabilitasi stroke, terapi stimulasi otak).</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Tidak ada pengujian model statistik atau hasil eksperimen negatif.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Bukan soal sebab ekonomi atau kebijakan.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Tidak ada dua teori yang dinilai setara.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Tidak ada anekdot medis pribadi dan tidak mempertanyakan keamanan terapi.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 20,
    "passage": "av",
    "text": "What can be logically inferred from the author's argument regarding the broader adoption of autonomous vehicles?",
    "options": [
      "Technological advancements in lidar sensors will completely resolve algorithmic misinterpretations of human pedestrian gestures within the next few years.",
      "Autonomous vehicles will fail to reduce accidents even after all human-driven vehicles are permanently banned from public roadways.",
      "The convenience of autonomous vehicles could unintentionally incentivize longer commutes and counteract urban planning efforts aimed at reducing road congestion.",
      "Municipalities will readily decrease roadway infrastructure budgets as vehicle automation naturally diminishes wear and tear on pavements.",
      "Human error accounts for less than 90 percent of traffic incidents once external environmental conditions are factored into safety statistics."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Bacaan: Autonomous Vehicles</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><p>Paragraf 3: transit otonom yang nyaman <b>menurunkan \"biaya\" komuter</b> → orang pindah ke pinggiran → <b>jarak tempuh naik &amp; kemacetan memburuk</b>. Itu kesimpulan logis (inferensi) dari argumen penulis.</p></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Paragraf 2: algoritma masih kesulitan menghadapi kasus tak terduga.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Teks tidak bilang AV gagal mengurangi kecelakaan.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Teks justru menyebut infrastruktur jalan makin terbebani.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Angka 90% adalah klaim di teks dan tidak dibantah.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
