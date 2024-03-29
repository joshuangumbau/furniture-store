import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input, Img } from "../../components";
import CartSection from "../../components/CartSection";
import Footer1 from "../../components/Footer1";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>furniture store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-row md:flex-col justify-between items-center w-full p-[35px] md:gap-10 sm:p-5 bg-white-A700">
            <Img src="images/img_frame_146.svg" alt="image" className="h-[30px] ml-10 md:ml-0 sm:ml-5" />
            <div className="flex flex-row justify-between items-center w-[37%] md:w-full">
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
            <div className="flex flex-row justify-between w-auto mr-10 gap-[30px] sm:mr-5">
              <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
              <Img src="images/img_list_black_900.svg" alt="list_one" className="h-[24px] w-[24px]" />
              <Img src="images/img_list.svg" alt="list_three" className="h-[24px] w-[24px]" />
            </div>
          </header>
          <div className="flex flex-row justify-center w-full pt-[75px] px-14 md:pt-5 md:px-5">
            <div className="flex flex-col items-center justify-start w-full gap-[49px] max-w-[1290px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
                Your Cart
              </Heading>
              <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                <div className="flex flex-col w-[64%] md:w-full gap-[30px]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-row md:flex-col justify-between items-center w-[88%] md:w-full md:gap-10">
                      <div className="flex flex-row sm:flex-col justify-start items-center w-[62%] md:w-full gap-5 sm:gap-5">
                        <Img
                          src="images/img_rectangle_1480.png"
                          alt="image"
                          className="w-[120px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[15px]">
                          <Heading as="h2" className="tracking-[-0.50px] !font-bold !leading-[35px]">
                            Complete set of sofa, pillows and bed sheets
                          </Heading>
                          <Heading
                            as="h3"
                            className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold"
                          >
                            $ 75.00
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[17%] p-1 border-black-900 border border-solid">
                        <div className="flex flex-row justify-between items-center w-[80%] py-[5px] mx-2.5">
                          <Button size="xs" shape="square" className="w-[24px]">
                            <Img src="images/defaultNoData.png" />
                          </Button>
                          <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                            1
                          </Text>
                          <Button size="xs" shape="square" className="w-[24px]">
                            <Img src="images/img_bx_plus_circle_1.svg" />
                          </Button>
                        </div>
                      </div>
                      <Heading size="md" as="h4" className="tracking-[-0.50px]">
                        $ 75.00
                      </Heading>
                    </div>
                    <Button color="gray_50_01" size="7xl" shape="square" className="w-[50px]">
                      <Img src="images/img_frame_48096032.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[54%] md:w-full gap-5 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1480.png"
                        alt="image"
                        className="w-[120px] md:h-auto object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[15px]">
                        <Heading as="h5" className="tracking-[-0.50px] !font-bold">
                          Teak wood chair
                        </Heading>
                        <Heading as="h6" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold">
                          $ 24.00
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[15%] p-1 border-black-900 border border-solid">
                      <div className="flex flex-row justify-between items-center w-[80%] py-[5px] mx-2.5">
                        <Img src="images/img_bx_minus_circle.svg" alt="image_one" className="h-[24px] w-[24px]" />
                        <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                          1
                        </Text>
                        <Img
                          src="images/img_bx_plus_circle_1_blue_gray_900_01.svg"
                          alt="image_two"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                    </div>
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      $ 75.00
                    </Heading>
                    <Button color="gray_50_01" size="7xl" shape="square" className="w-[50px]">
                      <Img src="images/img_frame_48096032.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end w-[33%] gap-7 p-[27px] sm:p-5 bg-gray-50_01">
                  <Heading as="h5" className="mt-[9px] tracking-[-0.50px] !font-bold">
                    Cart Total
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="flex flex-row justify-between items-center w-full py-0.5">
                      <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                        Subtotal
                      </Text>
                      <Heading as="h5" className="tracking-[-0.50px] !font-poppins">
                        $ 99.00
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                      <Input
                        size="sm"
                        shape="square"
                        name="your_voucher"
                        placeholder="Your Voucher"
                        className="w-[73%] md:w-full !text-black-900_3f"
                      />
                      <Button
                        size="5xl"
                        shape="square"
                        className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-semibold min-w-[98px]"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  <div className="h-px w-full bg-black-900" />
                  <div className="flex flex-row justify-between items-center w-full py-0.5">
                    <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                      Total
                    </Text>
                    <Heading as="h5" className="tracking-[-0.50px] !font-poppins">
                      $ 99.00
                    </Heading>
                  </div>
                  <Button
                    size="8xl"
                    shape="square"
                    className="w-full mb-1 sm:px-5 !text-yellow-100 tracking-[-0.50px] font-semibold"
                  >
                    Checkout Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CartSection className="flex flex-row justify-start w-full pl-[46px] gap-11 py-[46px] md:p-5 bg-gradient max-w-[1290px]" />
        <Footer1 className="flex justify-center items-center w-full p-12 md:p-5 bg-black-900" />
      </div>
    </>
  );
}
