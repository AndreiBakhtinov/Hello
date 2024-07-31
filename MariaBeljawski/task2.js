// Задача. Вывести имена и баланс не заблокированных юзеров не из China и не из France, если их баланс находится в диапазоне значений от 10 до 1000 (не вкл.)

db.users.find(
  {
    country: { $nin: ["China", "France"] },
    is_blocked: { $ne: true },
    balance: { $gt: 10, $lt: 1000 },
  },
  {
    fullname: 1,
    balance: 1,
    _id: 0,
  }
);
