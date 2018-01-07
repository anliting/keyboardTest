import{dom}from 'https://gitcdn.link/cdn/anliting/simple.js/55124630741399dd0fcbee2f0396642a428cdd24/src/simple.static.js'
import style from './Keyboard/style.js'
import createKeyNodes from './Keyboard/createKeyNodes.js'
import lowerKey from './Keyboard/lowerKey.js'
import createNode from './Keyboard/createNode.js'
function Keyboard(){
    this._keyNodes=createKeyNodes()
    this.node=createNode(this._keyNodes)
}
Keyboard.prototype._key=function(){
    let now=new Date
    /*if(this._lastKey)
        console.log(now-this._lastKey)*/
    this._lastKey=now
}
Keyboard.prototype.keydown=function(e){
    this._key()
    let key=lowerKey(e.key,e.location)
    if(this._keyNodes[key]&&this._keyNodes[key][e.location])
        this._keyNodes[key][e.location].classList.add('keydown')
    console.log(key,e.location)
}
Keyboard.prototype.keyup=function(e){
    this._key()
    let key=lowerKey(e.key,e.location)
    if(this._keyNodes[key]&&this._keyNodes[key][e.location])
        this._keyNodes[key][e.location].classList.remove('keydown')
}
Keyboard.style=style
export default Keyboard
