import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './Card1.css';

const Card1 = () => {
    return (
        <div>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://www.nespresso.com/ncp/resizer.php?width=1200&height=630&file=uploads%2Frecipes%2Fnespresso-recipes-Americano-by-Nespresso.jpg&token=3ea279dc5d5b0dd2e281af62f4267990" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Americano</h4></CardTitle>
                        <CardText>Americano</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://gather8.com/wp-content/uploads/2019/09/Espresso1.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Espresso</h4></CardTitle>
                        <CardText>Espresso</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffe8bf" }}>
                    <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/640px-Cappuccino_at_Sightglass_Coffee.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Cappuccino</h4></CardTitle>
                        <CardText>Cappuccino</CardText>
                    </CardBody>
                </Card>

            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#fcdee2"}}>
                    <CardImg top width="100%" src="https://cdn1.medicalnewstoday.com/content/images/articles/289/289891/coffee.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle>
                            <h4>Mocha</h4>
                        </CardTitle>
                        <CardText>Mocha</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src="https://image.dek-d.com/27/0482/6589/128944451" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle>
                            <h4>Latte</h4>
                        </CardTitle>
                        <CardText>Latte</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#fff9c7"}}>
                    <CardImg top width="100%" src="https://www.parisperfect.com/blog/wp-content/uploads/2017/11/Fotolia-Credit-NorGal.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Hot Chocolate</h4></CardTitle>
                        <CardText>Hot/Cold Chocolate</CardText>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://pixfeeds.com/images/drinks/tea/1280-463541757-iced-tea-and-lemon.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle>
                            <h4>Lemon Tea</h4>
                        </CardTitle>
                        <CardText>LemonTea</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://theitravelchannel.tv/wp-content/uploads/2017/07/Thai-Iced-Tea.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle>
                            <h4>Thai Tea</h4>
                        </CardTitle>
                        <CardText>Thai tea</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#ffe8bf"}}>
                    <CardImg top width="100%" src="https://whatsupdockth.com/wp-content/uploads/2019/08/ice-green-tea.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Green Tea</h4></CardTitle>
                        <CardText>Green Tea</CardText>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#fcdee2" }}>
                    <CardImg top width="100%" src="https://www.rd.com/wp-content/uploads/2017/10/04_Yogurt_Foods-High-In-Zinc-to-Beat-Cold-and-Flu-Viruses_691319338_Oksana-Mizina-1024x683.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle>
                            <h4>Strawberry Smoothies</h4>
                        </CardTitle>
                        <CardText>Strawberry Smoothies</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src="https://steemitimages.com/DQmbNtAtA39ZzXdUNd2xwKigFdU19d4BTEor5p6BLgrn2do/DSC_0788.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle>
                            <h4>Mixberry Smoothies</h4>
                        </CardTitle>
                        <CardText>Mixberry Smoothies</CardText>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10 ,backgroundColor:"#fff9c7"}}>
                    <CardImg top width="100%" src="https://i.ndtvimg.com/i/2016-04/fruit-smoothie-625_625x350_51460546648.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Kiwi Smoothies</h4></CardTitle>
                        <CardText>Kiwi Smoothies</CardText>
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