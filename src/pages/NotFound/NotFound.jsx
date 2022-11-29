import { Link } from 'react-router-dom';
import './cssNotFound/NotFound.css'

export default function NotFound(){
      return(
              <section className='notContainer'>
              <h1 class='message'>Not Found</h1>
              <Link to='/' class='link-warning'>VOLVER AL INICIO</Link>  
              
            
              </section>
          
        
        
      )

}