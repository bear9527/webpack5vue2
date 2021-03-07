
var baseURL = 'http://localhost:3001';

function http({
    method='GET',
    url,
    params={},
    data={}
}){
    //拼接字符串
    let queryString = '';
    Object.keys(params).map((key,index)=>{
        // dataString += `${index[0]}=${index[1]}&`;
        queryString += `${key}=${params[key]}&`;
    })
    if(queryString){
        queryString = queryString.substring(0,queryString.length-1);
        url +="?"+queryString;
    }
    //统一请求方法大小写 为大写
    method = method.toUpperCase();


    const xhr = new XMLHttpRequest();
    xhr.open(method,baseURL+url,true);
    if(method === 'GET' || method === 'DELETE'){
        xhr.send();
    }else if(method === 'POST' || method === 'PUT'){
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify(data));
    }
    

    return new Promise((resolve, reject)=>{
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState !== 4){
                return;
            }
            const { status, statusText } = xhr;
            if(status >= 200 && status <= 299){
                //成功
                const reseponse = {
                    data: JSON.parse(xhr.response),
                    status: status,
                    statusText: statusText
                }
                resolve(reseponse);
            }else{
                //失败
                reject(new Error('请求错误 状态：'+ status +  statusText));
            }
        }
    })
}


export {
    http
}