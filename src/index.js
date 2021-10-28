// Source : {
// https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// }

// kodok is Promise HTTP Javascript

const kodok = (function () {
	const get = async function (url = '') {
		const hit = await fetch(url, {
			method: 'GET',
		}).then((r) => r.json().then((d) => ({ status: r.status, data: d })));

		return hit;
	};

	return {
		get: get,
	};
})();

module.exports = kodok;
