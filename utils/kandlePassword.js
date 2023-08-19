const bcryptjs = require('bcryptjs');

/**
 * @param {string} passwordPlain
 * @returns {Promise<string>}
 * @description Encrypts a password
 */
const encrypt = async (passwordPlain)=>{
 const hash = await bcryptjs.hash(passwordPlain, 10)
 return hash
}
/**
 * 
 * @param {*} passWordPlain 
 * @param {*} passwordHash 
 * @returns 
 * @description Compare a password with a hash
 */

const compare = async (passWordPlain,passwordHash)=>{
    return await bcryptjs.compare(passWordPlain,passwordHash)  
}


module.exports = {encrypt, compare}