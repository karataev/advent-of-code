const md5 = require('md5');

for (let i = 0; i < 10000000; i++) {
    const str = 'bgvyzdsv' + i;
    const res = md5(str);
    // console.log(res.slice(0, 3));
    if (res.slice(0, 6) === '000000') {
        console.log(res, i);
        break;
    }
}