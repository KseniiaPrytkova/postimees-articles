<template>
    <div>
        <Navbar />
        <Jumbotron />
        <!-- <Article /> -->

        <!-- <main>
            <div class="container">
                <nuxt />
            </div>
        </main> -->

        <nuxt />

    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components: {
        Navbar
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Arapey&family=Cinzel:wght@500&family=Cormorant+Garamond&family=Festive&family=Open+Sans:wght@300&display=swap');
    html, body {
        font-family: 'Arapey', serif;
        /* font-size: 18px; */
    }
    main .container{
        padding: 0;
        margin: 0;
        width: 100%;
    }
</style>