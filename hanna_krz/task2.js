db.users.find(
    {
        is_blocked: { $eq: false },
        country: { $nin: ['Germany', 'France'] },
        balance: { $gt: 10, $lt: 1000 }
    },
    {
        fullname: 1,

        balance: 1
    }
)