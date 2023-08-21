import './bootstrap';
import '../css/bootstrap-4.5.3.min.css';
import "../css/app.css";
import '../css/flaticon.min.css';
import '../css/fontawesome-5.14.0.min.css';
import '../css/magnific-popup.min.css';
import '../css/nice-select.min.css';
import '../css/animate.min.css';
import '../css/slick.min.css';
import '../css/style.css';
import 'react-toastify/dist/ReactToastify.css';


import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob(['./Pages/**/*.jsx',  '../images/**',
    '../fonts/**',], { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})