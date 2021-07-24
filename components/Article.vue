<template>
    <div class="card">
        <div class="card-header rounded-0"  :style="{ backgroundImage: `url('${image}')` }">
            <!-- <h1>{{header}}</h1> -->
            <!-- <div class="circle-top"> -->
            <!-- </div> -->
        <div id="top-counter">
             <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle 
                    cx="40" cy="40" r="25" 
                    style="stroke:#8ad3f3; stroke-width: 2; fill:none"
                />
                <text
                    x="50%" y="50%" text-anchor="middle"
                    fill="white" font-size="3vw" dy=".3em">{{counter}}
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
                                    cx="40" cy="40" r="12" 
                                    style="stroke:#8ad3f3; stroke-width: 0.2; fill:none"
                                />
                                <text
                                    x="50%" y="50%" text-anchor="middle"
                                    fill="white" font-size="0.5vw" dy=".3em">{{counter}}
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

        .content-block {
            width: 100%;
            height: 40vh;
        }

        #top-counter {
            color: white;
            width: 100px;
            height: 100px;
            /* border: 1px solid white; */
            /* display: flex; */
            margin-left: -16px;
            margin-top: -8px;
            background: #00a5e5;

        }

        /* .card {
            position: relative;
        } */



        /* .circle-top {
            position: absolute; 
            z-index: 9;
            margin-top: -60vh;

        } */

        /* .circle-block { */ 
            /* position: absolute; */
            /* margin-top: -60vh; */
            /* width:15%;
            height: 10%; */
            /* z-index: 9; */
            /* overflow: hidden; */
        /* }

        /* .circle {
                /* display: flex;  */
                /* position: absolute;
                margin-top: -58vh;
                overflow: hidden;
            height: 10%;
            width:15%;

        } */ 

        /* .card-header a {
            width: 100%;
        } */

        /* .content-block p {
            font-size: 20px;
        } */

    }

    @media (min-width: 576px) and (max-width: 768px) { 
        #top-counter {
            display: none;
        }
    }

    @media (min-width: 768px) { 
         #top-counter {
            display: none;
        }
    }

    .card-header {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
        width: 100%;
        height: 60vh;
        display: flex;
        background-blend-mode: darken;
    }

    .card {
        width: 100%;
        height: 100vh;
    }

    .circle-block div{
        background: #00a5e5;
        width: 100%;
        height: 40vh; 
    }
  
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

    .content-block {
        background: #181818;
        overflow: hidden;
    }

    .content-block p {
        font-size: 3.3vh;
        padding-top: 4vh;
        padding-left: 5vw;
        padding-right: 4vw;
    }

    .card-header a {
        color: white;
        /* font-size: 6.8vh; */
        font-weight: bold;
        align-self: flex-end;
        padding-bottom: 1%;
        width: 60%;
        text-decoration: none;
        text-shadow: 2px 2px black;
    }

    .circle {
        display: flex; 
        align-items: center; 
        overflow: hidden;
    }
</style>
