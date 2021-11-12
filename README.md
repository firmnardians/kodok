# Kodok 🐸 - Micro Size HTTP Request

Kodok is promise HTTP request for Javascript. Basically the workflow uses fetch, but the way it works is simplified.

## Install

```bash
  npm i kodok --save
```

## Example

```javascript
import kodok from 'kodok';

//GET
kodok.get(`${url}`).then((res) => {
		// response
		console.log(res);
	}).catch((err) => {
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

## Kodok Methods

| Methods                            | 
| ---------------------------------- | 
| kodok.get(url)                     | 
| kodok.post(url, payload, header)   | 
| kodok.put(url, payload, header)  	 | 
| kodok.delete(url, payload, header) | 

## Authors

-   [@firmnardians](https://github.com/firmnardians)
