

export const Card = (props) => {

    return (
        <div>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h2>{props.monster.name}</h2>
        </div>

    )


}