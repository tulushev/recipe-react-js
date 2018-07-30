/* REQUEST TO SERVER */
function* request(endpoint, method, params) {
  try {
    const url = 'http://localhost:3000/api/v1/';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    let body;
    if (method === 'POST' || method === 'PUT' || method === 'DEL') {
      body = JSON.stringify(params);
    }

    const result = yield fetch(`${url}${endpoint}`, {
      method,
      headers,
      body,
    });
    const json = yield result.json();
    // console.warn('endpoint', endpoint, 'res', result);

    if (
      result.headers &&
      result.headers.map &&
      result.headers.map['x-total-count']
    ) {
      json.count = result.headers.map['x-total-count'];
    }

    return json;
  } catch (e) {
    // console.log(e);
    throw new Error(e);
  }
}

/* REQUEST BY METHOD POST */
export function* post(endpoint, params) {
  return yield request(endpoint, 'POST', params);
}

/* REQUEST BY METHOD GET */
export function* get(endpoint, params) {
  return yield request(endpoint, 'GET', params);
}

/* REQUEST BY METHOD PUT */
export function* put(endpoint, params) {
  return yield request(endpoint, 'PUT', params);
}

/* REQUEST BY METHOD DELETE */
export function* del(endpoint, params) {
  return yield request(endpoint, 'DELETE', params);
}
