import React from 'react'
import billboard from '../images/billboard.jpg'
import {Card,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'
function Home() {
  return (
    <div className='container'>
      <div data-purpose="billboard" classNameName="w-100">

        <div className="text-center">
          <img  className='w-100' src={billboard} /></div>
           <div className='row'>
             <div className='col-sm-1'></div>
          <div className="col-sm-11">
            <h1  className="font-head">Learning that gets you</h1>
            <p className='font-head-txt'> Skills for your present (and your future). Get started with us.</p>
            
            </div>
            
          </div>
          </div>
         
     <h1 className='mt-5 mb-4'>What to learn next</h1>

     <h3 className='ms-3'>Recommended for you</h3>





        <Carousel interval={3000} className='mt-3'>

              <Carousel.Item>


              <div className='row justify-content-between m-2'>

<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>



</div>

              </Carousel.Item>
                   
              <Carousel.Item>


<div className='row justify-content-between m-2'>

<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>



</div>

</Carousel.Item>



<Carousel.Item>


<div className='row justify-content-between m-2'>

<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>
<div className='col-sm-3'>
<Card style={{ }}>
   <Card.Img variant="top" src="https://www.webhopersaustralia.com/wp-content/uploads/2021/06/web-design-agencies-sydney.png" />
     <Card.Body>
         <Card.Title className=''>Front End Web Development Ultimate Course 2022</Card.Title>
           <Card.Text>
              <p style={{fontSize:'12px'}}>Learn Tech Plus</p>
           <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(119) </p>
            
           </Card.Text>
            <h4 className=''><FontAwesomeIcon icon={faIndianRupeeSign} />509 <span style={{textDecoration:'line-through' ,fontSize:'13px'}} className='ms-3 my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /> 3,499</span> </h4>
      </Card.Body>
</Card>
</div>



</div>

</Carousel.Item>






        </Carousel>

          
     <div className=''>


     </div>


    </div>
  )
}

export default Home