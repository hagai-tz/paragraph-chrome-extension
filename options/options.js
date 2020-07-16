
/* toggle between hiding and showing the dropdown content */

document.addEventListener('DOMContentLoaded', function () {
    console.log("I'm here")
    document.getElementById('btnClick').addEventListener('click', myFunction);
    document.getElementById('btnClick').addEventListener('onChange', myFunction2);
}
)


function myFunction() {
    console.log("myFunction1")
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    console.log("myFunction2")
    document.getElementById("confirm-lang").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let defaultLang = event.target.innerHTML
        console.log("defaultLang: ", defaultLang)
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;

        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                chrome.storage.sync.set({ key: defaultLang }, function () {
                    console.log('defaultLang is ' + defaultLang);
                })
                alert(`All set, ${defaultLang} is your new translation language.`)

                openDropdown.classList.remove('show');
            }
        }
    }
}






// let page = document.getElementById('buttonDiv');
//   const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#4688f1'];
//   function constructOptions(kButtonColors) {
//     for (let item of kButtonColors) {
//       let button = document.createElement('button');
//       button.style.backgroundColor = item;
//       button.addEventListener('click', function() {
//         chrome.storage.sync.set({color: item}, function() {
//           console.log('color is ' + item);
//         })
//       });
//       page.appendChild(button);
//     }
//   }
//   constructOptions(kButtonColors);