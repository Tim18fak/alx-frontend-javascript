process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});

function guardrail(mathFunction) {
  const message = 'Guardrail was processed';
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push(message);
  }
  return queue;
}

export default guardrail;
