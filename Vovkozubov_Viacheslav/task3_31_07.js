db.users.deleteMany(
    {
        balance: { $lt: 0 },
        country: { $in: ['USA', 'France'] }
    }
)