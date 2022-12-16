import { Base } from "../base";
import { SendMessageBody, SendMessageResponse, SendMessageBulk } from "./types";
const resourceName = "api/sms/send";

export class Messaging extends Base {
//   fetchSenderID(): Promise<SenderResponse> {
//     return this.request(`/${resourceName}?api_key=${this.apiKey}`);
//   }

  sendMessage(options: SendMessageBody): Promise<SendMessageResponse> {
    return this.request(`/${resourceName}`, {
      method: "POST",
      body: JSON.stringify({api_key:this.apiKey,...options}),
    });
  }
  sendBulkMessage(options: SendMessageBulk): Promise<SendMessageResponse> {
    return this.request(`/${resourceName}/bulk`, {
      method: "POST",
      body: JSON.stringify({api_key:this.apiKey,...options}),
    });
  }
}