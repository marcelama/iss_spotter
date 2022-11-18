//It will contain most of the logic for fetching the data from each API endpoint./**

/* Makes a single API request to retrieve the user's IP address.
* Input:
*   - A callback (to pass back an error or the IP string)
* Returns (via Callback):
*   - An error, if any (nullable)
*   - The IP address as a string (null if error). Example: "162.245.144.188"
*/
const request = require('request');

const fetchMyIP = function(callback) {

  const url = 'https://api.ipify.org?format=json';

  request(url, (error, response, body) => {
    // console.log('this is the body:', body);
    // console.log('this is the body length:', JSON.parse(body).length);

    // call the callback with either an error if there's a error or null if there isn't, for the first argument
    if (error) return callback(error, null);
  
    // if there's an error return error, and description is null
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    // if there's no error return null, and return ip
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

module.exports = { fetchMyIP };