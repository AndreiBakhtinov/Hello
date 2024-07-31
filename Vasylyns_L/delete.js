db.users.deleteMany(
    {
        country: { $in: ['USA', 'France'] },
        balance: { $lt: 0 }
    }
)