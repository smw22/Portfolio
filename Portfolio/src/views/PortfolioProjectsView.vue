<script setup>
import FourthSection from '@/components/FourthSection.vue';

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import getPortfolio from '@/modules/getPortfolio'
const { portfolioItems } = getPortfolio()

const route = useRoute()
const id = ref(route.params.id)

const specificPortfolioItems = portfolioItems.value.find(item => item.id == id.value)


const headerRef = ref(null);

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    headerRef.value.classList.add('header-wrapper-scrolled');
  } else {
    headerRef.value.classList.remove('header-wrapper-scrolled');
  }
});


</script>

<template>
    <header ref="headerRef">
        <div class="name-logo">
        <h2>SERGIO MORÓN WESTERGAARD</h2>
        </div>
        <div class="phone-name-logo">
        <h2>SMW</h2>
        </div>
        <nav>
        <ul>
            <li class="nav-links"><RouterLink class="home-link" to="/#scrollToOne">HJEMME</RouterLink></li>
            <li class="nav-links"><a href="#scrollToFour" class="nav-links">KONTAKT</a></li>
        </ul>
        </nav>
        <div class="phone-nav">
            <img src="../assets/burguer-menu.png" alt="" class="phone-nav-icon">
            <div class="phone-nav-links">
            </div>
        </div>
    </header>
    <main>
        <div v-if="!specificPortfolioItems">
            No such portfolio item exist
        </div>
        <div v-else>
            <div class="project-site-container">
                <h1 class="project-title">{{ specificPortfolioItems.title }}</h1>
                <div class="project-section">
                    <div class="project-text">
                        <div class="text-description">
                            <button> {{ specificPortfolioItems.category }}</button>
                            <p> {{ specificPortfolioItems.description }}</p>
                        </div>
                        <div class="project-buttons">
                            <button>
                                GitHub
                            </button>
                            <button>
                                Se Demo
                            </button>
                        </div>
                    </div>
                    <div class="project-image-box">
                    <img :src="specificPortfolioItems.image" alt="" class="project-image">
                    </div>
                </div>
            </div>

        </div>
    </main>
    <FourthSection/>
</template>

<style lang="scss" scoped>
     header {
        position: fixed;
        z-index: 1000;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: all 0.4s ease-in-out;
        .name-logo {
            font-style: italic;
        }
        .phone-name-logo{
            font-style: italic;
            display: none;
        }
        nav {
            ul {
                display: flex;
                gap: 50px;
                .home-link{
                color: #000;
                list-style-type: none;
                font-weight: 500;
                text-decoration: none;  
                }
                .nav-links {
                color: #000;
                list-style-type: none;
                font-weight: 500;
                text-decoration: none; 
                }
            }
        }
        .phone-nav{
            display:none;
        }

    }

    .header-wrapper-scrolled {
        background-color: rgb(230, 230, 230);
        opacity: 1;
    }

    .project-title{
        margin: 0 auto;
        width: fit-content;
        margin-bottom: 50px;
    }

    .project-site-container{
        padding: 100px 10%;
        .project-section{
            display: flex;
            gap: 100px;
            .project-text{
                text-align: center;
                .project-buttons{
                    display: flex;
                    justify-content: center;
                    gap: 50px;
                }
            }
            .project-image-box{
                width: 100%;
                .project-image{
                    width: 100%;
                }
            }
        }
    }

    @media only screen and (max-width: 1000px) {
        header .name-logo{
            display: none;
        }
        header .phone-name-logo{
            display: block;
        }
        nav {
            display: none;
        }
        header .phone-nav {
            display: flex;
            width: 40px;
            background-color: #000;
            .phone-nav-icon{
                width: 100%;
            }
        }
    }
</style>

