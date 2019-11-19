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
        border-style:solid;
        border-width:calc(1.5px * var(--scale));
        border-top-color:#aaa;
        border-left-color:#aaa;
        border-right-color:#444;
        border-bottom-color:#444;
        box-sizing:border-box;
    }
    .keyboard .key.keydown{
        background-color:#888;
        color:#fff;
    }
`
