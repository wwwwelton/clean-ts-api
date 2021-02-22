import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: '4Dev - Enquetes para Programadores',
    description: 'Essa é a documentação da API feita pelo instrutor Rodrigo Manguinho durante o curso da Udemy de NodeJs usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Welton Leite',
      email: 'av4t@hotmail.com',
      url: 'https://www.linkedin.com/in/welton-leite-b3492985/'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  externalDocs: {
    description: 'Link do Curso',
    url: 'https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1'
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }, {
    name: 'Enquete',
    description: 'APIs relacionadas a Enquete'
  }],
  paths,
  schemas,
  components
}
