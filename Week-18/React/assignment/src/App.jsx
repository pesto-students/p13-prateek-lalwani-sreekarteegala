import './App.css';
import ThemeProvider from './components/Theme/ThemeProvider';

import BookList from './components/bookList';

function App() {
  return (
    <ThemeProvider>
      <div>
        <BookList />
      </div>
    </ThemeProvider>
  );
}

export default App;
