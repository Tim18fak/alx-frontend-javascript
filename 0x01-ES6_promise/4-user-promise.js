function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ fisrtName: firstName, lastName });
  });
}

export default signUpUser;
