const fs = require ('fs');

const {read, write, append} = require ('./read-write');

const writeFile = () => {
    return new Promise ((success, fail) => {
        fs.writeFile('hw3.txt', "Tea's Homework for class-3 ", (error) => {
            if (error) return fail (error);
            return success()
        })
    })
};

writeFile()
.then ((resolve) => console.log(resolve))
.catch((error) => console.log(error));



const appendFile = () => {
    return new Promise ((success, fail) => {
        fs.appendFile('hw3.txt', "written and apended successfully!", (error) => {
            if (error) return fail (error);
            return success ()
        })
    })
};

appendFile()
.then ((resolve) => console.log (resolve))
.catch((error) => console.log(error));


const writeWithAsync = async () => {
    try {
        await write ('hw-3.txt', "Tea's homework for Class-3 ");
        const content = await read ('hw-3.txt');
        console.log(content);
    } catch (error) {
        console.log(error)
    }
};

writeWithAsync();

const appendWithAsync = async () => {
    try {
        await append ('hw-3.txt', 'successful with async/await function!');
        const content = await read ('hw-3.txt');
        console.log(content);
    } catch (error) {
        console.log(error)
    }
};

appendWithAsync();