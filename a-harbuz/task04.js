db.articles.find (
    {tags: {$in:['alpha','beta']}},
    {_id:0}
)
