import { Link } from '@inertiajs/react';
const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section
      className="page-banner text-white py-165 rpy-130"
      // style={{(pageName=="Restaurant") ? backgroundImage: "url(/images/banner/banner.jpg)" : color: "blue"}}
      style={{
        backgroundImage: pageName === "Restaurant" ? "url(/images/banner/banner2.webp)" : (pageName === "Pharmacie"? "url(/images/banner/banner3.webp)": "url(/images/banner/banner9.jpg)"),
      }}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title wow fadeInUp delay-0-2s">
            {pageTitle ? pageTitle : pageName}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">Acceuil</Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
