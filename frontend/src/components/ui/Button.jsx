/* eslint-disable react/prop-types */

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
