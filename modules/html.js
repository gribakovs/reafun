let html = (strings,...values) => {
    let str = ""
    let indexes = [...Array(values.length).keys()]
    indexes.forEach( (i) => str+=strings[i]+values[i] )
    str+=strings[values.length]  
    return str
}

let node = (tag, props, children) => {
    let obj = document.createElement(tag)
        Object.assign(obj,props)
        append(obj,children);
        // parent.appendChild(obj)
        return obj
}

let span = (props, children) => node ("span", props, children)
let div = (props, children) => node ("div", props, children)

let append = (parent, children) => {
    children.forEach(
        (child) => {
            parent.appendChild(child)
        }
    )

}

export {html,span,div, append}