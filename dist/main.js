const state = {
    player: { alias: "", user: "" }
};
// Exponer navigate al window
window.navigate = navigate;
function router() {
    var _a, _b, _c, _d, _e, _f, _g;
    const app = document.getElementById("app");
    if (!app)
        return;
    const route = window.location.pathname;
    switch (route) {
        case "/registrer":
            app.innerHTML = `
            <div class="text-center mb-4">
                <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
                <p class="text-poke-light text-xs">PONG</p>
            </div>
            <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
            <h2 class="text-sm leading-relaxed mb-4">Registration</h2>
            <p class="text-sm leading-relaxed mb-4">
                Connect with 42.
            </p>
          <div class="flex justify-center">
    <button id="regButton"
      class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-red-900 rounded 
             hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
       Enter
    </button>
        </div>
        
            </div>
        `;
            (_a = document.getElementById("regButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                state.player.alias = "42User";
                state.player.user = "42Userrr";
                navigate("/");
            });
            (_b = document.getElementById("withourreg")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
                navigate("/");
            });
            break;
        case "/game":
            app.innerHTML = `
          <div class="text-center mb-4">
                <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
                <p class="text-poke-light text-xs">PONG</p>
          </div>
          <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
            <h2 class="text-sm leading-relaxed mb-4">GAME</h2>
            <p class="text-sm leading-relaxed mb-4">
              Welcome, ${state.player.alias || "Player"}!
              START PLAY.
            </p>
            <button id="goBackBtn"
              class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
              Go Back
            </button>
          </div>
        `;
            const goBackBtnG = document.getElementById("goBackBtn");
            goBackBtnG === null || goBackBtnG === void 0 ? void 0 : goBackBtnG.addEventListener("click", () => navigate("/"));
            break;
        case "/tournament":
            app.innerHTML = `
            <div class="text-center mb-4">
                <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
                <p class="text-poke-light text-xs">PONG</p>
            </div>
            <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
            <h2 class="text-sm leading-relaxed mb-4">TOURNAMENT</h2>
            <p class="text-sm leading-relaxed mb-4">
                Welcome, ${state.player.alias || "Player"}!
                Classification.
            </p>
            <button id="goBackBtn2"
                class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
                Go Back
            </button>
            </div>
        `;
            const goBackBtnT2 = document.getElementById("goBackBtn2");
            goBackBtnT2 === null || goBackBtnT2 === void 0 ? void 0 : goBackBtnT2.addEventListener("click", () => navigate("/"));
            break;
        case "/chat":
            app.innerHTML = `
            <div class="text-center mb-4">
                <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
                <p class="text-poke-light text-xs">PONG</p>
            </div>
            <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
            <h2 class="text-sm leading-relaxed mb-4">CHAT</h2>
            <p class="text-sm leading-relaxed mb-4">
                Welcome, ${state.player.alias || "Player"}!
                THIS IS THE CHAAAAT.
            </p>
            <button id="goBackBtn3"
                class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
                Go Back
            </button>
            </div>
        `;
            const goBackBtn3 = document.getElementById("goBackBtn3");
            goBackBtn3 === null || goBackBtn3 === void 0 ? void 0 : goBackBtn3.addEventListener("click", () => navigate("/"));
            break;
        case "/profile":
            app.innerHTML = `
            <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
            <h2 class="text-sm leading-relaxed mb-4">PROFILE</h2>
            <p class="text-sm leading-relaxed mb-4">
                Welcome, ${state.player.alias || "Player"}!
                This is your nickname.
            </p>
            <input type="text" id="nickEnter" placeholder="New nickname"
                class="border-2 border-pixel-black px-4 py-2 mb-4 w-full" />
            <button id="nickButton"
                class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
                Enter new nickname
            </button>
            <p class="text-sm mb-4">
                Welcome, ${state.player.user || "Player"}!
                This is your username.
            </p>
            <input type="text" id="userEnter" placeholder="New username"
                class="border-2 border-pixel-black px-4 py-2 mb-4 w-full" />
            <button id="userButton"
                class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
                Enter new username
            </button>
            <button id="goBackBtn"
                class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
                Go Back
            </button>
            </div>
        `;
            const nickEnter = document.getElementById("nickEnter");
            const nickButton = document.getElementById("nickButton");
            const userEnter = document.getElementById("userEnter");
            const userButton = document.getElementById("userButton");
            nickButton === null || nickButton === void 0 ? void 0 : nickButton.addEventListener("click", submitNick);
            nickEnter === null || nickEnter === void 0 ? void 0 : nickEnter.addEventListener("keydown", (e) => {
                if (e.key === "Enter")
                    submitNick();
            });
            userButton === null || userButton === void 0 ? void 0 : userButton.addEventListener("click", submitUser);
            userEnter === null || userEnter === void 0 ? void 0 : userEnter.addEventListener("keydown", (e) => {
                if (e.key === "Enter")
                    submitUser();
            });
            (_c = document.getElementById("goBackBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => navigate("/"));
            break;
        default: // Home
            app.innerHTML = `
          <div class="text-center mb-4">
                <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
                <p class="text-poke-light text-xs">PONG</p>
            </div>
          <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
          <h1 class="text-sm leading-relaxed mb-4">[ ft Transcendence ]</h1>
          <p class="text-sm leading-relaxed mb-4">Welcome, ${state.player.alias || "Player"}!</p>
          <button id="gameBtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Game
            </button>
          <button id="tournamentBtn" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
            Tournament
            </button>
          <button id="chatBtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Chat
            </button>
          <button id="profBtn" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                        hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
            Profile
            </button>
          </div>
        `;
            (_d = document.getElementById("gameBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => navigate("/game"));
            (_e = document.getElementById("tournamentBtn")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => navigate("/tournament"));
            (_f = document.getElementById("chatBtn")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => navigate("/chat"));
            (_g = document.getElementById("profBtn")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", () => navigate("/profile"));
            break;
    }
}
function navigate(path) {
    if (window.location.pathname !== path) {
        window.history.pushState({}, "", path);
    }
    router();
}
function submitNick() {
    const input = document.getElementById("nickEnter");
    if (!input)
        return;
    const alias = input.value.trim();
    if (!alias) {
        alert("Please enter a valid nickname!");
        return;
    }
    state.player.alias = alias;
}
function submitUser() {
    const input = document.getElementById("userEnter");
    if (!input)
        return;
    const user = input.value.trim();
    if (!user) {
        alert("Please enter a valid username!");
        return;
    }
    state.player.user = user;
}
// Inicialización
window.addEventListener("load", () => {
    if (!state.player.alias) {
        navigate("/registrer");
    }
    else {
        router();
    }
});
window.addEventListener("popstate", router);
export {};
// tsc
// docker build -t pixel-theme .
//  docker run -p 3000:3000 pixel-theme
