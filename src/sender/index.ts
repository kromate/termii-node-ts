import { Base } from "../base";
import { SenderRequestOptions, SenderResponse } from "./types";

const resourceName = "api/sender-id";

export class Sender extends Base {
  fetchSenderID(): Promise<SenderResponse> {
    return this.request(`/${resourceName}?api_key=${this.apiKey}`);
  }

  requestSenderID(options: SenderRequestOptions): Promise<any> {
    return this.request(`/${resourceName}/request`, {
      method: "POST",
      body: JSON.stringify({api_key:this.apiKey,...options}),
    });
  }
}
