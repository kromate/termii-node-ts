import { Base } from "./base";
import { Sender } from "./sender";
import { Messaging } from "./Messaging";
declare class Termii extends Base {
}
interface Termii extends Sender, Messaging {
}
export default Termii;
