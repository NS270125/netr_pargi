// =====================================================
// CONTINUE BUTTON
// =====================================================

function startSurprise() {

    const mainContent = document.getElementById("mainContent");

    if (!mainContent) return;

    mainContent.style.transition = "opacity 1s ease";
    mainContent.style.opacity = "0";

    setTimeout(() => {

        mainContent.innerHTML = `

            <div class="special-page">

                <h1>
                    Something Special
                </h1>

                <h2>
                    For You ❤️
                </h2>

                <p class="mystery-text">
                    But before the surprise...
                </p>

                <p class="question-text">
                    I have a little question for you 👀
                </p>

                <div class="ready-section">

                    <div class="ready-text">
                        Are You Ready?
                    </div>

                    <button
                        type="button"
                        onclick="nextSurprise()">
                        I'M READY ✨
                    </button>

                </div>

            </div>

        `;

        mainContent.style.opacity = "1";

    }, 1000);
}



// =====================================================
// I'M READY → FUNNY PAGE
// =====================================================

function nextSurprise() {

    const mainContent = document.getElementById("mainContent");

    if (!mainContent) return;

    mainContent.style.transition = "opacity 1s ease";
    mainContent.style.opacity = "0";

    setTimeout(() => {

        mainContent.innerHTML = `

            <div class="funny-special">

                <div class="special-word">
                    Special...
                </div>

                <div class="for-you">
                    For You?? 👀
                </div>

                <div class="laughing">
                    😂😂😂
                </div>

                <div
                    class="yes-no-buttons"
                    id="yesNoButtons">

                    <button
                        id="yesBtn"
                        type="button"
                        onclick="yesClicked()">
                        YES ❤️
                    </button>

                    <button
                        id="noBtn"
                        type="button">
                        NO 😏
                    </button>

                </div>

            </div>

        `;

        mainContent.style.opacity = "1";


        // BUTTON ANIMATION

        const buttons =
            document.getElementById("yesNoButtons");

        if (buttons) {

            buttons.style.opacity = "0";

            buttons.style.transform =
                "translateY(20px)";

            setTimeout(() => {

                buttons.style.transition =
                    "all 0.8s ease";

                buttons.style.opacity = "1";

                buttons.style.transform =
                    "translateY(0)";

            }, 2000);
        }


        // NO BUTTON RUN AWAY

        const noBtn =
            document.getElementById("noBtn");

        if (noBtn) {

            noBtn.addEventListener(
                "mouseenter",
                moveNoButton
            );

        }

    }, 1000);
}



// =====================================================
// NO BUTTON
// =====================================================

function moveNoButton() {

    const noBtn =
        document.getElementById("noBtn");

    if (!noBtn) return;


    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        Math.max(
            20,
            window.innerWidth -
            buttonWidth -
            20
        );

    const maxY =
        Math.max(
            20,
            window.innerHeight -
            buttonHeight -
            20
        );


    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;


    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";
}



// =====================================================
// YES BUTTON → LETTER
// =====================================================

function yesClicked() {

    const mainContent =
        document.getElementById("mainContent");

    if (!mainContent) return;


    mainContent.style.transition =
        "opacity 1s ease";

    mainContent.style.opacity = "0";


    setTimeout(() => {

        mainContent.innerHTML = `

            <div class="real-letter-page">

                <div class="real-letter-paper">


                    <!-- HEART -->

                    <div class="paper-heart">
                        💌
                    </div>


                    <!-- HEADING -->

                    <h1 class="letter-heading">
                        Dear Pratikshaa, ❤️
                    </h1>


                    <div class="paper-line"></div>


                    <!-- LETTER -->

                    <div class="real-letter-text">

                        <p class="letter-para">
                            Happy Rakshabandhan to my sister! 🎀
                        </p>


                        <p class="letter-para">

                            Te hamesha mari help kari che,
                            mane support karyo che,
                            hamesha mari side lidhi che
                            ane maru bau dhyaan rakhyu che.

                            Aa badha na lidhe aapdo ekdam
                            strong bond bani gayo che,
                            ane honestly, aa bond mara mate
                            khub special che. ❤️

                        </p>


                        <p class="letter-para">

                            Haa, aa Rakshabandhan par aapde
                            jode nathi, thodu dur chhiye...

                            pan mane nathi lagtu ke distance
                            thi aapdo bond kyarey tutse.

                            I really wish ke aapdo bond
                            aavoj strong ane special
                            hamesha rahe. 🫶🏻

                        </p>


                        <p class="letter-para">

                            Tari life ma je kai pan wish hoy,
                            e badhi puri thaay.

                            Tu life ma bau aagal vadhe,
                            khub badhi happiness male
                            ane hamesha smile karti rahe. ✨

                        </p>


                        <p class="letter-para thank-letter">

                            So, thank you...<br>

                            Thank you mari ben banva mate. ❤️

                        </p>


                        <p class="letter-para ending-letter">

                            Happy Rakshabandhan once again,
                            Pratikshaa! 🎀

                        </p>

                    </div>


                    <!-- PHOTO -->

                    <div class="letter-final-photo">

                        <div class="photo-wrapper">

                            <img
                                src="pratiksha.jpg"
                                alt="Special memory">

                            <div class="photo-from">
                                From
                            </div>

                        </div>

                    </div>


                    <!-- NEXT BUTTON -->

                    <div class="letter-next-section">

                        <button
                            type="button"
                            onclick="goToNextPage()">

                            Next ✨

                        </button>

                    </div>


                </div>

            </div>

        `;


        // =================================================
        // MUSIC — ONLY LETTER SECTION
        // =================================================

        const music =
            document.getElementById("letterMusic");

        if (music) {

            music.volume = 0.5;

            music.currentTime = 0;

            music.play().catch(() => {

                console.log(
                    "Music playback was blocked."
                );

            });

        }


        // SHOW LETTER

        mainContent.style.opacity = "1";

    }, 1000);
}



// =====================================================
// NEXT BUTTON
// =====================================================

function goToNextPage() {

    const mainContent =
        document.getElementById("mainContent");

    const music =
        document.getElementById("letterMusic");


    // Stop letter music

    if (music) {

        music.pause();

        music.currentTime = 0;

    }


    // Fade out

    if (mainContent) {

        mainContent.style.transition =
            "opacity 1s ease";

        mainContent.style.opacity = "0";


        setTimeout(() => {

            window.location.href =
                "next.html";

        }, 1000);

    } else {

        window.location.href =
            "next.html";

    }
}