import doe from             '../lib/doe/main/doe.mjs'
import DecalarativeSet from '../lib/dt/main/dt/DecalarativeSet.js'
import Keyboard from        './Keyboard.js'
let style
doe.head(
    doe.style(`
        body{
            margin:0;
        }
        body>.main{
            overflow-y:auto;
            box-sizing:border-box;
            margin:0 auto;
            min-height:100vh;
            max-width:800px;
            padding:8px;
            background-color:#fff;
        }
        body>.main>.keyboard{
            margin:0 auto;
        }
    `),
    style=doe.style(),
)
let
    main,readme,
    current='ansiQwerty',
    s=new DecalarativeSet
doe.body(
    main=doe.div({className:'main'},
        doe.p('This program tests a keyboard and its environment.'),
        doe.p(
            doe.select(
                {oninput(){
console.log(current)
                    s.out(current)
                    s.in(current=this.value)
console.log(current)
                }},
                Object.entries(Keyboard.layout).map(([k,v])=>
                    doe.option({
                        value:k,
                    },v.name)
                )
            )
        ),
        readme=doe.p(
            doe.a({href:'https://anliting.com/keyboardTest'},'Readme'),
        ),
    ),
)
let kb
s.forEach={
    in(e){
        doe(style,Keyboard.layout[e].style)
        kb=new Keyboard(Keyboard.layout[e])
        main.insertBefore(kb.node,readme)
    },
    out(e){
        doe(style,{innerHTML:''})
        main.removeChild(kb.node)
    },
}
s.in(current)
onkeydown=e=>{
    e.preventDefault()
    e.stopPropagation()
    kb.keydown(e)
}
onkeyup=e=>{
    e.preventDefault()
    e.stopPropagation()
    kb.keyup(e)
}
/*
    The context menu is triggered even if all onkeydown are
    'preventDefault'ed. I don't know why.
*/
oncontextmenu=e=>{
    e.preventDefault()
    e.stopPropagation()
}
