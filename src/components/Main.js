require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ImgFigureComponent from './ImgFigureComponent'

//获取图片数据
let imageDatas = require('../data/imageDatas.json');
//自执行函数，转换成url
imageDatas = (function genImageURL(imageDatasArr) {

  for(let [index,singleImageData] of imageDatasArr.entries()){

    singleImageData.imageURL = require('../images/'+
        singleImageData.fileName);
    imageDatasArr[index]=singleImageData

  }
  return imageDatasArr;
})(imageDatas)



class AppComponent extends React.Component {



  render() {
    let controllerUnits=[],
        imgFigures = [];
    imageDatas.forEach((value)=>{
      imgFigures.push(<ImgFigureComponent data={value}/>);
    })
    return (
      <section className="stage">
        <section className='img-sec'>
          {imgFigures}
        </section>
        <nav className='controller-nav'>
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
