import { StringUtil } from "../src/utils/StringUtil";

const name = "  Naveen  ";

let c = StringUtil.capitalize(name);
console.log(c);
let bln = StringUtil.isEmpty(name);
console.log(bln);
console.log(StringUtil.trim(name));
// Naveen

console.log(StringUtil.toUpperCase(name));
//   NAVEEN

console.log(StringUtil.contains(name, "Naveen"));
// true

console.log(StringUtil.isNotEmpty(name));
// true

console.log(StringUtil.randomEmail());
// test_1759200000000@example.com
