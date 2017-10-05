module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost/students_test'
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/students'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};