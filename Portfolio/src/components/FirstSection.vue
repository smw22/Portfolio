<script setup>
</script>

<template>
    <div class="container">
        <div class="first-section">
            <div class="image">
                <img src="../assets/foto-sergio.JPG" alt="" class="image-sergio">
            </div>
            <div class="text">
                <h1 class="name-first-section">SERGIO MORÓN WESTERGAARD</h1>
                <p class="subtitle-first-section"> 
                    En <strong>multimediedesigner</strong>  fra Danmark. <br> 
                    Lad os arbejde sammen!
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        position: absolute;
        height: 100vh;
        display: flex;
        align-items: center;
        margin: 0;
        .first-section{
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        align-items: center;
        gap: 100px;
        width: 90%;
        margin: 0 auto;
            .image{
                grid-column-start: 2;
                grid-column-end: 6;
                .image-sergio{
                    width: 100%;
                    border-radius: 100%;
                }
            }
            .text{
                grid-column-start: 6;
                grid-column-end: 15;
                text-align: center;
                .name-first-section{
                    font-size: 100px;
                    font-family: "poppins";
                    margin-bottom: 0;
                }
                .subtitle-first-section{
                    font-size: 25px;
                    font-family: "poppins";
                }
            }
        } 
    }
</style>