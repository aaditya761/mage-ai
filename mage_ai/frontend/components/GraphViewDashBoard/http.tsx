import axios from 'axios';
// import API_CONSTANTS from './apiConstants';
// import CONSTANTS from './constants';

const baseUrl = 'http://localhost:3005';

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

const requestHandler = (request) => {
    request.headers = {
        ...request.headers,
        Authorization: '',
    };
    return request;
};

const responseHandler = (response) => {
    return response?.data;
};
//
const errorHandler = (error) => {
    return Promise.reject(error);
};
//
http.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

http.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error),
);
//
// export const mlFLowHttp = axios.create({
//     baseURL: 'https://mcin9yp3zn.us-west-2.awsapprunner.com/api/2.0',
//     headers: {
//         'origin': 'http://localhost:3001',
//         'Authorization': 'Basic bWxmbG93Ok9XTXh1UXozQDRtNFhWTSU=',
//         'Content-Type': 'application/json',
//     },
// });

