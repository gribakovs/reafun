class Model {
  
    constructor(props){
        let entries = Object.entries(props)
        entries.forEach (([prop, params]) => {
            console.log(prop)
            Object.defineProperty(
                this, 
                prop, 
                {
                    get: () => {
                        return props[prop].value
                    },
                    set: (value) => {
                        if (props[prop].value != value) {
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