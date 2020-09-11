import Singleitem from '../components/Singleitem';
const Item = (props) => {
    return (
        <div>
            <Singleitem id={props.query.id} />
        </div>
    )
}

export default Item
