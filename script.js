let chapters = [
    {
        name: "艾琳的挑戰",
        tasks: [
            { request: "我的第一個顧客來了，他想要簡單的清爽飲料，幫我吧！", three: "moscow mule", two: ["mojito"], order: ["vodka", "lime juice", "soda"], 
              threeComment: "3星：『顧客笑了，太好了！我的第一杯成功了！』", twoComment: "2星：『還行，但順序亂了，沒那麼清爽。』", oneComment: "1星：『這什麼啊？我還是新手，別這樣嘛…』", areas: ["烈酒區", "酸甜材料區", "清爽材料區"], story: "艾琳緊張地擦著吧台：『這是我第一天上班，別讓我搞砸啊！』",
              hints: ["『清爽的飲料通常需要氣泡，試試清爽材料區。』", "『基酒很重要，烈酒區有你要的東西。』", "『酸味是關鍵，去酸甜材料區看看吧。』"] },
            { request: "有個顧客看起來很累，他想要甜甜的酒，救救我！", three: "pina colada", two: ["mai tai"], order: ["rum", "pineapple juice"], 
              threeComment: "3星：『顧客說：謝謝你，我感覺好多了！』", twoComment: "2星：『甜是甜，但少了點熱帶風情。』", oneComment: "1星：『這一點都不甜，我要被炒了！』", areas: ["烈酒區", "酸甜材料區"], story: "艾琳看著疲憊的顧客：『他需要點甜頭，我得幫他振作起來！』",
              hints: ["『甜美的酒需要果汁，酸甜材料區有好東西。』", "『基酒是基礎，去烈酒區找找吧。』", "『熱帶風情很重要，試試酸甜材料區的材料。』"] }
        ],
        cutscene: "第一天結束：『艾琳鬆了口氣：多虧有你，酒吧還有希望！』"
    }
];

let sideQuests = {
    "joe": [
        { request: "我要測試你，給我一杯酸甜平衡的烈酒！", three: "margarita", two: ["daiquiri"], order: ["vodka", "lime juice", "syrup"], 
          success: "2星：『不錯，拿去2顆星！』", fail: "0星：『這不行！回去練練。』", areas: ["烈酒區", "酸甜材料區"], story: "喬冷冷地看著你：『新手，證明你的價值吧。』",
          hints: ["『酸甜平衡需要糖分，酸甜材料區有東西。』", "『烈酒是核心，去烈酒區看看。』", "『萊姆汁可能幫得上忙，試試酸甜材料區。』"] },
        { request: "酒吧很忙，顧客要濃烈的果香酒，快點！", three: "mai tai", two: ["daiquiri"], order: ["rum", "lime juice", "syrup", "pineapple juice"], 
          success: "2星：『還可以，2顆星給你。』", fail: "0星：『太慢了，下次快點！』", areas: ["烈酒區", "酸甜材料區"], story: "喬大喊：『酒吧人滿為患，別拖拖拉拉！』",
          hints: ["『果香需要果汁，酸甜材料區有你要的。』", "『濃烈的酒需要基酒，去烈酒區找。』", "『糖漿能平衡味道，試試酸甜材料區。』"] }
    ],
    "vip": [
        { request: "我要一杯清涼又微酸的夏日飲品，別讓我失望！", three: "mojito", two: ["moscow mule"], order: ["rum", "syrup", "lemon juice", "mint", "soda"], 
          success: "2星：『嗯，勉強及格，2顆星。』", fail: "0星：『這什麼垃圾？』", areas: ["烈酒區", "酸甜材料區", "清爽材料區"], story: "VIP不耐煩地敲著桌子：『快點，我可沒耐心等！』",
          hints: ["『夏日飲品需要清爽感，清爽材料區有東西。』", "『微酸需要檸檬，酸甜材料區看看吧。』", "『薄荷能讓酒更清涼，去清爽材料區找。』"] },
        { request: "給我一杯複雜又濃烈的調酒，證明你的實力！", three: "mai tai deluxe", two: ["mai tai"], order: ["rum", "lime juice", "syrup", "pineapple juice", "mint"], 
          success: "2星：『不錯，值得2顆星。』", fail: "0星：『一點也不奢華！』", areas: ["烈酒區", "酸甜材料區", "清爽材料區"], story: "VIP揚起眉毛：『我要的是頂級享受，懂嗎？』",
          hints: ["『複雜的調酒需要多種材料，酸甜材料區有驚喜。』", "『濃烈感來自基酒，去烈酒區吧。』", "『薄荷能增添層次，清爽材料區找找看。』"] }
    ]
};

let materials = [
    { value: "rum", text: "蘭姆酒" },
    { value: "vodka", text: "伏特加" },
    { value: "syrup", text: "糖漿" },
    { value: "lemon juice", text: "檸檬汁" },
    { value: "lime juice", text: "萊姆汁" },
    { value: "pineapple juice", text: "鳳梨汁" },
    { value: "mint", text: "薄荷葉" },
    { value: "soda", text: "蘇打水" }
];

const materialLabels = {
    "rum": "蘭姆酒",
    "vodka": "伏特加",
    "syrup": "糖漿",
    "lemon juice": "檸檬汁",
    "lime juice": "萊姆汁",
    "pineapple juice": "鳳梨汁",
    "mint": "薄荷葉",
    "soda": "蘇打水"
};

let baseLiquors = ["rum", "vodka"];
let currentChapterIndex = 0;
let currentTaskIndex = -1;
let completedTasks = { erin: 0, joe: 0, vip: 0 };
let playerStars = [0, 0, 0, 0];
let currentCharacter = null;
let errorCount = 0;
let reputation = 10;
let goldCoins = 5;
const WIN_REPUTATION = 30;
const LOSE_REPUTATION = 0;
let completedCharacters = [];

let cheer = new Audio("audio/cheer.mp3");
let sigh = new Audio("audio/sigh.mp3");

function showIntro() {
    let introText = "星光酒吧曾是城裡最熱鬧的地方，但近年生意下滑，老闆喬決定關閉酒吧。艾琳，一位對調酒充滿熱情的新手，請求喬給她機會。她說：『我不會讓你失望的！不過…我有點緊張，誰來幫我一把？』<br><br>【目標】：將酒館聲望提升至30即可獲勝！若聲望降至0，酒吧將倒閉。每次調製正確加2聲望與1金幣，錯誤扣1聲望與1金幣。用1金幣向資深酒保換取提示吧！";
    showCutscene(introText, () => {
        document.getElementById("character-selection").classList.remove("hidden");
        document.getElementById("overlay").classList.add("hidden");
    });
}

function startWithCharacter(character) {
    currentCharacter = character;
    goldCoins = 5;
    document.getElementById("task-counter").innerHTML = `已完成任務：${completedTasks[character]}/${character === "erin" ? chapters[currentChapterIndex].tasks.length : sideQuests[character].length}`;
    document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
    document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
    document.getElementById("character-selection").classList.add("hidden");
    showTaskSelection(character);
}

function showTaskSelection(character) {
    document.getElementById("task-selection").classList.remove("hidden");
    let tasksDiv = document.getElementById("tasks");
    tasksDiv.innerHTML = "";
    let tasks = character === "erin" ? chapters[currentChapterIndex].tasks : sideQuests[character];
    tasks.forEach((task, index) => {
        if (index >= completedTasks[character]) {
            let div = document.createElement("div");
            div.className = "task-option";
            div.innerHTML = `<p>${task.request}</p>`;
            div.onclick = () => selectTask(character, index);
            tasksDiv.appendChild(div);
        }
    });
}

function selectTask(character, index) {
    currentTaskIndex = index;
    let tasks = character === "erin" ? chapters[currentChapterIndex].tasks : sideQuests[character];
    let task = tasks[index];
    document.getElementById("task-selection").classList.add("hidden");
    showCutscene(task.story, () => {
        document.getElementById("game-container").classList.remove("hidden");
        if (character === "erin") {
            startGame();
        } else {
            startSideQuest(character);
        }
    });
}

function startGame() {
    let chapter = chapters[currentChapterIndex];
    let task = chapter.tasks[currentTaskIndex];
    document.getElementById("story").innerHTML = `艾琳：『${task.request}』`;
    document.getElementById("character-img").src = "images/erin_neutral.png";
    document.getElementById("task-counter").innerHTML = `已完成任務：${completedTasks.erin}/${chapter.tasks.length}`;
    document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
    document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
    document.getElementById("background-music").play();
    document.getElementById("result").innerHTML = "";
    document.getElementById("customer-expression").style.display = "none";
    errorCount = 0;
    generateMaterialInputs(task.order.length);
    document.getElementById("remaining-tasks").classList.add("hidden");
}

function startSideQuest(character) {
    let quest = sideQuests[character][currentTaskIndex];
    document.getElementById("story").innerHTML = `${character === "joe" ? "喬" : "VIP"}：『${quest.request}』`;
    document.getElementById("character-img").src = `images/${character}_neutral.png`;
    document.getElementById("task-counter").innerHTML = `已完成任務：${completedTasks[character]}/${sideQuests[character].length}`;
    document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
    document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
    document.getElementById("result").innerHTML = "";
    document.getElementById("customer-expression").style.display = "none";
    errorCount = 0;
    generateMaterialInputs(quest.order.length);
    document.getElementById("remaining-tasks").classList.add("hidden");
}

function generateMaterialInputs(count) {
    let inputsDiv = document.getElementById("material-inputs");
    inputsDiv.innerHTML = "";
    for (let i = 0; i < count; i++) {
        let select = document.createElement("select");
        select.className = "material-select";
        select.id = `material-${i}`;
        let placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.text = `順序 ${i + 1} - 選擇材料`;
        placeholder.disabled = true;
        placeholder.selected = true;
        select.appendChild(placeholder);
        materials.forEach(material => {
            let option = document.createElement("option");
            option.value = material.value;
            option.text = `${material.text} (${material.value})`;
            select.appendChild(option);
        });
        select.onchange = (e) => {
            checkDuplicateMaterials();
            if (i === 0) checkBaseLiquor(e.target.value);
        };
        inputsDiv.appendChild(select);
    }
}

function checkDuplicateMaterials() {
    let inputs = document.getElementsByClassName("material-select");
    let selected = [];
    let result = document.getElementById("result");
    for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].value;
        if (value && selected.includes(value)) {
            result.innerHTML = "提示：『不能重複輸入相同的材料！』";
            inputs[i].value = "";
            return;
        }
        if (value) selected.push(value);
    }
    result.innerHTML = "";
}

function checkBaseLiquor(value) {
    let result = document.getElementById("result");
    if (value && !baseLiquors.includes(value)) {
        result.innerHTML = "警示：『第一道要加基酒！請選擇蘭姆酒或伏特加。』";
        document.getElementById("material-0").value = "";
    } else {
        result.innerHTML = "";
    }
}

function getHint() {
    if (goldCoins <= 0) {
        document.getElementById("result").innerHTML = "提示：『金幣不足，無法獲得幫助！』";
        return;
    }
    goldCoins -= 1;
    document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
    let tasks = currentCharacter === "erin" ? chapters[currentChapterIndex].tasks : sideQuests[currentCharacter];
    let task = tasks[currentTaskIndex];
    let hints = task.hints;
    let randomHint = hints[Math.floor(Math.random() * hints.length)];
    document.getElementById("result").innerHTML = `資深酒保說：${randomHint}`;
}

function confirmSwitch(character) {
    if (character === currentCharacter) return;
    if (reputation <= 0) {
        alert("酒館聲望已為0，無法更換角色！");
        return;
    }
    if (confirm("你是否確定要更換其他人物？这會影響酒館的聲望（-2分）。")) {
        reputation -= 2;
        document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
        currentCharacter = character;
        currentTaskIndex = -1;
        checkGameStatus();
        showTaskSelection(character);
    }
}

function showCutscene(text, callback) {
    let overlay = document.getElementById("overlay");
    let cutscene = document.getElementById("cutscene");
    let cutsceneText = document.getElementById("cutscene-text");

    overlay.classList.remove("hidden");
    cutscene.classList.remove("hidden");
    cutsceneText.innerHTML = text;
    cutscene.classList.add("fade-in");

    setTimeout(() => {
        cutscene.classList.remove("fade-in");
        cutscene.classList.add("fade-out");
        setTimeout(() => {
            overlay.classList.add("hidden");
            cutscene.classList.add("hidden");
            cutscene.classList.remove("fade-out");
            callback();
        }, 100);
    }, 4000);
}

function checkGameStatus() {
    if (reputation >= WIN_REPUTATION) {
        showCutscene("恭喜！你將酒館聲望提升至30，星光酒吧重振榮光！最終星星數：" + playerStars, () => {});
    } else if (reputation < LOSE_REPUTATION) {
        showCutscene("酒館聲望降至0，星光酒吧無奈關閉…遊戲結束。", () => {});
    }
}

function showRemainingTasks(character) {
    let remainingTasksDiv = document.getElementById("remaining-tasks");
    let taskListDiv = document.getElementById("task-list");
    taskListDiv.innerHTML = "";
    let tasks = character === "erin" ? chapters[currentChapterIndex].tasks : sideQuests[character];
    let hasRemaining = false;

    tasks.forEach((task, index) => {
        if (index >= completedTasks[character]) {
            let div = document.createElement("div");
            div.className = "task-option";
            div.innerHTML = `<p>${task.request}</p>`;
            div.onclick = () => {
                currentTaskIndex = index;
                if (character === "erin") startGame();
                else startSideQuest(character);
            };
            taskListDiv.appendChild(div);
            hasRemaining = true;
        }
    });

    if (hasRemaining) {
        remainingTasksDiv.classList.remove("hidden");
    } else {
        remainingTasksDiv.classList.add("hidden");
    }
}

function updateCompletedCharacters(character) {
    let tasks = character === "erin" ? chapters[currentChapterIndex].tasks : sideQuests[character];
    let completedList = document.getElementById("completed-list");
    let characterName = character === "erin" ? "艾琳" : character === "joe" ? "喬" : "VIP";
    let div = document.createElement("div");
    div.className = "completed-info";
    let cocktails = tasks.map(task => `${task.three}: ${task.order.join(", ")}`).join("<br>");
    div.innerHTML = `<p>${characterName} 的調酒：<br>${cocktails}</p>`;
    completedList.appendChild(div);
    document.getElementById(`${character}-btn`).remove();
}

function checkCharacterCompletion() {
    let tasks = currentCharacter === "erin" ? chapters[currentChapterIndex].tasks : sideQuests[currentCharacter];
    if (completedTasks[currentCharacter] >= tasks.length) {
        completedCharacters.push(currentCharacter);
        updateCompletedCharacters(currentCharacter);
        document.getElementById("game-container").classList.add("hidden");
        
        let remainingCharacters = ["erin", "joe", "vip"].filter(c => !completedCharacters.includes(c));
        if (remainingCharacters.length === 2) {
            document.getElementById("character-selection").classList.remove("hidden");
            document.getElementById("characters").innerHTML = remainingCharacters.map(c => `
                <div class="character-option" onclick="startWithCharacter('${c}')">
                    <img src="images/${c}_neutral.png" alt="${c}">
                    <p>${c === "erin" ? "艾琳 - 新手調酒師" : c === "joe" ? "喬 - 酒吧老闆" : "VIP - 挑剔顧客"}</p>
                    <p>簡介：${c === "erin" ? "對調酒充滿熱情但經驗不足，需要你的幫助。" : c === "joe" ? "嚴厲的老闆，測試你的應變能力。" : "要求高雅的調酒，挑戰你的極限。"}</p>
                    <p>難度：${c === "erin" ? "★☆☆" : c === "joe" ? "★★☆" : "★★★"}</p>
                </div>
            `).join("");
        } else if (remainingCharacters.length === 1) {
            currentCharacter = remainingCharacters[0];
            showTaskSelection(currentCharacter);
        }
    }
}

function capturePhoto() {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "camera";
    input.onchange = async (e) => {
        let file = e.target.files[0];
        if (!file) return;

        let { data: { text } } = await Tesseract.recognize(file, 'eng');
        let detectedMaterials = [];
        
        for (let key in materialLabels) {
            if (text.toLowerCase().includes(key)) {
                detectedMaterials.push(key);
            }
        }

        let inputs = document.getElementsByClassName("material-select");
        if (detectedMaterials.length > 0 && detectedMaterials.length <= inputs.length) {
            for (let i = 0; i < detectedMaterials.length; i++) {
                inputs[i].value = detectedMaterials[i];
            }
            document.getElementById("result").innerHTML = "辨識成功，請確認材料順序！";
        } else {
            document.getElementById("result").innerHTML = "辨識失敗，請重新拍攝或手動輸入！";
        }
    };
    input.click();
}

function checkAnswer() {
    let result = document.getElementById("result");
    let expression = document.getElementById("customer-expression");
    expression.style.display = "block";

    let order = [];
    let inputs = document.getElementsByClassName("material-select");
    for (let i = 0; i < inputs.length; i++) {
        order.push(inputs[i].value);
    }

    if (currentCharacter === "erin") {
        let chapter = chapters[currentChapterIndex];
        let task = chapter.tasks[currentTaskIndex];
        
        if (order.every((val, idx) => val === task.order[idx])) {
            reputation += 2;
            goldCoins += 1;
            document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
            document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
            document.getElementById("task-counter").innerHTML = `已完成任務：${completedTasks.erin + 1}/${chapter.tasks.length}`;
            result.innerHTML = task.threeComment;
            expression.src = "images/erin_happy.png";
            playerStars[0] += 3;
            cheer.play();
            completedTasks.erin++;
            currentTaskIndex = -1;
            checkGameStatus();
            if (reputation < WIN_REPUTATION) {
                if (completedTasks.erin < chapter.tasks.length) {
                    showRemainingTasks("erin");
                } else {
                    checkCharacterCompletion();
                }
            }
        } else {
            reputation -= 1;
            goldCoins -= 1;
            if (goldCoins < 0) goldCoins = 0;
            document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
            document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
            errorCount++;
            if (task.three === task.order[0] && !order.every((val, idx) => val === task.order[idx])) {
                result.innerHTML = "2星：『你放置材料的順序好像出了點問題。』";
                expression.src = "images/erin_neutral.png";
                playerStars[0] += 2;
            } else if (task.two.includes(task.order[0])) {
                result.innerHTML = task.twoComment;
                expression.src = "images/erin_neutral.png";
                playerStars[0] += 2;
            } else {
                result.innerHTML = "1星：『你放的材料錯了！』";
                expression.src = "images/erin_angry.png";
                playerStars[0] += 1;
                sigh.play();
            }
            if (errorCount >= 2) {
                result.innerHTML += `<br>提示：『我好像缺了什麼，去${task.areas.join("或")}看看吧！』`;
            }
            checkGameStatus();
        }
    } else {
        let quest = sideQuests[currentCharacter][currentTaskIndex];
        if (order.every((val, idx) => val === quest.order[idx])) {
            reputation += 2;
            goldCoins += 1;
            document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
            document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
            document.getElementById("task-counter").innerHTML = `已完成任務：${completedTasks[currentCharacter] + 1}/${sideQuests[currentCharacter].length}`;
            result.innerHTML = quest.success;
            expression.src = `images/${currentCharacter}_happy.png`;
            playerStars[0] += 2;
            cheer.play();
            completedTasks[currentCharacter]++;
            currentTaskIndex = -1;
            checkGameStatus();
            if (reputation < WIN_REPUTATION) {
                if (completedTasks[currentCharacter] < sideQuests[currentCharacter].length) {
                    showRemainingTasks(currentCharacter);
                } else {
                    checkCharacterCompletion();
                }
            }
        } else {
            reputation -= 1;
            goldCoins -= 1;
            if (goldCoins < 0) goldCoins = 0;
            document.getElementById("reputation").innerHTML = `酒館聲望：${reputation}`;
            document.getElementById("gold-coins").innerHTML = `金幣：${goldCoins}`;
            errorCount++;
            result.innerHTML = quest.fail;
            expression.src = `images/${currentCharacter}_angry.png`;
            sigh.play();
            if (errorCount >= 2) {
                result.innerHTML += `<br>提示：『去${quest.areas.join("或")}找找靈感吧！』`;
            }
            checkGameStatus();
        }
    }
}