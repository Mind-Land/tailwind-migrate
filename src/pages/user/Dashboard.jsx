function Dashboard() {
  return (
    <>
      <div className="p-4 sm:ml-64 bg-white dark:bg-gray-900 min-h-screen">
        <div className="rounded-lg mt-20">
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl lg:py-10 lg:px-4">
              <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                  Powering innovation at{" "}
                  <span className="font-extrabold">200,000+</span> companies
                  worldwide
                </h2>
                <p className="mb-4 font-light">
                  Track work across the enterprise through an open,
                  collaborative platform. Link issues across Jira and ingest
                  data from other software development tools, so your IT support
                  and operations teams have richer contextual information to
                  rapidly respond to requests, incidents, and changes.
                </p>
                <p className="mb-4 font-medium">
                  Deliver great service experiences fast - without the
                  complexity of traditional ITSM solutions.Accelerate critical
                  development work, eliminate toil, and deploy changes with
                  ease.
                </p>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
          </section>
          <section className="bg-white dark:bg-gray-900">
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
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
