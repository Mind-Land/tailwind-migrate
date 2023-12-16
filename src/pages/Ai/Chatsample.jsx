import { Button } from "flowbite-react";
import { HiPaperAirplane } from "react-icons/hi";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Sendchat from "./dummycomp/Sendchat";
import Recievechat from "./dummycomp/Recievechat";
import "react-loading-skeleton/dist/skeleton.css";
import { useRef, useEffect } from "react";

function Chatsample() {
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const scrollContainerRef = useRef();

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, isTyping]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);
    setIsTyping(inputText !== "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isTyping) {
      const newUserInput = { text: userInput, type: "user" };
      setMessages([...messages, newUserInput]);
      setIsTyping(false);
      setUserInput("");
      setLoading(true);

      // Pass the user's input to handleOpenAi
      await handleOpenAi(newUserInput.text);

      setLoading(false);
    }
  };

  const config = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(config);

  const handleOpenAi = async (input) => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${input} 
        jelaskan secara singkat seakan kamu adalah seorang mental health konsultan
        `,
        temperature: 0.5,
        max_tokens: 500,
      });

      const newResponse = { text: response.data.choices[0].text, type: "ai" };

      // Use the functional form of setMessages to ensure correct state update
      setMessages((prevMessages) => [...prevMessages, newResponse]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = { text: "Error fetching AI response", type: "ai" };

      // Use the functional form of setMessages to ensure correct state update
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setLoading(false);
    scrollToBottom();
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <section className="max-w-screen-lg mx-auto ">
          <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
            <div
              id="messages"
              className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch scrollbar-hide pt-20"
              ref={scrollContainerRef}
            >
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                        Hai, Kenalin aku Rafiq. kalau ada yang kamu pikirin
                        mendingan kamu ngomongin aja ke aku, aku bakal jadi
                        temen yang setia dengerin keluhan kamu
                      </span>
                    </div>
                  </div>
                  <img
                    src="/img/rafiq.jpg"
                    alt="My profile"
                    className="w-6 h-6 rounded-full order-1"
                  />
                </div>
              </div>
              {messages.map((message, index) => (
                <div className="chat-message" key={index}>
                  <div
                    className={
                      message.type === "user"
                        ? "flex items-end justify-end"
                        : "flex items-end"
                    }
                  >
                    {message.type === "user" ? (
                      <Sendchat name="Guest" text={message.text} />
                    ) : (
                      <Recievechat name="AI" text={message.text} />
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="kiriman flex justify-end mb-5">
                  <Sendchat name="Guest" text={<>Sedang mengetik...</>} />
                </div>
              )}
              {loading && (
                <div className="balasan flex justify-start mb-5">
                  <Recievechat name="AI" text={<>Sedang Mengetik...</>} />
                </div>
              )}
            </div>
            <div className="border-t-2 border-gray-200 dark:border-gray-700 px-4 pt-4 mb-2 sm:mb-0">
              <div className="relative flex">
                <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
                  <input
                    autoComplete="off"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-color-primary-500 focus:border-color-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-color-primary-500 dark:focus:border-color-primary-500
                    "
                    onChange={handleInputChange}
                    value={userInput}
                  />
                  <Button color="primary" onClick={handleSubmit}>
                    <HiPaperAirplane className="w-6 h-6" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Chatsample;
