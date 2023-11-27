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

  },
  badge:{
    "root": {
      "base": "flex h-fit items-center gap-1 font-semibold",
      "color": {
        "info": "bg-color-info-100 text-color-info-800 dark:bg-color-info-200 dark:text-color-info-800 group-hover:bg-color-info-200 dark:group-hover:bg-color-info-300",
        "gray": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
        "failure": "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
        "success": "bg-color-success-100 text-color-success-800 dark:bg-color-success-200 dark:text-color-success-900 group-hover:bg-color-success-200 dark:group-hover:bg-color-success-300",
        "warning": "bg-color-warning-100 text-color-warning-800 dark:bg-color-warning-200 dark:text-color-warning-900 group-hover:bg-color-warning-200 dark:group-hover:bg-color-warning-300",
        "indigo": "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
        "purple": "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
        "pink": "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
        "primary": "bg-color-primary-100 text-color-primary-800 dark:bg-color-primary-200 dark:text-color-primary-900 group-hover:bg-color-primary-200 dark:group-hover:bg-color-primary-300",
        "cyan": "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
        "dark": "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
        "light": "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
        "green": "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
        "lime": "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
        "red": "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
        "teal": "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
        "yellow": "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300"
      },
      "href": "group",
      "size": {
        "xs": "p-1 text-xs",
        "sm": "p-1.5 text-sm"
      }
    },
    "icon": {
      "off": "rounded px-2 py-0.5",
      "on": "rounded-full p-1.5",
      "size": {
        "xs": "w-3 h-3",
        "sm": "w-3.5 h-3.5"
      }
    }
  }
};

export default customTheme