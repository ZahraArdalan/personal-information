const zahra={
   firstName:'zahra',
   lastName: 'Ardalan',
   age:2037-1999,
   job:'student',
   friends:['sara','jac','peter']};
   console.log(zahra);
const interested = prompt('what do you want to know about zahra? choose between firstName, lastName, age, and friends');
console.log(zahra[interested]);
if (zahra[interested]) {
   console.log(zahra[interested])
   
} else {
   console.log('wrong request!  choose between firstName, lastName, age, and friends')
   
}
console.log(` ${zahra.firstName} has ${zahra.friends.length} friend.`);