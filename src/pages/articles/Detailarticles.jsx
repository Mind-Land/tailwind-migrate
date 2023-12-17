// import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";

import Getdetailarticle from "../templates/Getdetailarticle";

function Detailarticles() {
  const { slug } = useParams();

  return (
    <>
      <main className="pt-24 pb-16 lg:pt-28 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <Getdetailarticle slug={slug} />
          </article>
        </div>
      </main>
    </>
  );
}

export default Detailarticles;
