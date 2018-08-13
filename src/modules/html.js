let html = (strings,...values) => {
    let str = ""
    let indexes = [...Array(values.length).keys()]
    indexes.forEach( (i) => str+=strings[i]+values[i] )
    str+=strings[values.length]  
    return str
}

// let attr = (strings,...values) => {
//     let params = strings[0].split("=")
//     let name = params[0]
//     let value = values.length == 0 ? params[1] : values[0]
//     return [name,value]
// }


export {html}