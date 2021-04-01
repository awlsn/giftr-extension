
// https://developer.mozilla.org/en/docs/Web/API/Document/readyState
if (document.readyState !== 'loading') {
    ready()
} else {
    // the document hasn't finished loading/parsing yet so let's add an event handler
    document.addEventListener('DOMContentLoaded', ready)
}

function ready() {
    // document.getElementById("click").addEventListener("click", (e) => {
    //     document.body.style.backgroundColor = 'red';
    // })
    const btn = document.getElementById("click");
    btn.addEventListener("click", doSomething)
}

function doSomething() {
    document.body.style.backgroundColor = 'red';
}
    