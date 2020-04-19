function DataTable(config, data) {
  let widthTable = config.columns.length;
  let hightTable = users.length;
  let root = document.getElementById(config.parent);
  let table = createAndInnerElement("table", root, "");
  let thead = createAndInnerElement("thead", table, "");
  let trHead = createAndInnerElement("tr", thead, "");

  config.columns.forEach(thElement => {
    let th = createAndInnerElement("th", trHead, thElement.title);
    if (thElement.type === 'number') {
      th.className = "align-right";
    }
  });

  let tbody = createAndInnerElement("tbody", table, "");
  let index = 0;
  data.forEach(trElement => {
    let trBody = createAndInnerElement("tr", tbody, "");
    config.columns.forEach(thElement => {
      let stringValue = thElement.value;
      let td = (stringValue === '_index') ? createAndInnerElement("td", trBody, ++index)
        : createAndInnerElement("td", trBody, trElement[stringValue]);
      if (thElement.type === 'number') {
        td.className = "align-right";
      }
    });
    // createAndInnerElement("td",trBody,++index);
    // createAndInnerElement("td",trBody,trElement.name);
    // createAndInnerElement("td",trBody,trElement.surname);
    // let age= createAndInnerElement("td",trBody,trElement.age);
    // age.className="align-right";
  });
}

function createAndInnerElement(tagString, parentTag, inner) {
  let tag = document.createElement(tagString);
  parentTag.appendChild(tag);
  tag.innerHTML = inner;
  return tag;
}

const config1 = {
  parent: 'usersTable',
  columns: [
    {title: '№', value: '_index'},
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname'},
    {title: 'Возраст', value: 'age', type: 'number'},
  ]
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
  {id: 30052, name: 'Петя', surname: 'Васечкин', age: 16},
  {id: 30053, name: 'Миша', surname: 'Иванов', age: 16},
  {id: 30054, name: 'Маша', surname: 'Петрова', age: 13},
  {id: 30055, name: 'Федя', surname: 'Федоров', age: 14},
];

DataTable(config1, users);
