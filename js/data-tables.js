"use strict";

function DataTable(config, data) {
  /** array of user records, after processing by the search engine*/
  let searchData;
  /** array of user records*/
  let sortData;
  /** amount of sorting columns*/
  let countSortable = 0;
  /** initialize the state of the sort buttons*/
  let sortState = new Map();
  let isApi = !!config.apiUrl;
  let usersData = [];
  let table;
  let nav;
  let currentWord = "";

  let root = document.querySelector(config.parent);
  nav = createAndInnerElement("span", root, "");
  nav.className = "navTable";
  if (config.search) {
    let search = createAndInnerElement("div", nav, "");
    search.className = "table-search";
    let input = createAndInnerElement("input", search, "");
    input.type = "text";
    input.focus();
    input.addEventListener("input", event => {
      buildData(event.target.value)
    });
  }
  createModal("editUser", root);  //create window of modal into HTML
  let buttonAdd = createAndInnerElement("button", nav, "Добавить нового пользователя");
  buttonAdd.dataset.target = "editUser";
  buttonAdd.className = "modal-trigger";
  buttonAdd.addEventListener("click", openModal);
  buttonAdd.addEventListener("click", function () {
    editUser("");
  });

  config.columns.forEach(thElement => {
    if (thElement.sortable) {
      sortState.set(thElement, 1);
      countSortable++;
    }
  });

  if (isApi) {
    fetch(config.apiUrl).then(res => res.json()).then(data => {
      usersData = sortData = searchData = data.slice();
      console.log(usersData);
      renderTable();
    })
  } else {
    usersData = sortData = searchData = data;
    renderTable();
  }

  function request(id, user) {
    fetch(config.apiUrl + "/" + id, {
      method: !id ? "POST" : "PUT",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user),
    }).then(() => fetch(config.apiUrl))
      .then(res => res.json())
      .then(data => {
        usersData = data.slice();
        buildData(currentWord);
      })
  }

  function delUser(id) {
    if (isApi) {
      let user = usersData.find(us => us.id === id);
      fetch(config.apiUrl + '/' + user.id, {method: 'DELETE'})
        .then(() => fetch(config.apiUrl))
        .then(res => res.json())
        .then(data => {
          usersData = data.slice();
          buildData(currentWord);
        })
    } else {
      usersData = usersData.filter(us => us.id !== id);
      buildData(currentWord);
    }
  }

  function editUser(id) {
    let user = id === "" ? {} : usersData.find(us => us.id === id);
    let editWindow = document.getElementById("editUser" + id);
    let prevForm = document.getElementsByClassName("form");
    if (prevForm !== null) {
      for (let el of prevForm) {
        el.parentElement.display = "none";
        el.remove();
      }
    }
    const form = createAndInnerElement("div", editWindow, "");
    form.className = "form";
    config.columns.forEach(atr => {
      if (atr.editable !== false) {
        let div = createAndInnerElement("div", form, "");
        let label = createAndInnerElement("label", div, atr.title);
        label.id = atr.value;
        let input = createAndInnerElement("input", div, "");
        input.value = id && user[atr.value];
        switch (atr.type) {
          case "number":
            input.type = "number";
            break;
          case "date":
            input.type = "date";
            break;
          case "text":
            input.type = "text";
        }
        input.addEventListener("change", event => {
          user[atr.value] = (atr.type === "date") ? (new Date(event.target.value)).toISOString() :
            event.target.value;
        });
      }
    });
    const btnSave = createAndInnerElement("button", form, "Save");
    btnSave.addEventListener("click", () => {
      editWindow.style.display = "none";
      if (isApi) {
        request(id, user)
      } else {
        user.id = !id ? +usersData.reduce(function (max, us) {
          return max.id > us.id ? max.id : us.id
        }) + 1 : id;
        usersData.push(user);
        editWindow.style.display = "none";
        buildData(currentWord);
      }
    })

  }

  function addUser() {
    let newUser = {};
    const addWindow = document.getElementById("addUser");
    let prevForm = document.getElementById("form");
    if (prevForm !== null) {
      prevForm.parentElement.display = "none";
      prevForm.remove();
    }
    const form = createAndInnerElement("div", addWindow, "");
    form.id = "form";
    config.columns.forEach(atr => {
      if (atr.editable !== false) {
        let div = createAndInnerElement("div", form, "");
        let label = createAndInnerElement("label", div, atr.title);
        label.id = atr.value;
        let input = createAndInnerElement("input", div, "");
        switch (atr.type) {
          case "number":
            input.type = "number";
            break;
          case "date":
            input.type = "date";
            break;
          case "text":
            input.type = "text";
        }
        input.addEventListener("change", event => {
          newUser[atr.value] = (atr.type === "date") ? (new Date(event.target.value)).toISOString() :
            event.target.value;
        });
      }
    });
    const btnSave = createAndInnerElement("button", form, "Save");
    btnSave.addEventListener("click", () => {
      if (isApi) {
        fetch(config.apiUrl, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(newUser),
        }).then(() => fetch(config.apiUrl))
          .then(res => res.json())
          .then(data => {
            usersData = data.slice();
            addWindow.style.display = "none";
            buildData(currentWord);
          })
      } else {
        newUser.id = +usersData.reduce(function (max, us) {
          return max.id > us.id ? max.id : us.id
        }) + 1;
        usersData.push(newUser);
        addWindow.style.display = "none";
        buildData(currentWord);
      }
    })
  }


  /** @return  a new sorted array based on the state of the button trigger*/
  function chooseSort() {
    let element = config.columns.find((elem => elem.sortable && sortState.get(elem) !== 1));
    let newState = element !== null && sortState.get(element);
    let sortUsers = searchData.slice();
    if (element) {
      sortUsers.sort((a, b) => {
        if (typeof (a[element.value]) === "number") {
          return (1 - newState) * (a[element.value] - b[element.value]);
        } else return (1 - newState) *
          ((a[element.value].toLowerCase() < b[element.value].toLowerCase()) ? 1 : -1);
      });
    }
    return sortUsers;
  }

  /** callback function that executes when a search word is entered*/
  function buildData(word) {
    currentWord = word;
    searchData = buildSearchData(word);
    sortData = chooseSort();
    table.remove();
    // nav.remove();
    renderTable();
  }


  /** returns an array of user records that match by keyword*/
  function buildSearchData(keyword) {
    if (!config.search || !keyword) return usersData;
    let arraySearchFields = (config.search.fields != null)
      ? config.search.fields : config.columns.map(item => item.value);
    let arrOfAllAtr = [];
    if (!config.search.filters) {
      arraySearchFields.forEach(nameAtrData => {
        let arrOneAtr = (usersData.filter(user => (user[nameAtrData].includes(keyword))));
        arrOfAllAtr = (arrOneAtr.length !== 0) ? arrOfAllAtr.concat(arrOneAtr) : arrOfAllAtr;
      });
    } else {
      arraySearchFields.forEach(nameAtrData => {
        config.search.filters.forEach(nameFilter => {
          let arrOneAtr = (usersData.filter(user => (nameFilter(user[nameAtrData]).includes(nameFilter(keyword)))));
          arrOfAllAtr = (arrOneAtr.length !== 0) ? arrOfAllAtr.concat(arrOneAtr) : arrOfAllAtr;
        })
      })
    }
    /** resulting array that duplicates are deleted*/
    let resultArr = [];
    arrOfAllAtr.forEach(user => {
      if (!resultArr.includes(user))
        resultArr.push(user)
    });
    return resultArr;
  }

  function renderTable() {
    table = createAndInnerElement("table", root, "");
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
    createAndInnerElement("th", trHead, "Действия");

    /** table body drawing*/
    let tbody = createAndInnerElement("tbody", table, "");
    let index = 0;
    sortData.forEach(trElement => {
      let trBody = createAndInnerElement("tr", tbody, "");
      config.columns.forEach(thElement => {
        let td = (thElement.value === '_index') ? createAndInnerElement("td", trBody, ++index)
          : (thElement.type === 'date') ? createAndInnerElement("td", trBody, calculateAge(trElement['createdAt']))
            : createAndInnerElement("td", trBody, trElement[thElement.value]);
        if (thElement.type === 'number') {
          td.className = "align-right";
        }
      });
      let act = createAndInnerElement('td', trBody, '');
      act.className = "act";
      let buttonDel = createAndInnerElement('button', act, 'DELETE');
      buttonDel.className = 'del';
      buttonDel.addEventListener('click', function () {
        delUser(trElement.id);
      });
      let buttonEdit = createAndInnerElement('button', act, 'EDIT');

      buttonEdit.dataset.target = "editUser" + trElement.id;
      buttonEdit.className = 'edit';
      createModal("editUser" + trElement.id, root);
      buttonEdit.addEventListener("click", openModal);
      buttonEdit.addEventListener('click', function () {
        editUser(trElement.id);
      })
    });


    function resort(element, sortState) {
      /** increment the sorting state of the column of the pressed button cyclically;
       *  the remaining buttons are reset to the initial state*/
      let newState = (sortState.get(element) + 1) % (countSortable + 1);
      initDefaultStateOfButtons();
      sortState.set(element, newState);
      sortData = chooseSort();
      table.remove();
      renderTable();
    }


    function initDefaultStateOfButtons() {
      config.columns.forEach(thElement => {
        if (thElement.sortable) {
          sortState.set(thElement, 1);
        }
      });
    }


    function insertButtons(th, element, sortState) {
      let button = createAndInnerElement("button", th, "");
      let classNameI = "fas fa-sort" + ((sortState.get(element) === 0) ? "-down" :
        (sortState.get(element) === 1) ? "" : "-up");
      let i = createAndInnerElement("i", button, "");
      i.className = classNameI;
      button.addEventListener("click", function () {
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

function calculateAge(date) {
  let curDate = new Date();
  const temp = date.substr(0, 10).split('-');
  const age = curDate.getFullYear() - temp[0] + (curDate.getMonth() - temp[1] + 1) / 12 + (curDate.getDay() - temp[2]) / 365;
  return Math.round(age * 1000) / 1000;
}

const config1 = {
  parent: '#usersTable',
  columns: [
    {title: '№', value: '_index', editable: false},
    {title: 'Имя', value: 'author', sortable: true},
    {title: ' Комментарий ', value: 'text', sortable: true},
    {title: 'Возраст,лет', value: 'createdAt', type: 'date'},
    {title: 'Класс', value: 'likes', type: 'number', sortable: true},
  ],
  apiUrl: "https://5e938231c7393c0016de48e6.mockapi.io/api/ps5/posts",
  search: {
    fields: ['author', 'text'],
    filters: [
      v => v.toLowerCase(),
      v => toKeyboardLayout(v, 'ru'),
      v => toKeyboardLayout(v, 'en')
    ]
  }
};

const users = [
  {
    author: "Dakota_Dietrich61", createdAt: "2020-03-29T12:48:32.666Z", id: "1", likes: 34,
    text: "The PCI firewall is down, copy the haptic matrix so we can compress the SQL array!"
  },

  {
    author: "Федоров", createdAt: "2020-01-29T12:48:32.666Z", id: "2", likes: 34,
    text: "We need to index the optical JBOD interface!"
  },

  {
    author: "Фамильноеимя", createdAt: "2020-04-29T12:48:32.666Z", id: "3", likes: 34,
    text: "Тем не менее, функция может получить доступ ко всем переменным и функциям"
  },

  {
    author: "Вася", createdAt: "2020-02-29T12:48:32.666Z", id: "12", likes: 34,
    text: "MVP is released under the permissive MIT license so you can freely use it however you'd like."
  },
  // {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  // {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
  // {id: 30052, name: 'Петя', surname: 'Васечкин', age: 16},
  // {id: 30053, name: 'Миша', surname: 'Иванов', age: 16},
  // {id: 30054, name: 'Маша', surname: 'Петрова', age: 13},
  // {id: 30055, name: 'Федя', surname: 'Федоров', age: 14},
  // {id: 30056, name: 'Фамильноеимя', surname: 'Фамильноеимя', age: 14},
  // {id: 30057, name: 'Adam', surname: 'Eva', age: 19},
  // {id: 30058, name: 'Eva', surname: 'Adam', age: 18},
];


function toKeyboardLayout(v, lang) {
  let en = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd',
    'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'];
  let ru = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в',
    'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
  let newV = [];
  let arrV = v.toLowerCase().split("");
  arrV.forEach(char => {
    if (langFun(lang, false).includes(char)) {
      let index = langFun(lang, false).indexOf(char);
      newV.push(langFun(lang, true)[index]);
    }
  });
  return (arrV.length !== newV.length) ? v.toLowerCase() : newV.join("");

  function langFun(lang, bool) {
    return ((lang === 'ru') && bool) ? ru : en;
  }
}


DataTable(config1, users);
