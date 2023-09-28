import { uploadPhoto, createUser } from './utils';

process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});

async function asyncUploaderUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  try {
    if (photo === null || user === null) {
      throw new Error();
    }
   
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
return  {photo,user}
}

export default asyncUploaderUser;
