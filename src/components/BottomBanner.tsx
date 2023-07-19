const BottomBanner = () => {
  return (
    <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
      <img
        className="h-full w-full object-cover object-center brightness-[80%]"
        src="https://images.unsplash.com/photo-1683313041281-c2fa5f195608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
        alt=""
      />
      <div className="absolute w-full h-full p-10 top-0 left-0 flex flex-col justify-center gap-2 items-center sm:items-start text-center">
        <div className="text-primary-color font-bold text-5xl">
          Get 5% Cash Back
        </div>
        <div className="text-primary-color font-semibold text-2xl">
          JanakaDev.com
        </div>
        <button className="w-fit bg-white rounded-md gap-4 py-4 px-6 font-semibold cursor-pointer hover:bg-[#1D242D] hover:text-white duration-150">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
