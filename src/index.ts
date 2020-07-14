import { CustomMap } from "./CustomMap";
import { Company } from "./Company";
import { User } from "./User";

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);
