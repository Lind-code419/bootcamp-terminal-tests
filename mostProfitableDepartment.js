export default function mostProfitableDepartment(salesData) {
	var department = {};
  	var shortList = [];
  	
  	for (var i = 0; i < salesData.length; i++){
  		const currentObject = salesData[i];
  		//console.log(currentObject);
      	
      if (shortList.includes(currentObject['department']) == false) {
      	shortList[i] = currentObject['department'];
      }
   }
  console.log(shortList);
  for (i = 0; i < shortList.length; i++) {
  	department[shortList[i]] = 0;
  } 
  console.log(department);
  
  
  for (i = 0; i < salesData.length; i++) {
    const currentObject = salesData[i];
    department[currentObject['department']] = currentObject['sales'] + department[currentObject['department']];
  	//department[department] = currentObject['sales'] + department['department']; 
    console.log(department);
   }
  console.log(department);
  var topSales = 0;
  var topIndex = -1;
  
  for (var profit in department) {
    console.log(department[profit]);
  	if (department[profit] > topSales) {
        topSales = department[profit];
      	topIndex++;
      	console.log(topSales);
      
        }
  } 
console.log(topIndex);
console.log(shortList[topIndex]);
return shortList[topIndex];
}