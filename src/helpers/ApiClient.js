import superagent from 'superagent';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

// function formatUrl(path) {
//   const adjustedPath = path[0] !== '/' ? '/' + path : path;
//   if (__SERVER__) {
//     // Prepend host and port of the API server to the path.
//     // return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
//     return 'http://localhost:8080' + adjustedPath;
//   }
//   // Prepend `/api` to relative URL, to proxy to API server.
//   return 'http://localhost:8080' + adjustedPath;
// }
function formatUrl(path) {
  let adjustedPath = path[0] !== '/' ? '/' + path : path;
  let apiUri = config.apiHost;
  if (config.apiPort) {
    apiUri += ':' + config.apiPort;
  }
  if (path.charAt(0) !== '/') {
    apiUri = '';
    adjustedPath = adjustedPath.slice(1);
  }
  console.log(apiUri, adjustedPath);

  return apiUri + adjustedPath;
}

// function formatUrl(path) {
//   const adjustedPath = path[0] !== '/' ? '/' + path : path;
//   let apiHost = config.apiHost;

//   if (__CLIENT__) {
//     apiHost = window.__apiHost;
//   }

//   if (path.charAt(0) !== '/') {
//     apiHost = '';
//   }

//   return apiHost + adjustedPath;
// }

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class __ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (params) {
          request.query(params);
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        request.set('Accept', 'application/json');

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      }));
  }
}

const ApiClient = __ApiClient;

export default ApiClient;
