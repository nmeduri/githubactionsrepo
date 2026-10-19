const result = '{"id":101,"name":"Naveen","active":true}';

const body = JSON.parse(result);

console.log(body);
// console.log(body.name);   // Naveen
// console.log(body.id);     // 101
// console.log(body.active); // true