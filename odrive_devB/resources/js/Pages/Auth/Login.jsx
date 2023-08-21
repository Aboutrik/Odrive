import { Fragment, useState } from 'react'

import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { router,usePage ,Link} from '@inertiajs/react'
import InfoCompte from '@/src/components/istotope/InfoCompte';
import { ToastContainer, toast } from 'react-toastify';


export default function Login({connected, user}){
  console.log(user)
    const { errors } = usePage().props
    const [remember,setRemember] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
      })

      const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
    
        setValues((values) => ({
          ...values,
          [key]: value
        }))
      }
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {          
            const response = await axios.post('/login', {
              email: values.email,
              password: values.password,
              remember: remember==true ? "on" : "off"
            }, {
              headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="_token"]').getAttribute('content')
              }
            });
      
            const data = response.data;
            console.log(data);
      
            if (data.error === "1") {
              // Rediriger vers la page d'accueil après une connexion réussie
              toast.success("Opération réussie !", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
                closeOnClick: true,
                draggable: false,
                progress: undefined,
              });
              setTimeout(() => {
                router.get('/');
              }, 4000);
            } else {
              // Afficher une notification en cas d'erreur
              toast.error("Opération échoué, "+data.text, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
                closeOnClick: true,
                draggable: false,
                progress: undefined,
              });
            }
      
          } catch (error) {
            console.error('Erreur lors de la connexion', error);
          }
        };

      // function handleSubmit(e) {
      //   e.preventDefault()
      //   router.post('/users', values)
      // }
    return (
        <Layout>
          {/* <PageBanner pageName={"Connection"} />{" "} */}
        
          {/* Contact Info End */}
          {/* Contact From Start */}
          <section className="contact-form-area rel z-1 pt-180 rpt-70 pb-100 rpb-100">
            <div className="container align-items-end">
              <div className="row">
                {connected ? (
                  <InfoCompte user={user}/>
                ) 
                : 
                <Fragment>
                    <div className="col-lg-6">
                      <form onSubmit={handleSubmit}
                        id="contactForm"
                        className="contact-form rmb-65 wow fadeInLeft delay-0-2s"
                        name="contactForm"
                        action="assets/php/form-process.php"
                        method="post"
                      >
                        <div className="section-title contact-title mb-55">
                          <span className="mb-15">Besoin de plus de possibilité ?</span>
                          <h3>Connectez-vous pour acceder à votre compte</h3>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email} onChange={handleChange} 
                                className="form-control"
                                placeholder="Entrer votre email"
                                required
                              />
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Entrer votre mot de passe"
                                value={values.password} onChange={handleChange}
                                required
                              />
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className='col-12'>
                            {errors.email && <small className='text-danger'>{errors.email}</small>}
                          </div>
                          <label>
                            Remember me &nbsp;
                            <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)}  />
                          </label>
                          <div className='d-flex justify-content-end w-100'>
                                <Link  href="/register">
                                    Je n'ai pas de compte
                                </Link>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <button type="submit" className="theme-btn style-two">
                                Se connecter
                                <i className="fas fa-angle-double-right" />
                              </button>
                              <ToastContainer />
                              <div id="msgSubmit" className="hidden" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                    <div className="contact-right-image wow fadeInRight delay-0-4s">
                      <img
                        src="/images/contact/contact-right.png"
                        alt="Contact From"
                      />
                      <img
                        className="bg"
                        src="/images/contact/contact-right-bg.png"
                        alt="Contact From BG"
                      />
                    </div>
                    </div>
                  </Fragment>
                }
                </div>
              </div>
            <div className="contact-shapes">
              <img
                className="leaf"
                src="/images/shapes/leaf-1.png"
                alt="Leaf"
              />
              <img
                className="shape"
                src="/images/shapes/contact-shape.png"
                alt="Shape"
              />
              <img
                className="two-leaf"
                src="/images/shapes/two-lear.png"
                alt="Leaf"
              />
            </div>
          </section>
        </Layout>
      );
}

