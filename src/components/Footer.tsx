const Footer = () => {
  return (
    <div className="w-screen py-12 bg-secondary gap-5 flex flex-col ">
      <div className="w-[90%] mx-auto max-w-[1440px] flex flex-col gap-5  items- justify-between sm:flex-row">
        <div className="flex items-center justify-center flex-col text-center">
          <div className="text-2xl text-base-color  font-bold tracking-tighter transfor subpixel-antialiased anim">
            JANAKA'S SHOP
          </div>
          <div className="text-muted-color text-sm">
            Everyones Favourite Shop.
          </div>
        </div>
        <div className="flex gap-2 justify-between sm:gap-10">
          <div className="flex flex-col">
            <div className="text-base-color text-lg mb-3">Shop</div>
            <div className="text-muted-color text-md">All Collections</div>
            <div className="text-muted-color text-md">Summer Deals</div>
            <div className="text-muted-color text-md">Discount</div>
          </div>
          <div className="flex flex-col">
            <div className="text-base-color text-lg mb-3">Company</div>
            <div className="text-muted-color text-md">About Us</div>
            <div className="text-muted-color text-md">Contact</div>
            <div className="text-muted-color text-md">Affiliates</div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-[90%] max-w-[1440px] mx-auto border-t-[1px] border-muted-color text-center pt-10 text-base-color flex justify-between">
          <div className="">
            DESIGNED & BUILT BY{" "}
            <a className="underline" href="https://janaka99.netlify.app">
              JANAKA CHAMITH
            </a>
          </div>
          <div className="">
            Copyright @2023 Janaka's Shop.All right reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
