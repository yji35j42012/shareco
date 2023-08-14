// 使用 JSONP 進行跨域請求
// function getIP(json) {
//     console.log('Your IP address is: ' + json.ip + json.country);
// }

// var script = document.createElement('script');
// script.src = 'https://api.ipify.org?format=jsonp&callback=getIP';

// var script2 = document.createElement('script');
// script2.src = 'https://ipinfo.io?format=jsonp&callback=getCountry';

// document.body.appendChild(script);
// document.body.appendChild(script2);

function getC() {
    // axios.get('https://ipinfo.io/json')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    fetch('https://ipinfo.io/json')
  .then(response => response.json())
  .then(data => {
    console.log('Your country is:', data.country);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
setTimeout(() => {
    getC()
}, 100);
// fetch('https://ipinfo.io/json')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Your country is:', data.country);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// 使用 JSONP 進行跨域請求
// function getCountry(json) {
//     console.log('Your country is: ' + json.country);
// }

// var script = document.createElement('script');
// script.src = 'https://ipinfo.io?format=jsonp&callback=getCountry';
// document.body.appendChild(script);















var store_sel = document.querySelector("#store_sel");
var store_sel_group = document.querySelector("#store_sel_group");
var store_sel_item = document.querySelectorAll("#store_sel_group > li");
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
        store_sel_group.classList.remove("on");
    }
}




var store_tab_item = document.querySelectorAll("#store_tab>li");
for (let i = 0; i < store_tab_item.length; i++) {
    const element = store_tab_item[i];
    element.onclick = function () {
        if (i == 0) {
            store_tab_item[1].classList.remove("on");
        } else {
            store_tab_item[0].classList.remove("on");
        }
        element.classList.add("on");
    }
}