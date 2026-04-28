/* Quest copy and artifacts. Edit this file when the story/content changes. */
window.FINERD_CONTENT = {
  levels: [
    {
      id: 1,
      name: "THE ENCOUNTER",
      accent: "violet",
      dialogues: [
        {
          speaker: "market-nerd",
          text: "О, ще один FinTech стартап. Б'юсь об заклад, ви зараз розкажете мені, як важливо перестати пити лате, щоб купити квартиру..."
        },
        {
          speaker: "finerd",
          text: "[ERROR: Mass-market detected]\n\nМи не вчимо економити на каві. Ми автоматизуємо хаос для тих, у кого є Excel-табличка на 12 вкладок і кого бісить, коли баланс не сходиться на два центи."
        },
        {
          speaker: "market-nerd",
          text: "Excel-табличка? Контроль складних фінансів? AI, який реально забирає рутину, а не просто грає роль чат-бота?"
        },
        {
          speaker: "finerd",
          text: "Ага. Шукаємо маркетингового нерд-інтерна, який докопається до суті, а не просто запустить рекламу «в лоб»."
        },
        {
          speaker: "market-nerd",
          text: "Тоді в мене є для вас збережений сейв-файл. Дозвольте представитись."
        }
      ],
      action: { label: "LOAD PROFILE", next: 2 }
    },
    {
      id: 2,
      name: "THE GRIND",
      accent: "cyan",
      dialogues: [
        {
          speaker: "market-nerd",
          text: "Я не прийшов із великого FinTech. Моя школа — це хардкорний сервісний та B2B маркетинг."
        },
        {
          speaker: "finerd",
          text: "[Analyzing stats...]\n\nЗвучить як generic CV noise. Доведи."
        },
        {
          speaker: "market-nerd",
          text: "За 3 роки я закрив маркетингові квести для 25+ українських бізнесів. Згенерував 4000+ заявок у нішах, де трафік заради трафіку не працює."
        },
        {
          speaker: "market-nerd",
          text: "Там важлива реальна потреба людини. Я навчився досліджувати страхи аудиторії, збирати воронки, писати меседжі, що працюють, і доводити все до конверсії."
        },
        {
          speaker: "finerd",
          text: "[Stats verified] ✓\n\n25+ бізнесів. 4000+ заявок. Не один рекламний кабінет, а весь шлях від інсайту до конверсії."
        }
      ],
      action: { label: "NEXT LEVEL", next: 3 }
    },
    {
      id: 3,
      name: "THE MAIN QUEST",
      accent: "blue",
      dialogues: [
        {
          speaker: "finerd",
          text: "Окей, скіли є. Але чому ми? Чому не чергова агенція чи крипто-проєкт?"
        },
        {
          speaker: "market-nerd",
          text: "Бо мене драйвить ваша ніша. Ви не робите продукт для всіх. Ви будуєте контроль-центр для фінансових контрол-фріків. Мені близька ця ідентичність."
        },
        {
          speaker: "market-nerd",
          text: "Я хочу в AI-native IT-продукт. Туди, де я можу не просто крутити рекламний кабінет, а заходити з боку UGC, лендингів, ком'юніті, віральності та постійно тестувати нові гіпотези."
        },
        {
          speaker: "finerd",
          text: "Хм. Якщо finerd для фінансових нердів, то ти...?"
        },
        {
          speaker: "market-nerd",
          text: "Маркетинговий нерд. Той, який любить, коли сходяться не тільки цифри, а й аудиторія, канал, меседж та CTA."
        }
      ],
      action: { label: "INSPECT AI SKILLS", next: 4 }
    },
    {
      id: 4,
      name: "SKILL TREE",
      accent: "violet",
      dialogues: [
        {
          speaker: "finerd",
          text: "Ми тут шукаємо AI-ентузіастів. Але якщо ти просто генеруєш тексти в ChatGPT — це геймовер."
        },
        {
          speaker: "market-nerd",
          text: "AI для мене — не кнопка «зроби красиво». Це мій другий мозок, який дає когнітивну гнучкість."
        },
        {
          speaker: "market-nerd",
          text: "Я використовую AI як research partner, щоб витягувати факти.\nЯк критика: «де тут звучить банально?»\nЯк систему: парсинг джерел → кластеризація інсайтів → генерація хуків → жорстке ручне QA."
        },
        {
          speaker: "market-nerd",
          text: "Codex і Claude Code допомагають мені збирати робочі системи — від маркетингового ресерчу до автоматизацій та бізнес-логіки."
        },
        {
          speaker: "finerd",
          text: "[Verification complete] ✓\n\nГалюцинацій не виявлено. Корпоративної ванілі — нуль."
        }
      ],
      action: { label: "SHOW PROOF OF WORK", next: 5 }
    },
    {
      id: 5,
      name: "ARTIFACTS",
      accent: "yellow",
      dialogues: [
        {
          speaker: "market-nerd",
          text: "Щоб не бути голослівним, ось мої артефакти. Я не просто уважно прочитав вашу вакансію. Я заліз глибше за бриф."
        },
        {
          speaker: "finerd",
          text: "Покажи, що маєш в інвентарі."
        }
      ],
      artifacts: [
        {
          icon: "📜",
          title: "PRODUCT TEARDOWN",
          description: "Аудит бренду finerd + 5 growth-гіпотез",
          content: `<p><strong>Що я зрозумів про finerd:</strong></p>
<ul>
<li>Не «ще один трекер витрат», а AI-контроль-центр для складних фінансів</li>
<li>Аудиторія — control freaks із Excel-табличками, не масовий юзер</li>
<li>AI = невидимий оператор, що прибирає рутину, а не чат-бот</li>
<li>Invite-only — не штучна недоступність, а відбір «своїх»</li>
<li>Privacy-first: read-only, no credentials, subscription model</li>
</ul>
<p style="margin-top:16px;"><strong>Growth-гіпотези:</strong></p>
<ul>
<li>Financial nerd test як lead magnet (self-selection + shareability)</li>
<li>UGC «тільки фінерди зрозуміють» (identity humor → saves/comments)</li>
<li>Reddit value-first треди (калькулятори, розбори → qualified traffic)</li>
<li>Family privacy messaging (conversion angle для Family CFO)</li>
<li>AI routine demo: «було вручну → стало автоматично»</li>
</ul>`
        },
        {
          icon: "🧪",
          title: "UGC HOOKS",
          description: "10 хуків для TikTok/Shorts",
          content: `<p><strong>Хуки під short-form video:</strong></p>
<ul>
<li>«Як зрозуміти, що ви фінерд: у вас є таблиця для таблиць»</li>
<li>«Budgeting app: додайте витрати. Ви: а де борги, активи, бізнес?»</li>
<li>«Якщо 2 центи не сходяться — це не OCD, це продуктова можливість»</li>
<li>«3 фінансові рутини, які AI має забрати в людей негайно»</li>
<li>«Чому "просто веди бюджет" не працює для складних фінансів»</li>
<li>«Коли сімейні фінанси потребують прозорості, але не стеження»</li>
<li>«POV: у тебе не сходиться 0.37, і тепер це вечірній квест»</li>
<li>«Excel, прости: AI забирає нічну зміну»</li>
<li>«3 ознаки, що ти не "занадто контролюєш", а просто фінерд»</li>
<li>«Що має бути в app для людей, які не сплять, коли не сходиться баланс?»</li>
</ul>`
        },
        {
          icon: "🗺️",
          title: "FIRST 30 DAYS",
          description: "План перших 30 днів роботи",
          content: `<p><strong>Week 1:</strong> Listen & Map</p>
<p style="color:#A9B0AE;font-size:12px;">Продуктовий онбординг, аудит поточних каналів, user interviews, competitor scan</p>
<p style="margin-top:12px;"><strong>Week 2:</strong> Ship & Test</p>
<p style="color:#A9B0AE;font-size:12px;">Перші UGC-тести, лендинг-варіанти для 2 сегментів, Reddit value-first пост</p>
<p style="margin-top:12px;"><strong>Week 3:</strong> Analyze & Double Down</p>
<p style="color:#A9B0AE;font-size:12px;">Метрики перших тестів, A/B copy, community engagement аналіз</p>
<p style="margin-top:12px;"><strong>Week 4:</strong> Package & Scale</p>
<p style="color:#A9B0AE;font-size:12px;">Упакувати learnings, скейлити те, що спрацювало, підготувати наступний sprint</p>`
        }
      ],
      action: { label: "PROCEED TO FINAL BOSS", next: 6 }
    },
    {
      id: 6,
      name: "FINAL BOSS",
      accent: "green",
      dialogues: [
        {
          speaker: "finerd",
          text: "[CANDIDATE SCAN COMPLETE]\n\nКандидат пройшов Financial Nerd Test.\nСтатус: AI-native маркетинговий нерд підтверджено."
        },
        {
          speaker: "market-nerd",
          text: "Якщо ваш хаос потребує автоматизації, а ваш маркетинг — системного нерда, мій ко-оп режим відкритий."
        }
      ],
      action: { label: "GAME COMPLETE", next: null }
    }
  ]
};
