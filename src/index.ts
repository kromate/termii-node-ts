import { Base } from "./base";
import { Sender } from "./sender";
import { Messaging } from "./Messaging";
import { applyMixins } from "./utils";

class Termii extends Base {}
interface Termii extends Sender, Messaging {}

applyMixins(Termii, [Sender, Messaging]);

export default Termii;
