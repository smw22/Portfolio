<script setup>
// import { RouterLink } from "vue-router";
</script>

<template> 
<header>
    
    <div class="header-wrapper">
        <div class="name-logo">
            <h1>SERGIO MORÓN WESTERGAARD</h1>
        </div>
        <nav>
            <ul>
                <li class="nav-links">HJEMME</li>
                <li class="nav-links">OM MIG</li>
                <li class="nav-links">PROJEKTER</li>
                <li class="nav-links">KONTAKT</li>
            </ul>
        </nav>
    </div>
    
</header>
</template>

<style lang="scss" scoped >
    .header-wrapper{
        background-color: #c9c9c9;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .name-logo{
            font-family: "poppins";
        }
        nav{
            ul{
                display: flex;
                gap: 50px;
                .nav-links{
                color: #000;
                list-style-type: none;
                font-family: 'poppins';
                font-weight: 500;
                }
            }

        }
    }

</style>