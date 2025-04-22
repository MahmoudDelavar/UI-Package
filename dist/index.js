"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_react = require("react");
var import_react_slot = require("@radix-ui/react-slot");

// src/utils/cn/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
var cn = (...inputs) => {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
};

// src/components/Button/libs/getButtonClassNames.ts
var import_class_variance_authority = require("class-variance-authority");
var getButtonClassNames = (0, import_class_variance_authority.cva)("transition-colors", {
  defaultVariants: {
    disabled: false,
    intent: "primary"
  },
  variants: {
    disabled: {
      false: "",
      true: [
        "!bg-primary-disabled !text-disabled",
        "hover:!bg-primary-disabled active:!bg-primary-disabled",
        "hover:cursor-not-allowed"
      ]
    },
    intent: {
      primary: [
        "bg-primary text-inverse",
        "hover:bg-primary-hover",
        "active:bg-primary-pressed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focused"
      ],
      secondary: [
        "bg-secondary text-inverse",
        "hover:bg-secondary-hover",
        "active:bg-secondary-pressed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-focused"
      ],
      neutral: [
        "bg-neutral text-body",
        "hover:bg-neutral-disabled",
        "active:bg-neutral-pressed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-focused"
      ],
      warning: [
        "bg-warning text-inverse",
        "hover:bg-warning-hover",
        "active:bg-warning-pressed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warning-focused"
      ],
      danger: [
        "bg-danger text-inverse",
        "hover:bg-danger-hover",
        "active:bg-danger-pressed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-focused"
      ],
      outline: [
        "border-2 text-success",
        "hover:border-2 hover:border-primary-hover hover:bg-primary-hover hover:text-inverse",
        "active:border-2 active:border-primary-pressed active:bg-transparent active:text-success",
        "focus-visible:border-2 focus-visible:border-primary-focused focus-visible:outline-none"
      ],
      subtle: [
        "text-success",
        "hover:bg-primary-hover/15 hover:text-success",
        "active:bg-primary-pressed/20 active:text-success",
        "focus-visible:border-2 focus-visible:border-primary-focused/15 focus-visible:outline-none"
      ]
    }
  },
  compoundVariants: [
    {
      intent: "outline",
      disabled: true,
      className: [
        "border-2 border-disabled !bg-transparent !text-disabled",
        "hover:!border-disabled hover:!bg-transparent active:!bg-transparent"
      ]
    },
    {
      intent: "subtle",
      disabled: true,
      className: [
        "!bg-transparent !text-disabled",
        "hover:!border-disabled hover:!bg-transparent active:!bg-transparent"
      ]
    }
  ]
});

// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
  ({
    asChild = false,
    className,
    disabled = false,
    intent = "primary",
    size = "md",
    ...properties
  }, reference) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      {
        disabled: Boolean(disabled),
        ref: reference,
        className: cn(
          getButtonClassNames({
            className,
            disabled,
            intent
          }),
          {
            "rounded-lg px-6 py-2 text-lg font-bold": size === "lg",
            "rounded-md px-5 py-2 text-base font-bold": size === "md",
            "rounded-sm px-3 py-1 text-sm font-medium": size === "sm"
          }
        ),
        ...properties
      }
    );
  }
);
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
