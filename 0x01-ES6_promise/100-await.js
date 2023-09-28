import { uploadPhoto, createUser } from './utils'

async function asyncUploaderUser(){
	let photo = await uploadPhoto()
	let user = await createUser()
	try{
		if(photo === null || user === null){
			throw new Error()
		}
		return {
			photo: photo,
			user: user
		}
	}catch(error){
		return {
			photo: null,
			user: null
		}
	}
}

export default asyncUploaderUser;
