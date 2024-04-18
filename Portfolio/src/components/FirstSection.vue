<script setup>
</script>


<template>
    <div id="scrollToOne" class="container">
        <div class="blur-container">
            <!-- <svg width="450" height="435" viewBox="0 0 899 873" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-1">
            <g filter="url(#filter0_f_18_5)">
            <ellipse cx="309" cy="478" rx="440" ry="328" fill="#7E00FF"/>
            </g>
            <defs>
            <filter id="filter0_f_18_5" x="-281" y="0" width="1180" height="956" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_18_5"/>
            </filter>
            </defs>
            </svg>

            <svg width="425" height="350" viewBox="0 0 954 733" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-2">
            <g filter="url(#filter0_f_18_7)">
            <path d="M746.772 639.194C657.568 690.752 332.168 476.616 150.942 342.151C350.621 370.945 433.017 241.672 459.907 172.303C486.797 102.935 884.135 203.623 940.735 458.035C997.336 712.447 858.278 574.746 746.772 639.194Z" fill="#FF7B40"/>
            </g>
            <defs>
            <filter id="filter0_f_18_7" x="0.941719" y="0.940491" width="1102.85" height="796.107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_18_7"/>
            </filter>
            </defs>
            </svg>

            <svg width="414" height="330" viewBox="0 0 828 662" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-3">
            <g filter="url(#filter0_f_18_8)">
            <path d="M927.041 166.401C1224.71 163.174 1023.93 395.444 886.33 511.982C674.985 440.458 234.117 257.362 161.41 97.1707C70.5255 -103.069 565.212 -83.699 572.802 24.9541C580.392 133.607 554.948 170.435 927.041 166.401Z" fill="#F36F34"/>
            </g>
            <defs>
            <filter id="filter0_f_18_8" x="0.266571" y="-205.63" width="1231.01" height="867.612" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_18_8"/>
            </filter>
            </defs>
            </svg>

            <svg width="640" height="315" viewBox="0 0 1280 633" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-svg-4">
            <g filter="url(#filter0_f_18_6)">
            <path d="M475.003 428.828C265.425 430.669 95.914 143.522 24 -27.5075C279.808 73.73 594.175 12.3739 736.975 -27.5075C879.776 -67.3889 1324.62 165.764 1032.85 374.375C741.085 582.985 736.975 426.527 475.003 428.828Z" fill="#B289DC"/>
            </g>
            <defs>
            <filter id="filter0_f_18_6" x="-126" y="-182" width="1406" height="815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_18_6"/>
            </filter>
            </defs>
            </svg> -->



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
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        .blur-container{
            position: absolute;
            background-color: rgb(255, 255, 255);
            filter: blur(8px);
            height: 100vh;
            width: 100%;
        }
        .first-section{
        height: 100vh;
        width: 90%;
        margin: 0 auto;
            .image{
                position: absolute;
                display: flex;
                align-items: center;
                width: 400px;
                left: 50%;
                top: 50%;
                transform: translate(-150%, -50%);
                .image-sergio{
                    width: 100%;
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
                width: 300px;
                left: 50%;
                top: 52%;
                transform: translate(-150%, -50%);
                    .image-sergio{
                        width: 100%;
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
                width: 200px;
                left: 50%;
                top: 68%;
                transform: translate(-50%, -50%);
                    .image-sergio{
                        width: 100%;
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