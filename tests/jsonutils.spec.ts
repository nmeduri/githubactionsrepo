import { JsonUtil } from "../src/utils/JsonUtil";
const user = {
  id: 101,
  name: "Test",
  email: "test@example.com",
};

const json = JsonUtil.stringify(user);

console.log(json);

const parsedUser = JsonUtil.parse<typeof user>(json);

console.log(parsedUser.name);

console.log(JsonUtil.prettyPrint(user));
