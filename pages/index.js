import Items from '../components/items';
const index = (props) => {
    return (
        <div>
            <Items page={parseFloat(props.query.page) || 1} />
        </div>
    )
}

export default index
