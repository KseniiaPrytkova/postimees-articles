<template>
<!-- <div class="container">
    <div class="row>"> -->
        <nav class="navbar navbar-expand bg-primary navbar-dark">

            <a routerLink="/" class="navbar-brand" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <img src="../static/logo.png" class="d-inline-block align-top" alt="Postimees">
            </a>

            <p class="navbar-nav text-white ms-auto">Lorem ipsum dolor sit amet consectetur</p>


 
            <ul class="navbar-nav ms-auto text-white desktop-nav">
                <li class="nav-item">
                    <a class="nav-link" href="about">
                        <img src="../static/Facebook.png" class="d-inline-block align-top" alt="Postimees">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about">
                        <img src="../static/Twitter.png" class="d-inline-block align-top" alt="Postimees">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about">
                        <img src="../static/Email.png" class="d-inline-block align-top" alt="Postimees">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about">
                        <img src="../static/jutumull.png" class="d-inline-block align-top" alt="Postimees">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact">LOGI SISSE</a>
                </li>
            </ul>

            <ul class="navbar-nav ms-auto text-white mob-nav">
                <li class="nav-item">
                    <a class="nav-link" href="about">
                        <img src="../static/share.png" class="d-inline-block align-top" alt="Postimees">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about">
                        <img src="../static/avatar.png" class="d-inline-block align-top" alt="Postimees">
                    </a>
                </li>
            </ul>

        </nav>
    <!-- </div>
</div> -->
    <!-- </nav> -->
</template>

<style scoped>

@media (max-width: 576px) { 
     .desktop-nav, p {
        display: none;
    }

    /* .mob-nav {
        display:block;
 float:right;
    } */

 }

 @media (min-width: 576px) { 
    .mob-nav {
        display: none;
    }
 }

</style>