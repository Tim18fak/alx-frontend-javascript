import getFullResponseFromAPI from './1-promise';

getFullResponseFromAPI(true)
  .then(response => {
    // Handle success
    console.log('Resolved:', response);
  })
  .catch(error => {
    // Handle the error here
    console.error('Rejected:', error);
  });

getFullResponseFromAPI(false)
  .then(response => {
    // This block will not be executed
    console.log('Resolved:', response);
  })
  .catch(error => {
    // Handle the error here
    console.error('Rejected:', error);
  });
