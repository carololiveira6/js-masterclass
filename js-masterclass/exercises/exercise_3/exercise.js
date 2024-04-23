const statement =
  'create table author (id number, name string, age number, city string, state string, country string)'

const database = {
  tables: {},

  createTable(statement) {
    const regexp = /create table ([a-z]+) \((.+)\)/
    const parsedStatement = statement.match(regexp)
    const tableName = parsedStatement[1]
    const columns = parsedStatement[2].split(', ')

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
      const [name, type] = column.split(' ')
      this.tables[tableName].columns[name] = type
    }
  },

  execute(statement) {
    if (statement.startsWith('create table')) {
      return this.createTable(statement)
    }
  },
}

database.execute(statement)
console.log(JSON.stringify(database, null, 2));

