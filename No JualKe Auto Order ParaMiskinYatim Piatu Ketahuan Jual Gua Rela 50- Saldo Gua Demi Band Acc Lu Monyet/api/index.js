// Credit Share By MangzAbi
// Contact MangzAbi @CsMangzAbiBot
// Watermax © By MangzAbi
// No Jual Anjing ini Free
// No hapus Credit ngaku Ngaku pencipta Wleee Miskin May Dipuja Doang Kke Nya Miga Mati Anjing MakPakNya Yabg Jual & Ngaku Ngaku Dev Sc ini
// NODELETED CREDIT & Wtermax

const express = require('express');
const cors = require('cors');
const app = express();
const quranRoutes = require('./quran');
const hadithRoutes = require('./hadith');
const prophetRoutes = require('./prophet-stories');
const islamicRoutes = require('./islamic-topics');
const searchRoutes = require('./search');
const prayerRoutes = require('./prayer-times');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/quran', quranRoutes);
app.use('/api/hadith', hadithRoutes);
app.use('/api/prophet', prophetRoutes);
app.use('/api/islamic', islamicRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/prayer', prayerRoutes);
app.get('/', (req, res) => {
  res.json({
    name: 'ãbiXD Islamic Apis',
    version: '2.0.0',
    description: 'Complete Islamic API with Prophet Stories & Islamic Topics',
    endpoints: {
      quran: '/api/quran',
      hadith: '/api/hadith',
      prophet_stories: '/api/prophet',
      islamic_topics: '/api/islamic',
      search: '/api/search',
      prayer_times: '/api/prayer'
    }
  });
});
app.use((err, req, res, next) => {
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found'
  });
});
module.exports = app;

// Credit Share By MangzAbi
// Contact MangzAbi @CsMangzAbiBot
// Watermax © By MangzAbi
// No Jual Anjing ini Free
// No hapus Credit ngaku Ngaku pencipta Wleee Miskin May Dipuja Doang Kke Nya Miga Mati Anjing MakPakNya Yabg Jual & Ngaku Ngaku Dev Sc ini
// NODELETED CREDIT & Wtermax
