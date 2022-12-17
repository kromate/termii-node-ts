import { Base } from "../base";
import { SenderRequestOptions, SenderResponse } from "./types";
export declare class Sender extends Base {
    fetchSenderID(): Promise<SenderResponse>;
    requestSenderID(options: SenderRequestOptions): Promise<any>;
}
