Object.prototype.att0 = '0'
const avo = {att1: 'a'}  
const pai = {__proto__: avo, att2: 'b'} 
const filho = {__proto__: pai, att3: 'c'}

console.log(filho.att0, filho.att1, filho.att2, filho.att3)
