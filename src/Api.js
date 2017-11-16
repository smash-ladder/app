import Ketting from 'ketting';
var api = new Ketting('http://dev14-uswest1cdevc:3000/ladders/ssb64-1v1');
api.contentTypes = [
    {
      mime: 'application/hal+json',
      representor: 'hal',
    },
    {
      mime: 'application/json',
      representor: 'hal',
    }
];
export default api;