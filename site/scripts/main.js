/* Event wiring. Keep page behavior changes here. */
const dom = window.FINERD_DOM;
const appState = window.FINERD_STATE;
const engine = window.FINERD_ENGINE;

dom.btnStart.addEventListener("click", engine.startGame);

dom.gameViewport.addEventListener("click", (event) => {
  if (!appState.started || appState.gameComplete) return;

  const ignoredClick = event.target.closest(".action-buttons") ||
    event.target.closest(".btn-artifact") ||
    event.target.closest(".artifact-overlay") ||
    event.target.closest(".final-cta");

  if (!ignoredClick) engine.advance();
});

dom.btnPrimary.addEventListener("click", (event) => {
  event.stopPropagation();
  engine.advanceLevel();
});

dom.artifactClose.addEventListener("click", (event) => {
  event.stopPropagation();
  engine.closeArtifact();
});

dom.artifactOverlay.addEventListener("click", (event) => {
  if (event.target === dom.artifactOverlay) engine.closeArtifact();
});

document.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();

    if (!appState.started) {
      engine.startGame();
    } else if (dom.artifactOverlay.style.display === "flex") {
      engine.closeArtifact();
    } else if (dom.actionButtons.style.display === "flex") {
      engine.advanceLevel();
    } else {
      engine.advance();
    }
  }

  if (event.key === "Escape" && dom.artifactOverlay.style.display === "flex") {
    engine.closeArtifact();
  }
});
