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
        <nav>
        <ul>
            <li class="nav-links"><a href="#scrollToOne" class="nav-links">HJEMME</a></li>
            <li class="nav-links"><a href="#scrollToTwo" class="nav-links">OM MIG</a></li>
            <li class="nav-links"><a href="#scrollToThree" class="nav-links">PROJEKTER</a></li>
            <li class="nav-links"><a href="#scrollToFour" class="nav-links">KONTAKT</a></li>
        </ul>
        </nav>
    </header>
</template>
  

<style lang="scss" scoped>
    header {
        position: fixed;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: all 0.4s ease-in-out;
        .name-logo {
        font-family: "poppins";
        font-style: italic;
        }
        nav {
            ul {
                display: flex;
                gap: 50px;
                .nav-links {
                color: #000;
                list-style-type: none;
                font-family: 'poppins';
                font-weight: 500;
                text-decoration: none; 
                }
            }
        }
    }

    .header-wrapper-scrolled {
        background-color: rgb(230, 230, 230);
        opacity: 1;
    }
</style>