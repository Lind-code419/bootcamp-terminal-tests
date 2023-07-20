export default function countRegNumber(rego1) {
	let regoarray = [];
	regoarray = rego1.split(',');
  	console.log(regoarray);
	let regoCount = regoarray.length;
  	return regoCount;
}