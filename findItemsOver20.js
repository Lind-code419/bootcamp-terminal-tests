export default  function findItemsOver20(list) {
  	var listIndex = [];
	for (var i = 0; i < list.length; i++) {
    	console.log(list[i]);
      	if (list[i].qty > 20) {
        	listIndex.push(list[i]);
        	}
     	}
  console.log(listIndex);
  return listIndex;
}