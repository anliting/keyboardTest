import style from               './layout/style.js'
import createNode from          './layout/createNode.js'
import createKeyNodes from      './layout/createKeyNodes.js'
import cherryMxBoard1p0Tkl from './layout/cherryMxBoard1p0Tkl.mjs'
let ansiQwerty={
    name:'ANSI / Qwerty',
    createKeyNodes,
    createNode,
    style,
}
let layout={
    ansiQwerty,
    cherryMxBoard1p0Tkl,
}
export default layout
