import { navigate } from "../main.js";
import { updateHeader } from "./Header.js";
export function AvatarView(app, state) {
    app.innerHTML = `
    <div class="text-center mb-4">
        <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
        <p class="text-poke-light text-xs">PONG</p>
    </div>
    <div class="bg-poke-light bg-opacity-60 text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h1 class="text-sm leading-relaxed mb-4">Choose an avatar</h1>
        <div class="grid grid-cols-3 gap-4">
            ${Array.from({ length: 9 }, (_, i) => `
              <div class="flex flex-col items-center">
                <img src="/assets/avatar${i + 1}.png" alt="Avatar ${i + 1}" class="w-20 h-20 mb-2 border-2 border-poke-dark rounded-lg shadow-md" />
                <button class="bg-poke-blue bg-opacity-80 text-poke-light py-1 px-2 text-sm border-2 border-poke-dark rounded hover:bg-gradient-to-b hover:from-poke-blue hover:to-blue-600 hover:bg-opacity-100 active:animate-press" data-avatar="${i + 1}">
                  Select
                </button>
              </div>
            `).join("")}
        </div>
    </div>
  `;
    document.querySelectorAll("[data-avatar]").forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.getAttribute("data-avatar");
            if (!value)
                return;
            state.player.avatar = Number(value);
            updateHeader(state);
            navigate("/");
        });
    });
}
