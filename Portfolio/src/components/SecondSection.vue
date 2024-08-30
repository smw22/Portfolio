<script setup>

</script>


<template>
    <div id="scrollToTwo" class="second-container">

        <h1 class="about-me-title">Om mig</h1>
        <div class="about-me-text-box">
            <div class="about-me-text">
                <p class="about-me-text">
                    Jeg er en dedikeret multimediedesigner, der motiveres af den kreativitet og åbenhed, som denne sektor bringer med sig. Jeg går til hvert projekt med entusiasme og beslutsomhed og stræber efter at overgå kundernes forventninger og levere arbejde af højeste kvalitet. Jeg kan altid lide at tilføje nye ideer, innovative tanker og teknologiske trends til mit arbejde, og jeg prioriterer de konstante opdateringer, der er i denne digitale verden.
                    
                </p>
                <p class="about-me-text">
                    Jeg har erfaring med forskellige projekter, der involverer teamwork og soloarbejde, hvor jeg har haft mulighed for at bruge mine forskellige færdigheder og kompetencer. Jeg lærer hurtigt og er villig til at mestre ethvert værktøj, der bruges på min arbejdsplads. Jeg har været i IT-sektoren i nogle år, og jeg er meget fortrolig med at arbejde med forskellige værktøjer og wireframes.                
                </p>
                <button onclick="window.open('https://acrobat.adobe.com/id/urn:aaid:sc:EU:cd0bef85-29d9-4a9d-9e26-c40e7b5d6d6f', '_blank')" class="about-me-button">Hent mit CV!</button>
            </div>
            <!-- <div class="cv-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9V5VSG3U1GM?si=N2w5Jdvpie86u7yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>   -->
        </div>

        <h1 class="tech-stack-title">Tech Stack</h1>
        <!-- <p class="tech-stack-text">
            Jeg har færdigheder i både Adobe-software, hvor jeg bruger en række Adobe-programmer til mit visuelle arbejde.
            Jeg dominerer webudvikling og bruger ofte frameworks som Bootstrap, Tailwind og Vue til at hjælpe mig med at øge udbyttet af mit arbejde. Desuden bruger jeg GitHub til at gemme og samle min kodningsproces med mig selv eller et team.
            Jeg har også færdigheder inden for UX/UI-design, en sektor, hvor jeg har udviklet mine kommunikationsevner, mine teamworkfærdigheder og min forståelse af al den psykologi og forskning, der ligger bag denne verden af webdesign. Jeg har også erfaring med fotografering og videoproduktion. Det er noget, jeg har lært over nogle år, og som jeg nu er ved at lære mere af gennem mit studie.
        </p> -->
        <div class="tech-stack">
            <div class="tech-stack-row">

                <div class="tech-stack-item">
                    <h3>Grafisk</h3>
                    <div class="tech-stack-item-apps">
                        <div class="app"><img src="../assets/illustrator-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/indesign-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/photoshop-logo.png" alt="" class="app-image"></div>
                    </div>
                </div>
                <div class="tech-stack-item">
                    <h3>Web Udvikling</h3>
                    <div class="tech-stack-item-apps">
                        <div class="app"><img src="../assets/html-logo.webp" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/css-logo.webp" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/javascript-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/php-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/bootstrap-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/vue-logo.png" alt="" class="app-image"></div>
                    </div>
                </div>

            </div>

            <div class="tech-stack-row">

                <div class="tech-stack-item">
                    <h3>XD / UI</h3>
                    <div class="tech-stack-item-apps">
                        <div class="app"><img src="../assets/xd-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/figma-logo.png" alt="" class="app-image"></div>
                    </div>
                </div>
                <div class="tech-stack-item">
                    <h3>Foto og Video</h3>
                    <div class="tech-stack-item-apps">
                        <div class="app"><img src="../assets/premierePro-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/photoshop-logo.png" alt="" class="app-image"></div>
                        <div class="app"><img src="../assets/after-effects-logo.png" alt="" class="app-image"></div>
                    </div>
                </div>

             </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .second-container{
        padding: 0 10% 100px 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgb(230, 230, 230);
        margin: 0 auto;
        .about-me-title{
            margin-bottom: 20px;
            padding-top: 100px;
            font-size: 40px;
        }
        .about-me-text-box{
            display: flex;
            gap: 100px;
            margin-bottom: 50px;
            .about-me-text{
                font-size: 16px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 10px;
            }
            .about-me-button{
                width: fit-content;
                padding: 10px 15px;
                border-radius: 50px;
                color: #000;
                border: 2px solid #ff6622;
                font-weight: 700;
                font-size: 14px;
                box-shadow: 1px 1px 5px #000;
                transition: 0.3s all ease;
                cursor: pointer;
            }
            .about-me-button:hover{
                color: white;
                background-color: #ff6622;
            }
        }

        .tech-stack-title{
            margin-bottom: 10px;
        }
        .tech-stack-text{
            margin-bottom: 40px;
            font-size: 20px;
        }
        .tech-stack{
            display: flex;
            justify-content: space-around;
            text-align: center;
            flex-wrap: wrap;
            .tech-stack-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 30px;
                gap: 20px;
                .tech-stack-item-apps{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 30px;
                    .app{
                        width: 50px;
                        height: 50px;
                        border-radius: 100%;
                        .app-image{
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1500px) {
        .second-container{
            .about-me-text-box{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            }
        }
    }
    @media only screen and (max-width: 700px) {
        .second-container{
            iframe{
                width: 300px;
                height: 200px;
            }
        }
    }
</style>