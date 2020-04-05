import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
// asi se hace un nuevo componente y el nombre del componente es menu
class Menu extends Component {
    //siempre que hagamos un componente tiene que ir este super props
    constructor(props) {
        super(props);
        //define propiedades que voy a poder usar en este componente
        this.state = {
            selectedDish: null
        };
            console.log('Menu Component constructor is invoked');
    }
    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    }

    onDishSelect(dish) {
            this.setState({selectedDish: dish})
        }
    renderDish(dish){
        if(dish!=null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div>

                </div>
            );
        }
    }
    //este render devuelve el view del componente
    //para cada dish devuelve este layout, cada vez que hacemos una lista en react necesitamos un key, para que los reconozca mejor los elementos
    render() {
            const menu = this.props.dishes.map((dish) => {
                return(
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.onDishSelect(dish)}>
                                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                        </Card>
                    </div>
                )
            });
        console.log('Menu Component render is invoked');
            return (
                <div className="container">
                    <div className="row">
                            {menu}
                    </div>
                    <div className="row">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>

            );
    }
}

// no hay que olvidarnos de exportar el componente, para tenerlo a mano cunado lo querramos usar
export default Menu;