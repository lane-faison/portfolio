module.exports = {
  production: {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  },

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'portfolio',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'portfolio-test',
    }
  }

};
