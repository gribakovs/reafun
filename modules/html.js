let html = (strings,...values) => {
    let str = ""
    let indexes = [...Array(values.length).keys()]
    indexes.forEach( (i) => str+=strings[i]+values[i] )
    str+=strings[values.length]  
    return str
}

let append = (parent, children) => {
    children.forEach(
        (child) => {
            parent.appendChild(child)
        }
    )

}

let node = (tag, props, children) => {
    console.log(tag)
    let obj = document.createElement(tag)
    Object.assign(obj,props)
    append(obj,children)
    return obj
}

let a = (props, children) => node ("a", props, children)
let abbr = (props, children) => node ("abbr", props, children)
let address = (props, children) => node ("address", props, children)
let area = (props, children) => node ("area", props, children)
let article = (props, children) => node ("article", props, children)
let aside = (props, children) => node ("aside", props, children)
let audio = (props, children) => node ("audio", props, children)
let b = (props, children) => node ("b", props, children)
let base = (props, children) => node ("base", props, children)
let bdi = (props, children) => node ("bdi", props, children)
let bdo = (props, children) => node ("bdo", props, children)
let big = (props, children) => node ("big", props, children)
let blockquote = (props, children) => node ("blockquote", props, children)
let body = (props, children) => node ("body", props, children)
let br = (props, children) => node ("br", props, children)
let button = (props, children) => node ("button", props, children)
let canvas = (props, children) => node ("canvas", props, children)
let caption = (props, children) => node ("caption", props, children)
let cite = (props, children) => node ("cite", props, children)
let code = (props, children) => node ("code", props, children)
let col = (props, children) => node ("col", props, children)
let colgroup = (props, children) => node ("colgroup", props, children)
let data = (props, children) => node ("data", props, children)
let datalist = (props, children) => node ("datalist", props, children)
let dd = (props, children) => node ("dd", props, children)
let del = (props, children) => node ("del", props, children)
let details = (props, children) => node ("details", props, children)
let dfn = (props, children) => node ("dfn", props, children)
let dialog = (props, children) => node ("dialog", props, children)
let div = (props, children) => node ("div", props, children)
let dl = (props, children) => node ("dl", props, children)
let dt = (props, children) => node ("dt", props, children)
let em = (props, children) => node ("em", props, children)
let embed = (props, children) => node ("embed", props, children)
let fieldset = (props, children) => node ("fieldset", props, children)
let figcaption = (props, children) => node ("figcaption", props, children)
let figure = (props, children) => node ("figure", props, children)
let footer = (props, children) => node ("footer", props, children)
let form = (props, children) => node ("form", props, children)
let h1 = (props, children) => node ("h1", props, children)
let h2 = (props, children) => node ("h2", props, children)
let h3 = (props, children) => node ("h3", props, children)
let h4 = (props, children) => node ("h4", props, children)
let h5 = (props, children) => node ("h5", props, children)
let h6 = (props, children) => node ("h6", props, children)
let head = (props, children) => node ("head", props, children)
let header = (props, children) => node ("header", props, children)
let hgroup = (props, children) => node ("hgroup", props, children)
let hr = (props, children) => node ("hr", props, children)
let i = (props, children) => node ("i", props, children)
let iframe = (props, children) => node ("iframe", props, children)
let img = (props, children) => node ("img", props, children)
let input = (props, children) => node ("input", props, children)
let ins = (props, children) => node ("ins", props, children)
let kbd = (props, children) => node ("kbd", props, children)
let keygen = (props, children) => node ("keygen", props, children)
let label = (props, children) => node ("label", props, children)
let legend = (props, children) => node ("legend", props, children)
let li = (props, children) => node ("li", props, children)
let link = (props, children) => node ("link", props, children)
let main = (props, children) => node ("main", props, children)
let map = (props, children) => node ("map", props, children)
let mark = (props, children) => node ("mark", props, children)
let menu = (props, children) => node ("menu", props, children)
let menuitem = (props, children) => node ("menuitem", props, children)
let meta = (props, children) => node ("meta", props, children)
let meter = (props, children) => node ("meter", props, children)
let nav = (props, children) => node ("nav", props, children)
let noscript = (props, children) => node ("noscript", props, children)
let object = (props, children) => node ("object", props, children)
let ol = (props, children) => node ("ol", props, children)
let optgroup = (props, children) => node ("optgroup", props, children)
let option = (props, children) => node ("option", props, children)
let output = (props, children) => node ("output", props, children)
let p = (props, children) => node ("p", props, children)
let param = (props, children) => node ("param", props, children)
let picture = (props, children) => node ("picture", props, children)
let pre = (props, children) => node ("pre", props, children)
let progress = (props, children) => node ("progress", props, children)
let q = (props, children) => node ("q", props, children)
let rp = (props, children) => node ("rp", props, children)
let rt = (props, children) => node ("rt", props, children)
let ruby = (props, children) => node ("ruby", props, children)
let s = (props, children) => node ("s", props, children)
let samp = (props, children) => node ("samp", props, children)
let script = (props, children) => node ("script", props, children)
let section = (props, children) => node ("section", props, children)
let select = (props, children) => node ("select", props, children)
let small = (props, children) => node ("small", props, children)
let source = (props, children) => node ("source", props, children)
let span = (props, children) => node ("span", props, children)
let strong = (props, children) => node ("strong", props, children)
let style = (props, children) => node ("style", props, children)
let sub = (props, children) => node ("sub", props, children)
let summary = (props, children) => node ("summary", props, children)
let sup = (props, children) => node ("sup", props, children)
let table = (props, children) => node ("table", props, children)
let tbody = (props, children) => node ("tbody", props, children)
let td = (props, children) => node ("td", props, children)
let textarea = (props, children) => node ("textarea", props, children)
let tfoot = (props, children) => node ("tfoot", props, children)
let th = (props, children) => node ("th", props, children)
let thead = (props, children) => node ("thead", props, children)
let time = (props, children) => node ("time", props, children)
let title = (props, children) => node ("title", props, children)
let tr = (props, children) => node ("tr", props, children)
let track = (props, children) => node ("track", props, children)
let u = (props, children) => node ("u", props, children)
let ul = (props, children) => node ("ul", props, children)
let video = (props, children) => node ("video", props, children)
let wbr = (props, children) => node ("wbr", props, children)
let circle = (props, children) => node ("circle", props, children)
let clipPath = (props, children) => node ("clipPath", props, children)
let defs = (props, children) => node ("defs", props, children)
let ellipse = (props, children) => node ("ellipse", props, children)
let g = (props, children) => node ("g", props, children)
let image = (props, children) => node ("image", props, children)
let line = (props, children) => node ("line", props, children)
let linearGradient = (props, children) => node ("linearGradient", props, children)
let mask = (props, children) => node ("mask", props, children)
let path = (props, children) => node ("path", props, children)
let pattern = (props, children) => node ("pattern", props, children)
let polygon = (props, children) => node ("polygon", props, children)
let polyline = (props, children) => node ("polyline", props, children)
let radialGradient = (props, children) => node ("radialGradient", props, children)
let rect = (props, children) => node ("rect", props, children)
let stop = (props, children) => node ("stop", props, children)
let svg = (props, children) => node ("svg", props, children)
let text = (props, children) => node ("text", props, children)
let tspan = (props, children) => node ("tspan", props, children)

export {
    html,
    node,
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