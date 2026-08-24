// Credit Share By MangzAbi
// Contact MangzAbi @CsMangzAbiBot
// Watermax © By MangzAbi
// No Jual Anjing ini Free
// No hapus Credit ngaku Ngaku pencipta Wleee Miskin May Dipuja Doang Kke Nya Miga Mati Anjing MakPakNya Yabg Jual & Ngaku Ngaku Dev Sc ini
// NODELETED CREDIT & Wtermax

const express = require('express');
const router = express.Router();
const prophets = [
  {
    id: 1,
    name: 'آدم',
    englishName: 'Adam',
    title: 'Nabi Adam AS',
    story: 'Adam adalah manusia pertama yang diciptakan oleh Allah dari tanah. Allah mengajarkan kepadanya nama-nama segala sesuatu dan memerintahkan malaikat untuk sujud kepadanya. Adam tinggal di surga bersama Hawa, namun mereka tergoda oleh iblis dan memakan buah terlarang. Mereka kemudian diturunkan ke bumi dan bertaubat kepada Allah.',
    fullStory: 'Adam AS adalah nabi pertama dan manusia pertama yang diciptakan Allah. Allah menciptakan Adam dari tanah liat dan meniupkan roh kepadanya. Allah mengajarkan Adam semua nama dan memerintahkan malaikat untuk sujud kepadanya, kecuali Iblis yang sombong. Adam dan Hawa tinggal di surga dengan kebahagiaan, namun Iblis membisiki mereka untuk memakan buah terlarang. Setelah memakannya, mereka menyadari kesalahan dan bertaubat. Allah menerima taubat mereka dan menurunkan mereka ke bumi sebagai khalifah.',
    lessons: ['Ketaatan kepada Allah', 'Menjauhi godaan setan', 'Bertobat atas kesalahan'],
    references: ['Al-Baqarah: 30-39', 'Al-A\'raf: 19-25']
  },
  {
    id: 2,
    name: 'إدريس',
    englishName: 'Idris',
    title: 'Nabi Idris AS',
    story: 'Idris adalah nabi yang diangkat ke derajat tinggi oleh Allah. Beliau adalah orang pertama yang menulis dengan pena dan pandai dalam ilmu pengetahuan.',
    fullStory: 'Nabi Idris AS adalah keturunan keenam dari Adam. Beliau dikenal sebagai orang yang sangat sabar dan bijaksana. Allah mengangkatnya ke tempat yang tinggi dan memberinya ilmu pengetahuan. Beliau adalah nabi pertama yang menulis dengan pena dan mengajarkan manusia tentang astronomi dan matematika. Idris senantiasa beribadah dan memuji Allah siang dan malam.',
    lessons: ['Ilmu pengetahuan', 'Kesabaran', 'Ketekunan dalam ibadah'],
    references: ['Maryam: 56-57']
  },
  {
    id: 3,
    name: 'نوح',
    englishName: 'Noah',
    title: 'Nabi Nuh AS',
    story: 'Nuh diutus kepada kaumnya yang menyembah berhala. Ia berdakwah selama 950 tahun namun hanya sedikit yang beriman. Allah memerintahkannya membuat bahtera dan menyelamatkan orang-orang beriman dari banjir besar.',
    fullStory: 'Nabi Nuh AS diutus kepada kaumnya yang telah menyembah berhala dan melakukan kemaksiatan. Beliau berdakwah selama 950 tahun dengan sabar, namun hanya sedikit yang beriman. Allah memerintahkan Nuh untuk membuat bahtera besar. Ketika azab berupa banjir besar datang, Nuh membawa serta orang-orang beriman dan sepasang hewan ke dalam bahtera. Banjir menenggelamkan semua orang kafir, termasuk salah satu anak Nuh yang tidak beriman. Setelah banjir surut, bahtera berlabuh di Bukit Judi.',
    lessons: ['Kesabaran dalam dakwah', 'Tawakkal kepada Allah', 'Ketaatan pada perintah Allah'],
    references: ['Al-A\'raf: 59-64', 'Hud: 25-49', 'Al-Mu\'minun: 23-30']
  },
  {
    id: 4,
    name: 'هود',
    englishName: 'Hud',
    title: 'Nabi Hud AS',
    story: 'Hud diutus kepada kaum 'Ad yang sombong dan kuat. Mereka ingkar dan ditimpa azab berupa angin topan yang dahsyat selama 7 malam 8 hari.',
    fullStory: 'Nabi Hud AS diutus kepada kaum 'Ad yang tinggal di daerah Ahqaf (Yaman). Mereka adalah kaum yang kuat dan sombong, mereka membangun bangunan tinggi dan patung-patung. Hud mengajak mereka menyembah Allah dan meninggalkan berhala, namun mereka menolak dan menantang azab. Allah mengirimkan angin topan yang dahsyat yang menghancurkan mereka selama 7 malam 8 hari. Hanya Hud dan orang-orang beriman yang selamat.',
    lessons: ['Jangan sombong dengan kekuatan', 'Taat pada Allah', 'Sabar menghadapi penolakan'],
    references: ['Al-A\'raf: 65-72', 'Hud: 50-60']
  },
  {
    id: 5,
    name: 'صالح',
    englishName: 'Saleh',
    title: 'Nabi Shalih AS',
    story: 'Shalih diutus kepada kaum Tsamud. Mereka meminta mukjizat unta betina dari batu. Unta itu lahir namun mereka membunuhnya dan ditimpa azab.',
    fullStory: 'Nabi Shalih AS diutus kepada kaum Tsamud yang tinggal di daerah Hijr (Madain Shalih). Mereka adalah kaum yang pandai memahat rumah di gunung. Mereka meminta mukjizat, dan Allah mengeluarkan unta betina dari batu. Namun mereka membunuh unta tersebut dan menantang Shalih. Allah mengazab mereka dengan suara keras yang menghancurkan mereka, kecuali Shalih dan orang-orang beriman.',
    lessons: ['Menjaga amanah', 'Menghormati mukjizat Allah', 'Tidak melampaui batas'],
    references: ['Al-A\'raf: 73-79', 'Hud: 61-68']
  },
  {
    id: 6,
    name: 'إبراهيم',
    englishName: 'Abraham',
    title: 'Nabi Ibrahim AS',
    story: 'Ibrahim adalah bapak para nabi. Ia menghancurkan berhala dan diuji dengan perintah menyembelih putranya Ismail. Ia juga membangun Ka\'bah bersama Ismail.',
    fullStory: 'Nabi Ibrahim AS adalah bapak monoteisme dan bapak para nabi. Beliau lahir di Babilonia dan menghancurkan berhala-berhala kaumnya. Raja Namrud membakarnya, tetapi api menjadi dingin atas izin Allah. Ibrahim diuji dengan perintah menyembelih putranya Ismail, dan ia lulus ujian itu dengan iman yang kuat. Bersama Ismail, Ibrahim membangun Ka\'bah di Mekkah dan menyeru manusia untuk berhaji. Ibrahim juga memiliki putra Ishaq yang menjadi nenek moyang nabi-nabi Bani Israil.',
    lessons: ['Ketaatan mutlak pada Allah', 'Keberanian menegakkan kebenaran', 'Pengorbanan dalam ketaatan'],
    references: ['Al-Baqarah: 124-140', 'Ash-Shaffat: 83-113', 'Al-Anbiya: 51-73']
  },
  {
    id: 7,
    name: 'لوط',
    englishName: 'Lot',
    title: 'Nabi Luth AS',
    story: 'Luth diutus kepada kaum Sodom yang melakukan perbuatan keji. Allah menghancurkan mereka dengan hujan batu dan membalikkan negeri mereka.',
    fullStory: 'Nabi Luth AS adalah keponakan Ibrahim yang diutus kepada kaum Sodom dan Gomorrah. Kaum ini melakukan perbuatan keji dan homoseksual. Luth mengajak mereka bertaubat namun mereka menolak dan mengejeknya. Allah mengirimkan malaikat untuk menghancurkan mereka. Negeri mereka dibalikkan dan ditimpa hujan batu. Hanya Luth dan keluarganya yang selamat, kecuali istrinya yang durhaka.',
    lessons: ['Menjauhi perbuatan keji', 'Mendakwahkan kebenaran', 'Melindungi keluarga dari azab'],
    references: ['Al-A\'raf: 80-84', 'Hud: 77-83', 'Al-Anbiya: 71-75']
  },
  {
    id: 8,
    name: 'إسماعيل',
    englishName: 'Ishmael',
    title: 'Nabi Ismail AS',
    story: 'Ismail adalah putra Ibrahim yang hampir disembelih. Ia sabar dan taat. Bersama ayahnya membangun Ka\'bah dan menjadi nenek moyang orang Arab.',
    fullStory: 'Nabi Ismail AS adalah putra Ibrahim dari Siti Hajar. Beliau adalah anak yang sabar dan taat. Ketika Ibrahim diperintahkan menyembelihnya, Ismail dengan ikhlas menerima. Allah menggantinya dengan seekor domba. Ismail bersama ayahnya membangun Ka\'bah dan menjadi nenek moyang bangsa Arab. Beliau juga memiliki 12 putra yang menjadi cikal bakal suku-suku Arab.',
    lessons: ['Ketaatan pada orang tua', 'Kesabaran dalam ujian', 'Pengorbanan untuk Allah'],
    references: ['Ash-Shaffat: 100-113', 'Al-Baqarah: 125-129']
  },
  {
    id: 9,
    name: 'إسحاق',
    englishName: 'Isaac',
    title: 'Nabi Ishaq AS',
    story: 'Ishaq adalah putra Ibrahim dan Sarah yang lahir di usia tua. Ia menjadi nabi dan nenek moyang nabi-nabi Bani Israil termasuk Ya\'qub.',
    fullStory: 'Nabi Ishaq AS adalah putra Ibrahim dari Sarah yang lahir ketika Ibrahim berusia 100 tahun. Allah memberikan kabar gembira kelahiran Ishaq meskipun Sarah sudah tua. Ishaq menjadi nabi dan memiliki putra bernama Ya\'qub yang juga menjadi nabi. Dari keturunan Ishaq lahirlah nabi-nabi Bani Israil, termasuk Musa, Daud, Sulaiman, dan Isa.',
    lessons: ['Kekuasaan Allah atas segalanya', 'Kesabaran menanti janji Allah', 'Keberkahan keturunan saleh'],
    references: ['Ash-Shaffat: 112-113', 'Al-Baqarah: 133-140']
  },
  {
    id: 10,
    name: 'يعقوب',
    englishName: 'Jacob',
    title: 'Nabi Ya\'qub AS',
    story: 'Ya\'qub adalah putra Ishaq yang memiliki 12 putra, salah satunya Yusuf. Ia sangat mencintai Yusuf dan menjadi sedih ketika Yusuf hilang.',
    fullStory: 'Nabi Ya\'qub AS adalah putra Ishaq dan cucu Ibrahim. Beliau memiliki 12 putra, termasuk Yusuf yang paling dicintainya. Saudara-saudara Yusuf iri dan membuang Yusuf ke sumur. Ya\'qub bersedih hingga matanya buta. Namun akhirnya Yusuf ditemukan kembali di Mesir sebagai orang terkemuka. Ya\'qub pindah ke Mesir dan wafat di sana. Beliau juga dikenal dengan nama Isra\'il, dan keturunannya disebut Bani Israil.',
    lessons: ['Kasih sayang orang tua', 'Kesabaran menghadapi cobaan', 'Persaudaraan sesama'],
    references: ['Yusuf: 1-111', 'Al-Baqarah: 132-136']
  },
  {
    id: 11,
    name: 'يوسف',
    englishName: 'Joseph',
    title: 'Nabi Yusuf AS',
    story: 'Yusuf adalah putra Ya\'qub yang dibuang oleh saudara-saudaranya. Ia menjadi budak, dipenjara, kemudian menjadi penguasa Mesir karena kemampuannya menafsirkan mimpi.',
    fullStory: 'Nabi Yusuf AS adalah putra Ya\'qub yang memiliki keistimewaan. Saudara-saudaranya iri dan membuangnya ke sumur. Ia ditemukan oleh kafilah dan dijual menjadi budak di Mesir. Istri penguasa Mesir (Zulaikha) menggoda Yusuf, namun ia menolak. Yusuf dipenjara, namun Allah memberinya kemampuan menafsirkan mimpi. Ia menafsirkan mimpi raja Mesir dan diangkat menjadi bendahara negara. Keluarganya kemudian datang ke Mesir dan berkumpul kembali.',
    lessons: ['Kesabaran dalam penderitaan', 'Menjaga kehormatan', 'Memaafkan kesalahan orang lain'],
    references: ['Yusuf: 1-111']
  },
  {
    id: 12,
    name: 'أيوب',
    englishName: 'Job',
    title: 'Nabi Ayyub AS',
    story: 'Ayyub adalah nabi yang sangat sabar. Ia diuji dengan kehilangan harta, anak, dan kesehatan, namun tetap bersabar dan beriman kepada Allah.',
    fullStory: 'Nabi Ayyub AS adalah nabi yang kaya raya dan memiliki banyak anak. Allah mengujinya dengan kehilangan semua hartanya, anak-anaknya, dan menderita penyakit kulit yang parah. Namun Ayyub tetap sabar dan beriman. Ia tidak pernah mengeluh kecuali memohon kepada Allah. Setelah ujian yang panjang, Allah menyembuhkannya dan mengganti semua yang hilang dengan yang lebih baik.',
    lessons: ['Kesabaran dalam ujian', 'Tawakkal kepada Allah', 'Iman yang kuat di saat sulit'],
    references: ['Al-Anbiya: 83-84', 'Shaad: 41-44']
  },
  {
    id: 13,
    name: 'شعيب',
    englishName: 'Shu\'aib',
    title: 'Nabi Syu\'aib AS',
    story: 'Syu\'aib diutus kepada kaum Madyan yang curang dalam timbangan. Mereka ditimpa azab gempa bumi dan awan panas.',
    fullStory: 'Nabi Syu\'aib AS diutus kepada kaum Madyan yang tinggal di daerah dekat Laut Merah. Mereka terkenal curang dalam menimbang dan takaran. Syu\'aib mengajak mereka berlaku adil dan menyembah Allah, namun mereka menolak. Allah mengazab mereka dengan gempa bumi dan awan panas yang membakar. Syu\'aib dan orang-orang beriman selamat.',
    lessons: ['Kejujuran dalam berdagang', 'Keadilan dalam bertransaksi', 'Takut akan azab Allah'],
    references: ['Al-A\'raf: 85-93', 'Hud: 84-95']
  },
  {
    id: 14,
    name: 'موسى',
    englishName: 'Moses',
    title: 'Nabi Musa AS',
    story: 'Musa diutus kepada Fir\'aun untuk membebaskan Bani Israil. Ia diberi mukjizat tongkat ular dan tangan putih. Allah menurunkan Taurat kepadanya.',
    fullStory: 'Nabi Musa AS adalah nabi yang diutus kepada Fir\'aun dan Bani Israil. Beliau lahir ketika Bani Israil ditindas, dan diletakkan di sungai Nil oleh ibunya. Musa ditemukan oleh istri Fir\'aun dan dibesarkan di istana. Setelah membunuh seseorang secara tidak sengaja, Musa pergi ke Madyan dan menikah. Allah memanggilnya di bukit Sinai dan memberinya mukjizat tongkat menjadi ular dan tangan putih. Musa menghadapi Fir\'aun dan menunjukkan mukjizat-mukjizat, namun Fir\'aun tetap ingkar. Bani Israil akhirnya dibebaskan dan menyeberangi Laut Merah, sementara Fir\'aun tenggelam. Allah menurunkan Taurat kepada Musa sebagai petunjuk bagi Bani Israil.',
    lessons: ['Keberanian menghadapi kezaliman', 'Tawakkal kepada Allah', 'Menegakkan kebenaran'],
    references: ['Al-A\'raf: 103-162', 'Al-Qasas: 1-46', 'Thaha: 1-98']
  },
  {
    id: 15,
    name: 'هارون',
    englishName: 'Aaron',
    title: 'Nabi Harun AS',
    story: 'Harun adalah saudara Musa yang diangkat menjadi nabi untuk membantunya berdakwah. Ia membantu Musa menghadapi Fir\'aun dan Bani Israil.',
    fullStory: 'Nabi Harun AS adalah saudara Musa yang diangkat Allah menjadi nabi untuk membantu Musa. Beliau fasih berbicara, sehingga menjadi juru bicara Musa di hadapan Fir\'aun. Harun menjaga Bani Israil ketika Musa pergi ke gunung Sinai. Namun Bani Israil membuat patung sapi emas, dan Harun berusaha mencegahnya. Harun wafat sebelum Musa dan dimakamkan di gunung.',
    lessons: ['Membantu saudara dalam kebaikan', 'Kesabaran menghadapi kaum yang sesat', 'Menjaga amanah'],
    references: ['Thaha: 29-36', 'Al-A\'raf: 142-148']
  },
  {
    id: 16,
    name: 'داود',
    englishName: 'David',
    title: 'Nabi Daud AS',
    story: 'Daud adalah nabi yang juga seorang raja. Ia diberi mukjizat melunakkan besi dan kemampuan melantunkan dzikir. Allah menurunkan Zabur kepadanya.',
    fullStory: 'Nabi Daud AS adalah nabi dan raja Bani Israil. Beliau terkenal dengan keberaniannya mengalahkan Jalut (Goliath) dengan ketapel. Allah memberinya mukjizat melunakkan besi dan membuat baju besi. Daud memiliki suara yang merdu dan gunung-gunung serta burung-burung bertasbih bersamanya. Allah menurunkan kitab Zabur kepada Daud. Beliau juga seorang pemimpin yang adil dan bijaksana.',
    lessons: ['Keberanian dan tawakkal', 'Memanfaatkan nikmat Allah', 'Keadilan dalam memimpin'],
    references: ['Al-Anbiya: 78-80', 'Shaad: 17-26', 'An-Naml: 15-16']
  },
  {
    id: 17,
    name: 'سليمان',
    englishName: 'Solomon',
    title: 'Nabi Sulaiman AS',
    story: 'Sulaiman adalah putra Daud yang juga nabi dan raja. Ia diberi kekuasaan atas jin, manusia, dan hewan. Ia dapat memahami bahasa hewan.',
    fullStory: 'Nabi Sulaiman AS adalah putra Daud yang diangkat menjadi nabi dan raja. Allah memberinya kekuasaan yang luar biasa, termasuk menguasai jin, manusia, dan hewan. Sulaiman dapat berbicara dengan burung dan memahami bahasa semut. Beliau membangun baitul maqdis dan memiliki pasukan yang terdiri dari jin dan manusia. Sulaiman juga mengajarkan ilmu dan kebijaksanaan.',
    lessons: ['Kekuasaan adalah amanah', 'Mensyukuri nikmat Allah', 'Kebijaksanaan dalam memimpin'],
    references: ['An-Naml: 15-44', 'Shaad: 30-40', 'Saba\' 12-14']
  },
  {
    id: 18,
    name: 'إلياس',
    englishName: 'Elijah',
    title: 'Nabi Ilyas AS',
    story: 'Ilyas diutus kepada kaum Israel yang menyembah berhala Ba\'al. Ia menyeru mereka menyembah Allah dan menunjukkan mukjizat.',
    fullStory: 'Nabi Ilyas AS diutus kepada kaum Israel di kota Ba\'labak yang menyembah berhala Ba\'al. Ilyas mengajak mereka kembali menyembah Allah dan meninggalkan berhala. Ia menunjukkan mukjizat dengan meminta hujan setelah musim kemarau. Namun kebanyakan kaumnya menolak dan tetap menyembah berhala. Ilyas terus berdakwah dengan kesabaran.',
    lessons: ['Menjauhi kemusyrikan', 'Keteguhan dalam dakwah', 'Kekuasaan Allah atas alam'],
    references: ['Ash-Shaffat: 123-132']
  },
  {
    id: 19,
    name: 'اليسع',
    englishName: 'Elisha',
    title: 'Nabi Ilyasa AS',
    story: 'Ilyasa adalah penerus Ilyas yang melanjutkan dakwah kepada Bani Israil. Ia mengajak mereka bertaubat dan menyembah Allah.',
    fullStory: 'Nabi Ilyasa AS adalah nabi yang diangkat setelah Ilyas. Beliau melanjutkan misi dakwah kepada Bani Israil dan mengajak mereka bertaubat. Ilyasa menunjukkan mukjizat dan mengingatkan kaumnya akan azab Allah jika mereka tetap ingkar. Beliau termasuk orang-orang yang saleh dan beriman.',
    lessons: ['Melanjutkan perjuangan nabi sebelumnya', 'Kesabaran dalam dakwah', 'Kasih sayang kepada kaum'],
    references: ['Al-Anbiya: 85-86', 'Shaad: 48']
  },
  {
    id: 20,
    name: 'ذو الكفل',
    englishName: 'Dhul-Kifl',
    title: 'Nabi Dzulkifli AS',
    story: 'Dzulkifli adalah nabi yang dikenal dengan kesabarannya. Ia termasuk orang-orang yang saleh dan ahli ibadah.',
    fullStory: 'Nabi Dzulkifli AS adalah nabi yang saleh dan sabar. Beliau disebutkan dalam Al-Quran bersama dengan nabi-nabi lainnya sebagai orang-orang yang saleh. Dzulkifli tekun beribadah dan mengajak kaumnya kepada kebaikan. Beliau termasuk dalam golongan orang-orang yang diberi rahmat oleh Allah.',
    lessons: ['Kesabaran dalam ibadah', 'Ketekunan dalam beramal saleh', 'Menjadi teladan bagi kaum'],
    references: ['Al-Anbiya: 85-86', 'Shaad: 48']
  },
  {
    id: 21,
    name: 'يونس',
    englishName: 'Jonah',
    title: 'Nabi Yunus AS',
    story: 'Yunus diutus kepada kaum Ninawa. Ia meninggalkan mereka sebelum mendapat izin Allah dan ditelan ikan paus. Ia bertaubat dan kembali berdakwah.',
    fullStory: 'Nabi Yunus AS (Jonah) diutus kepada kaum Ninawa di Irak. Kaumnya ingkar, dan Yunus meninggalkan mereka tanpa izin Allah. Ia naik kapal dan dilempar ke laut, lalu ditelan ikan paus. Di dalam perut ikan, Yunus berdoa dan bertaubat. Allah mengeluarkannya dan mengirimnya kembali ke kaum Ninawa. Kaumnya akhirnya beriman dan Allah mengangkat azab dari mereka.',
    lessons: ['Kesabaran dalam dakwah', 'Bertobat atas kesalahan', 'Rahmat Allah yang luas'],
    references: ['Al-Anbiya: 87-88', 'Yunus: 98', 'Ash-Shaffat: 139-148']
  },
  {
    id: 22,
    name: 'زكريا',
    englishName: 'Zechariah',
    title: 'Nabi Zakariya AS',
    story: 'Zakariya adalah nabi yang memelihara Maryam. Ia berdoa untuk mendapat keturunan dan diberi putra bernama Yahya di usia tua.',
    fullStory: 'Nabi Zakariya AS adalah nabi yang memelihara Maryam (Maria) di Baitul Maqdis. Setiap kali Zakariya masuk ke mihrab Maryam, ia mendapati makanan di sisinya. Zakariya berdoa untuk mendapat keturunan meskipun sudah tua dan istrinya mandul. Allah mengabulkan doanya dan memberinya putra bernama Yahya (Yohanes Pembaptis). Zakariya sangat bersyukur atas karunia tersebut.',
    lessons: ['Keyakinan pada kekuasaan Allah', 'Kesabaran menanti janji Allah', 'Bersyukur atas nikmat'],
    references: ['Ali-Imran: 37-41', 'Maryam: 1-11']
  },
  {
    id: 23,
    name: 'يحيى',
    englishName: 'John the Baptist',
    title: 'Nabi Yahya AS',
    story: 'Yahya adalah putra Zakariya yang diberikan hikmah sejak kecil. Ia adalah nabi yang zuhud dan menjadi pembawa berita tentang Isa.',
    fullStory: 'Nabi Yahya AS adalah putra Zakariya yang diberikan hikmah oleh Allah sejak kecil. Beliau adalah nabi yang zuhud dan tekun beribadah. Yahya hidup sederhana di padang pasir dan mengajak kaumnya bertaubat. Beliau juga menjadi pembawa berita tentang kedatangan Nabi Isa AS. Yahya wafat sebagai syahid karena menentang penguasa yang zalim.',
    lessons: ['Ketaatan pada Allah', 'Kesederhanaan dalam hidup', 'Berani menegakkan kebenaran'],
    references: ['Ali-Imran: 39-41', 'Maryam: 12-15']
  },
  {
    id: 24,
    name: 'عيسى',
    englishName: 'Jesus',
    title: 'Nabi Isa AS',
    story: 'Isa lahir dari Maryam tanpa ayah. Ia diberi mukjizat menyembuhkan sakit dan menghidupkan orang mati. Allah menurunkan Injil kepadanya.',
    fullStory: 'Nabi Isa AS adalah nabi yang lahir dari Maryam tanpa ayah atas kuasa Allah. Beliau memiliki banyak mukjizat: menyembuhkan orang buta, menyembuhkan orang kusta, dan menghidupkan orang mati dengan izin Allah. Isa mengajak Bani Israil kembali kepada ajaran Tauhid dan Allah menurunkan Injil kepadanya. Kaum Yahudi menentangnya dan berusaha menyalibnya, namun Allah mengangkatnya ke langit. Isa tidak mati disalib, melainkan diangkat oleh Allah dan akan kembali di akhir zaman.',
    lessons: ['Kekuasaan Allah atas alam', 'Kasih sayang kepada sesama', 'Keyakinan pada hari akhir'],
    references: ['Ali-Imran: 42-63', 'Maryam: 16-36', 'Al-Maidah: 110-118']
  },
  {
    id: 25,
    name: 'محمد',
    englishName: 'Muhammad',
    title: 'Nabi Muhammad SAW',
    story: 'Muhammad adalah nabi terakhir yang diutus untuk seluruh alam. Allah menurunkan Al-Quran kepadanya sebagai petunjuk bagi manusia.',
    fullStory: 'Nabi Muhammad SAW adalah nabi dan rasul terakhir yang diutus untuk seluruh alam. Beliau lahir di Mekkah pada tahun Gajah. Pada usia 40 tahun, beliau menerima wahyu pertama di gua Hira. Muhammad berdakwah mengajak manusia menyembah Allah dan meninggalkan kemusyrikan. Beliau mengalami berbagai ujian dan penganiayaan, namun tetap sabar. Pada tahun 622 M, beliau hijrah ke Madinah dan membangun masyarakat Islam. Allah menurunkan Al-Quran kepadanya sebagai petunjuk bagi seluruh manusia. Beliau wafat pada tahun 632 M setelah menyempurnakan dakwahnya.',
    lessons: ['Ketaatan pada Allah', 'Kasih sayang kepada sesama', 'Meneladani akhlak mulia', 'Menegakkan kebenaran'],
    references: ['Al-Quran seluruhnya, terutama Al-Fath, Al-Ahzab, dan Muhammad']
  }
];
router.get('/all', (req, res) => {
  try {
    const data = prophets.map(p => ({
      id: p.id,
      name: p.name,
      englishName: p.englishName,
      title: p.title
    }));
    res.json({ status: 'success', data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/:id', (req, res) => {
  try {
    const prophet = prophets.find(p => p.id === parseInt(req.params.id));
    if (!prophet) {
      return res.status(404).json({ status: 'error', message: 'Prophet not found' });
    }
    res.json({ status: 'success', data: prophet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/name/:name', (req, res) => {
  try {
    const name = req.params.name.toLowerCase();
    const prophet = prophets.find(p => 
      p.name.toLowerCase() === name || 
      p.englishName.toLowerCase() === name
    );
    if (!prophet) {
      return res.status(404).json({ status: 'error', message: 'Prophet not found' });
    }
    res.json({ status: 'success', data: prophet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/random', (req, res) => {
  try {
    const random = prophets[Math.floor(Math.random() * prophets.length)];
    res.json({ status: 'success', data: random });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/search/:query', (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const results = prophets.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.englishName.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.story.toLowerCase().includes(query) ||
      p.fullStory.toLowerCase().includes(query)
    );
    res.json({ status: 'success', data: results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;