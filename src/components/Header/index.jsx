import React from "react";
import { Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1290px]">
        <Img src="images/img_frame_146.svg" alt="image" className="h-[30px]" />
        <div className="flex flex-row justify-between items-center w-[39%] md:w-full">
          <div className="flex flex-row justify-start items-center gap-2.5">
            <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
              Home
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
          </div>
          <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
            Shop
          </Text>
          <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
            Blog
          </Text>
          <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
            About
          </Text>
          <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
            Contact
          </Text>
          <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
            Team
          </Text>
        </div>
        <div className="flex flex-row justify-between w-auto gap-[30px]">
          <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
          <Img src="images/img_list_black_900.svg" alt="list_one" className="h-[24px] w-[24px]" />
          <Img src="images/img_list.svg" alt="list_three" className="h-[24px] w-[24px]" />
        </div>
      </div>
    </header>
  );
}
