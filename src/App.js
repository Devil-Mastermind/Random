import love from './images/love.png'
import emo from './images/emo.png'
import React from 'react';
// import heart from 'https://static.vecteezy.com/system/resources/previews/001/187/438/original/heart-png.png'

//1536  695

function App() {
  const heart = 'https://static.vecteezy.com/system/resources/previews/001/187/438/original/heart-png.png'

  const [img, setImg] = React.useState(heart)
  const [randomHeight, setRandomHeight] = React.useState(200)
  const [randomWidth, setRandomWidth] = React.useState(650)
  function handleNo() {
    // console.log("NO");
    setRandomHeight(Math.floor(Math.random()*400))
    setRandomWidth(Math.floor(Math.random()*1000))
    setImg(emo)
    console.log(randomHeight);
    console.log(randomWidth);

  }
  function handleYes() {
    console.log("YES");
    setImg(love)
  }
  const subStyle = {
    // bottom : `${randomHeight}vh`,
    // right : `${randomWidth}vw`
    // bottom : `${randomHeight}vh` ,
    // right : `${randomWidth}vw` ,
    marginTop : `${randomHeight}px`,
    marginLeft : `${randomWidth}px`
  }

  return (
    <div>
      <div className="container">
        <div className="sub-container" style={subStyle}>
          <div className="heading">
            Will You Marry Me?
          </div>
          <div className="photo">
            <img src={img} className='img' />
          </div>
          <div className="btn-cont">
            <div className="btn no" onMouseEnter={handleNo}>
              Noi
            </div>
            <div className="btn yes" onMouseEnter={handleYes}>
              Yeah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
