<script setup>
</script>

<template>
    <div id="scrollToFour" class="fourth-container">
        <h1 class="contact-title">Kontakt</h1>
        <div class="contact-addresses">
            <div class="contact-address">
                <h3 class="contact-address-title"><strong>Email</strong></h3>
                <p class="contact-address-description">sergiomoronwestergaard<br class="responsive">@gmail.com</p>
            </div>
            <div class="contact-address">
                <h3 class="contact-address-title"><strong>Medier</strong></h3>
                <div class="contact-icons">
                    <a target="_blank" href="https://www.linkedin.com/in/sergio-mw/" class="contact-icons-links"><img src="../assets/linkedin-logo.svg" alt="" class="contact-icons-images"></a>
                    <a target="_blank" href="https://github.com/smw22" class="contact-icons-links"><img src="../assets/github-logo.svg" alt="" class="contact-icons-images"></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100084622957233" class="contact-icons-links"><img src="../assets/messenger-logo.svg" alt="" class="contact-icons-images"></a>
                    <a target="_blank" href="https://wa.me/4550355856" class="contact-icons-links"><img src="../assets/whatsapp-logo.svg" alt="" class="contact-icons-images"></a>
                   
                    <!-- <img src="../assets/linkedin-logo.svg" alt="" class="contact-icons-images">
                    <img src="../assets/github-logo.svg" alt="" class="contact-icons-images">
                    <img src="../assets/messenger-logo.svg" alt="" class="contact-icons-images">
                    <img src="../assets/whatsapp-logo.svg" alt="" class="contact-icons-images"> -->
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
    .fourth-container {
        padding: 100px 10%;
        margin: 0 auto;
        background-color: rgb(230, 230, 230);
        .contact-title {
            font-size: 40px;
            margin-bottom: 20px;
        }
        .responsive{
            display: none;
        }
        .contact-addresses {
            display: flex;
            gap: 200px;
            font-size: 20px;
            .contact-address-title {
                margin-bottom: 10px;
            }
            .contact-icons {
            display: flex;
            gap: 20px;
            .contact-icons-links {
                display: inline-block;
                width: 30px;
                height: auto; 
                .contact-icons-images {
                    width: 100%;
                    height: auto;
                }
            }
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        .fourth-container {
            .contact-addresses {
                display: flex;
                flex-direction: column;
                gap: 20px;
                font-size: 20px;
                .contact-address-title {
                    margin-bottom: 10px;
                }
                .contact-address-description {
                font-size: 15px;
                }   
            }
        }
    }
    @media only screen and (max-width: 400px) {
        .fourth-container {
            .responsive{
                display: block;
            }
        }
    }
</style>
