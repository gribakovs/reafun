import {node, append} from "./html.js"
import * as Dispatcher from "./dispatcher.js"
import * as Model from "./model.js"



let define = (tag, oninit, onrender, onupdate, onevent, path, message) => {
    class Component extends HTMLElement {
        constructor(){
            super()

            
            
            let style = document.createElement ('style')
                style.textContent = `@import "./assets/uikit/css/uikit-shadow.css";`

            let uikitScript = document.createElement ('script')
                uikitScript.src = "./assets/uikit/js/uikit.min.js"

            let uikitIcons = document.createElement ('script')
                uikitIcons.src = "./assets/uikit/js/uikit-icons.min.js"

            let uikitLoader = document.createElement ('script')
                uikitLoader.src = "./uikitloader.js"

  
            
            let shadow = this.attachShadow({mode: "open"})
                shadow.appendChild(style)
                shadow.appendChild(uikitScript)
                shadow.appendChild(uikitIcons)
                shadow.appendChild(uikitLoader)

            let props = oninit(shadow)
            let model = Model.create(props)
            let children = onrender(model)
            append(shadow,children)

            console.log(shadow.innerHTML)

            let update = (e) => {
                let newmodel = onupdate(e)
                Object.assign(
                    model, newmodel
                )
            }  
            let dispatcher = Dispatcher.create (
                path, update     
            )
         
            Dispatcher.dispatch (dispatcher, message)
        }

    }
    customElements.define(tag, Component)
    return (props, children) => node (tag, props, children)
}

export {define}