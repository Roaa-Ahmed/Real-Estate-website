import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      //  data-error={props["data-error"] ? "yes" : "no"}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />
  );
}

export default Input 




// import * as React from "react";
// import { cn } from "@/lib/utils";

// const colorVariants = {
//   default: "",
//   error: "border-red-500 !text-red-600 placeholder:text-red-400",
//   success: "border-green-500 text-green-600 placeholder:text-green-400",
//   info: "border-blue-500 text-blue-600 placeholder:text-blue-400",
// };

// function Input({ className, type, variantColor = "default", ...props }) {
//   return (
//     <input
//       type={type}
//       data-slot="input"
//       className={`

//       ${colorVariants[variantColor]}
//         ${className}`
//       }
//       {...props}
//     />
//   );
// }

// export default Input;
// "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        // "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",