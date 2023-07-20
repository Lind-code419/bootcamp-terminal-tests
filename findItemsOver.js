export default function findItemsOver(list,quantity) {
	var listIndex = [];	
  	for (var i = 0; i < list.length; i++) {
    	console.log(list[i]);
      	if (list[i].qty > quantity) {
        	listIndex.push(list[i]);
        	}
     	}
  console.log(listIndex);
   return listIndex;
}