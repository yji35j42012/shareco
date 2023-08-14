function getC() {
    fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
            if (data.country) {
                set_store_sel(data.country)
            } else {
                set_store_sel("TW")
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
getC()

var store_sel = document.querySelector("#store_sel");
var store_sel_group = document.querySelector("#store_sel_group");
var store_sel_item = document.querySelectorAll("#store_sel_group > li");
var store_sel_name = null
var area = null
var store = "store0"
function set_store_sel(country) {
    if (country.toLowerCase() == 'tw') {
        store_sel_name = document.querySelector("[name='tw']")
    } else if (country.toLowerCase() == 'jp') {
        store_sel_name = document.querySelector("[name='jp']")
    } else if (country.toLowerCase() == 'hk') {
        store_sel_name = document.querySelector("[name='hk']")
    } else if (country.toLowerCase() == 'sg') {
        store_sel_name = document.querySelector("[name='sg']")
    } else if (country.toLowerCase() == 'my') {
        store_sel_name = document.querySelector("[name='my']")
    }
    store_sel_name.classList.add("on");
    store_sel.innerHTML = store_sel_name.innerHTML
    area = country.toLowerCase();
    storeShow()
}


store_sel.onclick = function () {
    store_sel_group.classList.toggle("on");
}

function store_sel_clear() {
    for (let i = 0; i < store_sel_item.length; i++) {
        store_sel_item[i].classList.remove("on");
    }
}

for (let i = 0; i < store_sel_item.length; i++) {
    const element = store_sel_item[i];
    element.onclick = function () {
        store_sel_clear()
        element.classList.add("on");
        store_sel.innerHTML = element.innerHTML
        area = element.getAttribute('name');
        store_sel_group.classList.remove("on");
        storeShow()
    }
}

var store_tab_item = document.querySelectorAll("#store_tab>li.normal_tab_item");
for (let i = 0; i < store_tab_item.length; i++) {
    const element = store_tab_item[i];
    element.onclick = function () {
        if (i == 0) {
            store_tab_item[1].classList.remove("on");
        } else {
            store_tab_item[0].classList.remove("on");
        }
        element.classList.add("on");
        store = "store" + i
        storeShow()
    }
}
function storeShow() {
    var show = area + "_" + store
    var showInfo = document.querySelector("#" + show);
    store_show_none()
    showInfo.style.display = "";
}

var store_show = document.querySelectorAll("[name='store_show']");
function store_show_none() {
    for (let i = 0; i < store_show.length; i++) {
        store_show[i].style.display = 'none'
    }
}

var store_ph_data1 = document.querySelector("#store_ph_data1");
var store_ph_data2 = document.querySelector("#store_ph_data2");

function setPhInfo() {
    var show = area + "_" + store
    console.log('ph', show);
}

window.onresize = function () {
    if (screen == "pc" && window.innerWidth <= 1024) {
        screen = "ph";
    } else if (screen == "ph" && window.innerWidth > 1024) {
        screen = "pc";
    }
}
setTimeout(() => {
    if (screen == "ph") {
        setPhInfo()
    }
}, 100);