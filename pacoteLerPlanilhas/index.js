const readXlsxFile = require('read-excel-file/node');
let validator = require('validator');

readXlsxFile('./Alunos.xlsx').then((rows) => {
    rows.forEach(element => {
        const nome = element[0]
        const email = element[1]
        const idade = element[2]
        const matricula = element[3]

        if(nome === null || validator.isEmpty(nome)){
            return
        } else if(!validator.isEmail(email)){
            return
        } else if(idade <= 0){
            return
        } else if(!validator.isAlphanumeric(matricula)){
            return
        }

        console.log()
        console.log(element)
        console.log()
    });
})

