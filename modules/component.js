import {node, append} from "/modules/html.js"
import * as Dispatcher from "/modules/dispatcher.js"
import * as Model from "/modules/model.js"

let define = (tag, oninit, onrender, onupdate, onevent, path, message) => {
    class Component extends HTMLElement {
        constructor(){
            super()
            let shadow = this.attachShadow({mode: "open"})
            let props = oninit(shadow)
            let model = Model.create(props)
            let children = onrender(model)
            append(shadow,children)

            let update = (e) => {
                let newmodel = onupdate(e)
                console.log(JSON.stringify(newmodel))
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