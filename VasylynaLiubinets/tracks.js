db.tracks.countDocuments(
    { duration_secs: { $lte: 30 * 60 }  
   
 })