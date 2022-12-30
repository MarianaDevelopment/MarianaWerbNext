import React, { useEffect, useState } from "react";
import CommandCard from "@/components/cards/commandCard";
import { getAllCommands } from "@/request/generalRequest";

const CommandContent = () => {
    const [commands, setCommands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [commandsByCategory, setCommandsByCategory] = useState([]);

    useEffect(() => {
      const getCommands = async () => {
        const commands = await getAllCommands();
        if (commands.status === 200) {
          setCommands(commands.data);
        }
      };
      getCommands();
    }, []);
 

    useEffect(() => {
        const commmandsByCategory = commands.reduce((acc, command) => {
            const category = command.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(command);
            return acc;
        }, {});
        setCategories(commmandsByCategory);
    }, [commands]);

    //cuaando se le de click a un boton de categoria, se debe de filtrar los comandos por categoria

    const handleCategoryClick = (category) => {
        const commandsByCategory = commands.filter((command) => command.category === category);
        setCommandsByCategory(commandsByCategory);
    };

    return (
      <div>
        <div className="flex flex-col justify-center items-center px-20 py-20 md:px-20 md:py-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-poppins font-bold text-[26px] text-white mb-[20px]">
              MarianaRE Commands
            </h1>
            <p className="font-poppins text-[16px] text-white mb-[50px] text-center">
              Here you can find all the commands that MarianaRE has, <br />
              you can filter them by category or search for a specific command.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-5 lg:gap-10 xl:grid-cols-6 xl:gap-12 ">
            {Object.keys(categories).map((category, index) => (
              <button
                key={index}
                className={`font-poppins font-bold text-[10px] md:text-[14px] text-white h-[50px] 
              sm:h-[50px] border-[2px] border-white rounded-[10px]
               hover:shadow-lg hover:border-[#FE01EE] transition duration-500 ease-in-out mb-[20px] ${
                 commandsByCategory.length ? "bg-[#000000]" : "bg-[#FE01EE]"
               }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* un div con una linea de separacion */}
          <div className="py-5"></div>
          <div className="w-[80%] h-[2px] bg-[#FE01EE]"></div>
          <div className="py-5"></div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          {commandsByCategory.map((command, index) => (
            <CommandCard command={command} key={index} />
          ))}
          <div className="py-5"></div>
          {commandsByCategory.length !== 0 && (
            <div className="w-[80%] h-[2px] bg-[#FE01EE]"></div>
          )}
          <div className="py-5"></div>
        </div>
      </div>
    );
};

export default CommandContent;