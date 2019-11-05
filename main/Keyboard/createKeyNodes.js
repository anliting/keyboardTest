import doe from '../../lib/doe/main/doe.mjs'
function createKeyNodes(){
    return{
        'Escape':{
            0:doe.div({className:'key escape'},'ESC'),
        },
        'F1':{
            0:doe.div({className:'key f1'},'F1'),
        },
        'F2':{
            0:doe.div({className:'key f2'},'F2'),
        },
        'F3':{
            0:doe.div({className:'key f3'},'F3'),
        },
        'F4':{
            0:doe.div({className:'key f4'},'F4'),
        },
        'F5':{
            0:doe.div({className:'key f5'},'F5'),
        },
        'F6':{
            0:doe.div({className:'key f6'},'F6'),
        },
        'F7':{
            0:doe.div({className:'key f7'},'F7'),
        },
        'F8':{
            0:doe.div({className:'key f8'},'F8'),
        },
        'F9':{
            0:doe.div({className:'key f9'},'F9'),
        },
        'F10':{
            0:doe.div({className:'key f10'},'F10'),
        },
        'F11':{
            0:doe.div({className:'key f11'},'F11'),
        },
        'F12':{
            0:doe.div({className:'key f12'},'F12'),
        },
        'Print':{
            0:doe.div({className:'key'},'PS'),
        },
        'ScrollLock':{
            0:doe.div({className:'key'},'SL'),
        },
        'Pause':{
            0:doe.div({className:'key'},'PB'),
        },
        '`':{
            0:doe.div({className:'key backQuote'},'`')
        },
        1:{
            0:doe.div({className:'key num1'},'1'),
            3:doe.div({className:'key num1'},'1'),
        },
        2:{
            0:doe.div({className:'key num2'},'2'),
            3:doe.div({className:'key num2'},'2'),
        },
        3:{
            0:doe.div({className:'key num3'},'3'),
            3:doe.div({className:'key num3'},'3'),
        },
        4:{
            0:doe.div({className:'key num4'},'4'),
            3:doe.div({className:'key num4'},'4'),
        },
        5:{
            0:doe.div({className:'key num5'},'5'),
            3:doe.div({className:'key num5'},'5'),
        },
        6:{
            0:doe.div({className:'key num6'},'6'),
            3:doe.div({className:'key num6'},'6'),
        },
        7:{
            0:doe.div({className:'key num7'},'7'),
            3:doe.div({className:'key num7'},'7'),
        },
        8:{
            0:doe.div({className:'key num8'},'8'),
            3:doe.div({className:'key num8'},'8'),
        },
        9:{
            0:doe.div({className:'key num9'},'9'),
            3:doe.div({className:'key num9'},'9'),
        },
        0:{
            0:doe.div({className:'key num0'},'0'),
            3:doe.div({className:'key num0'},'0'),
        },
        '-':{
            0:doe.div({className:'key minus'},'-'),
            3:doe.div({className:'key minus'},'-'),
        },
        '=':{
            0:doe.div({className:'key equal'},'='),
        },
        Backspace:{
            0:doe.div({className:'key backspace'},'←'),
        },
        Tab:{
            0:doe.div({className:'key tab'},'TAB'),
        },
        q:{
            0:doe.div({className:'key q'},'Q'),
        },
        w:{
            0:doe.div({className:'key w'},'W'),
        },
        e:{
            0:doe.div({className:'key e'},'E'),
        },
        r:{
            0:doe.div({className:'key r'},'R'),
        },
        t:{
            0:doe.div({className:'key t'},'T'),
        },
        y:{
            0:doe.div({className:'key y'},'Y'),
        },
        u:{
            0:doe.div({className:'key u'},'U'),
        },
        i:{
            0:doe.div({className:'key i'},'I'),
        },
        o:{
            0:doe.div({className:'key o'},'O'),
        },
        p:{
            0:doe.div({className:'key p'},'P'),
        },
        '[':{
            0:doe.div({className:'key openSquareBracket'},'['),
        },
        ']':{
            0:doe.div({className:'key closedSquareBracket'},']'),
        },
        '\\':{
            0:doe.div({className:'key backslash'},'\\'),
        },
        'CapsLock':{
            0:doe.div({className:'key capsLock'},'CL'),
        },
        'a':{
            0:doe.div({className:'key a'},'A'),
        },
        's':{
            0:doe.div({className:'key s'},'S'),
        },
        'd':{
            0:doe.div({className:'key d'},'D'),
        },
        'f':{
            0:doe.div({className:'key f'},'F'),
        },
        'g':{
            0:doe.div({className:'key g'},'G'),
        },
        'h':{
            0:doe.div({className:'key h'},'H'),
        },
        'j':{
            0:doe.div({className:'key j'},'J'),
        },
        'k':{
            0:doe.div({className:'key k'},'K'),
        },
        'l':{
            0:doe.div({className:'key l'},'L'),
        },
        ';':{
            0:doe.div({className:'key semicolon'},';'),
        },
        '\'':{
            0:doe.div({className:'key apostrophe'},'\''),
        },
        'Enter':{
            0:doe.div({className:'key enter'},'ENT'),
            3:doe.div({className:'key enter'},'ENT'),
        },
        'Shift':{
            1:doe.div({className:'key shift0'},'⇧'),
            2:doe.div({className:'key shift1'},'⇧'),
        },
        'z':{
            0:doe.div({className:'key z'},'Z'),
        },
        'x':{
            0:doe.div({className:'key x'},'X'),
        },
        'c':{
            0:doe.div({className:'key c'},'C'),
        },
        'v':{
            0:doe.div({className:'key v'},'V'),
        },
        'b':{
            0:doe.div({className:'key b'},'B'),
        },
        'n':{
            0:doe.div({className:'key n'},'N'),
        },
        'm':{
            0:doe.div({className:'key m'},'M'),
        },
        ',':{
            0:doe.div({className:'key comma'},','),
        },
        '.':{
            0:doe.div({className:'key fullStop'},'.'),
            3:doe.div({className:'key fullStop'},'.'),
        },
        '/':{
            0:doe.div({className:'key slash'},'/'),
            3:doe.div({className:'key slash'},'/'),
        },
        'Control':{
            1:doe.div({className:'key wide125 ctrl'},'CTRL'),
            2:doe.div({className:'key wide125 ctrl'},'CTRL'),
        },
        'Meta':{
            1:doe.div({className:'key wide125 meta'},'META'),
            2:doe.div({className:'key wide125 meta'},'META'),
        },
        'Alt':{
            1:doe.div({className:'key wide125 alt'},'ALT'),
            2:doe.div({className:'key wide125 alt'},'ALT'),
        },
        ' ':{
            0:doe.div({className:'key space'},'SPACE'),
        },
        'ContextMenu':{
            0:doe.div({className:'key wide125 menu'},'MENU'),
        },
        'Insert':{
            0:doe.div({className:'key insert'},'INS'),
        },
        'Home':{
            0:doe.div({className:'key home'},'HM'),
        },
        'PageUp':{
            0:doe.div({className:'key pageUp'},'PU'),
        },
        'Delete':{
            0:doe.div({className:'key delete'},'DEL'),
        },
        'End':{
            0:doe.div({className:'key end'},'END'),
        },
        'PageDown':{
            0:doe.div({className:'key pageDown'},'PD'),
        },
        'ArrowUp':{
            0:doe.div({className:'key arrowUp'},'↑'),
        },
        'ArrowLeft':{
            0:doe.div({className:'key arrowLeft'},'←'),
        },
        'ArrowDown':{
            0:doe.div({className:'key arrowDown'},'↓'),
        },
        'ArrowRight':{
            0:doe.div({className:'key arrowRight'},'→'),
        },
        'NumLock':{
            0:doe.div({className:'key numLock'},'NL'),
        },
        '*':{
            3:doe.div({className:'key asterisk'},'*'),
        },
        '+':{
            3:doe.div({className:'key plus'},'+'),
        }
    }
}
export default createKeyNodes
