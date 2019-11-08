import axios from 'axios' ;


//creates and configures an instance of axios
//restart ngrok every 8 hours lecture 199
//ngrok http 3006 in terminal

export default axios.create({
    baseURL: 'http://687c5953.ngrok.io'
});