SELECT [ntEmpID]
      ,[vcName]
      ,[vcMobieNumer]
      ,[vcSkills]
      ,[moSalary]
      ,[ntLevel]
  FROM [master].[dbo].[tblEmp] 
  WHERE (vcMobieNumer IS NULL AND ntLevel = 1) OR (vcMobieNumer IS NOT NULL AND ntLevel = 0);