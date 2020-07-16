
/* toggle between hiding and showing the dropdown content */

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnClick').addEventListener('click', myFunction);
}
)


function myFunction() {
    console.log("myFunction1")
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let defaultLang = event.target.innerHTML
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