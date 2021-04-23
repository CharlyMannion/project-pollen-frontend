import React, { Component } from 'react'

export class DonationButtons extends Component {

    render() {
        const donationItems = [{tag: 1, value:3.8}, {tag: 5, value:14.4}, {tag: 10, value:24.9}, {tag: 20, value:35.6}, {tag: 50, value:46.2}];

        const items = []

        for (const [index, donationItem] of donationItems.entries()) {
            items.push(<button value ={donationItem.value}
                               className={this.props.donation == donationItem.value? "donation-button-highlighted": "donation-button"} 
                               onClick={this.props.handleClick}> 
                               £{donationItem.tag}
                               </button>)
        }
        return (
            <div className= "donation-buttons">
                {items}
            </div>
        )
    }
}

export default DonationButtons
