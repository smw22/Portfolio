<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div id="scrollToThree" class="third-container">
        <h1 class="projects-title">Projekter</h1>
        <div class="projects">

            <div class="project-1 project">
                <div class="project-image">

                </div>
                <div class="project-text">
                    <h1 class="project-title">Maysol</h1>
                    <div class="project-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?
                    </div>
                    <button class="project-button">Læse mere</button>
                </div>
            </div>

            <div class="project-2 project">
                <div class="project-text">
                    <h1 class="project-title">Trapholt</h1>
                    <div class="project-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?
                    </div>
                    <button class="project-button">Læse mere</button>
                </div>
                <div class="project-image">

                </div>
            </div>

            <div class="project-3 project">
                <div class="project-image">

                </div>
                <div class="project-text">
                    <h1 class="project-title">Assasin App</h1>
                    <div class="project-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?

                    </div>
                    <button class="project-button">Læse mere</button>
                </div>
            </div>

            <div class="project-4 project">
                <div class="project-text">
                    <h1 class="project-title">Watch Shop</h1>
                    <div class="project-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?

                    </div>
                    <button class="project-button">Læse mere</button>
                </div>
                <div class="project-image">

                </div>
            </div>

            <div class="project-5 project">
                <div class="project-image">

                </div>
                <div class="project-text">
                    <h1 class="project-title">Kantine App</h1>
                    <div class="project-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore accusamus est repellat asperiores at, id exercitationem quasi! Ipsa, consectetur? Exercitationem architecto doloribus magnam culpa ea quidem voluptatibus dolorem aut?

                    </div>
                    <button class="project-button">Læse mere</button>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .third-container{
        padding: 100px 10% 50px 10%;
        margin: 0 auto;
        .projects-title{
            font-family: 'poppins';
            font-size: 40px;
            margin-bottom: 50px;
            text-align: center;
        }
        .projects{
            display: flex;
            flex-direction: column;
            gap: 100px;
            margin-bottom: 50px;
            .project{
            display: flex;
            gap: 50px;
            justify-content: space-between;
            align-items: center;
                .project-image{
                    width: 600px;
                    height: 400px;
                    border-radius: 25px;
                    background-image: linear-gradient(90deg, #2E005D , #FF6622);
                }
                .project-text{
                    width: 600px;
                    .project-title{
                        font-family: 'poppins';
                        font-weight: 500;
                        margin-bottom: 0;
                    }
                    .project-description{
                        font-size: 20px;
                        margin-bottom: 15px;
                        font-family: 'poppins';
                    }
                    .project-button{
                        width: fit-content;
                        padding: 10px 15px;
                        border-radius: 50px;
                        color: #e0e0e0;
                        background-image: linear-gradient(30deg, #2E005D , #FF6622);
                        border: 0;
                        font-weight: 700;
                        font-size: 14px;
                    }
                }
            }
        }
        
    }
</style>