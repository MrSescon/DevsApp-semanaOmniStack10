import React, { useState, useEffect } from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

//Componente: Bloco Isolado da HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente(Lembrar: imutabilidade)



function App() {

  const [ githubUserName, setGithubUserName] = useState('');
  const [ techs, setTechs] = useState('');
  
  const [ latitude, setLatitude] = useState('');
  const [ longitude, setLongitude] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {

      },
      {
        timeout: 30000,
      }
    );
  },[]);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required 
            value={githubUserName}
            onChange={e=> setGithubUserName(e.target.value)}/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required 
            value="techs"
            onChange={e=> setTechs(e.target.value)}/>
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
            </div>

          </div>

        <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li classname="dev-item">
            <header>
              <img src="" alt="imagem de perfil"/>
              <div className="user-info">
                <strong></strong>
                <span></span>
              </div>
            </header>
            <p>
              <a href="">Acessar perfil no github</a>
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

