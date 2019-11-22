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
        border-width:
            calc(1px * var(--scale))
            calc(2px * var(--scale))
            calc(3px * var(--scale))
        ;
        border-top-color:#aaa;
        border-left-color:#aaa;
        border-right-color:#666;
        border-bottom-color:#666;
        box-sizing:border-box;
    }
    .keyboard .key.keydown{
        background-color:#888;
        color:#fff;
    }
`
