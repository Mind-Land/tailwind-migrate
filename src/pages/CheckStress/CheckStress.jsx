import { useState, useEffect } from "react";
import RadioQuestion from "../../components/RadioQuestion";

function CheckStress() {
  const [scores, setScores] = useState({
    Question1: -1,
    Question2: -1,
    Question3: -1,
    Question4: -1,
    Question5: -1,
    Question6: -1,
    Question7: -1,
    Question8: -1,
    Question9: -1,
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
      result =
        "Hore! Skor kamu menunjukkan tidak ada gejala depresi. Jika kamu merasa ada gejala yang berkembang atau perlu ruang aman untuk curhat, konsultasi pada ahli.";
    } else if (scores >= 5 && scores <= 9) {
      result =
        "Skor kamu menandakan depresi ringan. Kamu masih menjalani kegiatan sehari-hari, namun dengan kurang bersemangat atau merasa tertarik. Konsultasi dengan ahli kesehatan mental untuk mencari tahu penyebab dan solusinya.";
    } else if (scores >= 10 && scores <= 14) {
      result =
        "Skor kamu menandakan depresi sedang. Kamu masih menjalani kegiatan sehari-hari, namun dengan bersusah payah. Mungkin, kamu merasa lelah secara fisik dan emosional pada akhir hari. Dapatkan bantuan ahli untuk memahami pikiran, perasaan, dan gejala yang kamu alami.";
    } else if (scores >= 15 && scores <= 19) {
      result =
        "Skor kamu menandakan depresi sedang menuju berat. Mungkin kamu mengalami mood yang buruk dan terus menerus & gejala fisik yang terasa semakin berat. Kamu merasa rendah motivasi & menghindari aktivitas yang sebelumnya menyenangkanmu. Dapatkan bantuan ahli sekarang untuk mencari tahu langkah yang harus kamu ambil.";
    } else if (scores >= 20 && scores <= 27) {
      result =
        "Skor kamu menunjukkan depresi berat. Dapatkan bantuan ahli kesehatan mental sekarang untuk diperiksa secara mendetail & mendapat bantuan mengatasi keadaanmu. Jika tidak diatasi, depresi berat dapat membuatmu kehilangan orang tersayang & menurunkan kemampuanmu beraktivitas sehari-hari.";
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
    <div className="h-auto dark:bg-gray-900 px-5">
      <div className="flex flex-col items-center justify-center">
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
              Question="Kurang senang atau tertarik dalam kegiatan sehari-hari?"
              QuestionType="Question1"
              onChange={(value) => handleRadioChange("Question1", value)}
              Id="Question1"
            />
            <RadioQuestion
              Question="Merasa sedih, muram, dan putus asa?"
              QuestionType="Question2"
              onChange={(value) => handleRadioChange("Question2", value)}
              Id="Question2"
            />
            <RadioQuestion
              Question="Sulit tidur atau tidur nyenyak; atau terlalu banyak tidur?"
              QuestionType="Question3"
              onChange={(value) => handleRadioChange("Question3", value)}
              Id="Question3"
            />
            <RadioQuestion
              Question="Merasa lelah atau kekurangan energi?"
              QuestionType="Question4"
              onChange={(value) => handleRadioChange("Question4", value)}
              Id="Question4"
            />
            <RadioQuestion
              Question="Tidak napsu makan, atau terlalu banyak makan?"
              QuestionType="Question5"
              onChange={(value) => handleRadioChange("Question5", value)}
              Id="Question5"
            />
            <RadioQuestion
              Question="Merasa buruk tentang diri sendiri, atau merasa gagal atau mengecewakan diri atau keluargamu?"
              QuestionType="Question6"
              onChange={(value) => handleRadioChange("Question6", value)}
              Id="Question6"
            />
            <RadioQuestion
              Question="Kesulitan berkonsentrasi, seperti saat membaca koran atau menonton TV?"
              QuestionType="Question7"
              onChange={(value) => handleRadioChange("Question7", value)}
              Id="Question7"
            />
            <RadioQuestion
              Question="Bergerak atau berbicara dengan lambat hingga orang lain menyadarinya? Atau merasa kurang istirahat dan tidak bisa diam lebih dari biasanya?"
              QuestionType="Question8"
              onChange={(value) => handleRadioChange("Question8", value)}
              Id="Question8"
            />
            <RadioQuestion
              Question="Merasa lebih baik mati, atau berpikir ingin menyakiti diri sendiri?"
              QuestionType="Question9"
              onChange={(value) => handleRadioChange("Question9", value)}
              Id="Question9"
            />
            <button
              type="submit"
              className="bg-color-primary-500 p-3 text-white hover:bg-color-primary-600 focus:ring-4 focus:outline-none focus:ring-color-primary-300 font-medium rounded-lg text-sm mb-10"
              onClick={handleResult}
              disabled={!allChecked}
            >
              Kirim
            </button>
            {modalOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Hasil Test Depresi
                  </h3>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-white">
                      Total Score: {modalContent.totalScore}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-white">
                      {modalContent.result}
                    </p>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={closeModal}
                      className="bg-color-primary-500 p-3 text-white hover:bg-color-primary-600 focus:ring-4 focus:outline-none focus:ring-color-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      Tutup
                    </button>
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

export default CheckStress;