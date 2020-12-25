import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component
    // componentWillUpdate() {
    //     console.log("OrderSummary Will Update")
    // }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span stlye={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        )
        })
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
}
//  = (props) => {
//     const ingredientSummary = Object.keys(props.ingredients)
//     .map(igKey => {
//     return (
//         <li key={igKey}>
//             <span stlye={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
//         </li>
//     )
//     })


//     return (
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious burger with the following ingredients</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//     <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
//             <p>Continue to Checkout?</p>
//             <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
//             <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
//         </Aux>
//     )
// };

export default OrderSummary;