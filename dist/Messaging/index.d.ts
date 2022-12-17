import { Base } from "../base";
import { SendMessageBody, SendMessageResponse, SendMessageBulk } from "./types";
export declare class Messaging extends Base {
    sendMessage(options: SendMessageBody): Promise<SendMessageResponse>;
    sendBulkMessage(options: SendMessageBulk): Promise<SendMessageResponse>;
}
