db.users.updateMany(
  {
    isBlocked: false,
    country: { $ne: "China" }
  },
  {
    $set: { isBlocked: true },
    $inc: { "balance": -25 }
  }
)