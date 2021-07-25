<template>
    <div class="card">
        <div class="card-header rounded-0"  :style="{ backgroundImage: `url('${image}')` }">

        <div id="top-counter">
             <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle 
                    cx="40" cy="40" r="25" 
                    style="stroke:#8ad3f3; stroke-width: 2; fill:none"
                />
                <text
                    x="50%" y="50%" text-anchor="middle"
                    fill="white" font-size="3.5vw" dy=".3em">{{counter}}
                </text>
            </svg>
        </div>
            <a :href="'http://' + 'postimees.ee/' + id"><h1>{{header}}</h1></a>
        </div>

        <div class="card-body p-0">
            <div class="row g-0">
                
                <div class="col-7 text-white content-block">
                        <p>{{content}}</p>
                </div>

                <div class="col-5 p-0 circle-block">
                        <div class="circle">
                            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                <circle
                                    cx="40" cy="40" r="16" 
                                    style="stroke:#8ad3f3; stroke-width: 1; fill:none"
                                />
                                <text
                                    x="50%" y="50%" text-anchor="middle"
                                    fill="white" font-size="0.9vw" dy=".3em">{{counter}}
                                </text>
                            </svg>
                        </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'params',
    props: {
        header: {
            type: String,
            default: "Here should be headline of article"
        },
        image: {
            type: String,
            default: "https://images.unsplash.com/photo-1593745821762-a5d0d1ae878e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        },
        content: {
            type: String,
            default: "Here should be content of article"
        },
        counter: {
            type: Number,
            default: 42
        },
        id: {
            type: Number,
            default: 1000
        },
    },
};
</script>

<style scoped>
    @media (max-width: 576px) { 
        .circle-block {
            display: none;
        }

        .card-header {
            position: relative;
        }

        .content-block {
            width: 100%;
            height: 40vh;
        }

        #top-counter {
            position: absolute;
            z-index: 9;
            width: 100px;
            height: 100px;
            margin-left: -16px;
            margin-top: -8px;
            background: #00a5e5;
        }

        .card-header h1 {
            font-weight: bold;
            font-size: 5vh;
        }

        .content-block p {
            font-size: 3vh; 
        }
    }

    @media (min-width: 576px) and (max-width: 768px) { 
        #top-counter {
            display: none;
        }

        .card-header a {
            width: 60%;
        }

        .card-header a h1 {
            font-size: 6vh;
            font-weight: bold;
        }

        .content-block p {
            font-size: 3.5vh;
            line-height: 120%;
        }

        /* chess order for headers */
        .card:nth-child(even) .card-header a {
            margin-left: 40vw;
        }
    }

    @media (min-width: 768px) { 
         #top-counter {
            display: none;
        }

        .card-header a {
            width: 60%;
        }

        .card-header a h1 {
            font-size: 5.5vh;
            font-weight: bold;
        }

        .content-block p {
            font-size: 2.7vh;
            line-height: 120%;
        }

        /* chess order for headers */
        .card:nth-child(even) .card-header a {
            margin-left: 40vw;
        }
    }

    .card-header {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
        width: 100%;
        height: 60vh;
        display: flex;
        /* background-blend-mode: darken; */
        background-image: -moz-linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.18039) 100%);
        background-image: -webkit-linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.18039) 100%);
        background-image: -ms-linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.18039) 100%);
        opacity: 0.902;
        border: none;
    }

    .card {
        width: 100%;
        height: 100vh;
        border: none;
    }
  
    .content-block {
        background: #181818;
        overflow: hidden;
    }

    .content-block p {
        padding-top: 4vh;
        padding-left: 5vw;
        padding-right: 4vw;
    }

    .card-header a {
        color: white;
        align-self: flex-end;
        padding-bottom: 1%;
        margin-left: 20px;
        text-decoration: none;
        text-shadow: 2px 2px black;
    }

    .circle-block div{
        background: #00a5e5;
        width: 100%;
        height: 40vh; 
    }

    .circle {
        display: flex; 
        align-items: center; 
        overflow: hidden;
    }

    /* chess order for content-block */
    .card:nth-child(odd) .content-block {
        order: 1;
    }

    .card:nth-child(odd) .circle-block {
        order: 2;
    }  

    .card:nth-child(even) .content-block {
        order: 2;
    }

    .card:nth-child(even) .content-block {
        order: 1;
    }
</style>
