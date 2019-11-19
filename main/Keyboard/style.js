export default`
    .keyboard{
        font-size:calc(6px * var(--scale));
        position:relative;
    }
    .keyboard>.key{
        position:absolute;
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
        background-color:#888;
        color:#fff;
    }
`
