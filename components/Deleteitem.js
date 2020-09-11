import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './items';

const DELETe_ITEM_MUTATION = gql`
    mutation DELETe_ITEM_MUTATION($id: ID!){
        deleteItem(
            id: $id
        ){
            id
        }
    }
`;


class Deleteitem extends Component {
    update = (cache, payload) => {
        //read all items in cache
        const data = cache.readQuery({ query: ALL_ITEMS_QUERY })
        //filter deleted item
        data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id)
        cache.writeQuery({ query: ALL_ITEMS_QUERY, data: data })
    }
    render() {
        return (
            <Mutation
                mutation={DELETe_ITEM_MUTATION}
                variables={{ id: this.props.id }}
                update={this.update}
            >
                {(deleteItem, { error }) => (
                    <button onClick={() => {
                        if (confirm('are you sure you want to delete')) {
                            deleteItem()
                        }
                    }}>
                        {this.props.children}
                    </button>
                )}
            </Mutation>

        )
    }
}

export default Deleteitem;