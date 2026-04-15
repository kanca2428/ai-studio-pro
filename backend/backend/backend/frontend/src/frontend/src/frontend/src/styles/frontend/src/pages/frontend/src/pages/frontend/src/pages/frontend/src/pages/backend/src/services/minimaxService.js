const axios = require('axios');

class MiniMaxService {
  constructor() {
    this.apiKey = process.env.MINIMAX_API_KEY;
    this.baseURL = 'https://api.minimax.chat/v1';
  }

  async chat(prompt, context) {
    try {
      const response = await axios.post(
        this.baseURL + '/chatcompletion',
        {
          model: 'MiniMax-M2.7',
          messages: [...(context || []), { role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 2048
        },
        { headers: { 'Authorization': 'Bearer ' + this.apiKey } }
      );
      return { success: true, data: response.data.choices[0].message.content };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new MiniMaxService();
