const wget1 = (url, callback) => {
    console.log('wget1 [' + url + ']');
    setTimeout(() => {
        const response = {
            data: 'Hello World1'
        }
        callback(response);
    }, 3000);

}

const wget2 = (url) => {
    console.log('wget2 [' + url + ']');
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const response = {
                data: 'Hello World2'
            }
            // resolve(response);

            //실패 시
            reject('fails = wget2');
        }, 1000);
    });
}

// async 함수는 Promise를 리턴하는 
const _fetch = async url => {
    try{
        console.log('_fetch [' + url + ']');
        let response = await wget2(url);
        return response;
    } catch( err ){
        console.error(err);
    }
    
}

wget1('http://www.kickscar.com/api', (response) => console.log(response) );

//Promise를 리턴하는 함수 뒤에는 then을 사용할 수 있음
wget2('http://www.kickscar.com/api')
.then(response => console.log(response))
.catch(err => console.error(err));

_fetch('http://www.kickscar.com/api')
.then(response => console.log(response));

console.log('do something');