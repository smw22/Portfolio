<script setup>

</script>


<template>
    <div class="second-container">
        <h1>Om mig</h1>
        <div class="about-me-text-box">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta dolor obcaecati et voluptatibus vel maiores iure fuga modi! Nesciunt consectetur exercitationem cupiditate, nostrum autem eligendi excepturi rerum magnam quasi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta dolor obcaecati et voluptatibus vel maiores iure fuga modi! Nesciunt consectetur exercitationem cupiditate, nostrum autem eligendi excepturi rerum magnam quasi!
            </p>
            <div class="cv-video">

            </div>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta dolor obcaecati et voluptatibus vel maiores iure fuga modi! Nesciunt consectetur exercitationem cupiditate, nostrum autem eligendi excepturi rerum magnam quasi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta dolor obcaecati et voluptatibus vel maiores iure fuga modi! Nesciunt consectetur exercitationem cupiditate, nostrum autem eligendi excepturi rerum magnam quasi!
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
        // width: 80%;
        padding: 0 10%;
        height: 100vh;
        background-color: rgb(198, 198, 198);
        margin: 0 auto;
        .about-me-text-box{
            display: flex;
            gap: 50px;
            .cv-video{
            width: 2000px;
            aspect-ratio: 16/9;
            background-color: rgb(86, 86, 86);
        }
        }
        .tech-stack{
            display: flex;
            justify-content: space-around;
            text-align: center;
            .tech-stack-item-apps{
            display: flex;
            gap: 10px;
                .app{
                    width: 30px;
                    height: 30px;
                    border-radius: 100%;
                    background-color: red;
                }
            }
        }
    }
</style>