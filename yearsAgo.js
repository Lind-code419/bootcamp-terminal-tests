export default function yearsAgo(year) {
	let dateCurrent = new Date();
  	dateCurrent = dateCurrent.getFullYear();
  	console.log(dateCurrent);
  	let yearsAgo1 = dateCurrent - year;
  	console.log(yearsAgo1);
  	return yearsAgo1;
}