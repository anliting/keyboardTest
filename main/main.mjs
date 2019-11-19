import doe from '../lib/doe/main/doe.mjs'
import Keyboard from'./Keyboard.js'
doe.head(
    doe.style(`
        body{
            margin:0;
        }
        body>.main{
            overflow-y:auto;
            box-sizing:border-box;
            margin:0 auto;
            min-height:100vh;
            max-width:800px;
            padding:8px;
            background-color:#fff;
        }
        body>.main>.keyboard{
            margin:0 auto;
        }
        ${Keyboard.style}
    `)
)
let keyboard=new Keyboard
doe.body(
    doe.div({className:'main'},
        doe.p('This program tests a keyboard and its environment.'),
        doe.p('Common QWERTY keyboard layout (US):'),
        keyboard.node,
        doe.p(
            doe.a({href:'https://anliting.com/keyboardTest'},'Readme'),
        ),
    ),
)
onkeydown=e=>{
    e.preventDefault()
    e.stopPropagation()
    keyboard.keydown(e)
}
onkeyup=e=>{
    e.preventDefault()
    e.stopPropagation()
    keyboard.keyup(e)
}
/*
    The context menu is triggered even if all onkeydown are
    'preventDefault'ed. I don't know why.
*/
oncontextmenu=e=>{
    e.preventDefault()
    e.stopPropagation()
}
