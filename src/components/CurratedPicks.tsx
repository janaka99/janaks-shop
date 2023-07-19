import { useState } from "react";
import TopCategoriesCard from "./TopCategoriesCard";

const CurratedPicks = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <TopCategoriesCard
          imageSrc="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          text="Best Seller"
        />
        <TopCategoriesCard
          imageSrc="https://plus.unsplash.com/premium_photo-1668485968648-f29fe5157463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          text="Shop Women"
        />
        <TopCategoriesCard
          imageSrc="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          text="Shop Men"
        />
        <TopCategoriesCard
          imageSrc="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          text="Shop Hot"
        />
      </div>
    </>
  );
};

export default CurratedPicks;
