const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, 'modules') , (err) => {
//     if (err){
//         throw err;
//     }
//
//     console.log('Folder was created successfully')
//
//     fs.writeFile(path.join(__dirname, 'modules', 'path.js'),
//         '//path module',
//         (err) => {
//         if (err) {
//             throw err;
//         }
//
//         console.log('file was created successfully');
//     })
// })


fs.writeFile(path.join(__dirname, 'modules', 'path.txt'),
    '// Nodejs tutorial',
    (err) => {
        if (err) {
            throw err;
        }
        console.log('file was created successfully');

        fs.appendFile(path.join(__dirname, 'modules', 'path.txt'),
            " by Hasan Sadullayev",
            (err) => {
            if (err) {
                throw err;
            }
                console.log('Document changed');
                fs.readFile(path.join(__dirname, "modules", "path.txt"),
                    "utf-8",
                    (err, data) => {
                        if (err) {
                            throw err
                        }
                        console.log(Buffer.from(data).toString())
                    })
        })
    })


fs.rename(path.join(__dirname, "modules", "path.txt"),
        path.join(__dirname, "modules", "Node.txt"),
    (err => {
        if (err) throw err;
        console.log("File changed successfully")
    })
)

