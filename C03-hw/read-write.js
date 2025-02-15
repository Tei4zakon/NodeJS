const fs = require('fs');

const read = (fileName) => {
    return new Promise ((success, fail) => {
        fs.readFile(fileName, 'utf-8', (error) => {
            if (error) return fail (error);
            success()
        })
    })
}

const write = (fileName, data) => {
    return new Promise ((success, fail) => {
        fs.writeFile (fileName, data, (error) => {
            if (error) return fail (error);
            success()
        })
    })
}

const append = (fileName, data) => {
    return new Promise ((success, fail) => {
        fs.appendFile (fileName, data, (error) => {
            if (error) return fail (error);
            success()
        })
    })
}

module.exports = {
    read,
    write,
    append,
}