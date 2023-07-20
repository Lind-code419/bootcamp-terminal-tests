export default function countAllPaarl(rego) {
	var countPaarl = 0;
  	//regosplit= [];
  	var regosplit = rego.split(',');
  	console.log(regosplit);
  	
  	for (var i = 0; i < regosplit.length; i++) {
    	if (regosplit[i].includes('CJ')) {
        	countPaarl++;
        }
    }
return countPaarl;

}