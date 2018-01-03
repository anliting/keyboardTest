import{dom}from 'https://gitcdn.link/cdn/anliting/simple.js/55124630741399dd0fcbee2f0396642a428cdd24/src/simple.static.js'
import Keyboard from'./Keyboard.js'
dom.head(
    dom.style(`
        body>.main{
            max-width:1000px;
            margin:0 auto;
        }
        body>.main>.keyboard{
            margin:0 auto;
        }
        ${Keyboard.style}
    `)
)
let keyboard=new Keyboard
dom.body(
    dom.div({className:'main'},
        dom.p('This program tests a keyboard and its environment.'),
        keyboard.node,
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
