db.articles.find(

   {
        tags : { $in: ["alpha", "beta"]},
    },
)