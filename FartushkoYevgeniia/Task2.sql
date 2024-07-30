SELECT
    ProductName,
    Price * .92 AS Price_USD
FROM Products
WHERE
    Price BETWEEN 10 AND 100