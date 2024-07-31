// Задача. Удалить всех юзеров с отрицательным балансом из USA и France
db.users.deleteMany({
  balance: { $lt: 0 },
  country: { $in: ['USA', 'France'] }
});
