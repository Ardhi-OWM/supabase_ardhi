"use strict";
exports.__esModule = true;
var actions_1 = require("./actions");
var link_1 = require("next/link");
var layout_1 = require("@/app/layout");
function AuthPage() {
    return (React.createElement(layout_1["default"], { hideFooter: true },
        React.createElement("div", { className: "flex min-h-screen" },
            React.createElement("div", { className: "flex flex-col justify-between bg-green-500 w-1/2 p-12" },
                React.createElement("h1", { className: "text-xl font-bold" }, "Ardhi Project"),
                React.createElement("blockquote", { className: "mt-auto" },
                    React.createElement("p", { className: "text-sx" }, "\u201CThis App brings the geo-tech world closer to the non-tech world. Let the non-tech audience visualize your analyis and download data effortlessly.\u201D"),
                    React.createElement("footer", { className: "mt-4" }, " Ardhi"))),
            React.createElement("div", { className: "flex flex-col justify-center items-center w-1/2 p-12" },
                React.createElement("h2", { className: "text-2xl font-bold" }, " Access Your Ardhi Account"),
                React.createElement("p", { className: "mt-2 mb-6 text-gray-500" }, "Enter your email and Password to Login"),
                React.createElement("form", { className: "w-full max-w-sm flex flex-col gap-4" },
                    React.createElement("label", { htmlFor: "email", className: "text-sm font-medium" }, "Email"),
                    React.createElement("input", { id: "email", name: "email", type: "email", required: true, className: "w-full border border-gray-500/[.25] rounded-md px-3 py-2" }),
                    React.createElement("label", { htmlFor: "password", className: "text-sm font-medium" }, "Password"),
                    React.createElement("input", { id: "password", name: "password", type: "password", required: true, className: "w-full border border-gray-500/[.25] rounded-md px-3 py-2" }),
                    React.createElement("button", { formAction: actions_1.login, className: "w-full bg-green-500 hover:bg-green-700 py-2 rounded-md mt-4" }, "Log in"),
                    React.createElement("p", { className: "text-gray-500 text-sm mt-6" },
                        "Don't have an account? Then ",
                        " ",
                        React.createElement(link_1["default"], { href: "/signup", className: "text-blue-500 underline" }, "Sign Up"),
                        " instead.")),
                React.createElement("p", { className: "text-gray-500 text-sm mt-8" },
                    "By clicking continue, you agree to our",
                    " ",
                    React.createElement("a", { href: "/terms-of-service", className: "text-blue-500 underline" }, "Terms of Service"),
                    " ",
                    "and",
                    " ",
                    React.createElement("a", { href: "/privacy-policy", className: "text-blue-500 underline" }, "Privacy Policy"))))));
}
exports["default"] = AuthPage;
