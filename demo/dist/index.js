"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const termii_node_1 = __importDefault(require("termii-node"));
const client = new termii_node_1.default({
    apiKey: "TLO72qa0rtf12SMf69KhqzUla27EU418FWAJfawEQyXNDuHRYI8w8xb77JuJSU",
});
client
    .sendMessage({
    channel: "generic",
    type: "plain",
    to: "08146923944",
    from: "Taaskly",
    api_key: "TLO72qa0rtf12SMf69KhqzUla27EU418FWAJfawEQyXNDuHRYI8w8xb77JuJSU",
    sms: "Hello From Taaskly",
})
    .then((p) => {
    console.log(p);
}).catch((e) => {
    console.log(e);
});
