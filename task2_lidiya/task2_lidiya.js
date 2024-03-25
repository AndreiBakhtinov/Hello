db.tracks.find({
    duration_secs: { $lte:1000000 }
     }
     )