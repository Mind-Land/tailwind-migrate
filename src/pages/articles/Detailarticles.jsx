import { Button } from "flowbite-react";
import Getdetailarticle from "../templates/Getdetailarticle";

function Detailarticles() {
  return (
    <>
      <main className="pt-24 pb-16 lg:pt-28 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator &amp; CEO Flowbite
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Best practices for successful prototypes
              </h1>
            </header>
            <Getdetailarticle ></Getdetailarticle>
            {/* <p>
              It also includes a JavaScript file that enables interactive
              components, such as modals, dropdowns, and datepickers which you
              can optionally include into your project via CDN or NPM.
            </p>
            <p>
              You can check out the{" "}
              <a href="https://flowbite.com/docs/getting-started/quickstart/">
                quickstart guide
              </a>{" "}
              to explore the elements by including the CDN files into your
              project. But if you want to build a project with Flowbite I
              recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.
            </p>
            <p>
              Youll also receive a lot of useful application UI, marketing UI,
              and e-commerce pages that can help you get started with your
              projects even faster. You can check out this{" "}
              <a href="https://flowbite.com/docs/components/tables/">
                comparison table
              </a>{" "}
              to better understand the differences between the open-source and
              pro version of Flowbite.
            </p>
            <h2>When does design come in handy?</h2>
            <p>
              While it might seem like extra work at a first glance, here are
              some key moments in which prototyping will come in handy:
            </p>
            <ol>
              <li>
                <strong>Usability testing</strong>. Does your user know how to
                exit out of screens? Can they follow your intended user journey
                and buy something from the site you’ve designed? By running a
                usability test, you’ll be able to see how users will interact
                with your design once it’s live;
              </li>
              <li>
                <strong>Involving stakeholders</strong>. Need to check if your
                GDPR consent boxes are displaying properly? Pass your prototype
                to your data protection team and they can test it for real;
              </li>
              <li>
                <strong>Impressing a client</strong>. Prototypes can help
                explain or even sell your idea by providing your client with a
                hands-on experience;
              </li>
              <li>
                <strong>Communicating your vision</strong>. By using an
                interactive medium to preview and test design elements,
                designers and developers can understand each other — and the
                project — better.
              </li>
            </ol>
            <h3>Laying the groundwork for best design</h3>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              Lets start by including the CSS file inside the <code>head</code>{" "}
              tag of your HTML.
            </p>
            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3>Type classification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <h4>Old-Style serifs</h4>
            <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ul>
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
              alt=""
            />
            <ol>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ol>
            <h3>Laying the best for successful prototyping</h3>
            <p>
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
            <blockquote>
              <p>
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </blockquote>
            <h4>Code example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>

            <h4>Table example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Date &amp; Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>United States</td>
                  <td>April 21, 2021</td>
                  <td>
                    <strong>$2,300</strong>
                  </td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>May 31, 2021</td>
                  <td>
                    <strong>$300</strong>
                  </td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>June 3, 2021</td>
                  <td>
                    <strong>$2,500</strong>
                  </td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>June 23, 2021</td>
                  <td>
                    <strong>$3,543</strong>
                  </td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>July 6, 2021</td>
                  <td>
                    <strong>$99</strong>
                  </td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>August 23, 2021</td>
                  <td>
                    <strong>$2,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Best practices for setting up your prototype</h3>
            <p>
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If you’re simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if you’re going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
            <p>
              <strong>Consider your user</strong>. To create an intuitive user
              flow, try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you
              time by setting you on the right path.
            </p>
            <p>
              <strong>Start from the inside out</strong>. A nice way to both
              organize your tasks and create more user-friendly prototypes is by
              building your prototypes ‘inside out’. Start by focusing on what
              will be important to your user, like a Buy now button or an image
              gallery, and list each element by order of priority. This way,
              you’ll be able to create a prototype that puts your users’ needs
              at the heart of your design.
            </p>
            <p>
              And there you have it! Everything you need to design and share
              prototypes — right in Flowbite Figma.
            </p> */}
            <section className="not-format">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion (20)
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows={6}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required=""
                    defaultValue={""}
                  />
                </div>
                <Button color="primary">
                  Kirim komentar
                </Button>
              </form>
              <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"
                      />
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment1Button"
                    data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment1"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"
                      />
                      Jese Leos
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-02-12" title="February 12th, 2022">
                        Feb. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment2Button"
                    data-dropdown-toggle="dropdownComment2"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment2"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>Much appreciated! Glad you liked it ☺️</p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"
                      />
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-03-12" title="March 12th, 2022">
                        Mar. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment3Button"
                    data-dropdown-toggle="dropdownComment3"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment3"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  The article covers the essentials, challenges, myths and
                  stages the UX designer should consider while creating the
                  design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        alt="Helene Engels"
                      />
                      Helene Engels
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-06-23" title="June 23rd, 2022">
                        Jun. 23, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment4Button"
                    data-dropdown-toggle="dropdownComment4"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownComment4"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Thanks for sharing this. I do came from the Backend
                  development and explored some of the tools to design my Side
                  Projects.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default Detailarticles;
