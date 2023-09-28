process.on('unhandledRejection', (err) => {
  // Handle unhandled promise rejections here
  console.error(err);
});

export default function loadBalancer(chinaDownload,USDownload){
	return Promise.race([chinaDownload,USDownload])
}
