let html = (strings,...values) => {
    let str = ""
    let indexes = [...Array(values.length).keys()]
        indexes.forEach( (i) => str+=strings[i]+values[i] )

        str+=strings[values.length]  

    let range = document.createRange();
    return range.createContextualFragment(str);
}
export {html}