// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const ChatAiPage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const config = new Configuration({
    // eslint-disable-next-line no-undef
    // apiKey: "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",
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
        setOutput(
          answerAi.data.choices[0].text || "Tidak ada jawaban ditemukan"
        );
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

  return (
    <div className="h-screen">
      <section className="bg-white dark:from-gray-800 dark:bg-gray-900 h-full flex flex-col items-center justify-center">
        <div className="">
          <h1 className="text-center text-3xl mt-8 mb-4 font-bold text-gray dark:text-gray-100">
            Mind Land AI Chat
          </h1>
          <p className="text-gray dark:text-gray-100 text-center">
            Silahkan tanyakan pertanyaan anda di bawah!
          </p>
          <h2 className="text-2xl mt-4 mb-4 font-bold text-gray dark:text-gray-100">
            Tuliskan Pertanyaan Untuk Mind Land AI
          </h2>
          <form onSubmit={find}>
            <input
              type="text"
              placeholder="Apa itu anxiety?"
              className="input input-bordered w-full my-2"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="btn btn-info  text-white rounded-lg mt-2"
              disabled={loading}
            >
              Cari Jawaban
            </button>
          </form>
          <h2 className="text-2xl mt-4 mb-4 font-bold text-gray dark:text-gray-100">
            Hasil Jawaban Mind Land AI
          </h2>
          <textarea
            className="textarea textarea-bordered w-full my-2"
            placeholder="Jawaban.."
            value={output}
            readOnly
            style={{ height: "250px", resize: "vertical" }}
          />
        </div>
      </section>
    </div>
  );
};

export default ChatAiPage;
