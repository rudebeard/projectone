const a = 10;
const b = 5;
const c = 15;
a=b=c;
const condition1 = a==b && b==c && a==c;
condition1 && console.log( a,b,c,'equilaterral');
