import React, { useEffect, useState } from "react";
import styles from "@/styles/style";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import ContentGuilds from "@/components/guilds/contentGuilds";
import { getGuilds } from "@/request/guildsRequest";

const Servers = () => {
   const [guilds, setGuilds] = useState([]);

   useEffect(() => {
     const getGuildsData = async () => {
       const data = await getGuilds();
       if (data.status === 200) {
         setGuilds(data.data);
       }
     };
     getGuildsData();
   }, []);

     const styles = {
       boxWidth: "xl:max-w-[1280px] w-full",

       heading2:
         "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
       paragraph:
         "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

       flexCenter: "flex justify-center items-center",
       flexStart: "flex justify-center items-start",

       paddingX: "sm:px-16 px-6",
       paddingY: "sm:py-16 py-6",
       padding: "sm:px-16 px-6 sm:py-12 py-4",

       marginX: "sm:mx-16 mx-6",
       marginY: "sm:my-16 my-6",
     };

     const layout = {
       section: `flex md:flex-row flex-col ${styles.paddingY}`,
       sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

       sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
       sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

       sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
     };

 
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ContentGuilds guilds={guilds} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Servers;
