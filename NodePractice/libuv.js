const crypto =  require('node:crypto');
const start = Date.now();
const maxcalls = 3;
for (let index = 0; index < maxcalls; index++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash : ${index + 1}`, Date.now() - start)
    });
    
    
}
console.log("Hellow");

