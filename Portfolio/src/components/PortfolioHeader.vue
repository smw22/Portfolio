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
                <li class="router-links">HJEMME</li>
                <li class="router-links">OM MIG</li>
            </ul>
        </nav>
    </div>
    
</header>
</template>

<style lang="scss"  scoped >
    .header-wrapper{
        background-color: #c9c9c9;
        display: flex;
        justify-content: space-around;
        align-items: center;
        nav{
            ul{
                display: flex;
                gap: 50px;
                .router-links{
                color: #000;
                list-style-type: none
                }
            }

        }
    }

</style>