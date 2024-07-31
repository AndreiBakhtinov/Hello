db.tracks.find(
    {
        balance: {
            $gt: 10,
            $lt: 1000
        },
        is_blocked: false,
        country: {
            $nin: ['China', 'France']
        }
    },
    { fullname: 1, balance: 1, _id: 0 }
)