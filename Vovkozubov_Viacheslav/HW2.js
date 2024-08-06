
 db.users.find(
    {
      blocked: true,
      country: { $in: ["China", "France"] },
      balance: { $gte: 10, "$lte": 1000 }
    },
    {
      name: 1,
      balance: 1,
      _id: 0
    }
  );
  