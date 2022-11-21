"use strict";

const { default: axios } = require("axios");

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
    let authentication = `Basic ${base64_encode(basic_auth)}`;

    return authentication;
  }

  async getCustomer() {
    return await axios.get(url, {
      headers: {
        Authorization: this.getAuthHeaderToken(),
      },
    });
  }
}

module.exports = Npmtest;
