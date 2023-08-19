const PDFMerger = require('pdf-merger-js');
let merge = new PDFMerger();

const pdfmerger = async (p1,p2)=>{
    await merge.add(p1);
    await merge.add(p2);
    await merge.save('merged.pdf');
}

module.exports = {pdfmerger};