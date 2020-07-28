
/* toggle between hiding and showing the dropdown content */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dropdown-src').addEventListener('click', openSrc);
    document.getElementById('target-lang').addEventListener('click', openTar);
}
)

function openSrc() {
    //these functions open and close he menus and also do not allow them to be open together.
    let openMenu = document.getElementById("target-lang")
    if (openMenu.classList[1] === 'open')
        document.getElementById("target-lang").classList.toggle("open");
    document.getElementById("dropdown-src").classList.toggle("open");
}

function openTar() {
    let openMenu = document.getElementById("dropdown-src")
    if (openMenu.classList[1] === 'open')
        document.getElementById("dropdown-src").classList.toggle("open");
    document.getElementById("target-lang").classList.toggle("open");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
    if (event.target.dataset.lang === 'src-lang') {
        switch (event.target.dataset.id) {
            case 'ES':
                chrome.storage.sync.set({
                    srcLang: event.target.dataset.id,
                    srcLangName: event.target.dataset.langname,
                    srcLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-src-lang')
                    let child = `<span id='select-src-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'HE':
                chrome.storage.sync.set({
                    srcLang: event.target.dataset.id,
                    srcLangName: event.target.dataset.langname,
                    srcLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-src-lang')
                    let child = `<span id='select-src-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'AR':
                chrome.storage.sync.set({
                    srcLang: event.target.dataset.id,
                    srcLangName: event.target.dataset.langname,
                    srcLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-src-lang')
                    let child = `<span id='select-src-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'RU':
                chrome.storage.sync.set({
                    srcLang: event.target.dataset.id,
                    srcLangName: event.target.dataset.langname,
                    srcLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-src-lang')
                    let child = `<span id='select-src-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'FR':
                chrome.storage.sync.set({
                    srcLang: event.target.dataset.id,
                    srcLangName: event.target.dataset.langname,
                    srcLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-src-lang')
                    let child = `<span id='select-src-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;
        }

    } else if (event.target.dataset.lang === 'tar-lang') {
        switch (event.target.dataset.id) {
            case 'ES':
                chrome.storage.sync.set({
                    tarLang: event.target.dataset.id,
                    tarLangName: event.target.dataset.langname,
                    tarLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-tar-lang')
                    let child = `<span id='select-tar-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'HE':
                chrome.storage.sync.set({
                    tarLang: event.target.dataset.id,
                    tarLangName: event.target.dataset.langname,
                    tarLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-tar-lang')
                    let child = `<span id='select-tar-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'AR':
                chrome.storage.sync.set({
                    tarLang: event.target.dataset.id,
                    tarLangName: event.target.dataset.langname,
                    tarLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-tar-lang')
                    let child = `<span id='select-tar-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'RU':
                chrome.storage.sync.set({
                    tarLang: event.target.dataset.id,
                    tarLangName: event.target.dataset.langname,
                    tarLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-tar-lang')
                    let child = `<span id='select-tar-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

            case 'FR':
                chrome.storage.sync.set({
                    tarLang: event.target.dataset.id,
                    tarLangName: event.target.dataset.langname,
                    tarLangImg: event.target.dataset.img
                }, function () {
                    let parent = document.getElementById('select-tar-lang')
                    let child = `<span id='select-tar-lang'>
                             <img src=${event.target.dataset.img} alt='' class='flags' />
                             <span>${event.target.dataset.langname}</span>
                             <img src='./flags/arrow.png' alt='' class='arrow' />
                         </span>`
                    parent.innerHTML = ''
                    parent.insertAdjacentHTML('beforebegin', child)
                })
                break;

        }


    }
}
