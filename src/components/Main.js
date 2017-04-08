require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom'

let imageDatas = [
  {
    'fileName': '1.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '2.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '3.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName': '4.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '5.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '6.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '7.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '8.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '9.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '10.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '11.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': '12.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '13.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '14.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '15.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': '16.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  }
];


// 获取图片数据，自执行函数将图片信息转化成图片完成的fileURl地址
imageDatas = (function getImageUrl(imageDataArr) {
  for (var singeImageData of imageDataArr) {
    singeImageData.imageURL = '../images/'+singeImageData.fileName;
  }
  return imageDataArr;
})(imageDatas)

class ImgFigure extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.refs.imgFigure0);
  }
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL}
          alt={this.props.data.title}
        />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  Constant: {
    centerPos: {
      left: 0,
      right: 0
    },
    hPosRange: {   // 水平方向的取值范围
      leftSecX: [0, 0],
      rightSecX: [0, 0],
      y: [0, 0]
    },
    vPosRange: {    // 垂直方向的取值范围
      x: [0, 0],
      topY: [0, 0]
    }
  }
  componentDidMount() {
    var stageDOM = this.refs.stage,
        stageW = stageDOM.scrollWidth,
        stageH = stageDOM.scrollHeight,
        halfStageW = Math.ceil(stageW / 2),
        halfStageH = Math.ceil(stageH / 2)

    var imgFigureDOM = this.refs.imgFigure0,
        imgW = imgFigureDOM.scrollWidth,
        imgH = imgFigureDOM.scrollHeight,
        halfImgW = Math.ceil(imgW / 2),
        halfImgH = Math.ceil(imgW / 2)

    console.log(imgH);
    this.Constant.centerPods = {
        left: halfStageW - halfImgW,
        top: halfStageH - halfImgH
    }

    this.Constant.hPosRange.leftSecx[0] = -halfImgW;
    this.Constant.hPosRange.leftSecx[1] = halfStageW - halfImgW * 3;
    this.Constant.hPosRange.rightSecx[0] = halfStageW - halfImgW;
    this.Constant.hPosRange.rightSecx[1] = stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfImgW - imgW;
    this.Constant.vPosRange.x[1] = halfImgW;
  }

  rearrange(centerIndex) {

  }

  render() {
    var controllerUnits = [];
    var imgFigures = [];

    imageDatas.forEach(function (value, index) {
      imgFigures.push(<ImgFigure key={index} data={value} ref={"imgFigure" + index} />);
    })

    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
