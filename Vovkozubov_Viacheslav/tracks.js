// Задача. Вывести ко-во треков с продолжительностью до 30 мин (вкл.)

db.tracks.countDocuments({
    duration: { $lte: 1800 }
  });