import { useState, useEffect } from "react";
import RadioQuestion from "../../components/RadioQuestion";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

function CheckAnxiety() {
  const [scores, setScores] = useState({
    Question1: -1,
    Question2: -1,
    Question3: -1,
    Question4: -1,
    Question5: -1,
    Question6: -1,
    Question7: -1,
  });

  const [allChecked, setAllChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    totalScore: 0,
    result: "",
  });

  useEffect(() => {
    const values = Object.values(scores);
    const allSelected = values.every((value) => value !== -1);
    setAllChecked(allSelected);
  }, [scores]);

  const handleRadioChange = (questionType, value) => {
    const newScores = { ...scores, [questionType]: value };
    setScores(newScores);
  };

  const showResults = (scores) => {
    let result = "";
    if (scores >= 0 && scores <= 4) {
      result = (
        <span>
          Hore! Skor kamu menunjukkan
          <strong>tidak ada gejala gangguan kecemasan.</strong> Jika kamu merasa
          ada gejala yang berkembang atau perlu ruang aman untuk curhat,
          konsultasi pada ahli.
        </span>
      );
    } else if (scores >= 5 && scores <= 9) {
      result = (
        <span>
          Skor kamu menandakan <strong> gangguan kecemasan ringan.</strong>
          Biasanya kamu masih dapat mengontrol kecemasanmu, namun kamu merasakan
          keresahan yang tidak dapat dijelaskan. Konsultasi dengan ahli
          kesehatan mental untuk mencari tahu penyebab dan solusinya.
        </span>
      );
    } else if (scores >= 10 && scores <= 14) {
      result = (
        <span>
          Skor kamu menandakan <strong>gangguan kecemasan sedang.</strong> Skor
          kamu menandakan . Kamu sering merasa gelisah dan kesulitan mengontrol
          kecemasanmu. Gejala fisik seperti gangguan tidur dan kesulitan
          berfokus mungkin lebih terasa, dan meningkat pada saat stres. Dapatkan
          bantuan ahli untuk memahami pikiran, perasaan, dan gejala yang kamu
          alami.
        </span>
      );
    } else if (scores >= 15 && scores <= 21) {
      result = (
        <span>
          Skor kamu menandakan <strong>gangguan kecemasan berat.</strong> Segera
          dapatkan pemeriksaan dari ahli kesehatan mental. Jika tidak diatasi,
          gangguan kecemasan berat dapat memengaruhi kemampuanmu melakukan
          aktivitas sehari-hari, mengambil keputusan, & merawat diri.
        </span>
      );
    }
    return result;
  };

  const calculateTotalScore = () => {
    let totalScore = 0;
    Object.values(scores).forEach((score) => {
      totalScore += score;
    });

    return totalScore;
  };

  const handleResult = () => {
    const totalScore = calculateTotalScore();
    const result = showResults(totalScore);
    setModalContent({ totalScore, result });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="h-auto dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="pt-20 mr-7">
          <div className="flex flex-col">
            <p className="dark:text-color-primary-200 text-gray-700">
              Dalam 2 minggu terakhir,
            </p>
            <p className="dark:text-white text-color-primary-900">
              Seberapa sering kamu merasa terganggu oleh hal berikut...
            </p>
          </div>
        </div>
        <div className="pt-4">
          <fieldset className="flex max-w-md flex-col gap-4">
            <RadioQuestion
              Question="Merasa gugup, cemas, atau gelisah?"
              QuestionType="Question1"
              onChange={(value) => handleRadioChange("Question1", value)}
              Id="Question1"
            />
            <RadioQuestion
              Question="Tidak dapat menghentikan atau mengontrol kekhawatiran?"
              QuestionType="Question2"
              onChange={(value) => handleRadioChange("Question2", value)}
              Id="Question2"
            />
            <RadioQuestion
              Question="Terlalu banyak mengkhawatirkan berbagai hal?"
              QuestionType="Question3"
              onChange={(value) => handleRadioChange("Question3", value)}
              Id="Question3"
            />
            <RadioQuestion
              Question="Sulit merasa santai?"
              QuestionType="Question4"
              onChange={(value) => handleRadioChange("Question4", value)}
              Id="Question4"
            />
            <RadioQuestion
              Question="Merasa kurang istirahat hingga sulit untuk diam?"
              QuestionType="Question5"
              onChange={(value) => handleRadioChange("Question5", value)}
              Id="Question5"
            />
            <RadioQuestion
              Question="Mudah kesal atau marah?"
              QuestionType="Question6"
              onChange={(value) => handleRadioChange("Question6", value)}
              Id="Question6"
            />
            <RadioQuestion
              Question="Merasa takut hal buruk akan terjadi?"
              QuestionType="Question7"
              onChange={(value) => handleRadioChange("Question7", value)}
              Id="Question7"
            />
            <button
              type="submit"
              className="bg-color-primary-500 p-3 text-white hover:bg-color-primary-600 focus:ring-4 focus:outline-none focus:ring-color-primary-300 font-medium rounded-lg text-sm mb-10"
              onClick={handleResult}
              disabled={!allChecked}
            >
              Check Kecemasan Berlebihan
            </button>
            {modalOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md">
                  <div className="flex justify-end">
                    <HiX
                      onClick={closeModal}
                      className="dark:bg-color-primary-500 w-5 h-5 rounded-sm"
                    ></HiX>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Hasil Test Kecemasan Berlebihan
                  </h3>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-white">
                      Total Score: {modalContent.totalScore}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-white">
                      {modalContent.result}
                    </p>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Link
                      onClick={closeModal}
                      to="/doctor"
                      className="bg-color-primary-500 p-3 text-white hover:bg-color-primary-600 focus:ring-4 focus:outline-none focus:ring-color-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      Cari Dokter
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default CheckAnxiety;
