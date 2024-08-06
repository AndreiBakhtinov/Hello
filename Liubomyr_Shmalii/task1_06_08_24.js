db.users.countDocuments(
  {
      country: { $ne: "China" },
      is_blocked: true
  }
)