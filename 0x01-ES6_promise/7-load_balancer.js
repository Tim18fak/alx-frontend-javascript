process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});

function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

export default loadBalancer;
