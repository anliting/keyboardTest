import style from               './layout/style.js'
import createNode from          './layout/createNode.js'
import createKeyNodes from      './layout/createKeyNodes.mjs'
import cherryMxBoard1p0Tkl from './layout/cherryMxBoard1p0Tkl.mjs'
import fuhlenG87 from           './layout/fuhlenG87.mjs'
let ansiQwerty={
    name:'ANSI / Qwerty',
    createKeyNodes,
    createNode,
    style,
}
let layout={
    ansiQwerty,
    cherryMxBoard1p0Tkl,
    fuhlenG87,
}
export default layout
