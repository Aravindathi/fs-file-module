import express from "express";
import fs from "fs"
import path from "path";

const PORT = 3001;

const app = express();
app.use(express.json());


app.post("/files", async (req, res) => { 
let dateobj = new Date()
let date = dateobj.getFullYear() +"-"+ dateobj.getMonth() +"-"+ dateobj.getDate()
let time = dateobj.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })
console.log(date)

fs.writeFile(`./test/${date}.txt`, time, function (err) {
    if (err) throw err;
    console.log('File Created');
    }); 
    res.send("File created")
});

app.get("/files", async (req, res) => { 
fs.readdir("./test", function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {
        console.log(file); 
    });
    res.send(files)
});
})


app.listen(PORT, console.log("server starts"));
