import doe from '../../lib/doe/main/doe.mjs'
function createKeyNodes(){
    return{
        'Escape':{
            0:doe.div({className:'key escape'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 0 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'ESC'),
        },
        'F1':{
            0:doe.div({className:'key f1'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 2 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F1'),
        },
        'F2':{
            0:doe.div({className:'key f2'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 3 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F2'),
        },
        'F3':{
            0:doe.div({className:'key f3'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 4 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F3'),
        },
        'F4':{
            0:doe.div({className:'key f4'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 5 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F4'),
        },
        'F5':{
            0:doe.div({className:'key f5'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 6.5 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F5'),
        },
        'F6':{
            0:doe.div({className:'key f6'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 7.5 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F6'),
        },
        'F7':{
            0:doe.div({className:'key f7'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 8.5 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F7'),
        },
        'F8':{
            0:doe.div({className:'key f8'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 9.5 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F8'),
        },
        'F9':{
            0:doe.div({className:'key f9'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 11 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F9'),
        },
        'F10':{
            0:doe.div({className:'key f10'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 12 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F10'),
        },
        'F11':{
            0:doe.div({className:'key f11'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 13 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F11'),
        },
        'F12':{
            0:doe.div({className:'key f12'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 14 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'F12'),
        },
        'Print':{
            0:doe.div({className:'key'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 15.25 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'PS'),
        },
        'ScrollLock':{
            0:doe.div({className:'key'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 16.25 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'SL'),
        },
        'Pause':{
            0:doe.div({className:'key'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 17.25 * var(--scale))',
                    bottom: 'calc(16px * 5.25 * var(--scale))',
                })
            },'PB'),
        },
        '`':{
            0:doe.div({className:'key backQuote'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 0 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'`')
        },
        1:{
            0:doe.div({className:'key num1'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 1 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'1'),
            3:doe.div({className:'key num1'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 18.5 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'1'),
        },
        2:{
            0:doe.div({className:'key num2'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 2 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'2'),
            3:doe.div({className:'key num2'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 19.5 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'2'),
        },
        3:{
            0:doe.div({className:'key num3'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 3 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'3'),
            3:doe.div({className:'key num3'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 20.5 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'3'),
        },
        4:{
            0:doe.div({className:'key num4'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 4 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'4'),
            3:doe.div({className:'key num4'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 18.5 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'4'),
        },
        5:{
            0:doe.div({className:'key num5'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 5 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'5'),
            3:doe.div({className:'key num5'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 19.5 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'5'),
        },
        6:{
            0:doe.div({className:'key num6'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 6 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'6'),
            3:doe.div({className:'key num6'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 20.5 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'6'),
        },
        7:{
            0:doe.div({className:'key num7'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 7 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'7'),
            3:doe.div({className:'key num7'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 18.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'7'),
        },
        8:{
            0:doe.div({className:'key num8'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 8 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'8'),
            3:doe.div({className:'key num8'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 19.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'8'),
        },
        9:{
            0:doe.div({className:'key num9'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 9 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'9'),
            3:doe.div({className:'key num9'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 20.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'9'),
        },
        0:{
            0:doe.div({className:'key num0'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 10 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'0'),
            3:doe.div({className:'key num0'},n=>{
                doe(n.style,{
                    width:'calc(16px * 2 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 18.5 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'0'),
        },
        '-':{
            0:doe.div({className:'key minus'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 11 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'-'),
            3:doe.div({className:'key minus'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 21.5 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'-'),
        },
        '=':{
            0:doe.div({className:'key equal'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 12 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'='),
        },
        Backspace:{
            0:doe.div({className:'key backspace'},n=>{
                doe(n.style,{
                    width:'calc(16px * 2 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 13 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'←'),
        },
        Tab:{
            0:doe.div({className:'key tab'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1.5 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 0 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'TAB'),
        },
        q:{
            0:doe.div({className:'key q'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 1.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'Q'),
        },
        w:{
            0:doe.div({className:'key w'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 2.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'W'),
        },
        e:{
            0:doe.div({className:'key e'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 3.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'E'),
        },
        r:{
            0:doe.div({className:'key r'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 4.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'R'),
        },
        t:{
            0:doe.div({className:'key t'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 5.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'T'),
        },
        y:{
            0:doe.div({className:'key y'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 6.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'Y'),
        },
        u:{
            0:doe.div({className:'key u'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 7.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'U'),
        },
        i:{
            0:doe.div({className:'key i'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 8.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'I'),
        },
        o:{
            0:doe.div({className:'key o'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 9.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'O'),
        },
        p:{
            0:doe.div({className:'key p'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 10.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'P'),
        },
        '[':{
            0:doe.div({className:'key openSquareBracket'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 11.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'['),
        },
        ']':{
            0:doe.div({className:'key closedSquareBracket'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 12.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },']'),
        },
        '\\':{
            0:doe.div({className:'key backslash'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1.5 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 13.5 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'\\'),
        },
        'CapsLock':{
            0:doe.div({className:'key capsLock'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1.75 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 0 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'CL'),
        },
        'a':{
            0:doe.div({className:'key a'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 1.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'A'),
        },
        's':{
            0:doe.div({className:'key s'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 2.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'S'),
        },
        'd':{
            0:doe.div({className:'key d'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 3.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'D'),
        },
        'f':{
            0:doe.div({className:'key f'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 4.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'F'),
        },
        'g':{
            0:doe.div({className:'key g'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 5.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'G'),
        },
        'h':{
            0:doe.div({className:'key h'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 6.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'H'),
        },
        'j':{
            0:doe.div({className:'key j'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 7.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'J'),
        },
        'k':{
            0:doe.div({className:'key k'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 8.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'K'),
        },
        'l':{
            0:doe.div({className:'key l'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 9.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'L'),
        },
        ';':{
            0:doe.div({className:'key semicolon'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 10.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },';'),
        },
        '\'':{
            0:doe.div({className:'key apostrophe'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 11.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'\''),
        },
        'Enter':{
            0:doe.div({className:'key enter'},n=>{
                doe(n.style,{
                    width:'calc(16px * 2.25 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 12.75 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'ENT'),
            3:doe.div({className:'key enter'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 2 * var(--scale))',
                    left:   'calc(16px * 21.5 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'ENT'),
        },
        'Shift':{
            1:doe.div({className:'key shift0'},n=>{
                doe(n.style,{
                    width:  'calc(16px * 2.25 * var(--scale))',
                    height: 'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 0 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'⇧'),
            2:doe.div({className:'key shift1'},n=>{
                doe(n.style,{
                    width:'calc(16px * 2.75 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 12.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'⇧'),
        },
        'z':{
            0:doe.div({className:'key z'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 2.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'Z'),
        },
        'x':{
            0:doe.div({className:'key x'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 3.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'X'),
        },
        'c':{
            0:doe.div({className:'key c'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 4.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'C'),
        },
        'v':{
            0:doe.div({className:'key v'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 5.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'V'),
        },
        'b':{
            0:doe.div({className:'key b'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 6.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'B'),
        },
        'n':{
            0:doe.div({className:'key n'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 7.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'N'),
        },
        'm':{
            0:doe.div({className:'key m'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 8.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'M'),
        },
        ',':{
            0:doe.div({className:'key comma'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 9.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },','),
        },
        '.':{
            0:doe.div({className:'key fullStop'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 10.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'.'),
            3:doe.div({className:'key fullStop'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 20.5 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'.'),
        },
        '/':{
            0:doe.div({className:'key slash'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 11.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'/'),
            3:doe.div({className:'key slash'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 19.5 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'/'),
        },
        'Control':{
            1:doe.div({className:'key ctrl'},n=>{
                doe(n.style,{
                    width:  'calc(16px * 1.25 * var(--scale))',
                    height: 'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 0 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'CTRL'),
            2:doe.div({className:'key ctrl'},n=>{
                doe(n.style,{
                    width:  'calc(16px * 1.25 * var(--scale))',
                    height: 'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 13.75 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'CTRL'),
        },
        'Meta':{
            1:doe.div({className:'key meta'},n=>{
                doe(n.style,{
                    width:  'calc(16px * 1.25 * var(--scale))',
                    height: 'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 1.25 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'META'),
            2:doe.div({className:'key meta'},n=>{
                doe(n.style,{
                    width:  'calc(16px * 1.25 * var(--scale))',
                    height: 'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 11.25 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'META'),
        },
        'Alt':{
            1:doe.div({className:'key alt'},n=>{
                doe(n.style,{
                    width:  'calc(16px * 1.25 * var(--scale))',
                    height: 'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 2.5 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'ALT'),
            2:doe.div({className:'key alt'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1.25 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 10 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'ALT'),
        },
        ' ':{
            0:doe.div({className:'key space'},n=>{
                doe(n.style,{
                    width:'calc(16px * 6.25 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 3.75 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'SPACE'),
        },
        'ContextMenu':{
            0:doe.div({className:'key menu'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1.25 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 12.5 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'MENU'),
        },
        'Insert':{
            0:doe.div({className:'key insert'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 15.25 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'INS'),
        },
        'Home':{
            0:doe.div({className:'key home'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 16.25 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'HM'),
        },
        'PageUp':{
            0:doe.div({className:'key pageUp'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 17.25 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'PU'),
        },
        'Delete':{
            0:doe.div({className:'key delete'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 15.25 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'DEL'),
        },
        'End':{
            0:doe.div({className:'key end'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 16.25 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'END'),
        },
        'PageDown':{
            0:doe.div({className:'key pageDown'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 17.25 * var(--scale))',
                    bottom: 'calc(16px * 3 * var(--scale))',
                })
            },'PD'),
        },
        'ArrowUp':{
            0:doe.div({className:'key arrowUp'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 16.25 * var(--scale))',
                    bottom: 'calc(16px * 1 * var(--scale))',
                })
            },'↑'),
        },
        'ArrowLeft':{
            0:doe.div({className:'key arrowLeft'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 15.25 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'←'),
        },
        'ArrowDown':{
            0:doe.div({className:'key arrowDown'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 16.25 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'↓'),
        },
        'ArrowRight':{
            0:doe.div({className:'key arrowRight'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 17.25 * var(--scale))',
                    bottom: 'calc(16px * 0 * var(--scale))',
                })
            },'→'),
        },
        'NumLock':{
            0:doe.div({className:'key numLock'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 18.5 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'NL'),
        },
        '*':{
            3:doe.div({className:'key asterisk'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 1 * var(--scale))',
                    left:   'calc(16px * 20.5 * var(--scale))',
                    bottom: 'calc(16px * 4 * var(--scale))',
                })
            },'*'),
        },
        '+':{
            3:doe.div({className:'key plus'},n=>{
                doe(n.style,{
                    width:'calc(16px * 1 * var(--scale))',
                    height:'calc(16px * 2 * var(--scale))',
                    left:   'calc(16px * 21.5 * var(--scale))',
                    bottom: 'calc(16px * 2 * var(--scale))',
                })
            },'+'),
        }
    }
}
export default createKeyNodes
