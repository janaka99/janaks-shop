import Banner from "../components/Banner";
import BottomBanner from "../components/BottomBanner";
import CurratedPicks from "../components/CurratedPicks";
import FeaturedProducts from "../components/FeaturedProducts";
import Service from "../components/Service";
import Title from "../components/Title";
import Container from "../components/layouts/Container";

const Home = () => {
  return (
    <main className="flex w-full flex-col bg-primary-color anim ">
      <Container classes="h-[calc(100vh-96px)]  justify-center items-start rounded-[20px]  ">
        <Banner />
      </Container>
      <Container>
        <Title title1={"We Provide best"} title2={"customer experience"} />
        <Service />
      </Container>
      <Container>
        <Title title1={"Shop our top categories"} title2={""} />
        <CurratedPicks />
      </Container>
      <Container>
        <Title title1={"Featured products"} title2={""} />
        <FeaturedProducts />
      </Container>
      <Container>
        <BottomBanner />
      </Container>
    </main>
  );
};

export default Home;
