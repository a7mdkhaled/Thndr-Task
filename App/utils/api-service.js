const defaultHeaders = {
  Accept: 'application/json',
};

async function request(url, method, headers, body = null, query = {}, includeContentType) {
  if (includeContentType) headers = { ...headers, 'Content-Type': 'application/json' };
  const init = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: includeContentType
      ? JSON.stringify({ ...body, locale: 'en' })
      : { ...body, locale: 'en' },
  };
  if (!body) delete init.body;

  const queries = [];
  for (const key in query) {
    queries.push(`${key}=${query[key]}`);
  }

  if (queries.length) url += `?${queries.join('&')}`;
  let responseHeaders;
  let status;
  let responseBody;
  let response;
  let networkRequestError = false;

  try {
    response = await fetch(url, {
      ...init,
    });
    responseHeaders = response.headers;
    status = response.status;
  } catch (error) {
    if (
      error.message === 'Timeout'
      || error.message === 'Network request failed'
      || error.name === 'AbortError'
    ) {
      networkRequestError = true;
    }
  }
  try {
    responseBody = await response?.json();
  } catch (e) {
    networkRequestError = true;
  }
  return {
    status,
    body: responseBody,
    headers: responseHeaders,
    networkRequestError,
  };
}

async function get(url, options = { headers: {}, query: {} }, includeContentType = true) {
  const { headers, query } = options;

  return request(url, 'GET', headers, null, query, includeContentType);
}

const http = { get };

export default http;
