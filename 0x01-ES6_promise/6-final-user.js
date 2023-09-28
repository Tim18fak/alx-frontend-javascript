import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});
/*
function handleProfileSignup(firstName, lastName, fileName) {
  const userProm = signUpUser(firstName, lastName);
  const photoProm = uploadPhoto(fileName);

  return Promise.allSettled([userProm, photoProm])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}

export default handleProfileSignup; */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const result = [];
  return Promise.allSettled(promises).then((results) => {
    results.map(({ status, value, reason }) => (
      result.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return result;
  });
}
