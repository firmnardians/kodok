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
  const get = async function get() {
    let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const hit = await fetching('GET', url).then(response);
    return hit;
  };

  const pos = async function pos() {
    let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const hit = await fetching('POST', url, payload, header).then(response);
    return hit;
  };

  const put = async function put() {
    let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const hit = await fetching('PUT', url, payload, header).then(response);
    return hit;
  };

  const del = async function del() {
    let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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