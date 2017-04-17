exports.seed = (knex, Promise) => {
  return knex('tools').del()
    .then( () => {
      return knex('tools').insert([
        {name: 'HTML5' , image_url: './images/logos-tech/html.png'},
        {name: 'CSS3' , image_url: './images/logos-tech/css3.png'},
        {name: 'JavaScript' , image_url: './images/logos-tech/js.png'},
        {name: 'AngularJS' , image_url: './images/logos-tech/angular-icon.png'},
        {name: 'jQuery' , image_url: './images/logos-tech/tech-jquery.png'},
        {name: 'Bootstrap' , image_url: './images/logos-tech/bootstrap-logo.png'},
        {name: 'Node.js' , image_url: './images/logos-tech/node.png'},
        {name: 'Atom' , image_url: './images/logos-tech/atom.png'},
        {name: 'Balsamiq' , image_url: './images/logos-tech/balsamiq.png'},
        {name: 'GitHub' , image_url: './images/logos-tech/Octocat.png'},
        {name: 'git' , image_url: './images/logos-tech/git.png'},
        {name: 'Heroku' , image_url: './images/logos-tech/heroku.png'}
      ])
    })
}
