<script setup>
import { RouterLink } from "vue-router";
import{ ref, computed } from 'vue'
import getPortfolio from "@/modules/getPortfolio"

const { portfolioItems } = getPortfolio()
  
  let selectedCategory = ref("")
  
  const filteredPortfolioItems = computed(() =>{
    if (selectedCategory.value == '') {
      return portfolioItems.value
    }
    else {
      return portfolioItems.value.filter(item => item.category == selectedCategory.value)
    }
  });

  const toggleActive = (item) => {
  item.active = !item.active;
  };

</script>

<template>
    <div id="scrollToThree" class="third-container">
        <h1 class="projects-title">Projekter</h1>

        <div class="projects">

            <div v-for="(portfolioItem, index) in filteredPortfolioItems" :key="portfolioItem.id" class="project" :class="{ 'reverse': index % 2 !== 0 }">

                <div class="project-image">
                    <img :src="portfolioItem.project_image" alt="" class="portfolio-image">
                </div>
                <div class="project-text">
                    <h1 class="project-title">{{ portfolioItem.title }}</h1>
                    <div class="project-description">
                        {{ portfolioItem.description }}                  
                    </div>
                    <button class="project-button">
                        <router-link :to="`/projects/${portfolioItem.id}`" class="project-button">
                            Læse mere    
                        </router-link>
                    </button>
                </div>

<!--                 
                <div v-if="portfolioItem.link" class="link">
                <a :href="portfolioItem.link">Link</a>
                </div>
                <div v-else>
        
                </div> -->

            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .third-container{
        padding: 100px 10% 50px 10%;
        margin: 0 auto;
        .projects-title{
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
                &.reverse {
                    flex-direction: row-reverse; // This will reverse the flex direction for even projects
                }
                .project-image{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    aspect-ratio: 16 / 10;
                    border-radius: 25px;
                    background-image: linear-gradient(90deg, #2E005D , #FF6622);
                    .portfolio-image{
                        height: 80%;
                        width: 80%;
                    }
                }
                .project-text{
                    width: 40%;
                    .project-title{
                        font-weight: 500;
                        margin-bottom: 0;
                    }
                    .project-description{
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                    .project-button{
                        width: fit-content;
                        text-decoration: none;
                        padding: 10px 15px;
                        border-radius: 50px;
                        color: #e0e0e0;
                        // border: 2px solid #000;
                        border: 0;
                        font-weight: 700;
                        font-size: 14px;
                        background-image: linear-gradient(30deg, #2E005D , #FF6622);
                    }
                    // .project-button:hover{
                    //     background-image: linear-gradient(30deg, #2E005D , #FF6622);
                    // }
                }
            }
        }
        
    }

    @media only screen and (max-width: 1500px) {
        .third-container{
            .projects{
                .project{
                    .project-text{
                        .project-description{
                            font-size: 16px;
                            margin-bottom: 15px;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1000px) {
        .third-container{
        padding: 100px 10% 50px 10%;
        margin: 0 auto;
            .projects-title{
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
                flex-direction: column;
                gap: 50px;
                justify-content: space-between;
                align-items: center;
                    &.reverse {
                        flex-direction: column; // This will reverse the flex direction for even projects
                    }
                    .project-image{
                        width: 100%;
                        aspect-ratio: 16 / 10;
                        border-radius: 25px;
                        background-image: linear-gradient(90deg, #2E005D , #FF6622);
                    }
                    .project-text{
                        width: 100%;
                        .project-title{
                            font-weight: 500;
                            margin-bottom: 0;
                        }
                        .project-description{
                            font-size: 16px;
                            margin-bottom: 15px;
                        }
                        .project-button{
                            width: fit-content;
                            text-decoration: none;
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
    }
</style>