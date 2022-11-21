"use strict";
const fetch = require("node-fetch");

class Npmtest {
  constructor(options = {}) {
    let { api_key, secret_key } = options;

    if (!api_key) {
      throw new Error("`Api Key` is mandatory");
    }
    if (!secret_key) {
      throw new Error("`Secret Key` is mandatory");
    }

    this.api_key = api_key;
    this.secret_key = secret_key;
  }
  getAuthHeaderToken() {
    let basic_auth = `${this.api_key}:${this.secret_key}`;
    let buff = Buffer.from(basic_auth);
    let base64data = buff.toString("base64");
    let authentication = `Basic ${base64data}`;

    return authentication;
  }

  async getCustomer() {
    try {
      const response = await fetch("https://api.finmo.net/v1/customer", {
        method: "get",
        headers: {
          Authorization: this.getAuthHeaderToken(),
        },
      });
      const body = await response.json();

      return body;
    } catch (error) {
      console.log(error);
    }
  }
}

async function get() {}

get().then((res) => console.log(res));
module.exports = Npmtest;
