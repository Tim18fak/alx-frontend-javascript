function signUpUser(firstName, lastName){
	return new Promise((resolve, reject) =>{
	resolve({ fisrtName: firstName, lastName: lastName  });
	});
}

export default signUpUser;
