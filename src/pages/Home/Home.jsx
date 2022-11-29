import {useNavigate} from 'react-router-dom';
import './cssHome/Home.css'

export default function Home(){
        
    const navigate = useNavigate();
    const goCharacters = () =>{
      navigate('/CharacterList');
    }  
    return(
      <section className='notContainer'>
            <h1 className="title">RICK AND MORTY API</h1>
            <button onClick={goCharacters} type="button" class="btn btn-outline-warning" 
                >
              GO TO CHARACTER LIST</button>
            
       </section>
    )
}