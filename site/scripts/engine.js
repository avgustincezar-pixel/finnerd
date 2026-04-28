/* Game engine: level flow, typewriter, artifacts, and final screen. */
const levels = window.FINERD_CONTENT.levels;
const config = window.FINERD_CONFIG;
const state = window.FINERD_STATE;
const els = window.FINERD_DOM;
const audio = window.FINERD_AUDIO;

function typeText(text, el, speed = config.typingSpeedMs) {
  clearTimeout(state.typingTimeout);
  state.isTyping = true;
  state.currentFullText = text;
  el.textContent = "";
  els.dialogueIndicator.style.opacity = "0";

  let index = 0;

  function tick() {
    if (index < text.length) {
      el.textContent = text.substring(0, index + 1);
      if (index % 3 === 0) audio.playBleep(300 + Math.random() * 200, 0.02);
      index++;
      state.typingTimeout = setTimeout(tick, speed);
      return;
    }

    state.isTyping = false;
    els.dialogueIndicator.style.opacity = "1";
  }

  tick();
}

function skipTypewriter(el) {
  clearTimeout(state.typingTimeout);
  el.textContent = state.currentFullText;
  state.isTyping = false;
  els.dialogueIndicator.style.opacity = "1";
}

function updateHud(level, levelIndex) {
  els.hudLevelLabel.textContent = `РІВЕНЬ ${level.id} / ${config.totalLevels}`;
  els.hudStatus.textContent = level.name;
  document.body.setAttribute("data-level", level.id);

  els.progressBlocks.forEach((block, index) => {
    block.classList.remove("active", "done");
    block.style.background = "";
    if (index < levelIndex) block.classList.add("done");
    if (index === levelIndex) block.classList.add("active");
  });

  els.progressBlocks[levelIndex].style.background = `var(--${level.accent})`;
}

function resetSceneState() {
  els.actionButtons.style.display = "none";
  els.sceneDecoration.innerHTML = "";
  els.charLeft.classList.remove("speaking", "idle");
  els.charRight.classList.remove("speaking", "idle");
}

function setLevel(levelIndex) {
  state.currentLevel = levelIndex;
  state.currentDialogue = 0;

  const level = levels[levelIndex];
  updateHud(level, levelIndex);
  resetSceneState();
  audio.playLevelUp();
  showDialogue();
}

function showDialogue() {
  const level = levels[state.currentLevel];
  const dialogue = level.dialogues[state.currentDialogue];

  if (!dialogue) {
    onDialoguesComplete();
    return;
  }

  const isNerd = dialogue.speaker === "market-nerd";

  els.dialogueContainer.classList.toggle("from-nerd", isNerd);
  els.dialogueContainer.classList.toggle("from-finerd", !isNerd);
  els.dialogueBox.classList.toggle("dialogue-box--nerd", isNerd);
  els.dialogueBox.classList.toggle("dialogue-box--finerd", !isNerd);

  els.speakerName.textContent = isNerd ? "Діма Шевченко / Marketing Nerd" : "finerd";
  els.speakerName.className = `speaker-name${isNerd ? "" : " system"}`;
  els.speakerAvatar.src = isNerd ? config.avatarSrc : config.finerdLogoSrc;
  els.speakerAvatar.style.display = "block";

  els.charLeft.classList.toggle("speaking", isNerd);
  els.charLeft.classList.toggle("idle", !isNerd);
  els.charRight.classList.toggle("speaking", !isNerd);
  els.charRight.classList.toggle("idle", isNerd);

  typeText(dialogue.text, els.dialogueText);
}

function onDialoguesComplete() {
  const level = levels[state.currentLevel];

  if (level.artifacts) showArtifactButtons(level.artifacts);

  if (level.action) {
    els.actionButtons.style.display = "flex";
    els.btnPrimary.textContent = level.action.label;
    els.btnPrimary.style.display = "inline-flex";
    if (level.artifacts) els.btnSecondary.style.display = "none";
  }

  els.dialogueIndicator.style.opacity = "0";
}

function showArtifactButtons(artifacts) {
  const html = artifacts.map((artifact, index) => `
    <button class="btn-artifact" data-artifact="${index}">
      <span class="artifact-btn-icon">${artifact.icon}</span>
      <span class="artifact-btn-label">${artifact.title}</span>
      <span class="artifact-btn-desc">${artifact.description}</span>
    </button>
  `).join("");

  els.sceneDecoration.innerHTML = `<div class="artifact-grid">${html}</div>`;

  els.sceneDecoration.querySelectorAll(".btn-artifact").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      openArtifact(artifacts[parseInt(btn.dataset.artifact, 10)]);
    });
  });
}

function openArtifact(artifact) {
  els.artifactTitle.textContent = `${artifact.icon} ${artifact.title}`;
  els.artifactBody.innerHTML = artifact.content;
  els.artifactOverlay.style.display = "flex";
  audio.playBleep(660, 0.06);
}

function closeArtifact() {
  els.artifactOverlay.style.display = "none";
}

function advance() {
  if (state.gameComplete) return;

  if (state.isTyping) {
    skipTypewriter(els.dialogueText);
    return;
  }

  if (els.actionButtons.style.display === "flex") return;

  state.currentDialogue++;
  showDialogue();
}

function advanceLevel() {
  const level = levels[state.currentLevel];

  if (!level.action || level.action.next === null) {
    showFinalScreen();
    return;
  }

  const nextIndex = levels.findIndex((item) => item.id === level.action.next);
  if (nextIndex >= 0) setLevel(nextIndex);
}

function showFinalScreen() {
  state.gameComplete = true;
  els.dialogueContainer.classList.remove("visible");
  els.scene.classList.remove("visible");

  els.progressBlocks.forEach((block) => {
    block.classList.remove("active");
    block.classList.add("done");
  });

  els.hudLevelLabel.textContent = "QUEST COMPLETE";
  els.hudStatus.textContent = "★ FINERD FIT ★";
  els.finalCta.style.display = "flex";

  audio.playLevelUp();
  setTimeout(audio.playLevelUp, 400);
}

function startGame() {
  if (state.started) return;
  state.started = true;

  audio.playBleep(523, 0.1);
  setTimeout(() => audio.playBleep(659, 0.1), 100);
  setTimeout(() => audio.playBleep(784, 0.1), 200);

  els.startScreen.classList.add("hidden");
  setTimeout(() => {
    els.startScreen.style.display = "none";
    els.hud.classList.add("visible");
    els.scene.classList.add("visible");
    els.dialogueContainer.classList.add("visible");
    setLevel(0);
  }, 800);
}

window.FINERD_ENGINE = {
  advance,
  advanceLevel,
  closeArtifact,
  startGame
};
