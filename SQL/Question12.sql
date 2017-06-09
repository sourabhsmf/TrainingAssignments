
SELECT ppd.[Description]
  
  FROM [AdventureWorks2012].[Production].[ProductDescription] Ppd
  WHERE Ppd.ProductDescriptionID = (SELECT Ppmpd.ProductDescriptionID FROM AdventureWorks2012.Production.ProductModelProductDescriptionCulture Ppmpd
  WHERE Ppmpd.CultureID = 'fr' AND Ppmpd.ProductModelID = (SELECT Pp.ProductModelID FROM AdventureWorks2012.Production.Product Pp
  WHERE Pp.ProductID = 736));
