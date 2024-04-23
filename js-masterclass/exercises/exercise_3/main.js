const database = {
  tables: {},

  createTable(statement) {
    const regexp = /create table ([a-z]+) \((.+)\)/

    const parsedStatement = statement.match(regexp)
    const tableName = parsedStatement[1]
    let columns = parsedStatement[2]
    columns = columns.split(', ')

    this.tables[tableName] = {
      columns: {},
      data: [],
    }

    for (let column of columns) {
      column = column.split(' ')
      const name = column[0]
      const type = column[1]
      this.tables[tableName].columns[name] = type
    }
  },

  execute(statement) {
    return this.createTable(statement);
  }
}

database.execute('create table author (id number, name string, age number, city string, state string, country string)');

console.log(JSON.stringify(database, undefined, "  "));
