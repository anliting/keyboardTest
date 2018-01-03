import{dom}from 'https://gitcdn.link/cdn/anliting/simple.js/55124630741399dd0fcbee2f0396642a428cdd24/src/simple.static.js'
function Keyboard(){
    this._keyNodes={
        '`':{
            0:dom.div({className:'key normal backQuote'},'`')
        },
        1:{
            0:dom.div({className:'key normal num1'},'1'),
        },
        2:{
            0:dom.div({className:'key normal num2'},'2'),
        },
        3:{
            0:dom.div({className:'key normal num3'},'3'),
        },
        4:{
            0:dom.div({className:'key normal num4'},'4'),
        },
        5:{
            0:dom.div({className:'key normal num5'},'5'),
        },
        6:{
            0:dom.div({className:'key normal num6'},'6'),
        },
        7:{
            0:dom.div({className:'key normal num7'},'7'),
        },
        8:{
            0:dom.div({className:'key normal num8'},'8'),
        },
        9:{
            0:dom.div({className:'key normal num9'},'9'),
        },
        0:{
            0:dom.div({className:'key normal num0'},'0'),
        },
    }
    this.node=dom.div({className:'keyboard'},
        dom.div({className:'table'},
            dom.div({className:'a'},
                dom.div(
                    dom.span({className:'escape'},
                        dom.div({className:'key normal escape'},'ESC'),
                    ),
                    dom.span({className:'function'},
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
                ),
                dom.div(
                    dom.div({className:'legacy'},
                    ),
                ),
                dom.div(
                ),
            ),
            dom.div({className:'b'},
                dom.div(
                    dom.div({className:'main'},
                        this._keyNodes['`'][0],
                        this._keyNodes[1][0],
                        this._keyNodes[2][0],
                        this._keyNodes[3][0],
                        this._keyNodes[4][0],
                        this._keyNodes[5][0],
                        this._keyNodes[6][0],
                        this._keyNodes[7][0],
                        this._keyNodes[8][0],
                        this._keyNodes[9][0],
                        this._keyNodes[0][0],
                        dom.div({className:'key normal minus'},'-'),
                        dom.div({className:'key normal plus'},'+'),
                        dom.div({className:'key normal backSpace'},'←'),
                    ),
                ),
                dom.div({className:'cell'},
                    dom.div({className:'navigation'},
                    ),
                ),
                dom.div({className:'cell'},
                    dom.div({className:'numeric'},
                    ),
                ),
            ),
        ),
    )
}
Keyboard.prototype.keydown=function(e){
    if(this._keyNodes[e.key]&&this._keyNodes[e.key][e.location])
        this._keyNodes[e.key][e.location].classList.add('keydown')
}
Keyboard.prototype.keyup=function(e){
    if(this._keyNodes[e.key]&&this._keyNodes[e.key][e.location])
        this._keyNodes[e.key][e.location].classList.remove('keydown')
}
Keyboard.style=`
    .keyboard{
        width:400px;
        height:100px;
        background-color:#ddd;
    }
    .keyboard>.table{
        display:table;
    }
    .keyboard>.table>*{
        display:table-row;
    }
    .keyboard>.table>*>*{
        display:table-cell;
    }
    .keyboard .key{
        display:inline-block;
        border-radius:1px;
        background-color:#fff;
        font-family:monospace;
    }
    .keyboard .key.normal{
        width:16px;
        height:16px;
        font-size:8px;
    }
    .keyboard .key.keydown{
        background-color:#000;
        color:#fff;
    }
    .keyboard .key+.key{
        margin-left:2px;
    }
`
export default Keyboard
