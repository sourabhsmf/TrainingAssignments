
SELECT * 
      
  FROM [master].[dbo].[tblEmp]
  WHERE(',' + RTRIM(vcSkills) + ',') LIKE '%_JavaScript_%' 

UNION

SELECT * 
      
  FROM [master].[dbo].[tblEmp]
  WHERE NOT(',' + RTRIM(vcSkills) + ',') LIKE '%_JavaScript_%' 
  
;
   