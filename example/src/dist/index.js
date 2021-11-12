"use strict";

require("core-js/modules/es.promise.js");

/**
 * Kodok
 * Author firmnardians
 * Copyright(c) firmnardians
 * MIT Licensed
 */
const {
  response,
  fetching
} = require('./helper');

const kodok = function () {
  const get = async function get(url) {
    const hit = await fetching('GET', url).then(response);
    return hit;
  };

  const pos = async function pos(url, payload, header) {
    const hit = await fetching('POST', url, payload, header).then(response);
    return hit;
  };

  const put = async function put(url, payload, header) {
    const hit = await fetching('PUT', url, payload, header).then(response);
    return hit;
  };

  const del = async function del(url, payload, header) {
    const hit = await fetching('DELETE', url, payload, header).then(response);
    return hit;
  };

  return {
    get: get,
    post: pos,
    put: put,
    delete: del
  };
}();

module.exports = kodok;