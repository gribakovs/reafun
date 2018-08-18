import * as Lodash from "lodash"
class Model {
  
    constructor(props){
        let entries = Object.entries(props)
        entries.forEach (([prop, params]) => {
            Object.defineProperty(
                this, 
                prop, 
                {
                    get: () => {
                        return props[prop].value
                    },
                    set: (value) => {
                        console.log (Lodash.isEqual (props[prop].value, value) )
                        if (! Lodash.isEqual (props[prop].value, value) ) {
                            props[prop].value = value
                            props[prop].set(value)
                        }
                    }
                }
            )
        })
    }

}
  
let create = (props) => new Model(props)

export {create}