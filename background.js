chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: loadExt
  });
});
  





function loadExt() {
  let selection = false;

  const target = {
    el: null,
    className: null
  };

  if (selection) {
    selection = false;
    //e.target.textContent = "Select";
  } else {
    //e.target.textContent = "Cancel";
    selection = true;
  }
  //e.target.setAttribute("data-focus", false);

  console.log(selection);

  document.body.addEventListener("mousemove", (e) => {
    if (selection && e.target !== target.el) {
      //unstyle previous target
      if (target.el) {
        target.el.setAttribute("data-focus", false);
        target.el.style.outline =target.initialOutline;
      }
  
      target.el = e.target;
      target.el.setAttribute("data-focus", true);
      target.initialOutline = target.el.style.outline;
      target.el.style.outline ='1px dashed hsl(267, 100%, 58%)';
    }
  });
  document.body.addEventListener("click", (e) => {
    alert(e.target.outerHTML);
    console.log(e.target);
    selection = false;

    // add to tab? submit to server?
    // increment step - change colors?

    //this may be different in the chrome extension...
    //here we need to detect the button and handle it differently
    const selectorButton = document.querySelector(".selection");
    if (e.target == selectorButton) {
      handleButtonClick(e);
      return;
    }
    if (selection) {
      document
        .querySelector(".main")
        .appendChild(document.createTextNode(e.target.outerHTML));
      //document.querySelector(".bs").innerHTML = e.target.outerHTML;
      selection = false;
      selectorButton.textContent = "Select";
    }
    //alert(e.target);
  });
  
  function handleButtonClick(e) {
    //selection ? (selection = false) : (selection = true);
    if (selection) {
      selection = false;
      e.target.textContent = "Select";
    } else {
      e.target.textContent = "Cancel";
      selection = true;
    }
    e.target.setAttribute("data-focus", false);
  
    console.log(selection);
  }
}



  
