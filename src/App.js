
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import appRouter from './router/router.js'
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

const App = () => {
  register();
  return (
    <Provider store={appStore}>
      <div>
        
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}
export default App;
