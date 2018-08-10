

let append = (parent, children) => {
    children.forEach(
        (child) => {
            parent.appendChild(child)
        }
    )

}

let node = (tag, attrs, children) => {
    console.log(tag)
    let obj = document.createElement(tag)
    
    // Object.assign(obj,attrs)

    // let some = [
    //     ["gr-1",true],
    //     ["gr-2","true"]
    // ]

    attrs.forEach( ([attr,value]) => obj.setAttribute(attr,value) )


    append(obj,children)
    return obj
}

let assign = (node, props) => {
    return Object.assign(node,props)
}

let a = (attrs, children) => node ("a", attrs, children)
let abbr = (attrs, children) => node ("abbr", attrs, children)
let address = (attrs, children) => node ("address", attrs, children)
let area = (attrs, children) => node ("area", attrs, children)
let article = (attrs, children) => node ("article", attrs, children)
let aside = (attrs, children) => node ("aside", attrs, children)
let audio = (attrs, children) => node ("audio", attrs, children)
let b = (attrs, children) => node ("b", attrs, children)
let base = (attrs, children) => node ("base", attrs, children)
let bdi = (attrs, children) => node ("bdi", attrs, children)
let bdo = (attrs, children) => node ("bdo", attrs, children)
let big = (attrs, children) => node ("big", attrs, children)
let blockquote = (attrs, children) => node ("blockquote", attrs, children)
let body = (attrs, children) => node ("body", attrs, children)
let br = (attrs, children) => node ("br", attrs, children)
let button = (attrs, children) => node ("button", attrs, children)
let canvas = (attrs, children) => node ("canvas", attrs, children)
let caption = (attrs, children) => node ("caption", attrs, children)
let cite = (attrs, children) => node ("cite", attrs, children)
let code = (attrs, children) => node ("code", attrs, children)
let col = (attrs, children) => node ("col", attrs, children)
let colgroup = (attrs, children) => node ("colgroup", attrs, children)
let data = (attrs, children) => node ("data", attrs, children)
let datalist = (attrs, children) => node ("datalist", attrs, children)
let dd = (attrs, children) => node ("dd", attrs, children)
let del = (attrs, children) => node ("del", attrs, children)
let details = (attrs, children) => node ("details", attrs, children)
let dfn = (attrs, children) => node ("dfn", attrs, children)
let dialog = (attrs, children) => node ("dialog", attrs, children)
let div = (attrs, children) => node ("div", attrs, children)
let dl = (attrs, children) => node ("dl", attrs, children)
let dt = (attrs, children) => node ("dt", attrs, children)
let em = (attrs, children) => node ("em", attrs, children)
let embed = (attrs, children) => node ("embed", attrs, children)
let fieldset = (attrs, children) => node ("fieldset", attrs, children)
let figcaption = (attrs, children) => node ("figcaption", attrs, children)
let figure = (attrs, children) => node ("figure", attrs, children)
let footer = (attrs, children) => node ("footer", attrs, children)
let form = (attrs, children) => node ("form", attrs, children)
let h1 = (attrs, children) => node ("h1", attrs, children)
let h2 = (attrs, children) => node ("h2", attrs, children)
let h3 = (attrs, children) => node ("h3", attrs, children)
let h4 = (attrs, children) => node ("h4", attrs, children)
let h5 = (attrs, children) => node ("h5", attrs, children)
let h6 = (attrs, children) => node ("h6", attrs, children)
let head = (attrs, children) => node ("head", attrs, children)
let header = (attrs, children) => node ("header", attrs, children)
let hgroup = (attrs, children) => node ("hgroup", attrs, children)
let hr = (attrs, children) => node ("hr", attrs, children)
let i = (attrs, children) => node ("i", attrs, children)
let iframe = (attrs, children) => node ("iframe", attrs, children)
let img = (attrs, children) => node ("img", attrs, children)
let input = (attrs, children) => node ("input", attrs, children)
let ins = (attrs, children) => node ("ins", attrs, children)
let kbd = (attrs, children) => node ("kbd", attrs, children)
let keygen = (attrs, children) => node ("keygen", attrs, children)
let label = (attrs, children) => node ("label", attrs, children)
let legend = (attrs, children) => node ("legend", attrs, children)
let li = (attrs, children) => node ("li", attrs, children)
let link = (attrs, children) => node ("link", attrs, children)
let main = (attrs, children) => node ("main", attrs, children)
let map = (attrs, children) => node ("map", attrs, children)
let mark = (attrs, children) => node ("mark", attrs, children)
let menu = (attrs, children) => node ("menu", attrs, children)
let menuitem = (attrs, children) => node ("menuitem", attrs, children)
let meta = (attrs, children) => node ("meta", attrs, children)
let meter = (attrs, children) => node ("meter", attrs, children)
let nav = (attrs, children) => node ("nav", attrs, children)
let noscript = (attrs, children) => node ("noscript", attrs, children)
let object = (attrs, children) => node ("object", attrs, children)
let ol = (attrs, children) => node ("ol", attrs, children)
let optgroup = (attrs, children) => node ("optgroup", attrs, children)
let option = (attrs, children) => node ("option", attrs, children)
let output = (attrs, children) => node ("output", attrs, children)
let p = (attrs, children) => node ("p", attrs, children)
let param = (attrs, children) => node ("param", attrs, children)
let picture = (attrs, children) => node ("picture", attrs, children)
let pre = (attrs, children) => node ("pre", attrs, children)
let progress = (attrs, children) => node ("progress", attrs, children)
let q = (attrs, children) => node ("q", attrs, children)
let rp = (attrs, children) => node ("rp", attrs, children)
let rt = (attrs, children) => node ("rt", attrs, children)
let ruby = (attrs, children) => node ("ruby", attrs, children)
let s = (attrs, children) => node ("s", attrs, children)
let samp = (attrs, children) => node ("samp", attrs, children)
let script = (attrs, children) => node ("script", attrs, children)
let section = (attrs, children) => node ("section", attrs, children)
let select = (attrs, children) => node ("select", attrs, children)
let small = (attrs, children) => node ("small", attrs, children)
let source = (attrs, children) => node ("source", attrs, children)
let span = (attrs, children) => node ("span", attrs, children)
let strong = (attrs, children) => node ("strong", attrs, children)
let style = (attrs, children) => node ("style", attrs, children)
let sub = (attrs, children) => node ("sub", attrs, children)
let summary = (attrs, children) => node ("summary", attrs, children)
let sup = (attrs, children) => node ("sup", attrs, children)
let table = (attrs, children) => node ("table", attrs, children)
let tbody = (attrs, children) => node ("tbody", attrs, children)
let td = (attrs, children) => node ("td", attrs, children)
let textarea = (attrs, children) => node ("textarea", attrs, children)
let tfoot = (attrs, children) => node ("tfoot", attrs, children)
let th = (attrs, children) => node ("th", attrs, children)
let thead = (attrs, children) => node ("thead", attrs, children)
let time = (attrs, children) => node ("time", attrs, children)
let title = (attrs, children) => node ("title", attrs, children)
let tr = (attrs, children) => node ("tr", attrs, children)
let track = (attrs, children) => node ("track", attrs, children)
let u = (attrs, children) => node ("u", attrs, children)
let ul = (attrs, children) => node ("ul", attrs, children)
let video = (attrs, children) => node ("video", attrs, children)
let wbr = (attrs, children) => node ("wbr", attrs, children)
let circle = (attrs, children) => node ("circle", attrs, children)
let clipPath = (attrs, children) => node ("clipPath", attrs, children)
let defs = (attrs, children) => node ("defs", attrs, children)
let ellipse = (attrs, children) => node ("ellipse", attrs, children)
let g = (attrs, children) => node ("g", attrs, children)
let image = (attrs, children) => node ("image", attrs, children)
let line = (attrs, children) => node ("line", attrs, children)
let linearGradient = (attrs, children) => node ("linearGradient", attrs, children)
let mask = (attrs, children) => node ("mask", attrs, children)
let path = (attrs, children) => node ("path", attrs, children)
let pattern = (attrs, children) => node ("pattern", attrs, children)
let polygon = (attrs, children) => node ("polygon", attrs, children)
let polyline = (attrs, children) => node ("polyline", attrs, children)
let radialGradient = (attrs, children) => node ("radialGradient", attrs, children)
let rect = (attrs, children) => node ("rect", attrs, children)
let stop = (attrs, children) => node ("stop", attrs, children)
let svg = (attrs, children) => node ("svg", attrs, children)
let text = (attrs, children) => node ("text", attrs, children)
let tspan = (attrs, children) => node ("tspan", attrs, children)

export {
    html,
    node,
    assign,
    a,
    abbr,
    address,
    area,
    article,
    aside,
    audio,
    b,
    base,
    bdi,
    bdo,
    big,
    blockquote,
    body,
    br,
    button,
    canvas,
    caption,
    cite,
    code,
    col,
    colgroup,
    data,
    datalist,
    dd,
    del,
    details,
    dfn,
    dialog,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    head,
    header,
    hgroup,
    hr,
    i,
    iframe,
    img,
    input,
    ins,
    kbd,
    keygen,
    label,
    legend,
    li,
    link,
    main,
    map,
    mark,
    menu,
    menuitem,
    meta,
    meter,
    nav,
    noscript,
    object,
    ol,
    optgroup,
    option,
    output,
    p,
    param,
    picture,
    pre,
    progress,
    q,
    rp,
    rt,
    ruby,
    s,
    samp,
    script,
    section,
    select,
    small,
    source,
    span,
    strong,
    style,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    textarea,
    tfoot,
    th,
    thead,
    time,
    title,
    tr,
    track,
    u,
    ul,
    video,
    wbr,
    circle,
    clipPath,
    defs,
    ellipse,
    g,
    image,
    line,
    linearGradient,
    mask,
    path,
    pattern,
    polygon,
    polyline,
    radialGradient,
    rect,
    stop,
    svg,
    text,
    tspan,
    append
}