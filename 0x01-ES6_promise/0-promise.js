/*function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    fetch(myNewApi)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export default getResponseFromAPI;*/
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // API call logic here
    // ...
    if (responseFromAPI) {
      resolve(responseFromAPI); // resolve with API response
    } else {
      reject("Error: API call failed"); // reject with error message
    }
  });
}

export default getResponseFromAPI;
