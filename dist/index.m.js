import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}var i,o=/*#__PURE__*/function(){function r(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://api.ng.termii.com"}return r.prototype.request=function(r,n){var i=""+this.baseUrl+r,o=e({},n);return t(i,o).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},r}(),s="api/sender-id",p=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var i=n.prototype;return i.fetchSenderID=function(){return this.request("/"+s+"?api_key="+this.apiKey)},i.requestSenderID=function(t){return this.request("/"+s+"/request",{method:"POST",body:JSON.stringify(e({api_key:this.apiKey},t))})},n}(o),u="api/sms/send",a=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var i=n.prototype;return i.sendMessage=function(t){return this.request("/"+u,{method:"POST",body:JSON.stringify(e({api_key:this.apiKey},t))})},i.sendBulkMessage=function(t){return this.request("/"+u+"/bulk",{method:"POST",body:JSON.stringify(e({api_key:this.apiKey},t))})},n}(o),c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(o);i=c,[p,a].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(i.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})});export{c as default};
