export default function transportFee(shift) {
	shift = shift.toLowerCase();
  	console.log(shift);
  	switch(shift) {
      case 'morning':
        return 'R20';
      case 'afternoon':
        return 'R10';
      case 'nightshift':
        return 'free';
                 }

}