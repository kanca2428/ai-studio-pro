exports.getStats = async (req, res) => {
  res.json({
    success: true,
    data: {
      users: 42,
      chats: 156,
      tokensUsed: 89000,
      activeUsers: 12
    }
  });
};

exports.getActivity = async (req, res) => {
  res.json({ success: true, data: [] });
};
