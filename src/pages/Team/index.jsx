import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TeamCardteam from "../../components/TeamCardteam";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>furniture store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[98px] bg-gray-50">
        <Header className="flex justify-center items-center w-full p-[35px] sm:p-5 bg-white-A700" />
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[50px] md:px-5 max-w-[1290px]">
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
                  Meet Our Team
                </Heading>
                <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center !leading-[35px]">
                  <>
                    We write various things related to furniture, from tips and what things <br />I need to pay
                    attention to when choosing furniture
                  </>
                </Text>
              </div>
              <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">
                <TeamCardteam
                  bxllinkedinone="images/img_bxl_linkedin_1.svg"
                  bxlfacebookone="images/img_bxl_facebook.svg"
                  bxltwitterone="images/img_bxl_twitter.svg"
                  className="flex flex-col items-center justify-start w-full gap-7"
                />
                <TeamCardteam
                  image="images/img_rectangle_1487_450x416.png"
                  makejhane="Jinny Owen"
                  financemanager="Marketing Manager"
                  className="flex flex-col items-center justify-start w-full gap-[30px]"
                />
                <TeamCardteam
                  image="images/img_rectangle_1487_1.png"
                  makejhane="Mia Lobey"
                  financemanager="Accountant"
                  className="flex flex-col items-center justify-start w-full gap-[30px]"
                />
                <TeamCardteam
                  image="images/img_rectangle_1487_2.png"
                  className="flex flex-col items-center justify-start w-full gap-7"
                />
                <TeamCardteam
                  image="images/img_rectangle_1487_3.png"
                  makejhane="Jinny Owen"
                  financemanager="Marketing Manager"
                  className="flex flex-col items-center justify-start w-full gap-[30px]"
                />
                <TeamCardteam
                  image="images/img_rectangle_1487_4.png"
                  makejhane="Mia Lobey"
                  financemanager="Accountant"
                  className="flex flex-col items-center justify-start w-full gap-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
