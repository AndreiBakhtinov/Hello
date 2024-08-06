//Задача. Вывести одного не заблокированного юзера с минимальным балансом


db.users.aggregate([
  { $match: { is_blocked: { $ne: true } } },
  { $sort: { balance: 1 } },
  { $limit: 1 }
])