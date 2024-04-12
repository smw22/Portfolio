<script setup>

</script>


<template>
    <div class="second-container">

        <h1 class="about-me-title">Om mig</h1>
        <div class="about-me-text-box">
            <div class="about-me-text">
                <p class="about-me-text">
                    Jeg er en dedikeret multimediedesigner, der motiveres af den kreativitet og åbenhed, som denne sektor bringer med sig. Jeg går til hvert projekt med entusiasme og beslutsomhed og stræber efter at overgå kundernes forventninger og levere arbejde af højeste kvalitet. Jeg kan altid lide at tilføje nye ideer, innovative tanker og teknologiske trends til mit arbejde, og jeg prioriterer de konstante opdateringer, der er i denne digitale verden.
                    
                </p>
                <p class="about-me-text">
                    Jeg har erfaring med forskellige projekter, der involverer teamwork og soloarbejde, hvor jeg har haft mulighed for at bruge mine forskellige færdigheder og kompetencer. Jeg lærer hurtigt og er villig til at mestre ethvert værktøj, der bruges på min arbejdsplads. Jeg har været i IT-sektoren i nogle år, og jeg er meget fortrolig med at arbejde med forskellige værktøjer og wireframes.                
                </p>
                <button class="about-me-button">Hent mit CV!</button>
            </div>
            <div class="cv-video">

            </div>
        </div>

        <h1 class="tech-stack-title">Tech Stack</h1>
        <p class="tech-stack-text">
            Jeg har færdigheder i både Adobe-software, hvor jeg bruger en række Adobe-programmer til mit visuelle arbejde.
            Jeg dominerer webudvikling og bruger ofte frameworks som Bootstrap, Tailwind og Vue til at hjælpe mig med at øge udbyttet af mit arbejde. Desuden bruger jeg GitHub til at gemme og samle min kodningsproces med mig selv eller et team.
            Jeg har også færdigheder inden for UX/UI-design, en sektor, hvor jeg har udviklet mine kommunikationsevner, mine teamworkfærdigheder og min forståelse af al den psykologi og forskning, der ligger bag denne verden af webdesign. Jeg har også erfaring med fotografering og videoproduktion. Det er noget, jeg har lært over nogle år, og som jeg nu er ved at lære mere af gennem mit studie.
            Endelig har jeg arbejdet med nogle medierelaterede programmer. Jeg er fortrolig med OBS Studio, Fl Studio, Audacity og Microsoft-software.
        </p>
        <div class="tech-stack">
            <div class="tech-stack-item">
                <h3>Grafisk</h3>
                <div class="tech-stack-item-apps">
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                </div>
            </div>
            <div class="tech-stack-item">
                <h3>Web Udvikling</h3>
                <div class="tech-stack-item-apps">
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                </div>
            </div>
            <div class="tech-stack-item">
                <h3>XD / UI</h3>
                <div class="tech-stack-item-apps">
                    <div class="app"></div>
                    <div class="app"></div>
                </div>
            </div>
            <div class="tech-stack-item">
                <h3>Foto og Video</h3>
                <div class="tech-stack-item-apps">
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .second-container{
        padding: 50px 10%;
        height: 100vh;
        background-color: rgb(198, 198, 198);
        margin: 0 auto;
        .about-me-title{
            margin-bottom: 30px;
            font-family: "poppins";
            font-size: 40px;
        }
        .about-me-text-box{
            display: flex;
            gap: 100px;
            margin-bottom: 50px;
            .about-me-text{
                font-size: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .about-me-button{
                width: fit-content;
                padding: 10px 15px;
                border-radius: 50px;
                color: #e0e0e0;
                background-image: linear-gradient(30deg, #2E005D , #FF6622);
                border: 0;
                font-weight: 700;
                font-size: 14px;
                box-shadow: 1px 1px 5px #000;

            }
            .cv-video{
            width: 100%;
            aspect-ratio: 16/9;
            background-color: rgb(86, 86, 86);
            }
        }

        .tech-stack-title{
            font-family: "poppins";
            text-align: center;
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
            .tech-stack-item{
                display: flex;
                flex-direction: column;
                gap: 20px;
                h3{
                    font-family: 'poppins';
                }
                .tech-stack-item-apps{
                display: flex;
                gap: 30px;
                    .app{
                        width: 50px;
                        height: 50px;
                        border-radius: 100%;
                        background-color: red;
                    }
                }
            }
        }
    }
</style>