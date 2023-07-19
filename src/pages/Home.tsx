import Banner from "../components/Banner";
import BottomBanner from "../components/BottomBanner";
import CurratedPicks from "../components/CurratedPicks";
import FeaturedProducts from "../components/FeaturedProducts";
import Service from "../components/Service";
import Title from "../components/Title";

const Home = () => {
  return (
    <main className="flex w-full flex-col bg-primary-color anim ">
      <section className="w-[90%] h-[calc(100vh-96px)] py-12 flex mx-auto justify-center items-start rounded-[20px] overflow-hidden ">
        <Banner />
      </section>
      <section className="w-[90%] max-w-[1440px] py-12 flex mx-auto flex-col gap-10 overflow-hidden">
        <Title title1={"We Provide best"} title2={"customer experience"} />
        <Service />
      </section>
      <section className="w-[90%] max-w-[1440px] py-12 flex mx-auto flex-col gap-10 overflow-hidden ">
        <Title title1={"Shop our top categories"} title2={""} />
        <CurratedPicks />
      </section>
      <section className="w-[90%] max-w-[1440px] py-12 flex mx-auto flex-col gap-10 overflow-hidden">
        <Title title1={"Featured products"} title2={""} />
        <FeaturedProducts />
      </section>
      <section className="w-[90%] max-w-[1440px] py-12 flex mx-auto flex-col gap-10 overflow-hidden">
        <BottomBanner />
      </section>
    </main>
  );
};

export default Home;
