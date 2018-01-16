function lowerKey(k,l){
    let keys={
        '~':{0:'`'},
        '!':{0:'1'},
        '@':{0:'2'},
        '#':{0:'3'},
        '$':{0:'4'},
        '%':{0:'5'},
        '^':{0:'6'},
        '&':{0:'7'},
        '*':{0:'8'},
        '(':{0:'9'},
        ')':{0:'0'},
        '_':{0:'-'},
        '+':{0:'='},
        'Q':{0:'q'},
        'W':{0:'w'},
        'E':{0:'e'},
        'R':{0:'r'},
        'T':{0:'t'},
        'Y':{0:'y'},
        'U':{0:'u'},
        'I':{0:'i'},
        'O':{0:'o'},
        'P':{0:'p'},
        '{':{0:'['},
        '}':{0:']'},
        '|':{0:'\\'},
        'A':{0:'a'},
        'S':{0:'s'},
        'D':{0:'d'},
        'F':{0:'f'},
        'G':{0:'g'},
        'H':{0:'h'},
        'J':{0:'j'},
        'K':{0:'k'},
        'L':{0:'l'},
        ':':{0:';'},
        '"':{0:'\''},
        'Z':{0:'z'},
        'X':{0:'x'},
        'C':{0:'c'},
        'V':{0:'v'},
        'B':{0:'b'},
        'N':{0:'n'},
        'M':{0:'m'},
        '<':{0:','},
        '>':{0:'.'},
        '?':{0:'/'},
        'Home':                 {3:'7'},
        'ArrowUp':              {3:'8'},
        'PageUp':               {3:'9'},
        'ArrowLeft':            {3:'4'},
        'Clear':                {3:'5'},
        'ArrowRight':           {3:'6'},
        'End':                  {3:'1'},
        'ArrowDown':            {3:'2'},
        'PageDown':             {3:'3'},
        'Insert':               {3:'0'},
    }
    keys[String.fromCharCode(0)]={3:'.'}
    return keys[k]&&keys[k][l]||k
}
export default lowerKey
