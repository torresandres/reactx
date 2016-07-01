import superagent from 'superagent';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

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

  return apiUri + adjustedPath;
}

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
