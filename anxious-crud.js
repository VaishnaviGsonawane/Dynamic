// GET REQUEST
function getTodos() {
  console.log('GET Request');
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('Request intercepted:', config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('Response intercepted:', response);
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


// AXIOS INSTANCES
// Create an instance
const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// Use the instance for requests
instance.get('/endpoint')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);