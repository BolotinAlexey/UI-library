function DataTable(config, data) {
  let countSortable = 0;
  let currentData = data;
  /*начальная инициализация состояния кнопок сортировки*/
  let sortState = new Map();
  config.columns.forEach(thElement => {
    if (thElement.sortable) {
      sortState.set(thElement, 1);
      countSortable++;
    }
  });
  renderTable();

  function renderTable() {
    let root = document.getElementById(config.parent);
    let table = createAndInnerElement("table", root, "");
    let thead = createAndInnerElement("thead", table, "");
    let trHead = createAndInnerElement("tr", thead, "");

    /*прорисовка шапки*/
    config.columns.forEach(thElement => {
      let th = createAndInnerElement("th", trHead, thElement.title);
      if (thElement.sortable) insertButtons(th, thElement, sortState);
      if (thElement.type === 'number') {
        th.className = "align-right";
      }
    });

    /*прорисовка тела таблицы*/
    let tbody = createAndInnerElement("tbody", table, "");
    let index = 0;
    currentData.forEach(trElement => {
      let trBody = createAndInnerElement("tr", tbody, "");
      config.columns.forEach(thElement => {
        let stringValue = thElement.value;
        let td = (stringValue === '_index') ? createAndInnerElement("td", trBody, ++index)
          : createAndInnerElement("td", trBody, trElement[stringValue]);
        if (thElement.type === 'number') {
          td.className = "align-right";
        }
      });
    });

    function chooseSort(element, newState) {
      if (newState === 1) return data;
      let newUsers = data.slice(0);
      newUsers.sort((a, b) => {
        if (typeof(a[element.value])==="number") {
          return (1 - newState) * (a[element.value] - b[element.value]);
        }
        else return (1 - newState)*
          ((a[element.value].toLowerCase() < b[element.value].toLowerCase())?1:-1);
      });
      return newUsers;
    }

    function resort(element, sortState) {
      /*инкреминируем циклически состояние сортировки колонки нажатой кнопки
      * остальные кнопки сбрасываются в начальное состояние*/
      let newState = (sortState.get(element) + 1) % (countSortable + 1);
      config.columns.forEach(thElement => {
        if (thElement.sortable) {
          sortState.set(thElement, 1);
        }
      });
      sortState.set(element, newState);
      currentData = chooseSort(element, newState);
      table.remove();
      renderTable();
    }

    function insertButtons(th, element, sortState) {
      let button = createAndInnerElement("button", th, "");
      let classNameI = "fas " + ((sortState.get(element) === 0) ? "fa-sort-down" :
        (sortState.get(element) === 1) ? "fa-sort" : "fa-sort-up");
      let i = createAndInnerElement("i", button, "");
      i.className = classNameI;
      i.addEventListener("click", function () {
        resort(element, sortState)
      });
    }
  }
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
    {title: 'Фамилия', value: 'surname', sortable: true},
    {title: 'Возраст', value: 'age', type: 'number', sortable: true},
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
