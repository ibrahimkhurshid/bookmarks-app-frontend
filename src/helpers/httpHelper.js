const httpHelper = (password) => {
  const customFetch = async (
    url,
    options = { headers: { secret: password } }
  ) => {
    const defaultMethod = "GET";
    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
      mode: "cors",
      cache: "no-cache",
    };

    options.method = options.method || defaultMethod;
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (err) {
      return err;
    }
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};

export default httpHelper;
