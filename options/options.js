
/* toggle between hiding and showing the dropdown content */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('target-lang').addEventListener('click', openTar);
}
)

chrome.storage.sync.get(['tarLang', 'tarLangName', 'tarLangImg'], function (result) { // this section is making sure there will be a default language in the option page.
    if (result.tarLang === undefined) {
        let x = result.tarLang
        console.log("result.tarLang", x)
        console.log("result", result)
        let parent = document.getElementById('select-tar-lang')
        let child = `<span id='select-tar-lang'>
        <span style="color:blue; font-size:16px">Select Target Language</span>
        <img src='./flags/arrow.png' alt='' class='arrow' />
        </span>`
        parent.innerHTML = ''
        parent.insertAdjacentHTML('beforebegin', child)
    }

    else {
        let parent = document.getElementById('select-tar-lang')
        let child = `<span id='select-tar-lang'>
        <img src=${result.tarLangImg} alt='' class='flags' />
        <span>${result.tarLangName}</span>
        <img src='./flags/arrow.png' alt='' class='arrow' />
        </span>`
        parent.innerHTML = ''
        parent.insertAdjacentHTML('beforebegin', child)
    }
})

function openTar() {
    document.getElementById("target-lang").classList.toggle("open");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
    if (event.target.dataset.lang === 'tar-lang') {
        switch (event.target.dataset.id) { //click handler for the target language
            case 'HI':
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
            case 'ZH-TW':
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
            case 'ZH-CN':
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
            case 'PL':
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
            case 'JA':
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
            case 'DE':
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
            case 'EN':
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
