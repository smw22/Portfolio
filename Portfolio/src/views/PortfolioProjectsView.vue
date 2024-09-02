<script setup>
import FourthSection from '@/components/FourthSection.vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import getPortfolio from '@/modules/getPortfolio'
import { onMounted } from 'vue';

const { portfolioItems } = getPortfolio()
const route = useRoute()
const id = ref(route.params.id)
const specificPortfolioItems = portfolioItems.value.find(item => item.id == id.value)

// onMounted(() => {
//   specificPortfolioItems.value = portfolioItems.value.find(item => item.id == id.value);
// });

const headerRef = ref(null);

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    headerRef.value.classList.add('header-wrapper-scrolled');
  } else {
    headerRef.value.classList.remove('header-wrapper-scrolled');
  }
});


const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  // Ensure the scroll is set to the top of the page on load
  window.scrollTo(0, 0);
});

</script>

<template>
    <header ref="headerRef">
        <div class="name-logo">
        <h2><routerLink to="/" class="home-link">SERGIO MORÓN WESTERGAARD</routerLink></h2>
        </div>
        <div class="phone-name-logo">
        <h2>SMW</h2>
        </div>
        <nav>
            <ul :class="{ 'active': menuOpen }">
                <li class="nav-links"><routerLink to="/" class="home-link">HJEMME</routerLink></li>
                <li class="nav-links"><a href="#scrollToFour" class="nav-links">KONTAKT</a></li>
            </ul>

            <div  :class="{ 'active': menuOpen }"  class="ham-menu phone-nav" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    <main>
        <div v-if="!specificPortfolioItems">
            Der findes ikke et sådant porteføljeelement
        </div>
        <div v-else>
            <div class="project-site-container">
                <h1 class="project-title">{{ specificPortfolioItems.title }}</h1>
                <div class="line"></div>
                <div class="project-section">
                    <div class="project-text">
                        <div class="project-information">
                            <div class="specific-information">
                                <h1 class="project-data-title">Role</h1>
                                <p class="project-data"> {{ specificPortfolioItems.category }}</p>
                            </div>
                            <div class="specific-information">
                                <h1 class="project-data-title">Dato</h1>
                                <p class="project-data"> {{ specificPortfolioItems.date }}</p>
                            </div>
                            <div class="specific-information">
                                <h1 class="project-data-title">Oversigt</h1>
                                <p class="project-data"> {{ specificPortfolioItems.overview }}</p>
                            </div>
                            
                        </div>

                    </div>
                    
                    <div class="project-image-box">
                    <img :src="specificPortfolioItems.image" alt="" class="project-image">
                    </div>

                    <h1 class="project-data-title">Koncept</h1>
                    <div class="text-description">
                            <p> {{ specificPortfolioItems.description }}</p>
                    </div>
                    <!-- <div class="project-buttons">
                        <button :onclick="window.open('{{ github_link }}', '_blank')" class="project-button">
                            GitHub
                        </button>
                        <button :onclick="window.open('{{ demo_link }}', '_blank')" class="project-button">
                            Se Demo
                        </button>

                        
                        <a :href="specificPortfolioItems.github_link">
                        <button class="project-button">
                            GitHub
                        </button>
                        </a>

                        <a :href="specificPortfolioItems.demo_link">
                        <button class="project-button">
                            Se Demo
                        </button>
                        </a>
                    </div> -->

                    <div v-if="specificPortfolioItems.github_link || specificPortfolioItems.demo_link" class="project-buttons">
                        <a v-if="specificPortfolioItems.github_link" :href="specificPortfolioItems.github_link">
                        <button class="project-button">
                            GitHub
                        </button>
                        </a>
                        <a v-if="specificPortfolioItems.demo_link" :href="specificPortfolioItems.demo_link">
                        <button class="project-button">
                            Se Demo
                        </button>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </main>
    <FourthSection/>
</template>

<style lang="scss" scoped>
    .project-title{
        margin: 0 auto;
        width: fit-content;
        font-size: 4em;
    }
    .line{
        height: 2px;
        width: 100%;
        background-color: #000;
        margin: 0 auto 50px auto;
    }

    .project-site-container{
        padding: 100px 10%;
        .project-section{
            display: flex;
            flex-direction: column;

            .project-information{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                .project-data-title{
                    font-size: 2em;
                    font-weight: 500;
                }
                .project-data{
                    font-size: 16px;
                }
            }
            .project-text{
                text-align: center;
            }
            .project-image-box{
                margin-top: 50px;
                margin-bottom: 50px;
                width: 100%;
                .project-image{
                    width: 100%;
                }
            }
            .project-buttons{
                margin-top: 50px;
                display: flex;
                justify-content: center;
                gap: 50px;
                .project-button{
                    padding: 5px 20px;
                    border-radius: 25px;
                    font-size: 16px;
                    border: solid 2px #ff6622;
                    color: black;
                    transition: all 0.3s ease;
                    background-color: white;
                    cursor: pointer;
                }
                .project-button:hover{
                    color: white;
                    background-color: #ff6622;
                }
            }
        }
    }

    @media only screen and (max-width: 1000px) {
        .project-title{
        margin: 0 auto;
        width: fit-content;
        font-size: 2.5em;
        }
    }

    //header with two menues for project side (the same style as in PortfolioHeader.vue)
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
            .nav-links{
                text-decoration: none;
                list-style-type: none;
                color:#000;
            }
            .home-link{
                color: #000;
                list-style-type: none;
                text-decoration: none; 
            }
        }
        .phone-name-logo{
            font-style: italic;
            display: none;
        }
        nav {
            ul {
                display: flex;
                gap: 50px;
                .nav-links {
                color: #000;
                list-style-type: none;
                font-weight: 500;
                text-decoration: none; 
                }
                .home-link{
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
    @media only screen and (max-width: 1000px) {
        header .name-logo{
            display: none;
        }
        header .phone-name-logo{
            display: block;
        }
        nav .ham-menu {
            display: block;
            height: 40px;
            width: 40px;
            margin-left: auto;
            position: relative;
            span{
                height: 5px;
                width: 100%;
                background-color: rgb(0, 0, 0);
                border-radius: 25px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: .3s ease;
            }
            span:nth-child(1) {
                top: 25%;
            }
            span:nth-child(2) {
                width: 66%;
                transform: translate(-25%, -50%);
            }
            span:nth-child(3) {
                top: 75%;
                width: 33%;
                transform: translate(50%, -50%);
            }
            .ham-menu.active span {
                background-color: white;
            }
            .ham-menu.active span:nth-child(1) {
                top: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
            }
            .ham-menu.active span:nth-child(2) {
                opacity: 0;
            }
            .ham-menu.active span:nth-child(3) {
                top: 50%;
                transform: translate(-50%, -50%) rotate(-45deg);
            }
        }
        header{
            nav{
                ul{
                background-color:  #ff6622;
                height: 60vh;
                width: 100%;
                position: absolute;
                top: 0;
                right: 0;
                right: -100%;
                display: flex;
                flex-direction: column;
                align-items: center;    
                justify-content: center;
                text-align: center;
                font-size: 20px;
                color: white;
                transition: .3s ease;
                }
                ul.active {
                    right: 0;
                }
            }
        }
    }

</style>

