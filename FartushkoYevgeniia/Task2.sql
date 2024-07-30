SELECT
    ProductName,
    Price * 1.08 AS Price_USD
FROM Products
WHERE
    Price BETWEEN 10 AND 100