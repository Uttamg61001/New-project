import React from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import "../App.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";


const ChatMessages = [
  {
    date: "4 may, 2024",
    messages: [
      {
        messsge: "Hello",
        sender: false,
      },
      {
        messsge: "Hii",
        sender: true,
      },
      {
        messsge: "ksa hai",
        sender: false,
      },
      {
        messsge: "Theek Hu",
        sender: true,
      },
    ],
  },
];
function ChatSection({ selectedItem, setSelectedItem }) {

  const [inputMsgValue, setinputMsgValue] = useState('');
  const [displayedMassage, setdisplayedMassage] = useState('');

// massage value logic
  const massagevalue = (e) => {
    setinputMsgValue(e.target.value);
    console.log(e.target.value);
  
  
  };

  // send massage logic
  const massageSend = () => {
    setdisplayedMassage(inputMsgValue);
    console.log("send massage success" + inputMsgValue);
    setinputMsgValue('');
};

  return (
    <div
      className={`bg-[#F5EAC9] w-full  ${
        Object.keys(selectedItem).length > 0 ? "sideBarBlock" : "sideBarhidden"
      } `}
    >
      <div className="bg-blue-700 text-white px-4 py-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className="sm:hidden my-auto">
              <IoIosArrowBack size={22} onClick={() => setSelectedItem({})} />
            </div>
            <div className="relative">
              <img width={50} height={50} src={ selectedItem.image ? selectedItem.image : "./Avatar.png" } alt="" />
           {selectedItem.active &&   <div className="bg-green-400 w-3 h-3 flex  rounded-full absolute right-1 bottom-0"></div> }
            </div>
          <div >
            <h5 className=" font-semibold text-lg">{selectedItem.heading ? selectedItem.heading :" Unknown"}</h5>
            {
              selectedItem.active &&   <p className="text-sm ">online</p>
            }
          
          </div>
          </div>



          <div className="my-auto flex gap-4 sm:gap-6 mr-0 sm:mr-10  text-lg sm:text-2xl ">
          <IoCall  />
          <FaVideo />
          <BsThreeDotsVertical />


          </div>

        </div>
      </div>

      <div
        className=" flex flex-col justify-center bottom-2 fixed"
        style={{ width: "-webkit-fill-available" }}
      >
        <div className="w-[95%] py-2 mx-auto">
          <div className="flex flex-col items-center justify-center  ">
            <div className="text-sm sm:text-md  font-medium  bg-white bg-opacity-50 px-2 py-1 rounded-2xl text-blue-500">
              Today
            </div>

            {displayedMassage && (
              <div className="w-full p-2 flex justify-end">
                <div className="bg-blue-600 p-2 font-md text-sm sm:text-md rounded-lg text-white">
                  {/* hey Where are you going */}
                  {displayedMassage}
                  <p className="text-end text-xs mt-1">8:09 &#10003;</p>
                </div>
              </div> )}

            <div className="w-full p-2 flex justify-start">
              <div className="bg-white p-2 font-md text-sm sm:text-md rounded-lg text-black">
               Hii how are you 
               <p className="text-end text-xs mt-1">8:09 &#10003;</p>
              </div>
              
            </div>
          </div>
          <div className="bg-white flex items-center rounded-2xl outline-none px-6 gap-4">
            <MdInsertEmoticon className="w-7 h-7" />

            <input
              className="w-full h-[50px]  outline-none"
              type="text"
              placeholder="Message"
              value={inputMsgValue}
              onChange={massagevalue}
             
            />
            <IoSend className="w-7 h-7" onClick={massageSend}
/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;
