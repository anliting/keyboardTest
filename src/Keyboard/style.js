export default`
    .keyboard{
        --scale:2;
        overflow:auto;
        width:calc(422px * var(--scale));
        background-color:#ddd;
        font-size:calc(8px * var(--scale));
    }
    .keyboard>.table{
        display:table;
        margin:calc(8px * var(--scale));
    }
    .keyboard>.table>*{
        display:table-row;
    }
    .keyboard>.table>*>*{
        display:table-cell;
    }
    .keyboard>.table>*>:nth-child(2),.keyboard>.table>*>:nth-child(3){
        padding-left:calc(8px * var(--scale));
    }
    .keyboard>.table>:nth-child(1)>*{
        height:calc(16px * var(--scale));
    }
    .keyboard>.table>:nth-child(2)>*{
        padding-top:calc(8px * var(--scale));
        height:calc(88px * var(--scale));
    }
    .keyboard>.table>*>*>.row{
        height:calc(18px * var(--scale));
    }
    .keyboard .key{
        display:inline-block;
        border-radius:1px;
        width:calc(16px * var(--scale));
        height:calc(16px * var(--scale));
        background-color:#fff;
        font-family:monospace;
        text-align:center;
    }
    .keyboard .key.keydown{
        background-color:#000;
        color:#fff;
    }
    .keyboard .key.wide125{
        width:calc(20px * var(--scale));
    }
    .keyboard .key+.key{
        margin-left:calc(2px * var(--scale));
    }
    .keyboard .key.f1{
        margin-left:calc(20px * var(--scale));
    }
    .keyboard .key.f5{
        margin-left:calc(12px * var(--scale));
    }
    .keyboard .key.f9{
        margin-left:calc(10px * var(--scale));
    }
    .keyboard .key.backspace{
        width:calc(34px * var(--scale));
    }
    .keyboard .key.tab{
        width:calc(25px * var(--scale));
    }
    .keyboard .key.backslash{
        width:calc(25px * var(--scale));
    }
    .keyboard .key.capsLock{
        width:calc(29px * var(--scale));
    }
    .keyboard .key.enter{
        width:calc(39px * var(--scale));
    }
    .keyboard .key.shift0{
        width:calc(39px * var(--scale));
    }
    .keyboard .key.shift1{
        width:calc(47px * var(--scale));
    }
    .keyboard .key.space{
        width:calc(114px * var(--scale));
    }
    .keyboard .key.arrowUp{
        margin-left:calc(18px * var(--scale));
    }
`
