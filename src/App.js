
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import appRouter from './router/router.js'
import { register } from 'swiper/element/bundle';
import { bg_image_url } from './static/files/constants.js';
// register Swiper custom elements

const App = () => {
  register();
  return (
    <Provider store={appStore}>
      <div className='absolute w-[100%] h-[100vh]'>
        <img

          alt="bg"
          className='h-[100vh] w-[100%]'
          src={bg_image_url}
        />
      </div>
      <div>


        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}
export default App;
