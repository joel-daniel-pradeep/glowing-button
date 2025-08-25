var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
var GlowButton = (_a) => {
  var _b = _a, { label, color = "#4CAF50" } = _b, props = __objRest(_b, ["label", "color"]);
  const styles = {
    padding: "10px 20px",
    backgroundColor: color,
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    boxShadow: `0 0 10px ${color}`,
    transition: "all 0.3s ease-in-out"
  };
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({
      style: styles,
      onMouseEnter: (e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.boxShadow = `0 0 10px ${color}`;
      }
    }, props), {
      children: label
    })
  );
};
var index_default = GlowButton;
export {
  GlowButton,
  index_default as default
};
