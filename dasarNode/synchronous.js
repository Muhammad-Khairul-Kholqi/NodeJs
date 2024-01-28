// sintaks synchronous
// menghasilkan outuput dari yang paling awal walaupun prosesnya lama
const getUserSync = (id) => {
    const nama = id === 1 ? 'Khairul' : 'Kholqi';
    return {id, nama}
}

const userSatu  = getUserSync(1);
console.log(userSatu)

const userDua = getUserSync(2);
console.log(userDua)

const halo = 'hello therere';
console.log(halo)