import logo from './logo.svg';
import './App.css';
import Roll from './components/Roll';

function App() {
  return (
    <div>
      <body>
        <header class="page-header pt-4 pb-1">
          <h1>
            Dead by Daylight Perks Randomizer
          </h1>
        </header>
        <main>
          <Roll />
        </main>
        <footer class="page-footer pt-4 pb-1 footer">
          <p class="text-center white-text">
            <i class="fas fa-code"></i>
            Made by tuannguyen21
            <i class="fas fa-code"></i>
            <br /><br />
              Disclaimer: All material (Pictures, etc...) belongs to their appropriate owners.
          </p>
        </footer>
      </body>
    </div>
  );
}

export default App;
