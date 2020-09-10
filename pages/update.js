import UpdateItem from '../components/updateItem'
const Update = (props) => {
    return (
        <div>
            <UpdateItem id={props.query.id} />
        </div>
    )
}

export default Update
