const os = require('os')
const user = os.userInfo()
//console.log(os.uptime())
const currentOs = {
    name: os.type(),
    freeMem: os.freemem()
}
console.log("the deatials are: ",currentOs)