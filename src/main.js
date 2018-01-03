import{dom}from 'https://gitcdn.link/cdn/anliting/simple.js/55124630741399dd0fcbee2f0396642a428cdd24/src/simple.static.js'
let outputNode
dom.head(
    dom.style(`
        body>.main{
            max-width:600px;
            margin:0 auto;
        }
        .keyboard{
            width:400px;
            height:100px;
            background-color:#ddd;
        }
        .keyboard>.main{
            margin-top:8px;
            margin-left:8px;
        }
        .keyboard>*>.key{
            display:inline-block;
            background-color:white;
            font-family:monospace;
        }
        .keyboard>.main>.key+.key{
            margin-left:2px;
        }
        .keyboard>.main>.normal{
            width:16px;
            height:16px;
        }
    `)
)
dom.body(
    dom.div({className:'main'},
        dom.div('This program tests a keyboard and its environment.'),
        createKeyboard(),
        outputNode=dom.div(),
    ),
)
function createKeyboard(){
    return dom.div({className:'keyboard'},
        dom.div({className:'escape'},
            dom.div({className:'key normal escape'},'ESC'),
        ),
        dom.div({className:'function'},
            dom.div({className:'key normal f1'},'F1'),
            dom.div({className:'key normal f2'},'F2'),
            dom.div({className:'key normal f3'},'F3'),
            dom.div({className:'key normal f4'},'F4'),
            dom.div({className:'key normal f1'},'F5'),
            dom.div({className:'key normal f2'},'F6'),
            dom.div({className:'key normal f3'},'F7'),
            dom.div({className:'key normal f4'},'F8'),
            dom.div({className:'key normal f1'},'F9'),
            dom.div({className:'key normal f2'},'F10'),
            dom.div({className:'key normal f3'},'F11'),
            dom.div({className:'key normal f4'},'F12'),
        ),
        dom.div({className:'legacy'},
        ),
        dom.div({className:'main'},
            dom.div({className:'key normal backQuote'},'`'),
            dom.div({className:'key normal num1'},'1'),
            dom.div({className:'key normal num2'},'2'),
            dom.div({className:'key normal num3'},'3'),
            dom.div({className:'key normal num4'},'4'),
            dom.div({className:'key normal num5'},'5'),
            dom.div({className:'key normal num6'},'6'),
            dom.div({className:'key normal num7'},'7'),
            dom.div({className:'key normal num8'},'8'),
            dom.div({className:'key normal num9'},'9'),
            dom.div({className:'key normal num0'},'0'),
            dom.div({className:'key normal minus'},'-'),
            dom.div({className:'key normal plus'},'+'),
            dom.div({className:'key normal backSpace'},'←'),
        ),
        dom.div({className:'navigation'},
        ),
        dom.div({className:'numeric'},
        ),
    )
}
onkeydown=e=>{
    e.preventDefault()
    e.stopPropagation()
    dom(outputNode,{innerHTML:''},dom.div(`Key "${e.key}" is pressed.`))
}
