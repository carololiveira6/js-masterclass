const statement =
  'create table author (id number, name string, age number, city string, state string, country string)'

const database = {
  tables: {},
  createTable(statement) {
    const tableName = statement.match(/table\s+(\w+)/i)[1];

    const columns = statement.match(/\((.*?)\)/)[1].split(', ');

    this.tables[tableName] = {
      columns: {},
      data: [],
    };

    const columnsString = columns
      .map((column) => {
        const [name, type] = column.split(' ')
        return `${name} ${type}`
      })
      .join(', ');

    for (let column of columns) {
      column = column.split(' ')
      const [name, type] = column;
      this.tables[tableName].columns[name] = type
    };
  },
  insert (statement) {
    const statementInsert = statement.match(/insert into (\w+) \((.+)\) values \((.+)\)/);

    // Retorna
    //["insert into table1 (col1, col2) values (val1, val2)", "table1", "col1, col2", "val1, val2"]

    let [, tableName, columns, values] = statementInsert;
    columns = columns.split(', ');
    values = values.split(', ');

    const row = {};
    for (let i = 0; i < columns.length; i++) {
      row[columns[i]] = values[i]
    };

    this.tables[tableName].data.push(row);
  },
  execute(statement) {
    if (statement.startsWith('create table')) {
      return this.createTable(statement);
    }

    if (statement.startsWith('insert into')) {
      return this.insert(statement);
    }

    throw new DatabaseError(statement, `Syntax error: "${statement}"`);
  },
}

const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = message;
}

try {
  database.execute(statement);
  // database.execute("select id, name from author"); 
  // database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
  database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
  database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)"); 
} catch (error) {
  console.log(error.message);
}

console.log(JSON.stringify(database, null, 2)); // Output: {"tables":{"author":{"columns":{"id":"number","name":"string","age":"number","city":"string","state":"string","country":"string"},"data":[]}}}

