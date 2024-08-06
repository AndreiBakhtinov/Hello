// Задача. Вывести ко-во заблокированных юзеров не из China

db.users.countDocuments({
    is_blocked: { $eq: "true" },
    country: { $ne: "China" }
  });
  