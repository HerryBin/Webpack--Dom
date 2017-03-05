import layer from './components/layer/layer.js';
import './css/common.css';
var layerInstance=new layer();

const App = function () {

    var dom=document.getElementById('app');
    //var layer=new layer();

   //dom.innerHTML=layerInstance.tpl; // 普通HTML文件
   dom.innerHTML=layerInstance.tpl;
}

new App();