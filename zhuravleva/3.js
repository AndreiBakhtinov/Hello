db.getCollection("tracks").countDocuments({
    duration_sec: { $lte: 60 * 30 }
})