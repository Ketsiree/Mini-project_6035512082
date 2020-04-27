import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './Card2.css';


const Card2 = () => {
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
            </style>
            <div className="myStyleDes">
                <br />
            <h1>Welcome to Rendezvous Cafe</h1>
            <br />
            <h2>Beverage and Dessert</h2>
            <br />
            </div>

        <div>
            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmarquee_large_2x%2Fpublic%2F1558554613%2Ffrench-toast-recipe.jpg%3Fitok%3DUfwyfbZ4" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>French Toast</h4></CardTitle>
                        <CardText>A milk soaked bread was slowly grilled with butter.Drenching by a smooth maple syrup and topping with fruits.</CardText>
                        <div ALIGN="RIGHT"><CardText>100 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://static.wixstatic.com/media/8977f5_e16040a8e726dc083842b302b79ed845.jpg/v1/fill/w_784,h_523,al_c,q_90,usm_0.66_1.00_0.01/8977f5_e16040a8e726dc083842b302b79ed845.webp" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Honey Toast</h4></CardTitle>
                        <CardText>Honey Toast serve with vanilla ice-cream, and toast drip in syrupy sweet honey.</CardText>
                        <div ALIGN="RIGHT"><CardText>120 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffe8bf" }}>
                    <CardImg top width="100%" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-cheese-horizontal-jpg-1522266016.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Grilled Cheese</h4></CardTitle>
                        <CardText>Grilled cheese is an our signature toast.</CardText>
                        <div ALIGN="RIGHT"><CardText>80 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#fcdee2"}}>
                    <CardImg top width="100%" src="https://i.ytimg.com/vi/Z1OLG7F3HD4/maxresdefault.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Brownies</h4></CardTitle>
                        <CardText>Brownies have a very dense and moist,more like fudge brownie,The full of chocolatey flavour with crispy edged touch.</CardText>
                        <div ALIGN="RIGHT"><CardText>90 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src="https://www.kingarthurflour.com/sites/default/files/recipe_legacy/1915-3-large.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Croissants</h4></CardTitle>
                        <CardText>Our gourmetier maded Croissants is known for its sensational scent and flavourful taste.</CardText>
                        <div ALIGN="RIGHT"><CardText>45 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#fff9c7"}}>
                    <CardImg top width="100%" src="https://images-gmi-pmc.edge-generalmills.com/00c7e766-089b-44ff-a9c2-2b74163c3e08.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Chocolate Cake</h4></CardTitle>
                        <CardText>Chocolate Cake filled with homemade Chocolate gananche,Frosted with chocolate buttercream.For chocolate LOVER!</CardText>
                        <div ALIGN="RIGHT"><CardText>80 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://images-gmi-pmc.edge-generalmills.com/c582c255-bf45-4b95-b392-ea7588099019.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Red Velvet Cake</h4></CardTitle>
                        <CardText>Moist and dense Red Velvet Cake with a light white chocolate flavour.Perfectly paired when filled with vanilla buttercream.</CardText>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://img.kapook.com/u/pirawan/Cooking1/magaron.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Macarons</h4></CardTitle>
                        <CardText>Our Macarons made with the finest gluten-free ingredients,no preservative added,perfect for your afternoon tea.</CardText>
                        <div ALIGN="RIGHT"><CardText>90 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#ffe8bf"}}>
                    <CardImg top width="100%" src="https://www.myjewishlearning.com/wp-content/uploads/2010/02/Coconut-Macaroons-Main-Image.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Macaroons</h4></CardTitle>
                        <CardText>Our Macaroons have a smooth ,crisp shell and a moist chewy interior.</CardText>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#fcdee2" }}>
                    <CardImg top width="100%" src="https://images-gmi-pmc.edge-generalmills.com/98b8f839-76c8-427f-854e-bc5d14795e9c.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Oatmeal Chocolate Chip Cookies</h4></CardTitle>
                        <CardText>Oatmeal Chocolate Chip Cookies have a soft and chewy,Perfectly spiced,dotted with silky chocolate and crunchy nuts.</CardText>
                        <div ALIGN="RIGHT"><CardText>35 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src="https://4.bp.blogspot.com/-7eN9Nt8j1Ys/VLibNCj6kNI/AAAAAAAAU0o/igeR-ARd3c8/w1200-h630-p-k-no-nu/Three%2Bway%2BChoux%2B1.jpg" style={{ width: 450, height: 250 }} />
                    {/* <CardImg top width="100%" src="https://lh3.googleusercontent.com/proxy/zKTMqYH3YGeOkz3lKvGUkrnPOB4Gpe1pYLk9GY2xzVua4K0r7L7gtoFRLnu2dNaw-cWg7V74NSxkcm3C9aQDXqSEiDscBwIPBROj9ayTfyjasEF5AYxceP-FmVc9zGZiYWuJrWao-xmv8tWAyqn9bT2x3Rj9ULNKEVge1X5ITEGYfYuvbTxl-HmjXnOCVg" style={{ width: 450, height: 250 }} /> */}
                    <CardBody>
                        <CardTitle><h4>Choux Cream</h4></CardTitle>
                        <CardText>Our Choux Cream was made from fine eggs whip together with pure ivory white sugar.</CardText>
                        <div ALIGN="RIGHT"><CardText>45 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10 ,backgroundColor:"#fff9c7"}}>
                    <CardImg top width="100%" src="https://media-cdn.tripadvisor.com/media/photo-s/19/4d/30/05/parisian-eclair-by-christophe.jpg" style={{ width: 450, height: 250 }} />
                    {/* <CardImg top width="100%" src="https://lh3.googleusercontent.com/proxy/TKj6pCZQvP3gAqox1wLHFvCLXpFqaXmIwGUxN2r7kqkyWfHrqyHyIIsRO8Aufvt3Uv_Abqf8kkrCG97AScaVksA8l5shx-vhacz6tDLukR3PrtSwAJJFIaykwIm7WYCqQBT0Pj9CnT2tXjECkQrwszXpOuBOac7G4eZMduRxSWiJohe-HH9_jX6KFyfewUa2R1xq9YZpaTIB-9H6QUL2amVAvIr0zpnzdhsjNhmah62bZyJ4WjCHK4vvZCFKEYMNZGBC1tXgNkYlkaXgXRR73pNsLJjslXGNtREtOUpCJCsIfTnj44EImEwMFpPdrHFC33gAVT4nq-omqWhm1urP4Xk" style={{ width: 450, height: 250 }} /> */}
                    <CardBody>
                        <CardTitle><h4>Eclair</h4></CardTitle>
                        <CardText>Eclair made with choux dough filled with cream and topping.</CardText>
                        <div ALIGN="RIGHT"><CardText>50 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://english.cdn.zeenews.com/sites/default/files/2014/12/18/304101-baked-spinach-with-cheese.jpg" style={{ width: 450, height: 250 }} />
                    {/* <CardImg top width="100%" src="https://lh3.googleusercontent.com/proxy/aq7LeILNU-d8lu6BmFasim5CpkjuSbvvov0AOoS-bPIggrEhxjsnRkldfqB_Sxtw5V5tvRAPqkbD4_6Rt1ZGg1rV0cy-xm2cR_N_DVvBLiCzj4vQGA" style={{ width: 450, height: 250 }} /> */}
                    <CardBody>
                        <CardTitle><h4>Baked Spinach & Cheese</h4></CardTitle>
                        <CardText>Baked Spinach & Cheese is Creamy but not to heavy,topped more cheese and bacon.</CardText>
                        <div ALIGN="RIGHT"><CardText>135 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://realfood.tesco.com/media/images/RFO-1400x919-Pesto-club-sandwich-49fdd81d-d37b-46f1-a998-0309a2345baf-0-1400x919.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Sandwich</h4></CardTitle>
                        <CardText>Our Sandwich have grilled chicken,bacon and fresh vegetables.</CardText>
                        <div ALIGN="RIGHT"><CardText>100 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffe8bf" }}>
                    <CardImg top width="100%" src="https://thenypost.files.wordpress.com/2018/08/istock-618214356.jpg?quality=80&strip=all" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>French fries</h4></CardTitle>
                        <CardText>French fries fried in oil.Springle with salt and serve with nice sovoury sauce.</CardText>
                        <div ALIGN="RIGHT"><CardText>75 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>
            </div>
        </div>

    );
}

export default Card2;





// import 'tachyons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import {Card,CardGroup} from 'reactstrap';
// import { Button } from 'react-bootstrap';
// import './Card1.css';

// const Card1 = () => {

//     return(

//     <div className="bg-light-red dib br3 ma2 grow bw2 shadow-5">
//     <img alt="lemon-tea" src="https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg" />

//     <div className="myStyle2">
//     <h2>Lemon Tea</h2>
//     <p2>50 Bath</p2>
//     </div>
//   </div>

//     );

// }
// export default Card1;