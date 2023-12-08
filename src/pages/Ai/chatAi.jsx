"use client";

import { Toast } from "flowbite-react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { HiClipboard, HiCheck } from "react-icons/hi";

const ChatAiPage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const config = new Configuration({
    //Ambil API KEY di .ENV
    apiKey: "",
  });

  const openai = new OpenAIApi(config);

  const find = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const promptKesehatanMental = `Tentang kesehatan mental: ${input}`;

      const answerAi = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: promptKesehatanMental,
        temperature: 0.5,
        max_tokens: 500,
      });

      if (answerAi.data.choices && answerAi.data.choices.length > 0) {
        const filteredAnswers = answerAi.data.choices.filter(
          (choice) =>
            choice.text.toLowerCase().includes("kesehatan mental") ||
            choice.text.toLowerCase().includes("mental health")
        );

        if (filteredAnswers.length > 0) {
          setOutput(filteredAnswers[0].text);
        } else {
          setOutput("Tidak ada jawaban ditemukan tentang kesehatan mental");
        }
      } else {
        setOutput("Tidak ada jawaban ditemukan");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setOutput("Error fetching AI response");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = output;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="h-screen">
      <section className="bg-gray-100 dark:bg-gray-900 h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-md p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-3xl mb-4 font-bold text-gray-800 dark:text-gray-100 text-center">
            Mind Land AI Chat
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Silakan tanyakan pertanyaan Anda tentang kesehatan mental di bawah!
          </p>
          <form onSubmit={find} className="mb-6">
            <input
              className="form-input border border-gray-300 rounded-md p-2 w-full dark:bg-gray-700 dark:text-white"
              type="text"
              placeholder="Apa itu anxiety?"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="btn btn-info text-white rounded-lg mt-2 w-full dark:text-white"
              disabled={loading}
            >
              {loading ? "Loading..." : "Cari Jawaban"}
            </button>
          </form>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Hasil Jawaban Mind Land AI
            </h2>
            <div
              className="card w-full p-4 rounded-md border border-gray-300 dark:border-gray-700 shadow-md overflow-y-auto relative"
              style={{ maxHeight: "250px", position: "relative" }}
            >
              <p className="text-gray-800 dark:text-gray-400">
                {output || "jawaban.."}
              </p>
              {output && (
                <button
                  onClick={copyToClipboard}
                  className="absolute bottom-2 right-2 p-2 rounded-full bg-color-primary-500 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition duration-300"
                >
                  <HiClipboard className="text-white" />
                </button>
              )}
            </div>
            {showToast && (
              <Toast
                className="mt-20"
                style={{
                  position: "fixed",
                  top: "20px",
                  left: "20px",
                  zIndex: "1000",
                }}
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  Berhasil menyalin Text.
                </div>
                <Toast.Toggle />
              </Toast>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatAiPage;
