const minimaxService = require('../services/minimaxService');

exports.chat = async (req, res) => {
  try {
    const { prompt, context } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt gerekli' });
    const result = await minimaxService.chat(prompt, context);
    if (result.success) {
      res.json({ success: true, response: result.data });
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Sunucu hatasi' });
  }
};
