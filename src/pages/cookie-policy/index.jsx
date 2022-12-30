import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";

const Cookies = () => {
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
                    Cookie Policy
                  </h1>
                  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    This is a cookie policy for the bot MarianaRE on Discord.
                  </p>
                  <br />
                  <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                            What are cookies?
                        </h2>
                        <p class="leading-relaxed text-base">
                            Cookies are small files that a site or its service
                            provider transfers to your  compute s hard drive
                            through your Web browser (if you allow) that enables
                            the site s or service provider s systems to
                            recognize your browser and capture and remember
                            certain information.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                            What do we use cookies for?
                        </h2>
                        <p class="leading-relaxed text-base">
                            We use cookies to understand and save your preferences
                            for future visits and compile aggregate data about
                            site traffic and site interaction so that we can
                            offer better site experiences and tools in the future.

                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                            How do we use third-party cookies?
                        </h2>
                        <p class="leading-relaxed text-base">
                            We use Google Analytics to help us understand how our   
                            visitors use the site. These cookies may track things
                            such as how long you spend on the site and the pages
                            that you visit so we can continue to produce
                            engaging content.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                            How long do we keep your data?
                        </h2>
                        <p class="leading-relaxed text-base">
                            We keep your data for 30 days.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                            Do we share your data with anyone?
                        </h2>
                        <p class="leading-relaxed text-base">
                            We do not share your data with anyone.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                            Do we use cookies for advertising?
                        </h2>
                        <p class="leading-relaxed text-base">
                            We do not use cookies for advertising.
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

export default Cookies;
