import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './HomeStyle.css';
function ProductPage(){


  let [result, setResult] = useState();
  const loadData = async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setResult(response.data)
    console.log(result)
    
  }

  useEffect(() =>{
    loadData();
    },[]);

    return(
      <>
        <div  style={{background:'beige',backgroundRepeat:'repeat',width:'100%',height:'100%'}}>
            <div style={{backgroundImage:'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2ojE5xTtdPOBHdWbycO-PqbYSqaMfH_HOA&s)',backgroundAttachment:'fixed',
              backgroundRepeat:'no-repeat',backgroundSize:'cover'
            }}>
  <div style={{ height: '125px' }} />
  <div style={{ height: "100%", width: "100%" }}>
    <h2
        style={{
          margin: '20px',
          fontFamily: "alergian,cursive",
          textAlign:'center',
          fontSize: '52px',
          paddingTop: '5px',
          paddingLeft: '5px',
          color:'#B76E79',
          fontWeight:"170px"
        }}
      >
        'Browse And Find Your Needs'
      </h2>
    <div
    style={{
        display:'grid',
        
        gridTemplateColumns:'repeat(3,1fr)',
        gap:'10px',
        border:'4px solid #ffffff',
        borderRadius:'4px',
        justifyContent:'space-between',
        alignItems:'space=between',
        padding:'10px',
        paddingBottom:'20px',
        paddingTop:'20px',
    }}
      
      >

        {
          result?.map((product) => (
            <div style={{border:'6px solid pink ',
              borderRadius:'7px',
              boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
                padding:'40px',
                transform:'translateY(-5px)',
                transition:'transform 0.3s,box-shadow(0.3s)'
            }}>
              <img src={product.image} alt="product image" style={{
                objectPosition:'center',
                width:'300px',
                height:'300px',
                border:'1px solid black ',
                borderRadius: '12px'}}/>
              <h2 style={{fontFamily:'consolas,monaco,monospace'}}>{product.title}</h2>
              <h2>${product.price}</h2>
              <span style={{fontWeight:"2000px",color:"rgba(92,"}}> 
                {product.description}
                </span>
              <h3 style={{fontFamily:'serif',fontWeight:"20px"}}>{product.rating.rate} Stars</h3>
              <h3>{product.rating.count} Responses</h3>
             </div>
         ))
        }

    </div>
  </div>
</div>

        </div >
        <div style={{display:'flex',
          justifyContent:'space-between'
          ,alignItems:'center',paddingLeft:'10px'
          ,paddingRight:'10px'
        }}>
    <h1 style={{color:'red',fontSize:'14px',display:'flex'}}>@NoCopyRightsReserved</h1>  
    <h1 style={{color:'red',fontSize:'14px'}}>By:SnehaPradeep</h1>  
    </div>
        </>
    )
}

export default ProductPage;