"use strict";


function DataTable(config, data) {
  /** array of user records, after processing by the search engine*/
  let searchData;
  /** array of user records, after processing by the search engine and then sorting*/
  let sortData = searchData = data;
  /** amount of sorting columns*/
  let countSortable = 0;

  /** initialize the state of the sort buttons*/
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

    /** drawing of the head*/
    config.columns.forEach(thElement => {
      let th = createAndInnerElement("th", trHead, thElement.title);
      if (thElement.sortable) insertButtons(th, thElement, sortState);
      if (thElement.type === 'number') {
        th.className = "align-right";
      }
    });

    /** table body drawing*/
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

    /** callback function that executes when a search word is entered*/
    function buildData(word) {
      sortData = searchData = buildSearchData(word);
      table.remove();
      if (search) search.remove();
      renderTable();
    }

    /** returns an array of user records that match by keyword*/
    function buildSearchData(keyword) {
      if (!config.search || !keyword) return data;
      let arraySearchFields = (config.search.fields != null)
        ? config.search.fields : config.columns.map(item => item.value);
      let arrOfAllAtr = [];
      if (!config.search.filters) {
        arraySearchFields.forEach(nameAtrData => {
          let arrOneAtr = (data.filter(user => (user[nameAtrData] === keyword)));
          arrOfAllAtr = (arrOneAtr.length !== 0) ? arrOfAllAtr.concat(arrOneAtr) : arrOfAllAtr;
        });
      } else {
        arraySearchFields.forEach(nameAtrData => {
          config.search.filters.forEach(nameFilter => {
            let arrOneAtr = (data.filter(user => (nameFilter(user[nameAtrData]) === nameFilter(keyword))));
            arrOfAllAtr = (arrOneAtr.length !== 0) ? arrOfAllAtr.concat(arrOneAtr) : arrOfAllAtr;
          })
        })
      }
      /** resulting array that duplicates are deleted*/
      let resultArr = [];
      arrOfAllAtr.forEach((user) => {
        if (!resultArr.includes(user))
          resultArr.push(user)
      });
      return resultArr;
    }

    /** @return  a new sorted array based on the state of the button trigger*/
    function chooseSort(element, newState) {
      if (newState === 1) return searchData;
      let sortUsers = searchData.slice();
      sortUsers.sort((a, b) => {
        if (typeof (a[element.value]) === "number") {
          return (1 - newState) * (a[element.value] - b[element.value]);
        } else return (1 - newState) *
          ((a[element.value].toLowerCase() < b[element.value].toLowerCase()) ? 1 : -1);
      });
      return sortUsers;
    }

    function resort(element, sortState) {
      /** increment the sorting state of the column of the pressed button cyclically;
       *  the remaining buttons are reset to the initial state*/
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
      v => v.toLowerCase(),
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
