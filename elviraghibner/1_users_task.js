db.users.updateMany(
    {
        country: {$nin:['Germany','France']},
        balance: {$gt: 0}
    },
    {$mul: {balance: 0.97}}
)
