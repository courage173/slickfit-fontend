import Updateitem from '../components/updateItem'
const Update = (props) => {
    return (
        <div>
            <Updateitem id={props.query.id} />
        </div>
    )
}

export default Update
