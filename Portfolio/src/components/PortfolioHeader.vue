<script setup>
import { ref } from 'vue';

const headerRef = ref(null);

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    headerRef.value.classList.add('header-wrapper-scrolled');
  } else {
    headerRef.value.classList.remove('header-wrapper-scrolled');
  }
});

// const hamMenu = document.querySelector(".ham-menu");

// const offScreenMenu = document.querySelector(".off-screen-menu");

// hamMenu.addEventListener("click", () => {
//   hamMenu.classList.toggle("active");
//   ul.classList.toggle("active");
// });


const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>


<template>
    <header ref="headerRef">
        <div class="name-logo">
        <h2><a href="#scrollToOne" class="nav-links">SERGIO MORÓN WESTERGAARD</a></h2>
        </div>
        <div class="phone-name-logo">
        <h2><a href="#scrollToOne" class="nav-links">SMW</a></h2>
        </div>
        <nav>
            <ul :class="{ 'active': menuOpen }">
                <li class="nav-links"><a href="#scrollToOne" class="nav-links">HJEMME</a></li>
                <li class="nav-links"><a href="#scrollToTwo" class="nav-links">OM MIG</a></li>
                <li class="nav-links"><a href="#scrollToThree" class="nav-links">PROJEKTER</a></li>
                <li class="nav-links"><a href="#scrollToFour" class="nav-links">KONTAKT</a></li>
            </ul>

            <div  :class="{ 'active': menuOpen }"  class="ham-menu phone-nav" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
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
            .nav-links{
                text-decoration: none;
                list-style-type: none;
                color:#000;
            }
        }
        .phone-name-logo{
            font-style: italic;
            display: none;
            .nav-links{
                text-decoration: none;
                list-style-type: none;
                color:#000;
            }
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