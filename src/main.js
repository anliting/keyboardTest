import{dom}from 'https://gitcdn.link/cdn/anliting/simple.js/55124630741399dd0fcbee2f0396642a428cdd24/src/simple.static.js'
let outputNode
dom.head(
    dom.style(`
        body>.main{
            max-width:600px;
            margin:0 auto;
        }
        body>.main>.keyboard{
            width:400px;
            height:100px;
            background-color:#eee;
        }
    `)
)
dom.body(
    dom.div({className:'main'},
        dom.div('This program tests a keyboard and its environment.'),
        dom.div({className:'keyboard'}),
        outputNode=dom.div(),
    ),
)
onkeydown=e=>{
    e.preventDefault()
    e.stopPropagation()
    dom(outputNode,{innerHTML:''},dom.div(`Key "${e.key}" is pressed.`))
}
