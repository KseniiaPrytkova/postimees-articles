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
            font-size: 7vw;
            text-align: left;
            padding: 40px 40px 40px 10px;
        }

        img.center {
            width: 20%;
        }

        #top-button-desctop {
            display: none;
        }

        #top-button-mob .btn {
            font-size: 20px;
            padding: 40px 40px 40px 20px;
        }
    }

    @media (min-width: 576px) and (max-width: 768px) { 
        .text-center p {
            font-size: 5vw;
            padding: 10px;
        }
              
        img.center {
            width: 15%;
        }

        #top-button-mob {
            display: none;
        }
    }

    @media (min-width: 768px) { 
        .text-center p {
            font-size: 4vw;
            padding: 50px;
        }
        img.center {
            width: 8%;
        }

        #top-button-mob {
            display: none;
        }
    }

    .jumbotron {
        background: url(https://images.unsplash.com/photo-1600836080410-6e9e0941a40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80) no-repeat center;
        background-size: cover;
        min-width: 100%;
        height: 100vh;
    }

    #top-button-desctop .btn {
        background-color: #c5cacd;
        color: #08b1f2;
        opacity: 0.8;
        margin-left: 20px;
        margin-top: 20px;
        font-size: 18px;
    }

    img.center {
        display: block;
        margin: 0 auto;
        /* width: 8%; */
    }

    .bottom-button img:hover {
        cursor: pointer;
        opacity: 0.5;
    }
</style>