import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ShareIcon } from "@heroicons/react/24/solid";
import * as htmlToImage from "html-to-image";
import da from "../components/Data";
const Card = () => {
  const [data, setData] = useState({});
  const [activity, getActivity] = useState(false);
  const domEl = useRef(null);
  const [num, setNum] = useState(0);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement("a");
    link.download = `challenge-${new Date().toISOString()}.png`;
    link.href = dataUrl;
    link.click();
  };

  // At instance level

  const getData = async () => {
    try {
      setData(da[Math.floor(Math.random() * 196)]); // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
    setNum(Math.floor(Math.random() * 10));
  }, [activity]);
  return (
    <div>
      <h2 className="text-white text-center space-x-2 text-base">
        Let start to challenge with something new together.
      </h2>
      <div
        id="domEl"
        ref={domEl}
        className="flex flex-col items-center justify-center"
      >
        <div className="bg-white rounded-2xl md:w-1/2 w-[90%] mt-4 text-[#D70F64] p-3 ">
          <header className="text-center divide-y divide-gray-200">
            <h2 className="pb-2 font-bold">Let Start !!</h2>
            <hr />
          </header>
          <div>
            <main className="divide-y divide-gray-200 text-center">
              <p className="my-4">{data.activity}</p>
              {data.link ? (
                <>
                  <a href={data.link} target="_blank">
                    vist resoure
                  </a>
                </>
              ) : (
                <></>
              )}
              <hr />
              <div className="flex justify-between">
                <p>
                  Type:{" "}
                  <span className="font-bold capitalize">{data.type}</span>
                </p>
                <p className="flex items-center justify-center">
                  {" "}
                  <ShareIcon className="w-3 h-3 mr-5" /> {num}
                </p>
              </div>
            </main>
          </div>
        </div>
        <br />
      </div>
      <footer className="flex flex-col items-center justify-center mt-3">
        <button
          className="text-[#D70F64] mb-4 text-xs bg-white px-5 py-2 rounded-2xl"
          onClick={() => getActivity(!activity)}
        >
          Start Challenge
        </button>
        <p className="md:w-1/2 w-full text-center text-xs text-gray-400 my-5">
          Start do the challenge and save the challenge with button below. After
          you finish start sharing to your friend on social media.
        </p>
        <button
          onClick={downloadImage}
          className="text-white text-xs bg-transparent border-white border px-5 py-2 rounded-2xl"
        >
          Save Challenge for Posting
        </button>
      </footer>
    </div>
  );
};

export default Card;
