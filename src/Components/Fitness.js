import React, { useEffect, useState } from 'react';
import "./Styles.css";

const Fitness=()=>{
  const [data , useData] = useState([])
    useEffect(()=>{
        const url = "https://reactblogbackend23.herokuapp.com/api/fitness";
        fetch(url).then(res => res.json())
        .then(useData)
        .catch(err=>console.log(err))
    } , [])
  return (
    <>
         <div className='tit'><h1>----------FITNESS---------</h1></div>
         <div className='box4'>
    <div className='blog'>
        {
            data.map((res)=>{
                return (
                    <div className='box3'>
                        <div > <img src={res.ImageAsset} alt=""  width="300" height="200px" /> </div>
                        <div> 
                            <h4> {res.Title} </h4>    
                            <p> {res.PublishedDate} </p>  
                            <p> {res.Likes} </p> 
                            <p> {res.BlogContent} </p>
                        </div>
                    </div>
                )
            })
        }
         </div>
       <div className='side'>
       <div className='tit'><h1>---TOP POST----</h1></div>
       <div> <img src={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"} alt={""} width="300px" height={"200px"}  /> </div>
       <div> <img src={"https://www.fashionbeans.com/wp-content/uploads/2019/05/foodtrends-1.jpg"}alt={""} height={"200px"}  /> </div>
       <div> <img src={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/03/active-open-chest-stretch-1296x728-header.jpg?w=1575"} width="300px" alt={""} height={"200px"} /> </div> 
       <div><img src={"https://th.bing.com/th/id/OIP.5_rGNVqLF0Up2ykYxHD0VAHaF7?pid=ImgDet&rs=1"} alt={""} height={"200px"}  width="300px"  /></div>
       <div> <img src={ "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png"} alt={""} height={"200px"}  width="300px"   /> </div>
         <div>
          <img src={"https://th.bing.com/th/id/OIP._9WXOes4d80ysQz90znniQHaJB?pid=ImgDet&rs=1"} width="300px" alt={""} height="200px"/>
         </div>
       </div>
    </div>
   
    </>
  )
}
export default Fitness
