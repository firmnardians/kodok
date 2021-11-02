"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetching = fetching;
exports.response = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.json.stringify.js");

/**
 * Kodok
 * Author firmnardians
 * Copyright(c) firmnardians
 * MIT Licensed
 */
const response = r => r.json().then(d => ({
  status: r.status,
  data: d,
  date_time: new Date().toISOString(),
  user_agent: {
    ua_browser_version: navigator.appVersion,
    ua_browser_language: navigator.language,
    ua_isCookiesEnabled: navigator.cookieEnabled,
    ua_isOnline: navigator.onLine,
    ua_platform: navigator.platform,
    ua_header: navigator.userAgent
  }
}));

exports.response = response;

async function fetching(type, url, payload, header) {
  if (type === 'GET') {
    return await fetch(url, {
      method: type,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    });
  } else if (type === 'POST' || type === 'PUT' || type === 'DELETE') {
    const dataObject = {
      method: type,
      headers: header ? header : {
        'Content-Type': 'application/json'
      }
    };

    if (payload) {
      dataObject.body = JSON.stringify(payload);
    }

    const res = await fetch(url, dataObject);
    return res;
  } else {
    console.error('Error - Method only GET, POST, PUT & DELETE');
  }
}