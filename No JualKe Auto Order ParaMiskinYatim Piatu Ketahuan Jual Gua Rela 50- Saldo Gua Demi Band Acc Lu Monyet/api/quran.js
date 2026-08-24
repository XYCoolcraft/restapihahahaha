// Credit Share By MangzAbi
// Contact MangzAbi @CsMangzAbiBot
// Watermax © By MangzAbi
// No Jual Anjing ini Free
// No hapus Credit ngaku Ngaku pencipta Wleee Miskin May Dipuja Doang Kke Nya Miga Mati Anjing MakPakNya Yabg Jual & Ngaku Ngaku Dev Sc ini
// NODELETED CREDIT & Wtermax

const express = require('express');
const router = express.Router();
const quranData = {
  surahs: [
    {
      number: 1,
      name: 'الفاتحة',
      englishName: 'Al-Fatiha',
      revelationType: 'Meccan',
      ayahs: [
        { number: 1, text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', translation: 'In the name of Allah, the Most Gracious, the Most Merciful' },
        { number: 2, text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'All praise is due to Allah, Lord of the worlds' },
        { number: 3, text: 'الرَّحْمَٰنِ الرَّحِيمِ', translation: 'The Most Gracious, the Most Merciful' },
        { number: 4, text: 'مَالِكِ يَوْمِ الدِّينِ', translation: 'Master of the Day of Judgment' },
        { number: 5, text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', translation: 'You alone we worship, and You alone we ask for help' },
        { number: 6, text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guide us to the straight path' },
        { number: 7, text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray' }
      ]
    },
    {
      number: 2,
      name: 'البقرة',
      englishName: 'Al-Baqarah',
      revelationType: 'Medinan',
      ayahs: [
        { number: 1, text: 'الم', translation: 'Alif, Lam, Meem' },
        { number: 2, text: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ', translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah' },
        { number: 255, text: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ', translation: 'Allah - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.' }
      ]
    },
    {
      number: 112,
      name: 'الإخلاص',
      englishName: 'Al-Ikhlas',
      revelationType: 'Meccan',
      ayahs: [
        { number: 1, text: 'قُلْ هُوَ اللَّهُ أَحَدٌ', translation: 'Say, "He is Allah, [who is] One,' },
        { number: 2, text: 'اللَّهُ الصَّمَدُ', translation: 'Allah, the Eternal Refuge.' },
        { number: 3, text: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', translation: 'He neither begets nor is born,' },
        { number: 4, text: 'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', translation: 'Nor is there to Him any equivalent."' }
      ]
    }
  ]
};
router.get('/surahs', (req, res) => {
  try {
    const surahs = quranData.surahs.map(s => ({
      number: s.number,
      name: s.name,
      englishName: s.englishName,
      revelationType: s.revelationType,
      totalVerses: s.ayahs.length
    }));
    res.json({ status: 'success', data: surahs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/surah/:number', (req, res) => {
  try {
    const surah = quranData.surahs.find(s => s.number === parseInt(req.params.number));
    if (!surah) {
      return res.status(404).json({ status: 'error', message: 'Surah not found' });
    }
    res.json({ status: 'success', data: surah });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/ayah/:surah/:ayah', (req, res) => {
  try {
    const surah = quranData.surahs.find(s => s.number === parseInt(req.params.surah));
    if (!surah) {
      return res.status(404).json({ status: 'error', message: 'Surah not found' });
    }
    const ayah = surah.ayahs.find(a => a.number === parseInt(req.params.ayah));
    if (!ayah) {
      return res.status(404).json({ status: 'error', message: 'Ayah not found' });
    }
    res.json({
      status: 'success',
      data: {
        surah: surah.name,
        surahNumber: surah.number,
        ayahNumber: ayah.number,
        text: ayah.text,
        translation: ayah.translation
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/search/:query', (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const results = [];
    quranData.surahs.forEach(surah => {
      surah.ayahs.forEach(ayah => {
        if (ayah.text.toLowerCase().includes(query) || ayah.translation.toLowerCase().includes(query)) {
          results.push({
            surah: surah.name,
            surahNumber: surah.number,
            ayahNumber: ayah.number,
            text: ayah.text,
            translation: ayah.translation
          });
        }
      });
    });
    res.json({ status: 'success', data: results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;

// Credit Share By MangzAbi
// Contact MangzAbi @CsMangzAbiBot
// Watermax © By MangzAbi
// No Jual Anjing ini Free
// No hapus Credit ngaku Ngaku pencipta Wleee Miskin May Dipuja Doang Kke Nya Miga Mati Anjing MakPakNya Yabg Jual & Ngaku Ngaku Dev Sc ini
// NODELETED CREDIT & Wtermax