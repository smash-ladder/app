import Ketting from 'ketting';
var api = new Ketting('http://smash-api.badgateway.net/ladders/ssbu-2021/');

api.contentTypes = [{
  mime: 'application/hal+json',
  representor: 'hal',
}, {
  mime: 'application/json',
  representor: 'hal',
}];

export default api;
