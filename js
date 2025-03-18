const scenes = {
    start: {
        text: "You stand before an ancient building, its doors slightly ajar. A faint buzzing sound drifts from within. The scent of ink and aged vinyl beckons. Do you enter?",
        choices: [
            { text: "Step inside.", nextScene: "shop" },
            { text: "Walk away.", nextScene: "leave" }
        ]
    },
    shop: {
        text: "The dim candlelight flickers against the stone walls. A figure greets you: 'Welcome to Holy Mountain. Tattoos, vintage treasures... choose your path.'",
        choices: [
            { text: "Learn about tattoos.", nextScene: "tattoos" },
            { text: "Explore vintage relics.", nextScene: "vintage" },
            { text: "Find your way to the map.", nextScene: "map" }
        ]
    },
    tattoos: {
        text: "Ink is sacred here. Our hours: Wed-Sat, 11AM-7PM. Cash, card, and tap accepted. Bring ID, payment, and if needed, a support person, snacks, or warmth. $100 deposit required. 48hr notice to reschedule. The needle awaits.",
        choices: [
            { text: "Return to the main hall.", nextScene: "shop" },
            { text: "Contact the artist.", nextScene: "contact" }
        ]
    },
    vintage: {
        text: "Shelves overflow with rare VHS tapes, vinyl records, and premium vintage clothing. Trade-ins welcome. Every item has a past... and a future, perhaps, with you.",
        choices: [
            { text: "Return to the main hall.", nextScene: "shop" },
            { text: "Find your way to the map.", nextScene: "map" }
        ]
    },
    map: {
        text: "A hand-drawn map on aged parchment shows the location of Holy Mountain: 547 E Cimarron St, Colorado Springs, CO 80905.",
        choices: [
            { text: "Open Google Maps.", action: "openMap" },
            { text: "Return to the main hall.", nextScene: "shop" }
        ]
    },
    contact: {
        text: "The artist's presence lingers in the ether. A way to reach them appears before you.",
        choices: [
            { text: "Send an email.", action: "sendEmail" },
            { text: "Return to the main hall.", nextScene: "shop" }
        ]
    },
    leave: {
        text: "You turn away, the mysteries of Holy Mountain left unexplored. Perhaps another time.",
        choices: [
            { text: "Step inside after all.", nextScene: "shop" }
        ]
    }
};

function startGame() {
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
    showScene("start");
}

function showScene(sceneName) {
    const scene = scenes[sceneName];
    document.getElementById('text').innerHTML = scene.text;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    scene.choices.forEach(choice => {
        let button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            if (choice.nextScene) {
                showScene(choice.nextScene);
            } else if (choice.action === "openMap") {
                window.open("https://www.google.com/maps/place/547+E+Cimarron+St,+Colorado+Springs,+CO+80905", "_blank");
            } else if (choice.action === "sendEmail") {
                window.location.href = "mailto:soilentqueen@gmail.com";
            }
        };
        choicesContainer.appendChild(button);
    });
}
