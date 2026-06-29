
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './components/root/root';
import Home from './components/home/home';
import Cuts from './components/cuts/cuts';
import Styling from './components/styling/styling';
import Wellness from './components/wellness/wellness';
import Nails from './components/nails/nails';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="/cuts" element={<Cuts/>}/>
    <Route path="/styling" element={<Styling/>}/>
    <Route path="/wellness" element={<Wellness/>}/>
    <Route path="/nails" element={<Nails/>}/>
  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App;
