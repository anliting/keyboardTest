export default`
    .keyboard{
        --scale:2;
        overflow:auto;
        font-size:calc(6px * var(--scale));
    }
    .keyboard>.table{
        display:table;
    }
    .keyboard>.table>*{
        display:table-row;
    }
    .keyboard>.table>*>*{
        display:table-cell;
        vertical-align:top;
    }
    .keyboard>.table>*>:nth-child(2),.keyboard>.table>*>:nth-child(3){
        padding-left:calc(4px * var(--scale));
    }
    .keyboard>.table>:nth-child(1)>*{
        height:calc(16px * var(--scale));
    }
    .keyboard>.table>:nth-child(2)>*{
        padding-top:calc(4px * var(--scale));
        height:calc(88px * var(--scale));
    }
    .keyboard>.table>*>*>.row{
        height:calc(16px * var(--scale));
    }
    .keyboard>.table>*>*>.row>*{
        vertical-align:top;
    }
    .keyboard .key{
        display:inline-block;
        background-color:#fff;
        font-family:monospace;
        text-align:center;
        border:3px outset black;
        box-sizing:border-box;
    }
    .keyboard .key.keydown{
        background-color:#000;
        color:#fff;
    }
    .keyboard>.table>*>.function>.function>.key.f1{
        margin-left:calc(16px * var(--scale));
    }
    .keyboard>.table>*>.function>.function>.key.f5{
        margin-left:calc(16px * 0.5 * var(--scale));
    }
    .keyboard>.table>*>.function>.function>.key.f9{
        margin-left:calc(16px * 0.5 * var(--scale));
    }
    .keyboard .key.arrowUp{
        margin-left:calc(16px * var(--scale));
    }
    .keyboard .numpad>*{
        position:relative;
    }
    .keyboard .numpad>*>*{
        position:absolute;
    }
    .keyboard .numpad>*>.key.numLock{
        top:0;
        left:0;
    }
    .keyboard .numpad>*>.key.slash{
        top:0;
        left:calc(16px * var(--scale));
    }
    .keyboard .numpad>*>.key.asterisk{
        top:0;
        left:calc(32px * var(--scale));
    }
    .keyboard .numpad>*>.key.minus{
        top:0;
        left:calc(48px * var(--scale));
    }
    .keyboard .numpad>*>.key.num7{
        top:calc(16px * var(--scale));
        left:0;
    }
    .keyboard .numpad>*>.key.num8{
        top:calc(16px * var(--scale));
        left:calc(16px * var(--scale));
    }
    .keyboard .numpad>*>.key.num9{
        top:calc(16px * var(--scale));
        left:calc(32px * var(--scale));
    }
    .keyboard .numpad>*>.key.plus{
        top:calc(16px * var(--scale));
        left:calc(48px * var(--scale));
    }
    .keyboard .numpad>*>.key.num4{
        top:calc(32px * var(--scale));
        left:0;
    }
    .keyboard .numpad>*>.key.num5{
        top:calc(32px * var(--scale));
        left:calc(16px * var(--scale));
    }
    .keyboard .numpad>*>.key.num6{
        top:calc(32px * var(--scale));
        left:calc(32px * var(--scale));
    }
    .keyboard .numpad>*>.key.num1{
        top:calc(48px * var(--scale));
        left:0;
    }
    .keyboard .numpad>*>.key.num2{
        top:calc(48px * var(--scale));
        left:calc(16px * var(--scale));
    }
    .keyboard .numpad>*>.key.num3{
        top:calc(48px * var(--scale));
        left:calc(32px * var(--scale));
    }
    .keyboard .numpad>*>.key.enter{
        top:calc(48px * var(--scale));
        left:calc(48px * var(--scale));
    }
    .keyboard .numpad>*>.key.num0{
        top:calc(64px * var(--scale));
        left:0;
    }
    .keyboard .numpad>*>.key.fullStop{
        top:calc(64px * var(--scale));
        left:calc(32px * var(--scale));
    }
`
