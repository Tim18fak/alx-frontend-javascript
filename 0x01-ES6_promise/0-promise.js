function getResponseFromAPI(){
	return new Promise((resolve,reject) => {
	
	fetch(Api)
	 .then(response => response.json())
	 .then( data => resolve(data))
	 .catch(error => reject(error))
	})

};

export default getResponseFromAPI;
