// Уменьшить на 3% баланс пользователей,
//  которые не из Germany и не из France, имеющие положительный баланс

db.getCollection("users").find({
    $and: [
        { balance: { $gt: 0 } },    
        { nationality: { $nin: ["Germany", "France"] } }
    ]
})



