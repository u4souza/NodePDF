const pdf = require('html-pdf');
const ejs = require('ejs')

let nome = 'uilson';

// IMPORTAR VÁRIAVEIS PARA ARQUIVO EJS
ejs.renderFile('./arquivoejs.ejs',{nome}, (error, html) => {
    
    if (error){
    console.log ('ERRO!');

    } else {
        pdf.create(html, {}).toFile('./namepdf.pdf', (req, res) => {
            if (error) {
                console.log ('Aconteceu um erro');
            }else {
                console.log (res);
            }
            
        });
    }
});

