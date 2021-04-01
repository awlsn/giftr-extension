
  const hover_state       = {
    target:   null,
    element:  null,
    label:    null,
  }

function reddenPage() {
    document.body.style.backgroundColor = 'pink';
    //document.body.style.userSelect= 'all';
    //document.querySelectorAll('span').style.userSelect = 'all';
    //document.body.addEventListener('click',on_click)
    document.body.addEventListener('mousemove', (e) => {
      const $target = document.elementFromPoint(e.clientX, e.clientY)
      // const el = $target;
      // hover_state.target = $target;
      // hover_state.element = el;
      // hover_state.label = createHoverLabel(el, `
      // <a node>${el.nodeName.toLowerCase()}</a>
      // <a>${el.id && '#' + el.id}</a>
      // ${createClassname(el).split('.')
      //   .filter(name => name != '')
      //   .reduce((links, name) => `
      //     ${links}
      //     <a>.${name}</a>
      //   `, '')
      // }
    // `)
    console.log($target);
    })
  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  });

  export const createClassname = (el) => {
    if (!el.className) return ''
    
    const combined = Array.from(el.classList).reduce((classnames, classname) =>
      classnames += '.' + classname
    , '')
  
    return combined
  }

  const createHoverLabel = (el, text) => {

      hover_state.label.text = text
      // hover_state.label.position = {
      //   boundingRect:   el.getBoundingClientRect(),
      //   node_label_id:  'hover',
      // }

      
    
  }


  // function on_click {
  //   //set attribute
  //   //style attribute
  //   //overlay

  // }




/*
  const on_hover = e => {
    const $target = deepElementFromPoint(e.clientX, e.clientY)
    const tool = visbug.activeTool

    if (isOffBounds($target) || $target.hasAttribute('data-selected') || $target.hasAttribute('draggable')) {
      clearMeasurements()
      return clearHover()
    }

    overlayHoverUI({
      el: $target,
      // no_hover: tool === 'guides',
      no_label:
           tool === 'guides'
        || tool === 'accessibility'
        || tool === 'margin'
        || tool === 'padding'
        || tool === 'inspector',
    })

    if (tool === 'guides' && selected.length >= 1 && !selected.includes($target)) {
      $target.setAttribute('data-measuring', true)
      const [$anchor] = selected
      createMeasurements({$anchor, $target})
    }
    else if (tool === 'margin' && !hover_state.element.$shadow.querySelector('visbug-boxmodel')) {
      hover_state.element.$shadow.appendChild(
        createMarginVisual(hover_state.target, true))
    }
    else if (tool === 'padding' && !hover_state.element.$shadow.querySelector('visbug-boxmodel')) {
      hover_state.element.$shadow.appendChild(
        createPaddingVisual(hover_state.target, true))
    }
    else if ($target.hasAttribute('data-measuring') || selected.includes($target)) {
      clearMeasurements()
    }
  }

  const overlayHoverUI = ({el, no_hover = false, no_label = true}) => {
    if (hover_state.target === el) return
    hover_state.target = el

    hover_state.element = no_hover
      ? null
      : createHover(el)

    hover_state.label   = no_label
      ? null
      : createHoverLabel(el, `
          <a node>${el.nodeName.toLowerCase()}</a>
          <a>${el.id && '#' + el.id}</a>
          ${createClassname(el).split('.')
            .filter(name => name != '')
            .reduce((links, name) => `
              ${links}
              <a>.${name}</a>
            `, '')
          }
        `)
  }



  const createHover = el => {
    if (!el.hasAttribute('data-pseudo-select') && !el.hasAttribute('data-label-id')) {
      if (hover_state.element)
        hover_state.element.remove()

      hover_state.element = document.createElement('visbug-hover')
      document.body.appendChild(hover_state.element)
      hover_state.element.position = {el}

      return hover_state.element
    }
  }*/


  // export const deepElementFromPoint = (x, y) => {
  //   const el = document.elementFromPoint(x, y)
  
  //   const crawlShadows = node => {
  //     if (node.shadowRoot) {
  //       const potential = node.shadowRoot.elementFromPoint(x, y)
  
  //       if (potential == node)          return node
  //       else if (potential.shadowRoot)  return crawlShadows(potential)
  //       else                            return potential
  //     }
  //     else return node
  //   }
  
  //   const nested_shadow = crawlShadows(el)
  
  //   return nested_shadow || el
  // }