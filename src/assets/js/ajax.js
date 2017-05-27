import axios from 'axios';

export function ajax(type,url) {
    let data = axios({
        method: type,
        url: url
    }).then( (res) =>{
        for(var key in res.data){
            console.log(key);
        }
        return res.data;
    }, (err) => {
        return err;
    });
    for(var key in data){
        console.log(key);
    }
    return data;
}