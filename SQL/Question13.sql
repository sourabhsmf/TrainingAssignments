
SELECT Pp.[Name],Pp.[ListPrice] ,Ssod.OrderQty
  FROM [AdventureWorks2012].[Production].[Product] AS Pp , AdventureWorks2012.Sales.SalesOrderDetail AS Ssod
  WHERE Pp.ProductID = Ssod.ProductID AND Ssod.SalesOrderID = (SELECT Ssoh.SalesOrderID FROM AdventureWorks2012.Sales.SalesOrderHeader AS Ssoh
  WHERE Ssoh.CustomerID = 635);