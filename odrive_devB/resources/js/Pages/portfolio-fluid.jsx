import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";

//import dynamic from "next/dynamic";
import ClientLogoSlider from "@/src/components/ClientLogoSlider";
import InfoCompte from "@/src/components/istotope/InfoCompte";
/*const PortfolioFluidIsotope = dynamic(
  () => import("@/src/components/istotope/PortfolioFluidIsotope"),
  {
    ssr: false,
  }
);*/

const PortfolioFluid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Portfolio Fluid"} />
      <InfoCompte />
      {/* Portfolio Fluid End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioFluid;
