import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import CartSection from "../../components/CartSection";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";

export default function WishlistPage() {
  return (
    <>
      <Helmet>
        <title>furniture store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <Header className="flex justify-center items-center w-full p-[35px] sm:p-5 bg-white-A700" />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[49px] md:px-5 max-w-[1290px]">
            <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
              Wishlist
            </Heading>
            <div className="justify-center w-full gap-[131px] grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <Button color="gray_50_01" size="7xl" shape="square" className="w-full">
                <Img src="images/img_bx_trash_1.svg" />
              </Button>
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[70%] sm:w-full gap-5 sm:gap-5">
                  <Img src="images/img_rectangle_1480.png" alt="image" className="w-[120px] md:h-auto object-cover" />
                  <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-3.5">
                    <Heading as="h2" className="tracking-[-0.50px] !font-bold !leading-[35px]">
                      Complete set of sofa, pillows and bed sheets
                    </Heading>
                    <Heading as="h3" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold">
                      $ 75.00
                    </Heading>
                  </div>
                </div>
                <Heading size="md" as="h4" className="tracking-[-0.50px]">
                  $ 75.00
                </Heading>
              </div>
              <Heading size="md" as="h5" className="w-full !text-blue_gray-900_01 tracking-[-0.50px]">
                In Stock
              </Heading>
              <Button
                color="black_900"
                size="8xl"
                shape="square"
                className="w-full sm:px-5 tracking-[-0.50px] font-semibold min-w-[146px]"
              >
                Add to Cart
              </Button>
              <Button color="gray_50_01" size="7xl" shape="square" className="w-full">
                <Img src="images/img_bx_trash_1.svg" />
              </Button>
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[70%] sm:w-full gap-5 sm:gap-5">
                  <Img
                    src="images/img_rectangle_1480_120x120.png"
                    alt="image"
                    className="w-[120px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[11px]">
                    <Heading as="h6" className="tracking-[-0.50px] !font-bold">
                      Teak wood chair
                    </Heading>
                    <Heading as="h5" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold">
                      $ 24.00
                    </Heading>
                  </div>
                </div>
                <Heading size="md" as="h6" className="tracking-[-0.50px]">
                  $ 24.00
                </Heading>
              </div>
              <Heading size="md" as="h6" className="w-full !text-deep_orange-A400 tracking-[-0.50px]">
                Out Stock
              </Heading>
              <Button
                color="blue_gray_100"
                size="8xl"
                shape="square"
                className="w-full sm:px-5 tracking-[-0.50px] font-semibold min-w-[146px]"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <CartSection className="flex flex-row justify-start w-full pl-[46px] gap-11 py-[46px] md:p-5 bg-gradient max-w-[1290px]" />
        <Footer1 className="flex justify-center items-center w-full p-12 md:p-5 bg-black-900" />
      </div>
    </>
  );
}
