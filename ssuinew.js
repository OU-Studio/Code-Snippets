const targetNode = window.parent.document;
  function domWatch(parent, child, options, callback){

    var tn = window.parent.document.querySelectorAll(parent)[0];
    var config = { attributes: options[0], childList: options[1], subtree: options[2] };
    var loop = function(mutationsList, observer) {
      if("Hker616" == "Hker616"){
        if(tn.querySelectorAll('.css-1ymuep3').length){

          //////       
          if(targetNode.querySelectorAll('.CSSTG-group .css-1ymuep3').length){
            console.log('1')
            if(!targetNode.querySelectorAll('#cssSearch').length){

              const csssearch = document.createElement("div");
              csssearch.innerHTML = '<p style="font-size: 16px; font-weight: 500px; margin-bottom: 10px !important;">Custom Search</p> <input id="cssSearch" autocomplete="false" style="margin-bottom: 20px; display: block; width: 100%; padding: 0px 5px; border: solid 1px #000; box-sizing: border-box;"></input>'

              targetNode.querySelector('.css-1ymuep3').insertBefore(csssearch, targetNode.querySelector('.css-1ymuep3').firstChild)

              targetNode.querySelectorAll('.CodeMirror-scroll')[0].addEventListener("scroll", (event) => {
                if(targetNode.querySelectorAll('#cssSearch')[0].value.toLowerCase() !== ""){
                  const actives = targetNode.querySelectorAll('.CodeMirror-code .active').forEach((element) => {
                    element.classList.remove('active')
                    element.style.backgroundColor = "rgba(255,0,0,0)"
                  })

                  targetNode.querySelectorAll('.CodeMirror-line').forEach((button) => {
                    if(button.textContent.toLowerCase().includes(targetNode.querySelectorAll('#cssSearch')[0].value.toLowerCase())){
                      button.parentNode.classList.add('active')
                      button.parentNode.style.backgroundColor = "rgba(255,0,0,0.3)"
                    }

                  })
                }else{
                  const actives = targetNode.querySelectorAll('.CodeMirror-code .active').forEach((element) => {
                    element.classList.remove('active')
                    element.style.backgroundColor = "rgba(255,0,0,0)"
                  })
                  }
              })

              targetNode.querySelectorAll('#cssSearch')[0].addEventListener("input", (event) => {
                if(targetNode.querySelectorAll('#cssSearch')[0].value.toLowerCase() !== ""){
                  const actives = targetNode.querySelectorAll('.CodeMirror-code .active').forEach((element) => {
                    element.classList.remove('active')
                    element.style.backgroundColor = "rgba(255,0,0,0)"
                  })

                  targetNode.querySelectorAll('.CodeMirror-line').forEach((button) => {
                    if(button.textContent.toLowerCase().includes(targetNode.querySelectorAll('#cssSearch')[0].value.toLowerCase())){
                      button.parentNode.classList.add('active')
                      button.parentNode.style.backgroundColor = "rgba(255,0,0,0.3)"
                    }

                  })
                }else{
                  const actives = targetNode.querySelectorAll('.CodeMirror-code .active').forEach((element) => {
                    element.classList.remove('active')
                    element.style.backgroundColor = "rgba(255,0,0,0)"
                  })
                  }
              })

              window.dispatchEvent(new Event('resize'));
            }
          }
        }



        if(targetNode.querySelectorAll('.custom').length){
console.log('kk1', targetNode.querySelectorAll('.custom'))
        }else{
          let masks = targetNode.querySelectorAll('.App-siteFrame')[0]
          console.log(targetNode)
console.log('kk, masks')
          masks.insertBefore(targetNode.createElement("div"), masks.firstChild).classList.add('viewScaler')
          masks.firstChild.classList.add('out')

          let masks2 = targetNode.querySelector('.viewScaler')

          masks2.style.position = 'fixed'
          masks2.style.top = '0px'
          masks2.style.right = '0px'
          masks2.style.zIndex = '999'
          masks2.style.padding = '17px'
          masks2.style.backgroundColor = '#fff'
          masks2.style.border = 'solid 1px #000'

          masks2.insertBefore(targetNode.createElement("div"), masks2.firstChild).classList.add('toggle')

          let toggle = targetNode.querySelector('.viewScaler .toggle')

          toggle.innerHTML = "<span><</span>"
          toggle.setAttribute('onclick', 'toggleSlide()');;
          toggle.style.display = "inline-block"
          toggle.style.float = "left"
          toggle.style.padding = "0px 5px"
          toggle.style.fontWeight = "700"
          toggle.style.fontSize = "20px"
          toggle.style.lineHeight = "30px"
          toggle.style.marginRight = "17px"
          toggle.style.cursor = "pointer"

          masks2.insertBefore(targetNode.createElement("select"), masks2.firstChild).classList.add('custom-scale')

          masks2.insertBefore(targetNode.createElement("select"), masks2.firstChild).classList.add('custom-rotate')

          masks2.insertBefore(targetNode.createElement("select"), masks2.firstChild).classList.add('custom')

          let custom = targetNode.querySelector('.custom')
          let customRotate = targetNode.querySelector('.custom-rotate')
          let customScale = targetNode.querySelector('.custom-scale')

          custom.setAttribute('onchange', 'customChange()');;
          customRotate.setAttribute('onchange', 'customChange()');;
          customScale.setAttribute('onchange', 'customChangeScale()');;

          custom.innerHTML = '<option value="desktop" name="Desktop">Desktop</option><option value="MacBook-13" name="MacBook Pro 13in">MacBook Pro 13in</option><option value="MacBook-15" name="MacBook Pro 15in">MacBook Pro 15in</option><option value="MacBook-16" name="MacBook Pro 16in">MacBook Pro 16in</option><option value="iPad-10.2" name="iPad 10.2in">iPad 10.2in</option><option value="iPad-Pro-11" name="iPad Pro 11in">iPad Pro 11in</option><option value="iPad-Pro-12.9" name="iPad Pro 12.9in">iPad Pro 12.9in</option><option value="iPhone-13-Mini" name="iPhone 13 Mini">iPhone 13 Mini</option><option value="iPhone-13-Pro" name="iPhone 13/13 Pro">iPhone 13/13 Pro</option><option value="iPhone-13-Pro-Max" name="iPhone 13 Pro Max">iPhone 13 Pro Max</option>'

          custom.style.font = '500 normal 12px/22px Clarkson,Proxima Nova,Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
          custom.style.backgroundColor = '#f6f6f6'
          custom.style.borderRadius = '4px'
          custom.style.padding = '6px'
          custom.style.marginRight = '10px'

          customRotate.innerHTML = '<option value="landscape" name="Landscape">Landscape</option><option value="portrait" name="Portrait">Portrait</option>'

          customRotate.style.font = '500 normal 12px/22px Clarkson,Proxima Nova,Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
          customRotate.style.backgroundColor = '#f6f6f6'
          customRotate.style.borderRadius = '4px'
          customRotate.style.padding = '6px'
          customRotate.style.marginRight = '10px'

          customScale.innerHTML = '<option value="2" name="2x">2x Scale</option><option value="1.5" name="1.5x">1.5x Scale</option><option value="1" name="1x" selected="selected">1x Scale</option><option value="0.8" name="0.8x">0.8x Scale</option><option value="0.6" name="0.6x">0.6x Scale</option><option value="0.4" name="0.4x">0.4x Scale</option>'

          customScale.style.font = '500 normal 12px/22px Clarkson,Proxima Nova,Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
          customScale.style.backgroundColor = '#f6f6f6'
          customScale.style.borderRadius = '4px'
          customScale.style.padding = '6px'

          let viewportTemp = targetNode.querySelector('.preview-viewport').parentNode
          viewportTemp.style.transform = "translate(-50%, -50%) scale(1)"
          viewportTemp.style.transformOrigin = "center"
          viewportTemp.style.left = "50%"
          viewportTemp.style.top = "50%"
          viewportTemp.style.position = "absolute"
          viewportTemp.style.boxShadow = "5px 5px 10px 4px rgba(0,0,0,0.3)"
          viewportTemp.style.webkitBoxShadow = "5px 5px 10px 4px rgba(0,0,0,0.3)"


          let jsTemp = targetNode.querySelector('.js-device-view-frame')
          jsTemp.style.position = "relative"

          targetNode.toggleSlide = function(){
            masks2.classList.toggle("out");
            if(masks2.classList.contains("out")){
              masks2.style.right = "0px"
            }else{
              masks2.style.right = "-365px"
            }
          }

          masks2.style.right = "-365px"

          targetNode.customChangeScale = function(){
            let viewport = targetNode.querySelector('.preview-viewport').parentNode
            switch (customScale.value) {
              case "2":
                viewport.style.transform = "translate(-50%, -50%) scale(2)"
                viewport.style.transformOrigin = "center"
                viewport.style.left = "50%"
                viewport.style.top = "50%"
                viewport.style.position = "absolute"
                break;
              case "1.5":
                viewport.style.transform = "translate(-50%, -50%) scale(1.5)"
                viewport.style.transformOrigin = "center"
                viewport.style.left = "50%"
                viewport.style.top = "50%"
                viewport.style.position = "absolute"
                break;
              case "1":
                viewport.style.transform = "translate(-50%, -50%) scale(1)"
                viewport.style.transformOrigin = "center"
                viewport.style.left = "50%"
                viewport.style.top = "50%"
                viewport.style.position = "absolute"
                break;
              case "0.8":
                viewport.style.transform = "translate(-50%, -50%) scale(0.8)"
                viewport.style.transformOrigin = "center"
                viewport.style.left = "50%"
                viewport.style.top = "50%"
                viewport.style.position = "absolute"
                break;
              case "0.6":
                viewport.style.transform = "translate(-50%, -50%) scale(0.6)"
                viewport.style.transformOrigin = "center"
                viewport.style.left = "50%"
                viewport.style.top = "50%"
                viewport.style.position = "absolute"
                break;
              case "0.4":
                viewport.style.transform = "translate(-50%, -50%) scale(0.4)"
                viewport.style.transformOrigin = "center"
                viewport.style.left = "50%"
                viewport.style.top = "50%"
                viewport.style.position = "absolute"
                break;
            }
          }

          targetNode.customChange = function(){
            // preview-viewport parent css
            let viewport = targetNode.querySelector('.preview-viewport').parentNode

            console.log(viewport)

            switch (custom.value) {
              case "desktop":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = null
                    viewport.style.height = "100%"
                    viewport.style.maxWidth = null
                    viewport.style.maxHeight = null
                    viewport.style.minWidth = null
                    viewport.style.minHeight = null
                    break;
                  case "portrait":
                    viewport.style.width = null
                    viewport.style.height = "100%"
                    viewport.style.maxWidth = null
                    viewport.style.maxHeight = null
                    viewport.style.minWidth = null
                    viewport.style.minHeight = null
                }
                break;
              case "iPhone-13-Pro":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "844px"
                    viewport.style.height = "390px"
                    viewport.style.maxWidth = "844px"
                    viewport.style.maxHeight = "390px"
                    viewport.style.minWidth = "844px"
                    viewport.style.minHeight = "390px"
                    break;
                  case "portrait":
                    viewport.style.width = "390px"
                    viewport.style.height = "844px"
                    viewport.style.maxWidth = "390px"
                    viewport.style.maxHeight = "844px"
                    viewport.style.minWidth = "390px"
                    viewport.style.minHeight = "844px"
                }
                break;
              case "iPhone-13-Mini":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "812px"
                    viewport.style.height = "375px"
                    viewport.style.maxWidth = "812px"
                    viewport.style.maxHeight = "375px"
                    viewport.style.minWidth = "812px"
                    viewport.style.minHeight = "375px"
                    break;
                  case "portrait":
                    viewport.style.width = "375px"
                    viewport.style.height = "812px"
                    viewport.style.maxWidth = "375px"
                    viewport.style.maxHeight = "812px"
                    viewport.style.minWidth = "375px"
                    viewport.style.minHeight = "812px"
                }
                break;
              case "iPhone-13-Pro-Max":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "926px"
                    viewport.style.height = "428px"
                    viewport.style.maxWidth = "926px"
                    viewport.style.maxHeight = "428px"
                    viewport.style.minWidth = "926px"
                    viewport.style.minHeight = "428px"
                    break;
                  case "portrait":
                    viewport.style.width = "428px"
                    viewport.style.height = "926px"
                    viewport.style.maxWidth = "428px"
                    viewport.style.maxHeight = "926px"
                    viewport.style.minWidth = "428px"
                    viewport.style.minHeight = "926px"
                }
                break;
              case "MacBook-13":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "1280px"
                    viewport.style.height = "800px"
                    viewport.style.maxWidth = "1280px"
                    viewport.style.maxHeight = "800px"
                    viewport.style.minWidth = "1280px"
                    viewport.style.minHeight = "800px"
                    break;
                  case "portrait":
                    viewport.style.width = "800px"
                    viewport.style.height = "1280px"
                    viewport.style.maxWidth = "800px"
                    viewport.style.maxHeight = "1280px"
                    viewport.style.minWidth = "800px"
                    viewport.style.minHeight = "1280px"
                }
                break;
              case "MacBook-15":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "1440px"
                    viewport.style.height = "900px"
                    viewport.style.maxWidth = "1440px"
                    viewport.style.maxHeight = "900px"
                    viewport.style.minWidth = "1440px"
                    viewport.style.minHeight = "900px"
                    break;
                  case "portrait":
                    viewport.style.width = "900px"
                    viewport.style.height = "1440px"
                    viewport.style.maxWidth = "900px"
                    viewport.style.maxHeight = "1440px"
                    viewport.style.minWidth = "900px"
                    viewport.style.minHeight = "1440px"
                }
                break;
              case "MacBook-16":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "1536px"
                    viewport.style.height = "960px"
                    viewport.style.maxWidth = "1536px"
                    viewport.style.maxHeight = "960px"
                    viewport.style.minWidth = "1536px"
                    viewport.style.minHeight = "960px"
                    break;
                  case "portrait":
                    viewport.style.width = "960px"
                    viewport.style.height = "1536px"
                    viewport.style.maxWidth = "960px"
                    viewport.style.maxHeight = "1536px"
                    viewport.style.minWidth = "960px"
                    viewport.style.minHeight = "1536px"
                }
                break;
              case "iPad-10.2":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "1080px"
                    viewport.style.height = "810px"
                    viewport.style.maxWidth = "1080px"
                    viewport.style.maxHeight = "810px"
                    viewport.style.minWidth = "1080px"
                    viewport.style.minHeight = "810px"
                    break;
                  case "portrait":
                    viewport.style.width = "810px"
                    viewport.style.height = "1080px"
                    viewport.style.maxWidth = "810px"
                    viewport.style.maxHeight = "1080px"
                    viewport.style.minWidth = "810px"
                    viewport.style.minHeight = "1080px"
                }
                break;
              case "iPad-Pro-11":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "1194px"
                    viewport.style.height = "834px"
                    viewport.style.maxWidth = "1194px"
                    viewport.style.maxHeight = "834px"
                    viewport.style.minWidth = "1194px"
                    viewport.style.minHeight = "834px"
                    break;
                  case "portrait":
                    viewport.style.width = "834px"
                    viewport.style.height = "1194px"
                    viewport.style.maxWidth = "834px"
                    viewport.style.maxHeight = "1194px"
                    viewport.style.minWidth = "834px"
                    viewport.style.minHeight = "1194px"
                }
                break;
              case "iPad-Pro-12.9":
                switch (customRotate.value) {
                  case "landscape":
                    viewport.style.width = "1366px"
                    viewport.style.height = "1024px"
                    viewport.style.maxWidth = "1366px"
                    viewport.style.maxHeight = "1024px"
                    viewport.style.minWidth = "1366px"
                    viewport.style.minHeight = "1024px"
                    break;
                  case "portrait":
                    viewport.style.width = "1024px"
                    viewport.style.height = "1366px"
                    viewport.style.maxWidth = "1024px"
                    viewport.style.maxHeight = "1366px"
                    viewport.style.minWidth = "1024px"
                    viewport.style.minHeight = "1366px"
                }
                break;
            }
          }
        }

        window.dispatchEvent(new Event('resize'));
        observer.disconnect()
        observer.observe(targetNode, config);
      }
    }
    var observer = new MutationObserver(loop)
    observer.observe(targetNode, config);
  }

  domWatch('.App-sidebar', '.sqs-damask', [false,true,true], test)

  function test(elm){
    console.log('a', elm)
  }

  (function() {
    document.addEventListener('DOMContentLoaded', initInspector);
    window.addEventListener('mercury:load', initInspector);

    function initInspector() {
      const style = document.createElement('style');
      style.innerHTML = `
.sqs-edit-mode .ss-inspector-badge {
position: absolute;
background: rgba(0,0,0,0.7);
color: #fff;
font-size: 11px;
padding: 2px 6px;
border-radius: 3px;
pointer-events: none;
z-index: 9999;
white-space: nowrap;
}

.sqs-edit-mode .ss-toast {
position: fixed;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
background: #222;
color: #fff;
padding: 8px 16px;
border-radius: 4px;
font-size: 14px;
z-index: 10000;
opacity: 0;
transition: opacity 0.3s ease-in-out;
}
.sqs-edit-mode .ss-toast.show {
opacity: 1;
}
`;
      document.head.appendChild(style);

      const badge = document.createElement('div');
      badge.className = 'ss-inspector-badge';
      document.body.appendChild(badge);

      const toast = document.createElement('div');
      toast.className = 'ss-toast';
      document.body.appendChild(toast);

      let currentElement = null;

      // Always show static badges on sections
      document.querySelectorAll('section').forEach(section => {
        const id = section.id ? `#${section.id}` : '(no ID)';
        const rect = section.getBoundingClientRect();
        const clone = badge.cloneNode();
        clone.textContent = id;
        clone.style.top = `${window.scrollY + rect.top + 4}px`;
        clone.style.left = `${window.scrollX + rect.left + 4}px`;
        clone.style.display = 'block';
        document.body.appendChild(clone);
      });

      // Hover and copy for .sqs-block
      document.querySelectorAll('.sqs-block').forEach(el => {
        el.addEventListener('mouseenter', () => {
          currentElement = el;
          const id = el.id ? `#${el.id}` : '(no ID)';
          const rect = el.getBoundingClientRect();
          badge.textContent = id;
          badge.style.top = `${window.scrollY + rect.top + 4}px`;
          badge.style.left = `${window.scrollX + rect.left + 4}px`;
          badge.style.display = 'block';
        });
        el.addEventListener('mouseleave', () => {
          currentElement = null;
          badge.style.display = 'none';
        });
      });

      // Copy on key "C"
      document.addEventListener('keydown', e => {
        if (e.key.toLowerCase() === 'c' && currentElement) {
          if (currentElement.id) {
            const selector = `#${currentElement.id}`;
            navigator.clipboard.writeText(selector);
            toast.textContent = `Copied: ${selector}`;
          } else {
            toast.textContent = 'Element has no ID';
          }
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2000);
        }
      });
    }
  })();
