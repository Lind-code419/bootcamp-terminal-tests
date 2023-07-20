export default function countAllFromTown(stringList,prefixTown) {
	var townCounter = 0;
  	var separateList =[];
  	separateList = stringList.split(',');
  	console.log(separateList);
    
  	for (var i = 0; i < separateList.length; i++) {
    	console.log(separateList[i]);
      	if (separateList[i].includes(prefixTown)) {
        	townCounter++;
        }
    
    }
	console.log(townCounter);
  	return(townCounter);

}