const state = {
    player: { alias: "", user: "" }
};
function router() {
    var _a, _b, _c;
    const route = window.location.pathname;
    const app = document.getElementById("app");
    if (!app)
        return; // seguridad por si no existe el div #app
    switch (route) {
        case "/tournament":
            app.innerHTML = `
          <div class="bg-pixel-white border-2 border-pixel-black p-6 max-w-sm shadow-pixel">
            <h2 class="text-lg mb-4">TOURNAMENT</h2>
            <p class="text-sm mb-4">
              Welcome, ${state.player.alias || "Player"}!
              Classification.
            </p>
            <button id="goBackBtn"
              class="mt-4 bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
              Go Back
            </button>
          </div>
        `;
            const goBackBtnT = document.getElementById("goBackBtn");
            goBackBtnT === null || goBackBtnT === void 0 ? void 0 : goBackBtnT.addEventListener("click", () => navigate("/"));
            break;
        case "/game":
            app.innerHTML = `
          <div class="bg-pixel-white border-2 border-pixel-black p-6 max-w-sm shadow-pixel">
            <h2 class="text-lg mb-4">GAME</h2>
            <p class="text-sm mb-4">
              Welcome, ${state.player.alias || "Player"}!
              START PLAY.
            </p>
            <button id="goBackBtn"
              class="mt-4 bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
              Go Back
            </button>
          </div>
        `;
            const goBackBtnG = document.getElementById("goBackBtn");
            goBackBtnG === null || goBackBtnG === void 0 ? void 0 : goBackBtnG.addEventListener("click", () => navigate("/"));
            break;
        case "/chat":
            app.innerHTML = `
          <div class="bg-pixel-white border-2 border-pixel-black p-6 max-w-sm shadow-pixel">
            <h2 class="text-lg mb-4">CHAT</h2>
            <p class="text-sm mb-4">
              Welcome, ${state.player.alias || "Player"}!
              THIS IS THE CHAAAAT.
            </p>
            <button id="goBackBtn"
              class="mt-4 bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
              Go Back
            </button>
          </div>
        `;
            const goBackBtnC = document.getElementById("goBackBtn");
            goBackBtnC === null || goBackBtnC === void 0 ? void 0 : goBackBtnC.addEventListener("click", () => navigate("/"));
            break;
        case "/profile":
            app.innerHTML = `
          <div class="bg-pixel-white border-2 border-pixel-black p-6 max-w-sm shadow-pixel">
            <h2 class="text-lg mb-4">PROFILE</h2>
            <p class="text-sm mb-4">
              Welcome, ${state.player.alias || "Player"}!
              This is your nickname.
            </p>
            <input type="text" id="nickEnter" placeholder="New nickname"
              class="border-2 border-pixel-black px-4 py-2 mb-4 w-full" />
            <button id="nickButton"
              class="bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
              Enter new nickname
            </button>
            <p class="text-sm mb-4">
              Welcome, ${state.player.user || "Player"}!
              This is your username.
            </p>
            <input type="text" id="userEnter" placeholder="New username"
              class="border-2 border-pixel-black px-4 py-2 mb-4 w-full" />
            <button id="userButton"
              class="bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
              Enter new username
            </button>
            <button id="goBackBtn"
              class="mt-4 bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
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
            (_a = document.getElementById("goBackBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => navigate("/"));
            break;
        case "/registrer":
            app.innerHTML = `
          <div class="bg-pixel-white border-2 border-pixel-black p-6 max-w-sm shadow-pixel">
            <h2 class="text-lg mb-4">Registration</h2>
            <p class="text-sm mb-4">
              Connect with 42.
            </p>
            <button id="regButton"
              class="bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
              Enter
            </button>
            <button id="withourreg"
              class="mt-4 bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2">
              Without register
            </button>
          </div>
        `;
            (_b = document.getElementById("regButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
                state.player.alias = "42User";
                state.player.user = "42Userrr";
                navigate("/");
            });
            (_c = document.getElementById("withourreg")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
                navigate("/");
            });
            break;
        default: // Home
            app.innerHTML = `
          <h1 class="text-2xl mb-8">[ ft Transcendence ]</h1>
          <p class="text-sm mb-2">
            Welcome, <span id="playerAlias">${state.player.alias || "Player"}</span>!
          </p>
          <button class="bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2"
            onclick="navigate('/game')">
            Game
          </button>
          <button class="bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2 ml-2"
            onclick="navigate('/tournament')">
            Tournament
          </button>
          <button class="bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2 ml-2"
            onclick="navigate('/chat')">
            Chat
          </button>
          <button class="bg-pixel-white text-pixel-black border-2 border-pixel-black px-6 py-2 ml-2"
            onclick="navigate('/profile')">
            Profile
          </button>
        `;
    }
}
function navigate(path) {
    if (window.location.pathname !== path) {
        window.history.pushState({}, "", path);
        router();
    }
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
function updatePlayerAlias() {
    const aliasSpan = document.getElementById("playerAlias");
    if (aliasSpan)
        aliasSpan.textContent = state.player.alias || "Player";
}
window.addEventListener("load", () => {
    if (!state.player.alias && window.location.pathname === "/") {
        navigate("/registrer");
    }
    else {
        router();
        updatePlayerAlias();
    }
});
window.addEventListener("popstate", () => {
    router();
    updatePlayerAlias();
});
window.navigate = navigate;
export {};
