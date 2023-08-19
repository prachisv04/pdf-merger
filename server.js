const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const pdfmerger = require('./mergepdf');
const { Console } = require('console');
const upload = multer({dest:'uploads/'})
const port = 3000;

app.use(express.static(__dirname+'/Public'))


app.get('/',(req,res)=>{
    res.sendFile( path.join(__dirname, "/index.html"));
})


app.post('/merger', upload.array('pdfs',2), async (req,res,next)=>{
   await pdfmerger.pdfmerger(path.join(__dirname, ...req.files[0].path),path.join(__dirname, req.files[1].path));
    // res.redirect("http://localhost:3000/merged.pdf");
    res.sendFile(path.join(__dirname, "merged.pdf"));

})
app.listen(port , ()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})