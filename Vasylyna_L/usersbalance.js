db.users.find(
    {
       is_blocked: { $ne: true },
       country: { $nin: ["China", "France"]},
       balance: { $gt: 10, $lt: 1000 },
    },
    { fullname: 1, _id: 0, balance: 1, country: 1}
)