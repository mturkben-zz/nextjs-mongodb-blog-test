import React, {useState} from "react";
import {IoCaretForwardOutline} from "react-icons/io5";
import {leftBar} from "../../constant"
import {Tooltip} from "@material-ui/core";
import Link from "next/link"
import {AdminProvider} from "./AdminProvider.js";

const Router = (props) => {
  
  const [showBar, setShowBar] = useState(false);
  
  const Bar = React.memo((props) => {
    return (
      <Link
        href={`admin/${props.url}`}
      >
        <div className="cursor-pointer flex justify-start items-center hover:bg-gray-200 px-2 rounded">
          <Tooltip title={props.title} arrow placement="right">
            <div className="p-2">
              {props.icon}
            </div>
          </Tooltip>
          <div className="animate-leftBarOpacity text-gray-500 hover:text-gray-900">
            {props.show ? props.title : null}
          </div>
        </div>
      </Link>)
  })
  
  return (
    <AdminProvider title={props.title}>
      <div className="container flex">
        
        <div className="flex justify-center items-center h-screen ">
          <div
            className="transition-all left-0 rounded-l-none inline-flex border border-gray-100 p-2 transition-all flex rounded-lg">
            <div className="flex-col">
              {
                leftBar.map(item => <Bar show={showBar} title={item.title} icon={item.icon} url={item.url}/>)
              }
            </div>
            <div className="z-10 flex justify-center self-center">
              <button className="rounded-full border border-blue-400 focus:outline-none"
                      onClick={() => setShowBar(!showBar)}>
                <IoCaretForwardOutline className="text-blue-400 p-0.5" size={25}/>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-5">
          {props.children}
        </div>
      </div>
    </AdminProvider>
  );
}
export {
  Router
}
