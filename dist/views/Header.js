import { navigate } from "../main.js";
export function updateHeader(state) {
    var _a, _b;
    const header = document.querySelector("header");
    if (!header)
        return;
    header.innerHTML = `
      <div class="relative flex items-center justify-center">
        <p class="text-lg font-bold">PONG</p>
        ${state.player.avatar !== null && state.player.avatar !== undefined
        ? `<div class="absolute right-4 flex items-center space-x-2">
                    <img src="/assets/avatar${state.player.avatar}.png"
                     id="avBtn"
                     alt="avatar"
                     class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"/>
                    <img src="/assets/settings.png"
                     id="settingsBtn"
                     alt="settings"
                     class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"/>
                </div>`
        : ""}
      </div>
    `;
    (_a = document.getElementById("settingsBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => navigate("/settings"));
    (_b = document.getElementById("avBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => navigate("/statistics"));
}
