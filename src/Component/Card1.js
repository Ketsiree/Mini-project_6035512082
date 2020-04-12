import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Card,CardGroup,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
//import { Card } from 'react-bootstrap';
import './Card1.css';

const Card1 = () => {
  return (
      <div>
          <CardGroup style={{ margin: 5, padding: 5}}>

          <Card  style={{ margin: 10, padding: 10}}>
              <CardImg top width="100%" src="" style={{}} />
              <CardBody> 
                  <CardTitle>
                      <h4>Lemon Tea</h4>
                      </CardTitle>
                  <CardText>LemonTea</CardText>
              </CardBody>
          </Card>
          <Card  style={{ margin: 10, padding: 10}}>
              <CardImg top width="100%" src="" style={{}} />
              <CardBody>
                  <CardTitle>
                      <h4>Thai Tea</h4>
                      </CardTitle>
                  <CardText>Thai tea</CardText>
                
              </CardBody>
          </Card>
          <Card  style={{ margin: 10, padding: 10}}>
              <CardImg top width="100%" src="" style={{}} />
              <CardBody>
                  <CardTitle><h4>Soda</h4></CardTitle>
                  <CardText>Soda</CardText>
              </CardBody>
          </Card>
      </CardGroup>
          </div>
 
  );
};

export default Card1;





// import 'tachyons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import {Card,CardGroup} from 'reactstrap';
// // import { Button } from 'react-bootstrap';
// import './Card1.css';

// const Card1 = () => {

//     return(

//         <CardGroup>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This content is a little bit longer.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to additional
//               content.{' '}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This card has even longer content than the first to
//               show that equal height action.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>

//       //   <Card style={{ width: '18rem' }}>
//       //   <Card.Img variant="top" src="https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg" />
//       //   <Card.Body>
//       //     <Card.Title>Card Title</Card.Title>
//       //     <Card.Text>
//       //       Some quick example text to build on the card title and make up the bulk of
//       //       the card's content.
//       //     </Card.Text>
//       //   </Card.Body>
//       // </Card>



//             // <div className="bg-light-red dib br3 ma2 grow bw2 shadow-5">
//             //     <img alt="lemon-tea" src="https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg" />
            
//             // <div className="myStyle2">
//             //     <h2>Lemon Tea</h2>
//             //     <p2>50 Bath</p2>
//             // </div>
//             // </div>
            
//     );

// }
// export default Card1;