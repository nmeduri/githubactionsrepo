import { DateUtil } from "../src/utils/DateUtil";

console.log(DateUtil.today());
// 2026-09-30

console.log(DateUtil.format(new Date(), "DD-MM-YYYY"));
// 30-09-2026

console.log(DateUtil.format(new Date(), "YYYY-MM-DD HH:mm:ss"));
// 2026-09-30 10:47:20

console.log(DateUtil.timestamp());
// 1788173220000

const futureDate = DateUtil.addDays(new Date(), 7);

console.log(DateUtil.format(futureDate, "DD-MM-YYYY"));
