// Credit Share By MangzAbi
// Contact MangzAbi @CsMangzAbiBot
// Watermax © By MangzAbi
// No Jual Anjing ini Free
// No hapus Credit ngaku Ngaku pencipta Wleee Miskin May Dipuja Doang Kke Nya Miga Mati Anjing MakPakNya Yabg Jual & Ngaku Ngaku Dev Sc ini
// NODELETED CREDIT & Wtermax

const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/times/:city/:country', async (req, res) => {
  try {
    const { city, country } = req.params;
    const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`);
    res.json({ 
      status: 'success', 
      data: {
        date: response.data.data.date,
        timings: response.data.data.timings
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prayer times', message: error.message });
  }
});
router.get('/today/:city/:country', async (req, res) => {
  try {
    const { city, country } = req.params;
    const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`);
    const timings = response.data.data.timings;
    res.json({
      status: 'success',
      data: {
        city: city,
        country: country,
        date: response.data.data.date.readable,
        hijri: response.data.data.date.hijri.date,
        fajr: timings.Fajr,
        sunrise: timings.Sunrise,
        dhuhr: timings.Dhuhr,
        asr: timings.Asr,
        maghrib: timings.Maghrib,
        isha: timings.Isha,
        midnight: timings.Midnight
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prayer times', message: error.message });
  }
});
router.get('/coordinates/:lat/:lng', async (req, res) => {
  try {
    const { lat, lng } = req.params;
    const response = await axios.get(`http://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=2`);
    res.json({
      status: 'success',
      data: {
        timings: response.data.data.timings,
        date: response.data.data.date
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prayer times', message: error.message });
  }
});
module.exports = router;

// Credit Share By MangzAbi
// Contact MangzAbi @CsMangzAbiBot
// Watermax © By MangzAbi
// No Jual Anjing ini Free
// No hapus Credit ngaku Ngaku pencipta Wleee Miskin May Dipuja Doang Kke Nya Miga Mati Anjing MakPakNya Yabg Jual & Ngaku Ngaku Dev Sc ini
// NODELETED CREDIT & Wtermax