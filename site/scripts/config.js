/* Shared constants and mutable game state. */
window.FINERD_CONFIG = {
  avatarSrc: "assets/avatar-card.png",
  finerdLogoSrc: "assets/finerd-logo.svg",
  typingSpeedMs: 18,
  totalLevels: window.FINERD_CONTENT.levels.length
};

window.FINERD_STATE = {
  started: false,
  currentLevel: 0,
  currentDialogue: 0,
  isTyping: false,
  typingTimeout: null,
  currentFullText: "",
  gameComplete: false
};
