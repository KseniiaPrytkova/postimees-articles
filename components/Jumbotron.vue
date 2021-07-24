<template>
    <div class="jumbotron">
        <p id="top-button-desctop">
            <a class="btn" href="#" role="button">POSTIMEES PLUSS</a>
        </p>

        <p id="top-button-mob">
            <a class="btn text-white" href="#" role="button">POSTIMEES PLUSS {{this.currentDate}}</a>
        </p>

        <div class="container text-center">
            <p lh-lg class="text-white">Kauni aia leian kus soovida soove,
                laia aia ja viinamäe,
                alla majja saadab mind kuu öö poole,
                sängi laia uinun ja näen kui`s me sõidame,
                isaga draakonil
            </p>
        </div>

        <div class="comments-icon text-white">
            32&#8192; <img src="../static/comments.png" alt="comments">
        </div>

        <p class="bottom-button">
            <img @click="jump" src="../static/nooleke_2.png" class="center" alt="nooleke">
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date().toGMTString()
        }
    },
    methods: {
        jump() {
            const target = document.querySelector('.card')
            target.scrollIntoView(true)
        }
    }
}
</script>

<style scoped>
    @media (max-width: 576px) { 
        .text-center p {
            font-size: 4.7vh;
            font-weight: bold;
            text-align: left;
            line-height: 110%;
            margin: 0% 5% 10% 2%;
        }

        img.center {
            width: 12vh;
        }

        #top-button-desctop {
            display: none;
        }

        #top-button-mob .btn {
            font-size: 4vw;
            margin: 10% 10% 5% 2%;
        }

        .comments-icon {
            margin: 10% 10% 10% 5%;
            font-size: 2.5vh;
        }

        .comments-icon img {
            width: 4vh;
        }
    }

    @media (min-width: 576px) and (max-width: 768px) { 
        .text-center p {
            font-size: 6vh;
            margin: 5%;
            font-weight: bold;
        }
              
        img.center {
            width: 9%;
        }

        #top-button-mob {
            display: none;
        }

        .comments-icon {
            display: none;
        }
    }

    @media (min-width: 768px) { 
        .text-center p {
            font-size: 6vh;
            margin: 8%;
            font-weight: bold;
            line-height: 120%;
        }
        img.center {
            width: 9%;
        }

        #top-button-mob {
            display: none;
        }

        .comments-icon {
            display: none;
        }
    }

    .jumbotron {
        background: url(https://images.unsplash.com/photo-1600836080410-6e9e0941a40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80) no-repeat center;
        background-image: -moz-linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.18039) 100%);
        background-image: -webkit-linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.18039) 100%);
        background-image: -ms-linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.18039) 100%);
        opacity: 0.902;
        background-size: cover;
        min-width: 100%;
        height: 100vh;
    }

    #top-button-desctop .btn {
        background-color: #c5cacd;
        color: #08b1f2;
        opacity: 0.8;
        font-size: 14px;
        margin: 1% 0% 0% 1%;
    }

    img.center {
        display: block;
        margin: 0 auto;
    }

    .bottom-button img:hover {
        cursor: pointer;
        opacity: 0.5;
    }
</style>