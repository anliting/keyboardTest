import lowerKey from'./Keyboard/lowerKey.js'
import layout from  './Keyboard/layout.mjs'
function Keyboard(layout){
    this._keyNodes=layout.createKeyNodes()
    this.node=layout.createNode(this._keyNodes)
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
Keyboard.layout=layout
export default Keyboard
