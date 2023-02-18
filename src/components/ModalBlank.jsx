import React, { useRef } from "react";
import Transition from "@/utils/Transition";

function ModalBlank({ children, id, modalOpen }) {
  const modalContent = useRef(null);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}

      <div
        ref={modalContent}
        className="bg-slate-900 rounded-lg shadow-xl overflow-hidden transform transition-all sm:max-w-lg sm:w-full text-white"
        id="scrollbar-light"
      >
        {children}
      </div>
    </>
  );
}

export default ModalBlank;
