<template>
        <nav class="navbar navbar-expand navbar-dark navbar-custom-color py-0">
            <ul class="navbar-nav text-white ">
                <li class="nav-item menu">
                    <a routerLink="/" class="nav-link" href="#">
                        <div class="menu-icon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                     <a routerLink="/" class="nav-link" href="https://www.postimees.ee/">
                        <img src="../static/logo.png" class="d-inline-block" alt="logo">
                     </a>
                </li>
            </ul>

            <p class="navbar-nav text-white ms-auto">Lorem ipsum dolor sit amet consectetur</p>

            <ul class="navbar-nav ms-auto text-white desktop-nav">
                <li class="nav-item">
                    <a routerLink="/" class="nav-link" href="#">
                        <img src="../static/Facebook.png" class="d-inline-block" alt="facebook">
                    </a>
                </li>
                <li class="nav-item">
                    <a routerLink="/" class="nav-link" href="#">
                        <img src="../static/Twitter.png" class="d-inline-block" alt="twitter">
                    </a>
                </li>
                <li class="nav-item">
                    <a routerLink="/" class="nav-link" href="#">
                        <img src="../static/Email.png" class="d-inline-block" alt="email">
                    </a>
                </li>
                <li class="nav-item">
                    <a routerLink="/" class="nav-link" href="#">
                        <img src="../static/jutumull.png" class="d-inline-block" alt="jutumull">
                    </a>
                </li>
                 <li class="nav-item power">
                    <sup>88</sup>
                </li>
                <li class="nav-item login">
                    <a routerLink="/" class="nav-link text-white" href="#">LOGI&#8192;SISSE</a>
                </li>
            </ul>

            <ul class="navbar-nav ms-auto text-white mob-nav">
                <li class="nav-item">
                    <a routerLink="/" class="nav-link" href="#">
                        <img src="../static/share.png" class="d-inline-block" alt="share">
                        <p>8</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a routerLink="/" class="nav-link" href="#">
                        <img src="../static/avatar.png" class="d-inline-block" alt="avatar">
                    </a>
                </li>
            </ul>
        </nav>
</template>

<style scoped>
@media (max-width: 576px) { 
    .desktop-nav, p {
        display: none;
    }
}

@media (min-width: 576px) and (max-width: 768px) { 
    .mob-nav, p {
        display: none;
    }
}

@media (min-width: 768px) { 
    .mob-nav {
        display: none;
    }
}

.navbar-nav {
    align-items: center;       
    justify-content: center;
}

.navbar-custom-color {
    background-color: #00a5e5;
}

p, .login a {
    font-size:  1.3vw;
}

img {
    width: 75%;
}

.menu-icon div {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
}

.menu {
    background-color: #08b1f2;
    padding: 5px;
}

.power {
    margin-left: -12px;
    margin-right: 10px;
}

.login {
    padding-top: 12px;
    padding-bottom: 12px;
    border-left: 1.5px solid #4ebbeb;
}
</style>