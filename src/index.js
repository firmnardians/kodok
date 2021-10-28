/**
 * Kodok
 * Author firmnardians
 * Copyright(c) firmnardians
 * MIT Licensed
 */

const { response, fetching } = require('./helper');

const kodok = (function () {
	const get = async function (url = '') {
		const hit = await fetching('GET', url).then(response);

		return hit;
	};

	const pos = async function (url = '', payload = {}, header = {}) {
		const hit = await fetching('POST', url, payload, header).then(response);

		return hit;
	};

	const put = async function (url = '', payload = {}, header = {}) {
		const hit = await fetching('PUT', url, payload, header).then(response);

		return hit;
	};

	const del = async function (url = '', payload = {}, header = {}) {
		const hit = await fetching('DELETE', url, payload, header).then(response);

		return hit;
	};

	return {
		get: get,
		post: pos,
		put: put,
		delete: del,
	};
})();

kodok.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
	if (res.status === 200) {
		console.log(res);
	}
});

module.exports = kodok;
