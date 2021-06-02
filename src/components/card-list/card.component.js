function Ccard(props) {
    return (
        <div >
           {props.monsters.map(monster => (

                <h1 key={monster.id}>{monster.name}</h1>
                

            ))}
        </div>
    );
}

export default cCard;