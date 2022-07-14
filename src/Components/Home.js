import React, { useEffect, useState } from 'react';
import "./Styles.css"

const Home=()=> {
  const [data , useData] = useState([])
    useEffect(()=>{
        const url = "https://reactblogbackend23.herokuapp.com/api/home";
        fetch(url).then(res => res.json())
        .then(useData)
        // .catch(err=>console.log(err))
    } , [])
  return (
    <>
    <div  className='boxy'>
      <img src=" https://chennaiprint.in/wp-content/uploads/2022/05/Vikram-Audio-Trailer-Release.jpg" alt={""} width="700px"  height="480px" />
      <span></span>
      <div className='box2'>
        <img src={"https://qph.fs.quoracdn.net/main-qimg-bfa9bbf14a4f404c4d6f5c26c4fe4a99-c"} alt={""} width="400px" height={"250px"} />
        <img src={" https://th.bing.com/th/id/OIP.b-10t5akOlGGO0pBQQnWpQAAAA?w=185&h=183&c=7&r=0&o=5&pid=1.7" } width="350px" height="200px" alt={""}/> 
      </div>
    </div>

    <h2 className='tit'>THE LATEST ARTICLE</h2>
      <div className='lin'></div>
      <div className='latest'></div>
      <div>
        {
            data.map((res)=>{
                return (
                  <div>
                    <div className='box1'> 
                    <div>
                      <img src={res.Image}  alt="" width="450px" height="200px" />
                    </div>  
                    <div>
                      <h5> { res.Title } </h5>
                      <p> {res.BlogContent} </p>
                    </div>
                  </div>        
                  <img src={"https://th.bing.com/th/id/OIP.5_rGNVqLF0Up2ykYxHD0VAHaF7?pid=ImgDet&rs=1"} width="200px" height="200px" alt="" />
                  </div>  
                )
            })
        }   
    </div>
    <h2 className='tit'>THE LATEST NEWS</h2>
      <div className='lin'></div>
      <div className='latest'></div>
      <div className='boxy'>
      <img src={ "https://qph.cf2.quoracdn.net/main-qimg-5896b467f11f67bc829abd4017205482-pjlq"} alt="" height="400px" width="550px"/>
      <img src= {"https://med.st-andrews.ac.uk/infection/wp-content/uploads/sites/8/2013/06/Untitled1.jpg"} alt="" width="550px"/>
    </div>
    {/* 
        {
            data.map((res)=>{
                return (
                  <div>
                    <div className='box1'> 
                    <div>
                      <img src={res.ImageAsset}  alt="" width="450px" height="200px" />
                    </div>  
                    <div>
                      <h5> {res.BlogCont} </h5>
                    </div>
                  </div>        
                
          <img src={"https://th.bing.com/th/id/OIP._9WXOes4d80ysQz90znniQHaJB?pid=ImgDet&rs=1"} width="300px" alt={""} height="200px"/>
        
                  </div>  
                )
            })
        }   
    </div> */}

    <h2 className='tit'>THE LATEST STORIES</h2>
      <div className='lin'></div>
      <div className='latest'></div>
    <div className='boxy'>
      <img src={ "https://www.tripsavvy.com/thmb/PAqt9lwla9-Zvj7E9LeAcwM8bJs=/4125x2856/filters:fill(auto,1)/KazanCathedral2-254d95159196474b82fa87f962687ec6.jpg"} alt="" width="385px"/>
      <img src= {"https://fthmb.tqn.com/oNaNMUMdTrpqlJ8uv1LD4tAgguM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/shore-temple-640319518-58e3eaf25f9b58ef7e113e1f.jpg"} alt="" width="360px"/>
      <img src={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShoWb4WDDvS4t6tZ13tOJ-zdnrJiIoB4yTswLx8gLjZTuYwPte"} alt="" width="330px" height="500px"  />
    </div>
    </>
  )
}
export default Home
