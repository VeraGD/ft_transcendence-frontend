interface Player {
    alias: string;
    user: string;
    avatar: number;
  }
  
interface State {
    player: Player;
}
  
const state: State = {
  player: { alias: "", user: "", avatar: 0 }
};
  
  // Exponer navigate al window
(window as any).navigate = navigate;
  
function router(): void {
  const app = document.getElementById("app");
  if (!app) return;

  const route = window.location.pathname;

  switch (route) {
  case "/register":
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
  
      document.getElementById("regButton")?.addEventListener("click", () => {
          state.player.alias = "42User";
          state.player.user = "42Userrr";
          navigate("/profile");
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
      goBackBtnG?.addEventListener("click", () => navigate("/"));
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
      goBackBtnT2?.addEventListener("click", () => navigate("/"));
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
      goBackBtn3?.addEventListener("click", () => navigate("/"));
      break;

  case "/profile":
      app.innerHTML = `
      <div class="text-center mb-4">
              <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
              <p class="text-poke-light text-xs">PONG</p>
          </div>
          <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
          <h2 class="text-sm leading-relaxed mb-4">PROFILE</h2>
          <p class="text-sm mb-4">
              Welcome, ${state.player.user || "Player"}!
              This is your username.
          </p>
          <input type="text" id="userEnter" placeholder="New username"
              class="border-2 border-pixel-black px-4 py-2 mb-4 w-full" />
          <div  class = "flex justify-center">
            <button id="userButton"
              class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                      hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
              Enter new username
          </button>   
          </div>
          
          </div>
      `;

      const userEnter = document.getElementById("userEnter") as HTMLInputElement | null;
      const userButton = document.getElementById("userButton");

      document.getElementById("userButton")?.addEventListener("click", () => {
        const input = document.getElementById("userEnter") as HTMLInputElement | null;
        if (!input) return;
      
        const user = input.value.trim();
        if (!user) {
          app.innerHTML = `
            <div class="text-center mb-4">
              <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
              <p class="text-poke-light text-xs">PONG</p>
            </div>
            <div class="bg-poke-light text-poke-red border-3 border-poke-red p-4 rounded-lg shadow-lg">
              <h2 class="text-sm leading-relaxed mb-4">Registration</h2>
              <p class="text-sm leading-relaxed mb-4">Error: EMPTY USER</p>
              <div class="flex justify-center">
                <button id="returnBtn"
                  class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-red-900 rounded 
                          hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
                  Return
                </button>
              </div>
            </div>
          `;
        
          document.getElementById("returnBtn")?.addEventListener("click", () => {
            navigate("/profile");
          });
        
          return;
        }
        
      
        state.player.user = user;
        localStorage.setItem("player", JSON.stringify(state.player));
        navigate("/choose");
      });
      break;
    case "/choose":
      app.innerHTML = `
        <div class="text-center mb-4">
              <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
              <p class="text-poke-light text-xs">PONG</p>
          </div>
        <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h1 class="text-sm leading-relaxed mb-4">New avatar</h1>
        <button id="withABtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                      hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
          Choose new avatar
          </button>
        <button id="withoutABtn" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded 
                      hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
          Continue without avatar
          </button>
        </div>
      `;

      document.getElementById("withABtn")?.addEventListener("click", () => navigate("/avatar"));
      document.getElementById("withoutABtn")?.addEventListener("click", () => navigate("/"));
      // Poner que el avatar es el default
      break;

    case "/avatar":
      app.innerHTML = `
        <div class="text-center mb-4">
          <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
          <p class="text-poke-light text-xs">PONG</p>
        </div>
        <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
          <h1 class="text-sm leading-relaxed mb-4">Choose an avatar</h1>
    
          <div class="grid grid-cols-3 gap-4">
            ${Array.from({ length: 9 }, (_, i) => `
              <div class="flex flex-col items-center">
                <img src="/assets/avatar${i + 1}.png" alt="Avatar ${i + 1}" 
                      class="w-20 h-20 mb-2 border-2 border-poke-dark rounded-lg shadow-md" />
                <button 
                  class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-1 px-2 text-sm border-2 border-poke-dark rounded 
                          hover:from-blue-500 hover:to-blue-600 active:animate-press"
                  data-avatar="${i + 1}">
                  Select
                </button>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    
      // Selección de avatar
      document.querySelectorAll("[data-avatar]").forEach(btn => {
        btn.addEventListener("click", () => {
          const value = btn.getAttribute("data-avatar");
          if (!value) return;

          const avatarNumber = Number(value);
          state.player.avatar = avatarNumber;

          //console.log("Avatar elegido:", avatarNumber);
          navigate("/");
        });
      });
    
      //document.getElementById("withoutABtn")?.addEventListener("click", () => navigate("/"));
      break;

    default: // Home
      app.innerHTML = `
        <div class="text-center mb-4">
              <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
              <p class="text-poke-light text-xs">PONG</p>
          </div>
        <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h1 class="text-sm leading-relaxed mb-4">[ ft Transcendence ]</h1>
        <p class="text-sm leading-relaxed mb-4">Welcome, ${state.player.user || "Player"}!</p>
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

        </div>
      `;
      document.getElementById("gameBtn")?.addEventListener("click", () => navigate("/game"));
      document.getElementById("tournamentBtn")?.addEventListener("click", () => navigate("/tournament"));
      document.getElementById("chatBtn")?.addEventListener("click", () => navigate("/chat"));
      document.getElementById("profBtn")?.addEventListener("click", () => navigate("/profile"));
      break;
  }
  updateHeaderFooterVisibility(route);
}
  
function navigate(path: string): void {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
  }
  router();
}

function saveState() {
  localStorage.setItem("player", JSON.stringify(state.player));
}
  

  
// Inicialización
window.addEventListener("load", () => {
  const stored = localStorage.getItem("player");
  if (stored) {
    state.player = JSON.parse(stored);
  }

  if (!state.player.alias) {
    navigate("/register");
  } else {
    router();
  }
});

function updateHeaderFooterVisibility(route: string) {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  if (!header || !footer) return;

  if (route === "/register" || route === "/profile" || route === "/choose" || route === "/avatar") {
    header.classList.add("hidden");
    footer.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
    footer.classList.remove("hidden");
  }
}  

window.addEventListener("popstate", router);
  
export {}; // para evitar conflictos TS
  
  // tsc && docker build -t pixel-theme . && docker run -p 3000:3000 pixel-theme
  // docker build -t pixel-theme .
  //  docker run -p 3000:3000 pixel-theme