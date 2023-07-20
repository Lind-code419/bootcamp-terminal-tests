export default function fromWhere(rego) {
	rego = rego.slice(0,2);
  	console.log(rego);
  	
  	switch(rego) {
      case 'CA':
        return 'Cape Town';
      case 'CY':
        return 'Bellville';
      case 'CJ':
        return 'Paarl';
                  }
  return 'Some other place!';
}