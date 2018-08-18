

let append = (parent, nodes) => {
    let children = nodes[0] instanceof Array
        ? nodes[0]
        : nodes

    children.forEach(
        (child) => {
            typeof child == "string"
            ? parent.appendChild(document.createTextNode(child))
            : parent.appendChild(child)
        }
    )

}

let node = (tag, ...attrs) => {
    let obj = document.createElement(tag)

    attrs.forEach( ([attr,value]) => obj.setAttribute(attr,value) )

    return (...children) => {
        if (children) append(obj,children)

        return obj  
    }

    
}

let assign = (node, props) => {
    return Object.assign(node,props)
}

let styles = (name,value) => [name,value]
let attr = (name,value) => [name,value]

let a = (...attrs) => node ("a", ...attrs)
let abbr = (...attrs) => node ("abbr", ...attrs)
let address = (...attrs) => node ("address", ...attrs)
let area = (...attrs) => node ("area", ...attrs)
let article = (...attrs) => node ("article", ...attrs)
let aside = (...attrs) => node ("aside", ...attrs)
let audio = (...attrs) => node ("audio", ...attrs)
let b = (...attrs) => node ("b", ...attrs)
let base = (...attrs) => node ("base", ...attrs)
let bdi = (...attrs) => node ("bdi", ...attrs)
let bdo = (...attrs) => node ("bdo", ...attrs)
let big = (...attrs) => node ("big", ...attrs)
let blockquote = (...attrs) => node ("blockquote", ...attrs)
let body = (...attrs) => node ("body", ...attrs)
let br = (...attrs) => node ("br", ...attrs)
let button = (...attrs) => node ("button", ...attrs)
let canvas = (...attrs) => node ("canvas", ...attrs)
let caption = (...attrs) => node ("caption", ...attrs)
let cite = (...attrs) => node ("cite", ...attrs)
let code = (...attrs) => node ("code", ...attrs)
let col = (...attrs) => node ("col", ...attrs)
let colgroup = (...attrs) => node ("colgroup", ...attrs)
let data = (...attrs) => node ("data", ...attrs)
let datalist = (...attrs) => node ("datalist", ...attrs)
let dd = (...attrs) => node ("dd", ...attrs)
let del = (...attrs) => node ("del", ...attrs)
let details = (...attrs) => node ("details", ...attrs)
let dfn = (...attrs) => node ("dfn", ...attrs)
let dialog = (...attrs) => node ("dialog", ...attrs)
let div = (...attrs) => node ("div", ...attrs)
let dl = (...attrs) => node ("dl", ...attrs)
let dt = (...attrs) => node ("dt", ...attrs)
let em = (...attrs) => node ("em", ...attrs)
let embed = (...attrs) => node ("embed", ...attrs)
let fieldset = (...attrs) => node ("fieldset", ...attrs)
let figcaption = (...attrs) => node ("figcaption", ...attrs)
let figure = (...attrs) => node ("figure", ...attrs)
let footer = (...attrs) => node ("footer", ...attrs)
let form = (...attrs) => node ("form", ...attrs)
let h1 = (...attrs) => node ("h1", ...attrs)
let h2 = (...attrs) => node ("h2", ...attrs)
let h3 = (...attrs) => node ("h3", ...attrs)
let h4 = (...attrs) => node ("h4", ...attrs)
let h5 = (...attrs) => node ("h5", ...attrs)
let h6 = (...attrs) => node ("h6", ...attrs)
let head = (...attrs) => node ("head", ...attrs)
let header = (...attrs) => node ("header", ...attrs)
let hgroup = (...attrs) => node ("hgroup", ...attrs)
let hr = (...attrs) => node ("hr", ...attrs)
let i = (...attrs) => node ("i", ...attrs)
let iframe = (...attrs) => node ("iframe", ...attrs)
let img = (...attrs) => node ("img", ...attrs)
let input = (...attrs) => node ("input", ...attrs)
let ins = (...attrs) => node ("ins", ...attrs)
let kbd = (...attrs) => node ("kbd", ...attrs)
let keygen = (...attrs) => node ("keygen", ...attrs)
let label = (...attrs) => node ("label", ...attrs)
let legend = (...attrs) => node ("legend", ...attrs)
let li = (...attrs) => node ("li", ...attrs)
let link = (...attrs) => node ("link", ...attrs)
let main = (...attrs) => node ("main", ...attrs)
let map = (...attrs) => node ("map", ...attrs)
let mark = (...attrs) => node ("mark", ...attrs)
let menu = (...attrs) => node ("menu", ...attrs)
let menuitem = (...attrs) => node ("menuitem", ...attrs)
let meta = (...attrs) => node ("meta", ...attrs)
let meter = (...attrs) => node ("meter", ...attrs)
let nav = (...attrs) => node ("nav", ...attrs)
let noscript = (...attrs) => node ("noscript", ...attrs)
let object = (...attrs) => node ("object", ...attrs)
let ol = (...attrs) => node ("ol", ...attrs)
let optgroup = (...attrs) => node ("optgroup", ...attrs)
let option = (...attrs) => node ("option", ...attrs)
let output = (...attrs) => node ("output", ...attrs)
let p = (...attrs) => node ("p", ...attrs)
let param = (...attrs) => node ("param", ...attrs)
let picture = (...attrs) => node ("picture", ...attrs)
let pre = (...attrs) => node ("pre", ...attrs)
let progress = (...attrs) => node ("progress", ...attrs)
let q = (...attrs) => node ("q", ...attrs)
let rp = (...attrs) => node ("rp", ...attrs)
let rt = (...attrs) => node ("rt", ...attrs)
let ruby = (...attrs) => node ("ruby", ...attrs)
let s = (...attrs) => node ("s", ...attrs)
let samp = (...attrs) => node ("samp", ...attrs)
let script = (...attrs) => node ("script", ...attrs)
let section = (...attrs) => node ("section", ...attrs)
let select = (...attrs) => node ("select", ...attrs)
let small = (...attrs) => node ("small", ...attrs)
let source = (...attrs) => node ("source", ...attrs)
let span = (...attrs) => node ("span", ...attrs)
let strong = (...attrs) => node ("strong", ...attrs)
let style = (...attrs) => node ("style", ...attrs)
let sub = (...attrs) => node ("sub", ...attrs)
let summary = (...attrs) => node ("summary", ...attrs)
let sup = (...attrs) => node ("sup", ...attrs)
let table = (...attrs) => node ("table", ...attrs)
let tbody = (...attrs) => node ("tbody", ...attrs)
let td = (...attrs) => node ("td", ...attrs)
let textarea = (...attrs) => node ("textarea", ...attrs)
let tfoot = (...attrs) => node ("tfoot", ...attrs)
let th = (...attrs) => node ("th", ...attrs)
let thead = (...attrs) => node ("thead", ...attrs)
let time = (...attrs) => node ("time", ...attrs)
let title = (...attrs) => node ("title", ...attrs)
let tr = (...attrs) => node ("tr", ...attrs)
let track = (...attrs) => node ("track", ...attrs)
let u = (...attrs) => node ("u", ...attrs)
let ul = (...attrs) => node ("ul", ...attrs)
let video = (...attrs) => node ("video", ...attrs)
let wbr = (...attrs) => node ("wbr", ...attrs)
let circle = (...attrs) => node ("circle", ...attrs)
let clipPath = (...attrs) => node ("clipPath", ...attrs)
let defs = (...attrs) => node ("defs", ...attrs)
let ellipse = (...attrs) => node ("ellipse", ...attrs)
let g = (...attrs) => node ("g", ...attrs)
let image = (...attrs) => node ("image", ...attrs)
let line = (...attrs) => node ("line", ...attrs)
let linearGradient = (...attrs) => node ("linearGradient", ...attrs)
let mask = (...attrs) => node ("mask", ...attrs)
let path = (...attrs) => node ("path", ...attrs)
let pattern = (...attrs) => node ("pattern", ...attrs)
let polygon = (...attrs) => node ("polygon", ...attrs)
let polyline = (...attrs) => node ("polyline", ...attrs)
let radialGradient = (...attrs) => node ("radialGradient", ...attrs)
let rect = (...attrs) => node ("rect", ...attrs)
let stop = (...attrs) => node ("stop", ...attrs)
let svg = (...attrs) => node ("svg", ...attrs)
let text = (...attrs) => node ("text", ...attrs)
let tspan = (...attrs) => node ("tspan", ...attrs)

export {
    html,
    attr,
    styles,
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