function Dashboard() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-900">
        <section className="px-4 pt-24 md:pt-20">
          <div className="mx-auto max-w-screen-xl lg:py-10 lg:px-4">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                Temukan Keseimbangan Hidupmu Bersama Aplikasi Kesehatan Mental
                MIND LAND
              </h2>
              <p className="mb-4 font-light">
                Selamat datang di MIND LAND, platform konsultasi kesehatan
                mental revolusioner yang merangkul teknologi untuk mendukung
                kesejahteraan emosional Anda. Kami memahami bahwa kesehatan
                mental adalah bagian integral dari kebahagiaan dan kesuksesan
                hidup, dan itulah mengapa MIND LAND hadir untuk memberikan akses
                mudah ke layanan konsultasi melalui chat dengan dokter terkemuka
                dan asisten virtual cerdas. Di sini, kami tidak hanya membantu
                Anda menjaga keseimbangan pikiran, tetapi juga memberikan alat
                untuk mengukur tingkat stres Anda dan menyediakan artikel
                bermutu tentang kesehatan mental. Temukan keseimbangan hidup
                yang optimal dengan MIND LAND!
              </p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </section>
        <section className="px-4 pb-14">
          <div className="mx-auto max-w-screen-xl  lg:px-4">
            <div className="grid gap-4 md:grid-cols-3 text-gray-500 sm:text-lg dark:text-gray-400">
              <a
                href="#"
                className="group block hover:bg-color-primary-500  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-white text-gray-900 hover:text-white dark:text-white">
                  Baca artikel populer mengenai mental health
                </h5>
                <p className="font-normal group-hover:text-white text-gray-700 dark:text-gray-400">
                  Temukan wawasan baru melalui artikel populer tentang kesehatan
                  mental. Pahami tips praktis untuk menjaga kesehatan pikiran
                  dan emosimu.
                </p>
              </a>
              <a
                href="#"
                className="group block hover:bg-color-primary-500  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-white text-gray-900 hover:text-white dark:text-white">
                  Konsultasi bersama dokter yang expert di bidangnya
                </h5>
                <p className="font-normal group-hover:text-white text-gray-700 dark:text-gray-400">
                  Hubungi dokter terkemuka untuk mendapatkan pandangan
                  profesional tentang kesehatan mental Anda. Mulai perjalanan
                  menuju kehidupan yang lebih sehat hari ini.
                </p>
              </a>
              <a
                href="#"
                className="group block hover:bg-color-primary-500  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-white text-gray-900 hover:text-white dark:text-white">
                  Tidak perlu khawatir jika kamu butuh teman bicara
                </h5>
                <p className="font-normal group-hover:text-white text-gray-700 dark:text-gray-400">
                  Kami di sini untuk mendengarkan. Tak perlu merasa sendiri;
                  temukan teman bicara yang siap mendukungmu melalui setiap
                  perjalanan emosionalmu.
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
