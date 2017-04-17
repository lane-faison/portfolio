exports.seed = (knex, Promise) => {
  return knex('tools_want').del()
    .then( () => {
      return knex('tools_want').insert([
        {name: 'C#' , image_url: './images/logos-tech/c-sharp.png'},
        {name: 'React' , image_url: './images/logos-tech/react.png'},
        {name: 'Swift' , image_url: './images/logos-tech/swift.png'}
      ])
    })
}
