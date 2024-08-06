db.users.countDocuments(
    {  is_blocked: true ,
        country: { $ne: 'China'},
       
    })