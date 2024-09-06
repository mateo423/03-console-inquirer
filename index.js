const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Ingrese su username',
  },
  {
    type: 'password',
    name: 'password',
    mask: '*',
    message: 'Ingrese su password',
    validate: ((value) => {
      if (value.length < 8) {
        return 'La password debe de tener mas de 8 caracteres'
      }
      return true;
    })
  },
  {
    type: 'list',
    name: 'color',
    message: 'Cual es tu color favorito',
    default: 'Ninguno',
    choices: [
      { value: '1', name: '1. Amarillo' },
      { value: '2', name: '2. Azul' },
      { value: '3', name: '3. Rojo' },
      { value: '4', name: '4. Verde' },

    ]
  }
];

const prompt = inquirer.createPromptModule()
prompt(questions)
  .then(answers => {
    if (answers.username && answers.password) {
      console.log(`Tu username : ${answers.username}`);
      console.log(`Tu password : ${answers.password}`);
    } else {
      console.log('Eror no se encontro ninguna Respuesta');
    }
    switch (answers.color) {
      case '1':
        console.log('Tu color es : Amarillo');
        break;
      case '2':
        console.log('Tu color es : Azul');
        break;
      case '3':
        console.log('Tu color es : Rojo');
        break;
      case '4':
        console.log('Tu color es : Verde');
        break;
      default:
        console.log('Por favor selecione un Color ');
    };
  })
  .catch(err => {
    console.error(err)
  });
