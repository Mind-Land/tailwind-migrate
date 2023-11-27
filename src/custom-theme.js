const customTheme = {
  button: {
    color: {
      primary: 'text-white bg-color-primary-500 hover:bg-color-primary-600 focus:ring-4 focus:ring-color-primary-300 font-medium rounded-lg text-sm dark:bg-color-primary-600 dark:hover:bg-color-primary-700 focus:outline-none dark:focus:ring-color-primary-800',
      success: 'text-white bg-color-success-500 hover:bg-color-success-600 focus:ring-4 focus:ring-color-success-300 font-medium rounded-lg text-sm dark:bg-color-success-600 dark:hover:bg-color-success-700 focus:outline-none dark:focus:ring-color-success-800',
      info: 'text-white bg-color-info-500 hover:bg-color-info-600 focus:ring-4 focus:ring-color-info-300 font-medium rounded-lg text-sm dark:bg-color-info-600 dark:hover:bg-color-info-700 focus:outline-none dark:focus:ring-color-info-800',
      warning: 'text-white bg-color-warning-500 hover:bg-color-warning-600 focus:ring-4 focus:ring-color-warning-300 font-medium rounded-lg text-sm dark:bg-color-warning-600 dark:hover:bg-color-warning-700 focus:outline-none dark:focus:ring-color-warning-800',
      danger: 'text-white bg-color-danger-500 hover:bg-color-danger-600 focus:ring-4 focus:ring-color-danger-300 font-medium rounded-lg text-sm dark:bg-color-danger-600 dark:hover:bg-color-danger-700 focus:outline-none dark:focus:ring-color-danger-800',
    },
  },
  navbar: {
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0",
      active: {
        on: "bg-color-primary-500 text-white dark:text-white md:bg-transparent md:text-color-primary-500",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-color-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: ""
      }
    },

  }
};

export default customTheme