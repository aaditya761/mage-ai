import axios from 'axios';
// import API_CONSTANTS from './apiConstants';
// import CONSTANTS from './constants';

const baseUrl = 'http://localhost:3005';

const http = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

const requestHandler = (request) => {
    request.headers = {
        ...request.headers,
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJjNWE1NjdjMy00MjRhLTRjNTctOGMzZC03ZjUxOTQ2NGM1ZjgiLCJpYXQiOjE2OTE2ODA0ODksImV4cCI6MTY5MTc2Njg4OX0.5cikddaL9c2mu3G7yLU2Jf1C3ipaJnFMNQmCFgpZw-4',
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

export default http;
