import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username"> Usuario do gitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs"> Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="" alt="charles"></img>
              <div className="user-info">
                <strong>Charles Damasceno</strong>
                <span>Nodejs Python, reactjs</span>
              </div>
            </header>
            <p>Curioso por tecnologias web e arquitetura de sistemas</p>
            <a href="">Acessar perfil HTML</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
