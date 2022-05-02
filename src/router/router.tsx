import { BrowserRouter, Route } from 'react-router-dom';
import { Page1 } from '../pages/page1'
import { NotFound} from '../pages/notFound'

export const Router = () => {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Route path="/page1">
        <Page1 />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </BrowserRouter>
  );
}