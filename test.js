import bcrypt from 'bcryptjs';

const saltRounds = 10;
const myPlaintextPassword = 'nonCambiaremai667'; //da non cambiare se no tutte le password nel database non vanno più
const someOtherPlaintextPassword = 'not_bacon';

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

console.log(hash)

let test2 = bcrypt.compareSync(myPlaintextPassword, hash); // true
let test1 = bcrypt.compareSync(someOtherPlaintextPassword, hash); // false

