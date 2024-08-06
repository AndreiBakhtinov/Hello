db.users.countDocuments(
    {
        is_blocked:  true ,
        country: { $nin: ["China"] }
    }

)