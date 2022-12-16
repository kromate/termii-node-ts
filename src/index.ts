import { Base } from "./base";
import { Sender } from "./sender";
import { applyMixins } from "./utils";

class Termii extends Base {}
interface Termii extends Sender {}

applyMixins(Termii, [Sender]);

export default Termii;
