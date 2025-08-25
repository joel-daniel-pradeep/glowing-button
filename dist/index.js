"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  GlowButton: () => GlowButton,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GlowButton
});
