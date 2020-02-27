const fs = require('fs');
const testingLibrary = require('@testing-library/react');
const path = require('path');

function upperCaseName(name) {
  let uppername = [...name];
  uppername[0] = uppername[0].toUpperCase();
  return uppername.join('');
}

const generate = (name, object = testingLibrary) => {
  const properties = [];
  let upperName = upperCaseName(name);
  const filePath = path.join(__dirname + '/Type__' + upperName + '.js');
  let numberOfProperties = 0;
  const stack = [];

  let type = typeof object;
  if (type === 'object') {
    getProperties(object, filePath, properties);
  } else if (type === 'function') {
    addFunctionFile(filePath, upperName);
    return upperName;
  } else {
    return typeof object;
  }

  if (properties.length > 0) {
    properties.forEach(line => {
      if (line.includes('@')) {
        numberOfProperties += 1;
      }
    });
    if (numberOfProperties === Object.values(object).length) {
      return upperName;
    }
  }
  getFileStart(properties, upperName);

  Object.keys(object).forEach(key => {
    if (key !== null) {
      if (object[key] !== null && object[key] !== undefined) {
        const prop = object[key];
        const upperKey = upperCaseName(key);
        let fileExists = fs.existsSync(`./Type__${upperKey}`);
        if (fileExists) {
          properties.push(` * @property {${upperKey}} ${key}`);
        } else {
          let propType = generate(key, prop);
          properties.push(` * @property {${propType}} ${key}`);
        }
      }
    }
  });

  properties.push(` */`);
  properties.push(``);
  properties.push(``);
  writeFile(properties, filePath, upperName);
  return upperName;
};

const addFunctionFile = (filePath, name) => {
  const toWrite = [];
  getFileStart(toWrite, name);
  toWrite.push(' * @type {Function}');
  toWrite.push(' * @returning {any*}');
  toWrite.push(' */ ');
  toWrite.push('');
  toWrite.push('');
  toWrite.push('');
  writeFile(toWrite, filePath, name);
};

const writeFile = (toWrite, filePath, name) => {
  let file = fs.openSync(filePath, 'w');
  fs.writeFileSync(file, toWrite.join('\n'));
  fs.closeSync(file);
  filePath.replace("'", '/');
  console.log(filePath + ' written.');
  file = fs.openSync(__dirname + '/index.js', 'r');
  let exports = fs.readFileSync(__dirname + '/index.js', 'utf8');
  fs.closeSync(file);
  exports = exports.split('\n');

  for (let i = 0; i < exports.length; i++) {
    let line = exports[i];
    if (line.includes(name)) {
      return;
    }
  }
  fs.openSync(__dirname + '/index.js', 'a');
  fs.appendFileSync(file, `\nexport * from './Type__${name}'`, 'utf8');
  fs.closeSync(file);
  console.log(filePath + ' written');
};

const getFileStart = (properties, name) => {
  properties.push(`// ${name}`);
  properties.push('');
  properties.push('');
  properties.push('/**');
  properties.push(` * @typedef ${name}`);
  properties.push(' * ');
  properties.push(' * ');
};

const getProperties = (object, filePath, properties) => {
  try {
    let file = fs.existsSync(filePath);
    if (file) {
      let data = fs.readFileSync(filePath, 'utf8');
      data = data.split('\n');
      data.forEach(line => {
        properties.push(line);
      });
    }
  } catch (err) {
    console.log(err);
  }
};

generate('ReactTestingLibrary');
