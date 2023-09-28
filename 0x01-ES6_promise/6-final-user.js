import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});

function handleProfileSignup(firstName,lastName,fileName){
	let userProm = signUpUser(firstName,lastName)
	let photoProm = uploadPhoto(fileName)

	return Promise.allSettled([userProm,photoProm])
	.then(results => {
		return results.map(result => {
			return { 
				status: result.status,
				value: result.status === 'fulfilled' ? result.value : result.reason
			};
		});
	})
}

export default handleProfileSignup;
