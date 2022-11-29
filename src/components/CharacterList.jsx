      import { useState, useEffect } from "react";
      import Character from "../components/Character";
      import '../css/CharacterList.css';

      function buttonPrevius(props) {
            if (props.page > 1) {
                  props.setpage(props.page - 1)
            }
            else {
                  alert('No hay pagina anterior')
            }
      }

      function NavPage(props) {
            return (
                  <header className='d-flex justify-content-around'>
                        <button class="btn btn-outline-primary"
                              onClick={() =>
                                    buttonPrevius(props)
                              }
                        >
                              Anterior
                        </button>
                        <p className='Page'>Page: {props.page}</p>
                        <button class="btn btn-outline-primary"
                              onClick={() =>
                                    props.setpage(props.page + 1)}
                        >
                              Siguiente
                        </button>
                  </header>

            )
      }

      function CharacterList() {

            const [characters, setCharacter] = useState([]);
            const [page, setPage] = useState(1);

            useEffect(() => {
                  const fetchData = async () => {
                        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
                        const data = await response.json();
                        setCharacter(data.results);

                  }
                  fetchData();
            }, [page]);
            return (
                  < section className="bg-dark text-white">
                        <h1 className='text-center display-4 py-4'>Rick and Morty</h1>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Alive</option>
                        <option value="2">Dead</option>
                        <option value="3">Unknown</option>
                        </select>
                        <NavPage page={page} setpage={setPage} />
                        <div className="row">
                              {characters.map(characters => { 
                                    return (
                                          <div className='col-md-4' key={characters.id}>
                                                <Character key={characters.id} character={characters} />
                                          </div>

                                    );
                              })}
                        </div>
                  </section>
            );
      }
      export default CharacterList