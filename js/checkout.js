
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fPassword = document.getElementById("fPassword");
	let fLastN = document.getElementById("fLastN");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	//Regular expressions (regex)

	//Pattern for email 
	const emailOk= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	//Only letters
	const caractherOK = /[a-zA-Z]+$/;

	//Only numbers

	const onlyNumbers =  /^\d[10]$/;

	//password has numbers and letters

	const passwordOk = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_))/;
	
	// Validate fields entered by the user: name, phone, password, and email
		//Name validation
	if(fName.value == "" ||fName.length<3){
		error++;
		fName.style.borderColor='red';
		errorName.style.display='block';
	}else if (caractherOK.test(fName.value)){
		error++;
		fName.style.borderColor='red';
		errorName.style.display='block';
		errorEmail.innerHTML='Please insert a name that contain only letters.';
	}

	//Last name validation

	if(fLastN.value == "" ||fLastN.value.length<3){
		error++;
		fLastN.style.borderColor='red';
		errorLastN.style.display='block';
	} else if(caractherOK.test(fLastN.value)){
		error++;
		fLastN.style.borderColor='red';
		errorLastN.style.display='block';
		errorLastN.innerHTML='Please insert a name that contain only letters.';
	}

	//Address validation

	if(fAddress.value == "" ||fAddress.value.length<3){
		error++;
		fAddress.style.borderColor='red';
		errorAddress.style.display='block';
	} else if(caractherOK.test(fLastN.value)){
		error++;
		fAddress.style.borderColor='red';
		errorAddress.style.display='block';
		errorLastN.innerHTML='Please insert a name that contain only letters.';
	}

	//Email validation

	if(fEmail.value == "" || fEmail.value.length<3){
		error++;
		fEmail.style.borderColor='red';
		errorEmail.style.display='block';
	}else if(emailOk.test(fEmail.value)) {
		error++;
		fEmail.style.borderColor='red';
		errorEmail.style.display='block';
		errorEmail.innerHTML='Please insert a valid email address.';
	}

	//Phone number validation

	if(fPhone.value == "" || fPhone.value.length<3){
		error++;
		fPhone.style.borderColor='red';
		errorPhone.style.display='block';
	}else if (onlyNumbers.test(fPhone.value)) {
		error++;
		fPhone.style.borderColor='red';
		errorPhone.style.display='block';
		errorPhone.innerHTML='Please insert a valid phone number with only numbers.';
	}

	//Password validation

	if(fPassword.value == "" || fPassword.value.length<3){
		error++;
		fPassword.style.borderColor='red';
		errorPassword.style.display='block';
	}else if(passwordOk.test(fPassword.value)) {
		error++;
		fPassword.style.borderColor='red';
		errorPassword.style.display='block';
		errorPassword.innerHTML='Please insert a valid password with only numbers and letters.';
	}


	 
	if(error>0){
		alert("Please, modify inputs. ");
 	}else{
 		alert("OK. Your form has been sent.");
	}

}
