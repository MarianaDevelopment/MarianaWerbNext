import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";

const Privacy = () => {
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
                    Privacy Policy
                  </h1>
                  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    By using MarianaRE, you agree to the terms of this Privacy
                  </p>
                  <br />
                  <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          What information do we collect?
                        </h2>
                        <p class="leading-relaxed text-base">
                          We do not collect any personal information related to
                          your account such as Passwords or any other
                          Credentials. The data we collect includes User ID,
                          Server ID, Channel ID, and some Feature IDs. The bot
                          never asks for personal information. user data and any
                          act that violates the Ts of Discord is discouraged by
                          us!
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          What do we use your information for?
                        </h2>
                        <p class="leading-relaxed text-base">
                          The data is necessary for the proper functioning of
                          the bot. features such as Alert System, Registration
                          and Autoroles. Without this data, our bot will not be
                          able to perform these activities and thus make the
                          features inaccessible to users.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          How do we protect your information?
                        </h2>
                        <p class="leading-relaxed text-base">
                          We implement a variety of security measures to
                          maintain the safety of your personal information when
                          you enter, submit, or access your personal
                          information.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          How long do we store your data?
                        </h2>
                        <p class="leading-relaxed text-base">
                          We store your data for as long as you use our bot. If
                          you delete the bot, your data will be deleted within
                          24 hours.
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          With whom do we share the data?
                        </h2>
                        <p class="leading-relaxed text-base">
                          We do not share your data with anyone. We do not share
                        </p>
                      </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                      <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                        <h2 class="text-lg text-indigo-400 font-medium title-font mb-2">
                          Do you have concerns or queries?
                        </h2>
                        <p class="leading-relaxed text-base">
                            If you have any questions or concerns about our
                            Privacy Policy, please contact us at
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

export default Privacy;
