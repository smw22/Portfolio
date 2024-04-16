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
            <li class="nav-links"><a href="#scrollToOne" class="nav-links">HJEMME</a></li>
            <li class="nav-links"><a href="#scrollToTwo" class="nav-links">OM MIG</a></li>
            <li class="nav-links"><a href="#scrollToThree" class="nav-links">PROJEKTER</a></li>
            <li class="nav-links"><a href="#scrollToFour" class="nav-links">KONTAKT</a></li>
        </ul>
        </nav>
        <div class="phone-nav">
            <img src="../assets/burguer-menu.png" alt="" class="phone-nav-icon">
            <div class="phone-nav-links">

            </div>
        </div>
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