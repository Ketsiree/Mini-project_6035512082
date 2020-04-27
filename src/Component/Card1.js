import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './Card1.css';


const Card1 = () => {
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <div className="myStyleBev">
                <br />
            <h1>Welcome to Rendezvous Cafe</h1>
            <br />
            <h2>Beverage and Dessert</h2>
                <br />
            </div>
            
        <div>
            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://www.nespresso.com/ncp/resizer.php?width=1200&height=630&file=uploads%2Frecipes%2Fnespresso-recipes-Americano-by-Nespresso.jpg&token=3ea279dc5d5b0dd2e281af62f4267990" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Americano</h4></CardTitle>
                        <CardText>Although the Americano is created with espresso, don't expect it to taste exactly like one. Because of the fact that it is diluted with water, it loses some of the kick of espresso and instead tastes more like a richer, bolder cousin of the black coffee.</CardText>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://gather8.com/wp-content/uploads/2019/09/Espresso1.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Espresso</h4></CardTitle>
                        <CardText>Espresso should be bitter, but not too bitter (high levels of bitterness are more characteristic of espresso long shots). It should be rich, but not too rich. It should NOT be sour.</CardText>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffe8bf" }}>
                    <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/640px-Cappuccino_at_Sightglass_Coffee.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Cappuccino</h4></CardTitle>
                        <CardText>A well-made cappuccino has incredible flavor and texture. It has a bold coffee taste and some sweetness from the naturally occurring lactose sugar in milk. It may also be flavored with sugar, with flavored simple syrups, and other additives. </CardText>
                        <div ALIGN="RIGHT"><CardText>100 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#fcdee2"}}>
                    <CardImg top width="100%" src="https://cdn1.medicalnewstoday.com/content/images/articles/289/289891/coffee.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Mocha</h4></CardTitle>
                        <CardText>The flavor Mocha is basically a chocolate taste mixed with a coffee taste. It is not to be confused with the Mocha Coffee Bean which comes from Yemen, named after the place it came from (Mocha, Yemen).</CardText>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src="https://image.dek-d.com/27/0482/6589/128944451" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Latte</h4></CardTitle>
                        <CardText>Latte are also milder, and this is more so when compared to other espresso-based beverages like cappuccino. Its milder flavor comes from the presence of a lot of steamed milk. But, despite being almost sweet, it still has a stronger espresso taste than mocha.</CardText>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#fff9c7"}}>
                    <CardImg top width="100%" src="https://www.parisperfect.com/blog/wp-content/uploads/2017/11/Fotolia-Credit-NorGal.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Hot Chocolate</h4></CardTitle>
                        <CardText>Hot/Cold Chocolate is made from melted chocolate and milk, which includes both cocoa solids and cocoa butter. Hot chocolate has a richer taste and texture. Depending on the ratio of milk and cream, hot chocolate can be thick like softly whipped cream.</CardText>
                        <div ALIGN="RIGHT"><CardText>90 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://pixfeeds.com/images/drinks/tea/1280-463541757-iced-tea-and-lemon.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Lemon Tea</h4></CardTitle>
                        <CardText>LemonTea contains hot tea with roasted cumin seed powder, lemon juice, black salt and sugar, which gives it a tangy, spicy taste,The addition of lemon juice not only makes its colour more pronounced, but also improves its taste.</CardText>
                        <div ALIGN="RIGHT"><CardText>65 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://theitravelchannel.tv/wp-content/uploads/2017/07/Thai-Iced-Tea.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Thai Tea</h4></CardTitle>
                        <CardText>Thai tea is Thai iced tea recipe is better than stall bought. The taste is balanced between the sweetness, creaminess and the boldness of Thai tea.</CardText>
                        <div ALIGN="RIGHT"><CardText>65 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#ffe8bf"}}>
                    <CardImg top width="100%" src="https://whatsupdockth.com/wp-content/uploads/2019/08/ice-green-tea.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Green Tea</h4></CardTitle>
                        <CardText>Green Tea include: sweet, bittersweet, nutty, vegetal, buttery, floral, swampy, fruity, and oceanic. Steamed green teas tend to taste bittersweet (especially in the aftertaste), while other green teas tend to taste sweet.</CardText>
                        <div ALIGN="RIGHT"><CardText>65 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#fcdee2" }}>
                    <CardImg top width="100%" src="https://www.rd.com/wp-content/uploads/2017/10/04_Yogurt_Foods-High-In-Zinc-to-Beat-Cold-and-Flu-Viruses_691319338_Oksana-Mizina-1024x683.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Strawberry Smoothies</h4></CardTitle>
                        <CardText>We place strawberries, frozen yoghurt and milk in a blender. Blend until smooth and frothy. Pour into glasses and serve.Strawberry Smoothies make your feel happy all day.</CardText>
                        <div ALIGN="RIGHT"><CardText>85 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10, backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src="https://steemitimages.com/DQmbNtAtA39ZzXdUNd2xwKigFdU19d4BTEor5p6BLgrn2do/DSC_0788.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Mixberry Smoothies</h4></CardTitle>
                        <CardText>Mixberry Smoothies.It’s fruity and flavorful, with tons of healthy vitamins and minerals to help to you fight off whatever’s got you feeling run down.</CardText>
                        <div ALIGN="RIGHT"><CardText>85 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10 ,backgroundColor:"#fff9c7"}}>
                    <CardImg top width="100%" src="https://i.ndtvimg.com/i/2016-04/fruit-smoothie-625_625x350_51460546648.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Kiwi Smoothies</h4></CardTitle>
                        <CardText>Kiwi Smoothies have a little bit sour, sweet and makes your feels fresh.</CardText>
                        <div ALIGN="RIGHT"><CardText>85 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src="https://www.thetaylor-house.com/wp-content/uploads/2016/03/Strawberry-Italian-Soda-11-1024x682.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Strawberry Soda</h4></CardTitle>
                        <CardText>Strawberry Soda is rich, refreshing, and made from only carbonated water, simple syrup and possibly cream.</CardText>
                        <div ALIGN="RIGHT"><CardText>70 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src="https://www.loveandoliveoil.com/wp-content/uploads/2016/07/blueberry-syrupH-1200x550.jpg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Blueberry Soda</h4></CardTitle>
                        <CardText>Blueberry Soda is tart and tangy and vibrantly magenta. Mix it with club soda or ginger beer for a fun and fuchsia blueberry soda. Add some booze (might I suggest gin or vodka?) for even more fun.</CardText>
                        <div ALIGN="RIGHT"><CardText>70 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffe8bf" }}>
                    <CardImg top width="100%" src="https://lh6.googleusercontent.com/proxy/bNmptG7xHiiJg1ASsR9_i2basL-BcpFl75igj6IPx7uITXKX45cLs_qusKhYU_ALXfECyFWwy7-1jI-JvpmYtXHU2T_ulxcSwDldrcjWvKmOEbUZWg" style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Kiwi Soda</h4></CardTitle>
                        <CardText>Kiwi Soda is a refreshing mix of kiwi purée, lime juice, and sparkling water.</CardText>
                        <div ALIGN="RIGHT"><CardText>70 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>
            </div>
        </div>

    );
}

export default Card1;