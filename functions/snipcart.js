/** @format */

const express = require("express");
const app = express();
const serverless = require("serverless-http");
const fetch = require("node-fetch");
// const axios = require('axios')
const endpoint = "https://app.snipcart.com/api/products";
const SECRET_KEY =
  "ST_OTMyOWU0NzctZjIxMy00ZGFhLWExNzctNDBkMjAxZDc3NzA3NjM3NzkyMDExNDY3NTIwNDg5";

const callAPI = async (event, context) => {
  const auth =
    'Basic ' +
    Buffer.from(SECRET_KEY + ':' + '').toString('base64');
  const t = await fetch(endpoint, {
    headers: {
      Authorization: auth,
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => ({statusCode: 422, body: String(error)}));

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: JSON.stringify(t),
  };
};

exports.handler = callAPI;