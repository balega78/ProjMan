const url = 'http://localhost:3001';

const apiService={
  get: async path => {
    const token = localStorage.getItem('token');
    const options = {
      method: 'GET',
      headers: {
        Accepts: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    return sendRequest(url + path, options);
  },
  post: async (path, body, auth = true) => {
    const options = {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    if (auth) {
      const token = localStorage.getItem('token');
      options.headers['Authorization'] = 'Bearer ' + token;
    }
    return sendRequest(url + path, options);
  },
};

const sendRequest = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    console.log(err);
  }

};
export default apiService;
