//Задача. Вывести названия трех самых продолжительных треков



db.tracks.aggregate([
  { $sort: { balance: -1 } },
  { $project: { title: 1, _id: 0 } },
  { $limit: 3 }
])