import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTage from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import Deleteitem from './Deleteitem';

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    }

    render() {
        const { item } = this.props
        return (
            <ItemStyles>
                {item.image && <img src={item.image} alt={item.title} />}
                <Title>
                    <Link href={{
                        pathname: '/item',
                        query: { id: item.id }
                    }}>
                        <a>{item.title}</a>
                    </Link>
                </Title>
                <PriceTage>
                    {formatMoney(item.price)}
                </PriceTage>
                <p>{item.description}</p>
                <div className="buttonList">
                    <Link href={{
                        pathname: '/update',
                        query: { id: item.id }
                    }}>
                        <a>Edit</a>
                    </Link>
                    <button>Add To Cart</button>
                    <Deleteitem id={item.id}>Delete Item</Deleteitem>
                </div>
            </ItemStyles>
        )
    }
}
