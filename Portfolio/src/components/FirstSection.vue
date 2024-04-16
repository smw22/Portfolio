<script setup>
</script>


<template>
    <div id="scrollToOne" class="container">
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


        .first-section{
        height: 100vh;
        width: 90%;
        margin: 0 auto;
            .image{
                position: absolute;
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


        // .first-section{
        // display: grid;
        // grid-template-columns: repeat(15, 1fr);
        // align-items: center;
        // gap: 100px;
        // width: 90%;
        // margin: 0 auto;
        //     .image{
        //         grid-row-start: 1;
        //         grid-column-start: 2;
        //         grid-column-end: 6;
        //         .image-sergio{
        //             width: 100%;
        //             border-radius: 100%;
        //         }
        //     }
        //     .text{
        //         grid-row-start: 1;
        //         grid-column-start: 7;
        //         grid-column-end: 15;
        //         text-align: center;
        //         .name-first-section{
        //             width: fit-content;
        //             font-size: 100px;
        //             margin-bottom: 0;
        //         }
        //         .subtitle-first-section{
        //             font-size: 25px;
        //         }
        //     }
        // } 


        // .first-section{
        // display: grid;
        // grid-template-columns: repeat(7, 1fr);
        // align-items: center;
        // gap: 100px;
        // padding: 0 10% 0 10%;
        //     .image{
        //         grid-column-start: 1;
        //         grid-column-end: 4;
        //         display: flex;
        //         justify-content: flex-end;
        //         .image-sergio{
        //             width: 75%;
        //             border-radius: 100%;
        //         }
        //     }
        //     .text{
        //         text-align: center;
        //         grid-column-start: 4;
        //         grid-column-end: 8;
        //         .name-first-section{
        //             font-size: 5.5em;
        //             margin-bottom: 0;
        //         }
        //         .subtitle-first-section{
        //             font-size: 25px;
        //         }
        //     }
        // } 


        // .first-section{
        // display: flex;
        // flex-direction: row;
        // align-items: center;
        // width: 90%;
        // margin: 0 auto;
        //     .image{
        //         width: 40%;
        //         display: flex;
        //         justify-content: end;
        //         .image-sergio{
        //             align-self: right;
        //             width: 80%;
        //             border-radius: 100%;
        //         }
        //     }
        //     .text{
        //         text-align: center;
        //         .name-first-section{
        //             font-size: 100px;
        //             margin-bottom: 0;
        //         }
        //         .subtitle-first-section{
        //             font-size: 25px;
        //         }
        //     }
        // } 
    }
    @media only screen and (max-width: 1600px) {
        .container{
            .first-section{
                .image{
                position: absolute;
                width: 300px;
                left: 50%;
                top: 50%;
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
                top: 62%;
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
                top: 38%;
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



    // @media only screen and (max-width: 1700px) {
    //     .container{
    //         .first-section{
    //         display: grid;
    //         grid-template-columns: repeat(15, 1fr);
    //         align-items: center;
    //         gap: 0;
    //         width: 90%;
    //         margin: 0 auto;
    //             .image{
    //                 grid-row-start: 2;
    //                 grid-column-start: 6;
    //                 grid-column-end: 11;
    //                 display: flex;
    //                 justify-content: center;
    //                 .image-sergio{
    //                     width: 80%;
    //                     border-radius: 100%;
    //                 }
    //             }
    //             .text{
    //                 grid-row-start: 1;
    //                 grid-column-start: 2;
    //                 grid-column-end: 15;
    //                 text-align: center;
    //                 .name-first-section{
    //                     font-size: 100px;
    //                     margin-bottom: 0;
    //                 }
    //                 .subtitle-first-section{
    //                     font-size: 25px;
    //                 }
    //             }
    //         }   
    //     }
    // }
    @media only screen and (max-width: 1000px) {
        
    }
</style>