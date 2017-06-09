SELECT DISTINCT T1.ntlevel,
COUNT(T2.ntEmpID) AS Total_no_of_employees , 
MIN(T3.moSalary) AS Min_salary
		
FROM [master].[dbo].[tblEmp] T1 , [master].[dbo].[tblEmp] T2 ,[master].[dbo].[tblEmp] T3
 GROUP BY T1.ntlevel;