function generateKey(length, characters) {
    let key = '';

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.round(Math.random() * (characters.length - 1) );
        
        key += characters[randomIndex];
    }

    return key;
}


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(`Ключ [${key.length}]: ${key}`);