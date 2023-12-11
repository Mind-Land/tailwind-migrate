import { Button } from "flowbite-react";
import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import Typingskeleton from "../../components/Typingskeleton";
import Bubblechatsend from "../../components/Bubblechatsend";
import { Configuration, OpenAIApi } from "openai";
import Bubblechatreply from "../../components/Bubblechatreply";

function Chat() {
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

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
        prompt: input,
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
  };

  return (
    <>
      <div className="bg-white  dark:bg-gray-900 ">
        <div className="max-h-screen min-h-screen flex flex-col   max-w-screen-md  mx-auto">
          <div className="flex-1 pt-20 px-4 overflow-auto max-h-screen scrollbar-hide">
            <div className="flex justify-start mb-5">
              <div className="flex items-start gap-2.5">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="/img/rafiq.jpg"
                  alt="Jese image"
                />
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-xl dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      AI
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Hai, Kenalin aku Rafiq. kalau ada yang kamu pikirin
                    mendingan kamu ngomongin aja ke aku, aku bakal jadi temen
                    yang setia dengerin keluhan kamu
                  </p>
                </div>
              </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.type === "user"
                    ? "kiriman flex justify-end mb-5"
                    : "balasan flex justify-start mb-5"
                }
              >
                {message.type === "user" ? (
                  <Bubblechatsend name="Guest" text={message.text} />
                ) : (
                  <Bubblechatreply name="AI" text={message.text} />
                )}
              </div>
            ))}
            {isTyping && (
              <div className="kiriman flex justify-end mb-5">
                <Bubblechatsend name="Guest" text={<Typingskeleton />} />
              </div>
            )}
            {loading && (
              <div className="balasan flex justify-start mb-5">
                <Bubblechatreply name="AI" text={<Typingskeleton />} />
              </div>
            )}
          </div>

          <form
            className="flex-none p-4 flex gap-2 mb-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
              value={userInput}
            />
            <Button color="primary">
              <HiPaperAirplane className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;
