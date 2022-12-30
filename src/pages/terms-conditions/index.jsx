import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";

const Terminos = () => {

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
          <div className="text-white">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                    Terms & Conditions
                  </h1>
                  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    By using the bot you are accepting the terms and conditions
                  </p>
                  <br />
                  <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          Age Restrictions
                        </h2>
                        <p class="leading-relaxed text-base">
                          You must be at least 13 years old to use MarianaRE. If
                          you are under 13 years old, you must have parental
                          permission to use MarianaRE. MarianaRE is not
                          responsible for any damage caused by the bot.
                          MarianaRE is not
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          Use of MarianaRE
                        </h2>
                        <p class="leading-relaxed text-base">
                          You may not use MarianaRE or any of its Services for
                          any unauthorized act, or any act (such as Selling and
                          Buying NSFW content through bot or services) that goes
                          against Discord Terms of Service. if you are caught
                          performing such acts, we have full right to ban you
                          from using MarianaRE and its services.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          Prohibition of Illegal Activities
                        </h2>
                        <p class="leading-relaxed text-base">
                          You may not use MarianaRE or any of its Services for
                          any illegal activity. MarianaRE is not responsible for
                          any damage caused by the bot. MarianaRE is not
                          responsible for any damage caused by the bot.
                          MarianaRE is not
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          Changes to Terms of Service
                        </h2>
                        <p class="leading-relaxed text-base">
                          MarianaRE reserves the right to change these Terms of
                          Service at any time. If we make changes, we will
                          notify you by posting the revised Terms of Service on
                          the MarianaRE website. By continuing to use MarianaRE
                          after we make changes, you are agreeing to the revised
                          Terms of Service.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          Ownership of MarianaRE
                        </h2>
                        <p class="leading-relaxed text-base">
                          MarianaRE is owned and operated by MarianaRE. MarianaRE
                          is not responsible for any damage caused by the bot.
                          MarianaRE is not responsible for any damage caused by
                          the bot. MarianaRE is not
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Terminos;
