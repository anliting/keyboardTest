import style from           './Keyboard/style.js'
import createKeyNodes from  './Keyboard/createKeyNodes.js'
import lowerKey from        './Keyboard/lowerKey.js'
import createNode from      './Keyboard/createNode.js'
function Keyboard(){
    this._keyNodes=createKeyNodes()
    this.node=createNode(this._keyNodes)
}
Keyboard.prototype._key=function(s){
    //console.log(performance.now(),s)
}
Keyboard.prototype.keydown=function(e){
    this._key(`keydown ${e.key} ${e.location}`)
    let key=lowerKey(e.key,e.location)
    if(this._keyNodes[key]&&this._keyNodes[key][e.location])
        this._keyNodes[key][e.location].classList.add('keydown')
}
Keyboard.prototype.keyup=function(e){
    this._key(`keyup ${e.key} ${e.location}`)
    let key=lowerKey(e.key,e.location)
    if(this._keyNodes[key]&&this._keyNodes[key][e.location])
        this._keyNodes[key][e.location].classList.remove('keydown')
}
Keyboard.style=style
export default Keyboard
