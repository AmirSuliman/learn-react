import { people } from "../../../data"

const List = () => {
  return (
    <div>{ people.map((person) => {
      return <div>
        <img src={person?.images?.[0]?.small?.url ?? "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} alt={person.name} style={{width: "50px"}} />
        <h3>{person.name}</h3>
      </div>
    }) }</div>
  )
}
export default List