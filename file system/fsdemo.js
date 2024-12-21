// import fs from "fs";
import fs from "fs/promises";

// readFile()  - callback

// fs.readFile("./demo.txt","utf-8",(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// readFileSync() - synchronous

// let data = fs.readFileSync("./demo.txt","utf-8");
// console.log(data);

//readFile() - promise

// fs.readFile("./demo.txt","utf-8").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// readFile() - async await

const readFile = async () => {
  try {
    let data = await fs.readFile("./demo.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// writeFile() - async await

const writeFile = async () => {
    try {
        await fs.writeFile("./demo.txt", "write file,Hello World");
        console.log("File written successfully-like this:");
    } catch (err) {
        console.log(err);
    }
};

// appendFile() - async await

const appendFile = async () => {
    try {
        await fs.appendFile("./demo.txt", "\nthis is append file");
        console.log("File appended successfully-like this:");
    } catch (err) {
        console.log(err);
    }
};
writeFile();
appendFile();
readFile();
