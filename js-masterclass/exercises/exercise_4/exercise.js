const statement =
  'create table author (id number, name string, age number, city string, state string, country string)'

const database = {
  tables: {},
  createTable(statement) {
    const tableName = statement.match(/table\s+(\w+)/i)[1]

    const columns = statement.match(/\((.*?)\)/)[1].split(', ')

    this.tables[tableName] = {
      columns: {},
      data: [],
    }

    const columnsString = columns
      .map((column) => {
        const [name, type] = column.split(' ')
        return `${name} ${type}`
      })
      .join(', ')

    for (let column of columns) {
      column = column.split(' ')
      const name = column[0]
      const type = column[1]
      this.tables[tableName].columns[name] = type
    }
  },
  execute(statement) {
    if (statement.startsWith('create table')) {
      return this.createTable(statement)
    }
    throw new DatabaseError(statement, `Syntax error: "${statement}"`)
  },
}

const DatabaseError = function (statement, message) {
  this.statement = statement
  this.message = message
}

try {
  database.execute(statement)
  database.execute("select id, name from author");  
} catch (error) {
  console.log(error.message)
}

console.log(JSON.stringify(database, null, 2)) // Output: {"tables":{"author":{"columns":{"id":"number","name":"string","age":"number","city":"string","state":"string","country":"string"},"data":[]}}}
