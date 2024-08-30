<script setup>
</script>


<template>
    <div id="scrollToOne" class="container">
        <div class="blur-container">
            
            <svg width="450" height="400" viewBox="0 0 1090 839" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-1" id="background-svg">
                <g filter="url(#filter0_f_9_31)">
                    <ellipse cx="500" cy="478" rx="440" ry="328" fill="#7E00FF"/>
                </g>
                <defs>
                    <filter id="filter0_f_9_31" x="-90" y="0" width="1180" height="956" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_9_31"/>
                    </filter>
                </defs>
            </svg>

            <svg width="450" height="400" viewBox="0 0 1180 956" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-2" id="background-svg">
                <g filter="url(#filter0_f_89_2)">
                    <ellipse cx="590" cy="478" rx="440" ry="328" fill="#F36F34"/>
                </g>
                <defs>
                    <filter id="filter0_f_89_2" x="0" y="0" width="1180" height="956" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_89_2"/>
                    </filter>
                </defs>
            </svg>

            <svg width="450" height="400" viewBox="0 0 1180 956" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-3" id="background-svg">
                <g filter="url(#filter0_f_89_2)">
                    <ellipse cx="590" cy="478" rx="440" ry="328" fill="#F36F34"/>
                </g>
                <defs>
                    <filter id="filter0_f_89_2" x="0" y="0" width="1180" height="956" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_89_2"/>
                    </filter>
                </defs>
            </svg>


            <svg width="450" height="400" viewBox="0 0 1090 839" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-4" id="background-svg">
                <g filter="url(#filter0_f_9_31)">
                    <ellipse cx="500" cy="478" rx="440" ry="328" fill="#7E00FF"/>
                </g>
                <defs>
                    <filter id="filter0_f_9_31" x="-90" y="0" width="1180" height="956" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_9_31"/>
                    </filter>
                </defs>
            </svg>


        </div>

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
        height: 100vh;
        margin: 0;
        .blur-container{
            position: relative;
            background-color: rgb(255, 255, 255);
            filter: blur(8px);
            height: 100vh;
            width: 100%;
            #background-svg{
                position: absolute;
            }
            .blur-svg-1{
                bottom: 5%;
                left: 100px;
                animation: 10s all linear infinite;
                animation-name: bounce1;
            }

            @keyframes bounce1 {
                0% {transform: translateX(0) translateY(0);}
                25% {transform: translateX(100px) translateY(-100px);}
                50% {transform: translateX(150px) translateY(50px);}
                75% {transform: translateX(-150px) translateY(50px);}
                100% {transform: translateX(0) translateY(0);}
            }

            .blur-svg-2{
                top: 5%;
                left: 100px;
                animation: 10s all ease;
                animation-name: bounce2;
            }

            @keyframes bounce2 {
                0% {transform: translateX(0) translateY(0);}
                25% {transform: translateX(100px) translateY(-100px);}
                50% {transform: translateX(150px) translateY(50px);}
                75% {transform: translateX(-150px) translateY(50px);}
                100% {transform: translateX(0) translateY(0);}
            }

            .blur-svg-3{
                bottom: 15%;
                right: 50px;
                animation: 10s all linear infinite;
                animation-name: bounce3;
            }

            @keyframes bounce3 {
                0% {transform: translateX(0) translateY(0);}
                25% {transform: translateX(-100px) translateY(100px);}
                50% {transform: translateX(-300px) translateY(25px);}
                75% {transform: translateX(10px) translateY(-75px);}
                100% {transform: translateX(0) translateY(0);}
            }

            .blur-svg-4{
                top: 10px;
                right: 10%;
                animation: 10s all linear infinite;
                animation-name: bounce4;
            }

            
        }
        .first-section{
        height: 100vh;
        width: 90%;
        margin: 0 auto;
            .image{
                position: absolute;
                display: flex;
                align-items: center;
                left: 50%;
                top: 50%;
                transform: translate(-150%, -50%);
                .image-sergio{
                    width: 400px;
                    border-radius: 100%;
                }
            }
            .text{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-20%, -50%);
                text-align: center;
                .name-first-section{
                    font-size: 5.5em;
                    margin-bottom: 0;
                }
                .subtitle-first-section{
                    font-size: 25px;
                }
            }
        } 


     
    }
    @media only screen and (max-width: 1600px) {
        .container{
            .first-section{
                .image{
                position: absolute;
                left: 50%;
                top: 52%;
                transform: translate(-150%, -50%);
                    .image-sergio{
                        width: 300px;
                        border-radius: 100%;
                    }
                }
                .text{
                    .name-first-section{
                        font-size: 4.5em;
                        margin-bottom: 0;
                    }
                    .subtitle-first-section{
                        font-size: 25px;
                    }
                }
            } 
        }   
    }
    @media only screen and (max-width: 1150px) {
        .container{
            .first-section{
                .image{
                position: absolute;
                left: 50%;
                top: 68%;
                transform: translate(-50%, -50%);
                    .image-sergio{
                        width: 200px;
                        border-radius: 100%;
                    }
                }
                .text{
                width: 90%;
                position: absolute;
                left: 50%;
                top: 40%;
                transform: translate(-50%, -50%);
                text-align: center;
                    .name-first-section{
                        font-size: 35px;
                        margin-bottom: 0;
                    }
                    .subtitle-first-section{
                        font-size: 15px;
                    }
                }
            } 
        }   
    }
    @media only screen and (max-width: 1000px) {
        
    }
</style>