
import { Card } from '../card/card.component';


export const CardList = (props) => {

  return (
    <div className="row">
      {
        props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}></Card>
        ))
      }
    </div>
  )
}


