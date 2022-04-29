import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import CheckIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from "react-spring";

function Content(props) {
  const contentList = [
    "Card reports sent to your phone every weeks",
    "No external fees",
    "Set spending limits and restrictions",
  ];

  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });
  return (
    <section>
      <div
        className="mt-12 flex flex-col   gap-y-8 py-10 px-14 bg-gradient-to-b shadow-lg from-white/40 rounded-[24px] to-transparent
      md:mt-20 xl:mt-32 xl:py-14 xl:px-20 xl:gap-y-14
      "
      >
        <div className="flex item-center  ">
          <div className=" self-center ">
            <FaUser className="text-28 xl:text-5xl" />
          </div>
          <div className="ml-auto">
            <div className="text-26 font-semibold text-right xl:text-4xl xl:mb-2">
              <animated.div>
                {customer.customers.to((val) => Math.floor(val))}
              </animated.div>
            </div>
            <p className="text-13 xl:text-20">Customers</p>
          </div>
        </div>

        <div className="flex item-center   ">
          <div className="  self-center">
            <BsFillCreditCardFill className="text-28 xl:text-5xl" />
          </div>
          <div className="ml-auto">
            <div className="text-26 font-semibold text-right xl:text-4xl xl:mb-2">
              <animated.div>
                {card.cards.to((val) => Math.floor(val))}
              </animated.div>
            </div>
            <p className="text-13 xl:text-20">Cards Issued</p>
          </div>
        </div>
      </div>

      <div className="text-14 flex flex-col gap-y-10 w-[100%] mt-[90px] font-medium xl:text-2xl">
        {contentList.map((item, idx) => (
          <div key={idx} className="flex gap-8 mx-14 items-center md:mx-0">
            <img src={CheckIconMobile} alt="check icon mobile" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Content;
