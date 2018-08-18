import {node, append} from "./elements.js"
import * as Dispatcher from "./dispatcher.js"
import * as Model from "./model.js"
// import {style} from "./uikitcss.js"



let define = (tag, oninit, onrender, onupdate, onevent, path, message) => {
    class Component extends HTMLElement {
        constructor(){
            super()

            //console.log(style)
            
            let style = document.createElement ('style')
                //   style.textContent = `@import "./assets/uikit/css/uikit-shadow.css";`
                  style.textContent = `@import "./assets/bulma/bulma.min.css";`

            // let uikitScript = document.createElement ('script')
            //     uikitScript.src = "./assets/uikit/js/uikit.min.js"

            // let uikitIcons = document.createElement ('script')
            //     uikitIcons.src = "./assets/uikit/js/uikit-icons.min.js"
            let fonts = document.createElement ('script')
                 fonts.src = "https://use.fontawesome.com/releases/v5.1.0/js/all.js"
                 fonts.defer = true

            // let uikitLoader = document.createElement ('script')
            //      uikitLoader.src = "./scripts/uikitloader.js"

            let host = this.attachShadow({mode: "open"})
            let props = oninit(host)
            let model = Model.create(props)
            let children = onrender(model)

            


                host.appendChild(style)   
                host.appendChild(fonts)

                append(host,children)
                // host.appendChild(uikitScript)
                // host.appendChild(uikitIcons)
                //host.appendChild(uikitLoader)


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
    return (...attrs) => node (tag, attrs)
}

export {define}