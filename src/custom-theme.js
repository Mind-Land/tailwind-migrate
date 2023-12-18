const customTheme = {
  button: {
    color: {
      primary:
        "text-white bg-color-primary-500 hover:bg-color-primary-600 focus:ring-4 focus:ring-color-primary-300 font-medium rounded-lg text-sm dark:bg-color-primary-600 dark:hover:bg-color-primary-700 focus:outline-none dark:focus:ring-color-primary-800",
      success:
        "text-white bg-color-success-500 hover:bg-color-success-600 focus:ring-4 focus:ring-color-success-300 font-medium rounded-lg text-sm dark:bg-color-success-600 dark:hover:bg-color-success-700 focus:outline-none dark:focus:ring-color-success-800",
      info: "text-white bg-color-info-500 hover:bg-color-info-600 focus:ring-4 focus:ring-color-info-300 font-medium rounded-lg text-sm dark:bg-color-info-600 dark:hover:bg-color-info-700 focus:outline-none dark:focus:ring-color-info-800",
      warning:
        "text-white bg-color-warning-500 hover:bg-color-warning-600 focus:ring-4 focus:ring-color-warning-300 font-medium rounded-lg text-sm dark:bg-color-warning-600 dark:hover:bg-color-warning-700 focus:outline-none dark:focus:ring-color-warning-800",
      danger:
        "text-white bg-color-danger-500 hover:bg-color-danger-600 focus:ring-4 focus:ring-color-danger-300 font-medium rounded-lg text-sm dark:bg-color-danger-600 dark:hover:bg-color-danger-700 focus:outline-none dark:focus:ring-color-danger-800",
      light:
        "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
    },
  },
  navbar: {
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0",
      active: {
        on: "bg-color-primary-500 text-white dark:text-white md:bg-transparent md:text-color-primary-500",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-color-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
  },
  badge: {
    root: {
      base: "flex h-fit items-center gap-1 font-semibold",
      color: {
        info: "bg-color-info-100 text-color-info-800 dark:bg-color-info-200 dark:text-color-info-800 group-hover:bg-color-info-200 dark:group-hover:bg-color-info-300",
        gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
        failure:
          "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
        success:
          "bg-color-success-100 text-color-success-800 dark:bg-color-success-200 dark:text-color-success-900 group-hover:bg-color-success-200 dark:group-hover:bg-color-success-300",
        warning:
          "bg-color-warning-100 text-color-warning-800 dark:bg-color-warning-200 dark:text-color-warning-900 group-hover:bg-color-warning-200 dark:group-hover:bg-color-warning-300",
        indigo:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
        purple:
          "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
        pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
        primary:
          "bg-color-primary-100 text-color-primary-800 dark:bg-color-primary-200 dark:text-color-primary-900 group-hover:bg-color-primary-200 dark:group-hover:bg-color-primary-300",
        cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
        dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
        light:
          "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
        green:
          "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
        lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
        red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
        teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
        yellow:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      },
      href: "group",
      size: {
        xs: "p-1 text-xs",
        sm: "p-1.5 text-sm",
      },
    },
    icon: {
      off: "px-2 py-0.5",
      on: "rounded p-1.5",
      size: {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5",
      },
    },
  },
  textinput: {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "sm:text-md p-4",
        },
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          info: "border-color-primary-500 bg-color-primary-50 text-color-primary-900 placeholder-color-primary-700 focus:border-color-primary-500 focus:ring-color-primary-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
        withRightIcon: {
          on: "pr-10",
          off: "",
        },
        withIcon: {
          on: "pl-10",
          off: "",
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg",
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: "",
        },
      },
    },
  },
};

export default customTheme;
