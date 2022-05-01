import { BrowserRouter, Route } from 'react-router-dom';
import ContainedButtons from './atoms/button';

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Route path="/">
      	<ContainedButtons text='test' color='primary'/>
      </Route>
    </BrowserRouter>
  );
}