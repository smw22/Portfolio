<script setup>
</script>

<template>
    <div id="scrollToFour" class="fourth-container">
        <h1 class="contact-title">Kontakt</h1>
        <div class="contact-addresses">
            <div class="contact-address">
                <h3 class="contact-adress-title"><strong>Email</strong></h3>
                <p>sergiomoronwestergaard@gmail.com</p>
            </div>
            <div class="contact-address">
                <h3 class="contact-adress-title"><strong>Socialer</strong></h3>
                <div class="contact-icons">
                    <img src="../assets/linkedin-logo.svg" alt="" class="contact-icons-images">
                    <img src="../assets/github-logo.svg" alt="" class="contact-icons-images">
                    <img src="../assets/messenger-logo.svg" alt="" class="contact-icons-images">
                    <img src="../assets/whatsapp-logo.svg" alt="" class="contact-icons-images">
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
    .fourth-container{
        padding: 100px 10%;
        margin: 0 auto;
        background-color: rgb(230, 230, 230);
        .contact-title{
        font-size: 40px;
        margin-bottom: 20px;
        }
        .contact-addresses{
            display: flex;
            gap: 200px;
            font-size: 20px;
            .contact-adress-title{
                margin-bottom: 10px;
            }
            .contact-icons{
                width: 30px;
                display: flex;
                gap: 20px;
                .contact-icons-images{
                    width: 100%;
                }
            }
        }
    }
    
</style>
