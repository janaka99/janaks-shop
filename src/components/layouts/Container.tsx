import { ReactNode } from "react";

type props = {
  children: ReactNode;
  classes?: string;
};

const Container = ({ children, classes = "" }: props) => {
  return (
    <div
      className={`w-[90%] max-w-[1440px] py-12 flex mx-auto flex-col gap-10 overflow-hidden ${classes}`}
    >
      {children}
    </div>
  );
};

export default Container;
