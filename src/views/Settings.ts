import { navigate } from "../main.js";

export function SettingsView(app: HTMLElement, state: any): void {
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

  document.getElementById("cuseBtn")?.addEventListener("click", () => navigate("/profile"));
  document.getElementById("cavtBtn")?.addEventListener("click", () => navigate("/avatar"));
  document.getElementById("cfrBtn")?.addEventListener("click", () => navigate("/chat"));
  document.getElementById("gbcBtn")?.addEventListener("click", () => navigate("/"));
}