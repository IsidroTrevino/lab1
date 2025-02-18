import { heroes } from "./data/heroes"

const ImportJSON = () => {

    console.log(heroes);

  return (
    <div>
        <h3>Mis heroes favoritos son:</h3>
        {
            heroes.map((heroe, index) => {
                return <p key={index}>{heroe.name} de {heroe.owner}</p>
            })
        }

        <p>Pero mi favorito de todos es: <br />
            {
                heroes.find((heroe) => heroe.name === 'Batman').name
            }
        </p>
    </div>
  )
}

export default ImportJSON
