import React from "react";

function DropdownByObj({
  optionsDropdown,
  selectedOption,
  modalOption,
  setModalOption,
  setSelectedOption,
}) {
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setModalOption(false);
  };

  return (
    <div>
      {/*crear un dropdown para seleccionar el tipo de chip*/}
      <div className="">
        <div className="relative">
          <button
            onClick={() => setModalOption(!modalOption)}
            className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure"
          >
            <span className="flex items-center text-gray-700">
              <span className="ml-3">
                {selectedOption ? selectedOption.name : "Seleccionar"}
              </span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-down"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
          </button>
          {modalOption && (
            <div
              className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg overflow-y-auto h-64 pr-1"
              id="scrollbar-light"
            >
              {optionsDropdown.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:blue-500 hover:bg-blueAzure"
                >
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DropdownByObj;
