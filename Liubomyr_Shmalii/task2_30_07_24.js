db.users.find(
  {
      isBlocked: true,
      country: { $in: ["China", "France"] },
      "balance": { $gte: 10, $lte: 1000 }
  },
  {
      "fullname": 1,
      "balance": 1,
      _id: 0
  }
)