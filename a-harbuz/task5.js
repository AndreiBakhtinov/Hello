db.tracks.find (
    {duration_secs: {$lte: 1e6}},
    {_id:0}
)