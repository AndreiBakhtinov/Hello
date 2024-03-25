db.tracks.find(
{duration_secs: {$lt: 1000000}})