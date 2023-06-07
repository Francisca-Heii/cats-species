 import logo from './logo.svg';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCatsFetch} from './catState';
import './App.css';

function App() {
  const cats = useSelector(state => state.cats.cats);
  const Loading = useSelector(state => state.cats.isLoading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCatsFetch());
  }, [dispatch] );
  console.log(cats);
  // console.log();
  console.log(Loading);

  {
    if (Loading){
      return (
        <h1>Loading the Data!</h1>
      );
    }
    else{
      return (
        <div className="App">
          <h1>Cats Species Gallery</h1>
          <hr/>
          <div className='gallery'>
            { cats.map(cat =>
            <div key={cat.id} className='row'>
              <div className='column column-left'>
                  <h2>{cat.name}</h2>
              </div>
              <div className='column column-right'>
                <h5>Temprement:{cat.temprement}</h5>
                  <h2>{cat.description}</h2>
              </div> 
              </div>    
            )}

          </div>
    </div>

      );
    }
  }

}

export default App;
