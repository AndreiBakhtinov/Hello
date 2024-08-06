// Задача. Вывести ко-во заблокированных юзеров не из China
db.users.countDocuments({
    is_blocked:{$ne: true},
    country: { $ne: "China" }
  });
  