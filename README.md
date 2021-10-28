# Kodok - Micro Size HTTP Request

Kodok is promise HTTP request for Javascript. Basically the workflow uses fetch, but the way it works is simplified.

## Install

```bash
  npm i kodok --save
```

## Run

```javascript
import kodok from 'kodok';

//GET
kodok
	.get(`${url}`)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		if (err) {
			console.log(er);
		}
	});

//POST
const payload = {
	data_id: 1,
};

const header = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	},
};

kodok
	.post(`${url}`, payload, header)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		if (err) {
			console.log(er);
		}
	});
```

## Response

| Title      | Description                  |
| ---------- | ---------------------------- |
| data       | Result from API              |
| status     | HTTP response status code    |
| date_time  | Date time when fetch started |
| user_agent | Detail browser               |

## Authors

-   [@firmnardians](https://github.com/firmnardians)
