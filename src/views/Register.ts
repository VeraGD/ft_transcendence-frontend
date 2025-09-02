import { navigate } from "../main";

export function RegisterView(app: HTMLElement, state: any): void {
  app.innerHTML = `
    <div class="text-center mb-4">
        <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
        <p class="text-poke-light text-xs">PONG</p>
    </div>
    <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h2 class="text-sm leading-relaxed mb-4">Registration</h2>
        <p class="text-sm leading-relaxed mb-4">Connect with 42.</p>
        <div class="flex justify-center">
            <button id="regButton" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-red-900 rounded hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
                Enter
            </button>
        </div>
    </div>
  `;

  document.getElementById("regButton")?.addEventListener("click", () => {
    state.player.alias = "42User";
    state.player.user = "42Userrr";
    navigate("/profile");
  });
}