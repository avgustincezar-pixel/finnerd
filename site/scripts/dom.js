/* DOM lookup map. Edit selectors here when markup changes. */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

window.FINERD_DOM = {
  startScreen: $("#startScreen"),
  btnStart: $("#btnStart"),
  hud: $("#hud"),
  hudLevelLabel: $("#hudLevelLabel"),
  hudStatus: $("#hudStatus"),
  progressBlocks: $$(".progress-block"),
  scene: $("#scene"),
  charLeft: $("#charLeft"),
  charRight: $("#charRight"),
  dialogueContainer: $("#dialogueContainer"),
  dialogueBox: $("#dialogueBox"),
  dialogueText: $("#dialogueText"),
  speakerName: $("#speakerName"),
  speakerAvatar: $("#speakerAvatar"),
  dialogueIndicator: $("#dialogueIndicator"),
  actionButtons: $("#actionButtons"),
  btnPrimary: $("#btnPrimary"),
  btnSecondary: $("#btnSecondary"),
  btnNextDialogue: $("#btnNextDialogue"),
  artifactOverlay: $("#artifactOverlay"),
  artifactCard: $("#artifactCard"),
  artifactTitle: $("#artifactTitle"),
  artifactBody: $("#artifactBody"),
  artifactClose: $("#artifactClose"),
  finalCta: $("#finalCta"),
  sceneDecoration: $("#sceneDecoration"),
  gameViewport: $("#gameViewport")
};
