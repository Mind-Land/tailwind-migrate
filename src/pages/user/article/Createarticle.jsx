import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { HiNewspaper } from "react-icons/hi";

function Createarticle() {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  useEffect(() => {
    console.log("nilai text", text);
  });

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <section className="px-4 pt-24 pb-14 md:pt-20  max-w-screen-lg mx-auto h-screen">
          <div className=" flex gap-4 bg-white p-16 h-full border border-gray-200 rounded-lg shadow ">
            <HiNewspaper className="w-12 h-12 text-gray-600" />
            <div className="w-full">
              <ReactQuill
                value={text}
                onChange={handleChange}
                className="h-full "
              ></ReactQuill>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Createarticle;
