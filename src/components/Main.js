require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageData = require('../data/imageData.json');

// 获取图片数据，自执行函数将图片信息转化成图片完成的fileURl地址
imageData = (function genImageURL(imageDataArr) {
  for (var i = 0; i < imageDataArr.length; i++) {
    var singleImageData = imageData[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName)
    imageDataArr[i] = singleImageData;
  }
})(imageData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
