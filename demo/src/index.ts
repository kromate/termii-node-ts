import Termii from "termii-node";

const client: Termii = new Termii({
  apiKey: "TLO72qa0rtf12SMf69KhqzUla27EU418FWAJfawEQyXNDuHRYI8w8xb77JuJSU",
});

// client.getPosts().then((p) => {
//   console.log(p);
// });

client
    .sendMessage({
        channel: "generic",
        type: "plain",
        to: "08115222468",
      from: "Taaskly",
              //@ts-ignore
      api_key: "TLO72qa0rtf12SMf69KhqzUla27EU418FWAJfawEQyXNDuHRYI8w8xb77JuJSU",
        sms: "Hello From Taaskly",
  })
  .then((p) => {
    console.log(p);
  }).catch((e) => { 
      console.log(e);
  });
