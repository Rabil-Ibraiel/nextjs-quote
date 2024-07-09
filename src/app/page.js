"use client";
import { useEffect, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setLoading(false);
        setData(quote);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, [counter]);
  if (loading) {
    return "<h1>Loading...</h1>";
  } else {
    let tweet =
      '"' +
      data.content +
      '"' +
      "%0A" +
      "%0A" +
      "- " +
      data.author +
      "%0A" +
      "For more: www.quotebyrabil.com";
    return (
        <main className="" id="quote-box">
          <div className="relative max-w-[800px] w-[800px] pt-20 min-h-[200px] h-fit bg-black text-white rounded-lg flex flex-col justify-between gap-16 px-12 py-4">
            <p className="absolute top-0 left-0 mt-2 ml-2 bg-white w-fit px-2 py-1 text-[12px] rounded-md text-black font-bold">
              quote number: {counter}
            </p>
            <div>
              <h1 id="text" className="text-4xl font-light text-center">
                {data.content}
              </h1>
              <p id="author" className="text-right font-extralight mt-12">
                - {data.author}
              </p>
            </div>

            <div className="flex justify-between items-center text-white">
              <a
                id="tweet-quote"
                href={`twitter.com/intent/tweet`}
                target="top"
              >
                <FaSquareXTwitter className="text-3xl" />
              </a>
              <button
                id="new-quote"
                className="text-2xl"
                onClick={() => {
                  if (data) {
                    setCounter((prev) => prev + 1);
                  }
                }}
              >
                New quote
              </button>
            </div>
          </div>
          
        </main>
    );
  }
}
