/* 

Replace IIFEs with Blocks, For example:
(function () { var food = 'Meow Mix'; }() );
console.log(food); // Reference Error
So same create block object where define User’s detail and
try to excess from outside of block and inside also.

*/

function testScope() {
  let name;
  if(true) {
    name = "betping";
    let title = "Frontend Developer";
    console.log(`Name(inside): ${name}`);
    console.log(`Title(inside): ${title}`);
  }

  console.log('------Outside block-------');
  console.log(`Name(outside): ${name}`);
  console.log(`Title(outside): ${title}`);
}

testScope();