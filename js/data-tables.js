"use strict";

function DataTable(config, data) {
  let searchData;
  let countSortable = 0;
  let sortData = searchData = data;

  /*начальная инициализация состояния кнопок сортировки*/
  let sortState = new Map();
  config.columns.forEach(thElement => {
    if (thElement.sortable) {
      sortState.set(thElement, 1);
      countSortable++;
    }
  });
  renderTable();

  function buildSearchData(word) {
    if (!config.search || !word) return data;
    let arraySearchFields = (config.search.fields != null || config.search.fields.length !== 0) ? config.search.fields : config.columns.map(item => item.value);
    let arr = [];
    if (!config.search.filters) {
      arraySearchFields.forEach(nameAtrData => {
        let a = (data.filter(user => (user[nameAtrData] === word)));
        arr = (a.length !== 0 && !(arr.find(el => {
          return el === a
        })) && !arr.includes(a)) ? arr.concat(a) : arr;
      });
    } else {
      arraySearchFields.forEach(nameAtrData => {
        config.search.filters.forEach(nameFilter => {
          let a = (data.filter(user => (nameFilter(user[nameAtrData]) === nameFilter(word))));
          arr = (a.length !== 0) ? arr.concat(a) : arr;
        })
      })
    }
    return arr;
  }

  function renderTable() {
    let root = document.getElementById(config.parent);
    let search = null;
    if (config.search) {
      search = createAndInnerElement("div", root, "");
      search.className = "table-search";
      let input = createAndInnerElement("input", search, "");
      input.type = "text";
      input.focus();
      input.addEventListener("change", (event) => {
        buildData(event.target.value)
      });
      let clear = createAndInnerElement("button", search, "clear");
      clear.addEventListener("click", () => buildData(""));
    }
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
    sortData.forEach(trElement => {
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

    function buildData(word) {
      sortData = searchData = buildSearchData(word);
      table.remove();
      if (search) search.remove();
      renderTable();
    }

    function chooseSort(element, newState) {
      if (newState === 1) return searchData;
      let newUsers = searchData.slice();
      newUsers.sort((a, b) => {
        if (typeof (a[element.value]) === "number") {
          return (1 - newState) * (a[element.value] - b[element.value]);
        } else return (1 - newState) *
          ((a[element.value].toLowerCase() < b[element.value].toLowerCase()) ? 1 : -1);
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
      sortData = chooseSort(element, newState);
      table.remove();
      if (search) search.remove();
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
    {title: 'Возраст', value: 'age', type: 'number', sortable: true}
  ],
  search: {
    fields: ['name', 'surname'],
    filters: [
      v => v.toLowerCase()
      // v => toKeyboardLayout(v, 'ru'),
      // v => toKeyboardLayout(v, 'en')
    ]
  }
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
  {id: 30052, name: 'Петя', surname: 'Васечкин', age: 16},
  {id: 30053, name: 'Миша', surname: 'Иванов', age: 16},
  {id: 30054, name: 'Маша', surname: 'Петрова', age: 13},
  {id: 30055, name: 'Федя', surname: 'Федоров', age: 14},
  {id: 30056, name: 'Фамильноеимя', surname: 'Фамильноеимя', age: 14},
];

DataTable(config1, users);
