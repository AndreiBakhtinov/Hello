db.users.updateMany(
    {
      blocked: false,
      country: { $ne: "China" }
    },
    {
      $set: { "blocked": true },
      $inc: { "balance": -25 }
    }
  );
 