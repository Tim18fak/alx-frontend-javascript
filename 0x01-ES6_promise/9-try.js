process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});

function guardrail(mathFunction){
	let message = 'Guardrail was processed'
	let queue = []
	try{
		let value = mathFunction()
		queue.push(value)
	}catch(error) {
		queue.push(error.message)
	}finally{
		queue.push(message)
	}
	return queue;
}

export default guardrail;
