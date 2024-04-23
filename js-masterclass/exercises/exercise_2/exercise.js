const statement =
  'create table author (id number, name string, age number, city string, state string, country string)'

const regexp = /create table ([a-z]+) \((.+)\)/
const parsedStatement = statement.match(regexp)
const tableName = parsedStatement[1]
const columns = parsedStatement[2].split(', ')

console.log(tableName)
console.log(columns)

const database = {
  tables: {
    [tableName]: {
      columns: {},
      data: [],
    },
  },
};

for (let column of columns) {
  const [name, type] = column.split(' ');
  database.tables[tableName].columns[name] = type;
};

console.log(JSON.stringify(database, undefined, ' '));

console.log(JSON.stringify(database));

console.log(database);