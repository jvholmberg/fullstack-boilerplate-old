'use strict';

export default function XHR (url) {

  let core = {
    ajax: (method, url, args, headers) => {
      return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function () {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        if (headers) {
          Object.keys(headers).forEach(function (key) {
            xhr.setRequestHeader(key, headers[key]);
          });
        }
        // We'll need to stringify if we've been given an object
        // If we have a string, this is skipped.
        if (args && typeof args === 'object') {
          args = Object.keys(args).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
          }).join('&');
        }
        xhr.send(args);
      });
    }
  };

  return {
    'get': (args, headers) => {
      return core.ajax('GET', url, args);
    },
    'post': (args, headers) => {
      return core.ajax('POST', url, args);
    },
    'put': (args, headers) => {
      return core.ajax('PUT', url, args);
    },
    'delete': (args, headers) => {
      return core.ajax('DELETE', url, args);
    }
  };


/*
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    var params = opts.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
    xhr.send(params);
  });
}

// Headers and params are optional
makeRequest({
  method: 'GET',
  url: 'http://example.com'
})
.then(function (datums) {
  return makeRequest({
    method: 'POST',
    url: datums.url,
    params: {
      score: 9001
    },
    headers: {
      'X-Subliminal-Message': 'Upvote-this-answer'
    }
  });
})
.catch(function (err) {
  console.error('Augh, there was an error!', err.statusText);
});

  // Adapter pattern
  return {
    'get': (args) => {
      return core.ajax('GET', url, args);
    },
    'post': (args) => {
      return core.ajax('POST', url, args);
    },
    'put': (args) => {
      return core.ajax('PUT', url, args);
    },
    'delete': (args) => {
      return core.ajax('DELETE', url, args);
    }
  };
  */
}
