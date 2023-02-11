import React from 'react'
import { Link } from 'react-router-dom';
import { BiMessageRoundedDetail } from 'react-icons/bi'

// Import Css File
import './Home.css';

function Home() {
  return (
    <div className='homeContainer'>
      <div className="lowContainer">
        <div className="upper">
          <h1>Selling Your Products And Items</h1>
          <p>you can sell your items in here. 12000+ sellers rated Pasi Store the best place to sell online. <br />Sell with Coldwell Banker Real Estate and get amazing benefits<br /> like home improvements at no upfront cost and new technology to help find worthy buyers</p>
          <p>Safe,Friendly marketplace with no junk,less fees.</p>
          <Link to={'/Add'} className="a">
            <button>
            Let's Go
            </button>
          </Link>
        </div>
      </div>
      <div className="icon">
        <Link to={'/Chat'}>
          <BiMessageRoundedDetail className='msg' /> 
        </Link>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
        position:"absolute",
        bottom:0,
        zIndex:-10
      }}><path fill="#0099ff" fill-opacity="1" d="M0,128L21.8,144C43.6,160,87,192,131,170.7C174.5,149,218,75,262,58.7C305.5,43,349,85,393,96C436.4,107,480,85,524,112C567.3,139,611,213,655,250.7C698.2,288,742,288,785,282.7C829.1,277,873,267,916,229.3C960,192,1004,128,1047,128C1090.9,128,1135,192,1178,192C1221.8,192,1265,128,1309,112C1352.7,96,1396,128,1418,144L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
    </div>
  )
}

export default Home
