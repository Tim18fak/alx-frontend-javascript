process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});

function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

export default signUpUser;
