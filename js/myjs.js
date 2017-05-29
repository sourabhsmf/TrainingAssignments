var firstName = document.getElementsByTagName('input')['firstname'];
firstName.addEventListener("blur",checkWord);
firstName.addEventListener("focus",clearErrors);

var lastName = document.getElementsByTagName('input')['lastname'];
//lastName.addEventListener("blur",checkWord);
//lastName.addEventListener("focus",clearErrors);

var pass = document.getElementsByName("user_password");
var cpass = document.getElementsByName("user_confirm_password");
cpass[0].addEventListener("blur" , checkPass);
var pno = document.getElementsByName("phoneno");
pno[0].addEventListener("blur",checkNumber);
pno[1].addEventListener("blur",checkNumber);
var city = document.getElementsByName("city");
city[0].addEventListener("blur",checkWord);
//console.log('Once');
function checkWord(){
		var c;
		//console.log(this.value);
		for(var i=0 ; i<this.value.length; i++)
		{
			
			//console.log((firstName.value.charCodeAt(i)));
			var unicode = this.value.charCodeAt(i);
			if((unicode >= 65 && unicode <=90) || (unicode >= 97 && unicode <= 122))
					c = 1;
			else
				c = -1;
		}
		if(c === 1)
			console.log('OK');
		else
		{
			//clearErrors(this);
			console.log('Dosen\'t contains letters');
			//document.getElementsByClassName('errors').innerHTML = "Dosen\'t contains letters";
			generateErrors("Dosen't contains letters",this);
			//this.focus();
			//clearErrors(this);
				
		}
		return;
}
function checkPass()
{
			if(pass[0].value === cpass[0].value)
				{
					console.log("Passwords Ok");
				}
			else
				{
					console.log("Passwords don't match");
					generateErrors("Passwords don't match",pass[0]);
				
				}
				return;
}
function checkNumber()
{
	for(var i = 0; i<this.value.length;i++)
	{
			var c = 1; 
			var unicode = this.value.charCodeAt(i);
			if(unicode >=48 && unicode <= 57)
				c=1;
			else 
				c=-1
	}
	if(c === 1)
					console.log("Phone Number OK");
	else
	{
						console.log("Phone Number dosen't contains number");
						generateErrors("Phone Number dosen't contains number",this);
	}
	return;
}
function generateErrors(errormssg , name)
{
			var index;
			var error_code = 0;
			var fs = document.getElementsByTagName('fieldset');
			for(var i =0 ; i<fs.length;i++)
			{
			
				for(var j =0;j<fs[i].childElementCount;j++)
				{
					if(fs[i].children[j] === name)
					{
						console.log(name);
						index = j;
						console.log(fs[i].children[j].previousElementSibling);
						if(fs[i].children[j].previousElementSibling.className === "errors")
							{	
								
								error_code = 1;
								//console.log(j+1);
								//break;
							}
						else
								error_code = 0;
									
					}
				}
			//	if(error_code === 1)
			//		break;
			}
			console.log(error_code);	
			if(error_code === 0)
			{
					var em = document.createElement("p");
					em.appendChild(document.createTextNode(errormssg));
			
					name.insertAdjacentElement('beforebegin',em);
					em.setAttribute("class" , "errors");
			}
			else 
			{
					//console.log(document.getElementsByTagName('fieldset')[0].children[2]);
					document.getElementsByTagName('fieldset')[0].children[index+1].style.visibility = "visible";
					document.getElementsByTagName('fieldset')[0].children[index+1].style.display = "block";

			}
			
			//name.focus();
			
			return;
}
function clearErrors()
{
			var fs = document.getElementsByTagName('fieldset');
			//console.log("Entered");
			for(var i =0 ; i<fs.length;i++)
			{
			//		console.log(fs[i]);
				for(var j =0;j<fs[i].childElementCount;j++)
				{
			//		console.log(fs[i].children[j],this);
					if(fs[i].children[j] === this)
					{
						if(fs[i].children[j+1].className === "errors")
						{
							fs[i].children[j+1].style.display = "none";
							fs[i].children[j+1].style.visibility = "hidden";
							console.log("Hidden successfully");
						}
					}
				}
			}
			return;
}
        
