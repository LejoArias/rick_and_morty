import {Link} from 'react-router-dom';

export default function Character({character}){
     return(
        
        <section className="text-center p-5"> 
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
        <p className={character.status.toLowerCase()}>{character.status}</p>
        <p>{character.gender}</p>
        <p>{character.species}</p>
        
     </section>
    )

}