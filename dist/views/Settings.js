import { navigate } from "../main.js";
export function SettingsView(app, state) {
    var _a, _b, _c, _d;
    app.innerHTML = `
    <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h1 class="text-sm leading-relaxed mb-4">Settings</h1>
        <button id="cuseBtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Change user
        </button>
        <button id="cavtBtn" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
            Change avatar
        </button>
        <button id="cfrBtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Friends
        </button>
        <button id="gbcBtn" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
            Go back
        </button>
    </div>
  `;
    (_a = document.getElementById("cuseBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => navigate("/profile"));
    (_b = document.getElementById("cavtBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => navigate("/avatar"));
    (_c = document.getElementById("cfrBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => navigate("/chat"));
    (_d = document.getElementById("gbcBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => navigate("/"));
}
