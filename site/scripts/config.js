/* Shared constants and mutable game state. */
window.FINERD_CONFIG = {
  avatarSrc: "assets/avatar.png",
  typingSpeedMs: 28,
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
