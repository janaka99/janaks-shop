import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      text: "Autumn Dress",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "Summer Dress",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      text: "Prom Dress",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {cards.map((card, i) => (
        <FeaturedProductCard
          key={i}
          imageSrc={card.imageSrc}
          text={card.text}
        />
      ))}
    </div>
  );
};
export default FeaturedProducts;
