export default class FecthAPI {
    URL_FETCH;
    TypeCors;
    constructor(URL, TypeCors = 'no-cors'/* , Body = JSON.stringify({ REQ_CODE: 200 }), Method = 'GET', Headers = { 'Content-Type': 'application/json', } */){
        this.URL_FETCH = URL
        this.TypeCors = TypeCors
    }
    logConsoleURL = () => {
        fetch(this.URL_FETCH, {
            mode: this.TypeCors
        })
        .then(console.log(`Great Fecth URL = ${this.URL_FETCH}`))
    }
}