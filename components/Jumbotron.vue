<template>
    <div class="jumbotron">
        <p class="top-button">
            <a class="btn " href="#" role="button">POSTIMEES PLUSS</a>
        </p>

        <div class="container text-center">
            <p lh-lg class="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod reiciendis hic, nam dignissimos molestias possimus!</p>
        </div>

        <p class="bottom-button">
            <a routerLink="/" class="nav-link" href="#">
                <img src="../static/nooleke_2.png" class="center" alt="nooleke">
            </a>
        </p>
    </div>
</template>

<style scoped>
    @media (max-width: 576px) { 
        .text-center p {
            font-size: 7vw;
            text-align: left;
            /* padding: 50px; */
        }

        img.center {
            width: 20%;
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
    }

    @media (min-width: 768px) { 
        .text-center p {
            font-size: 4vw;
            padding: 50px;
        }
        img.center {
            width: 8%;
        }
    }

    .jumbotron {
        background: url(https://images.unsplash.com/photo-1600836080410-6e9e0941a40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80) no-repeat center;
        background-size: cover;
        min-width: 100%;
        height: 100vh;
    }

    .top-button .btn {
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
</style>