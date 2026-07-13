const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const currentPage = window.location.pathname.split("/").pop();
// Make the Yes button larger on later pages
if (yesBtn) {

    switch (currentPage) {

        case "no1.html":
            yesBtn.style.transform = "scale(1.2)";
            break;

        case "no2.html":
            yesBtn.style.transform = "scale(1.5)";
            break;

        case "no3.html":
            yesBtn.style.transform = "scale(1.8)";
            break;

    }

}
// Celebration page
if (currentPage === "yes.html") {

    const message = document.getElementById("message");
    const restartBtn = document.getElementById("restartBtn");

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    const text = "❤️ You made me the happiest person ever! ❤️";

    let i = 0;

    const typing = setInterval(() => {

        message.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(typing);

        }

    }, 50);

    restartBtn.addEventListener("click", () => {

        window.location.href = "index.html";

    });

}
let yesScale = 1;

// YES button
if (yesBtn) {

  yesBtn.addEventListener("click", () => { window.location.href = "yes.html"; }); }

// NO button
if (noBtn) {

    noBtn.addEventListener("click", () => {

        switch (currentPage) {

            case "":
            case "index.html":
                window.location.href = "no1.html";
                break;

            case "no1.html":
                window.location.href = "no2.html";
                break;

            case "no2.html":
                window.location.href = "no3.html";
                break;

            case "no3.html":

                const maxX = window.innerWidth - noBtn.offsetWidth;
                const maxY = window.innerHeight - noBtn.offsetHeight;

                noBtn.style.position = "absolute";
                noBtn.style.left = Math.random() * maxX + "px";
                noBtn.style.top = Math.random() * maxY + "px";

                yesScale += 0.2;
                yesBtn.style.transform = `scale(${yesScale})`;

                break;

        }

    });

}