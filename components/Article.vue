<template>
    <div class="card">
        <div class="card-header rounded-0"  :style="{ backgroundImage: `url('${image}')` }">
            <h1>{{header}}</h1>
        </div>

        <div class="card-body">
            <div class="row g-0">
                <div class="col-7 left-block">
                    <div class="card-block">
                        <p>{{content}}</p>
                    </div>
                </div>
                <div class="col-5 right-block p-0">
                    <div class="container">
                        <div class="circle">
                            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="12" style="stroke:white; stroke-width: 0.2; fill:none"/>
                                <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="0.5vw" dy=".3em">{{counter}}</text>
                            </svg>
                        </div>
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
    },
};
</script>

<style scoped>
    .card-header {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
        width: 100%;
        height: 60vh;
        display: flex;
    }

    .card {
        width: 100%;
        height: 100vh;
    }

    .right-block div{
        background: #00a5e5;
        width: 100%;
        height: 40vh; 
    }

    .left-block {
        background: #181818;
        overflow: hidden;
    }

    .left-block p {
        color: white;
        font-size: 2.2vw;
    }

    .card-body {
        padding: 0px;
    }

    .card-header h1 {
        color: white;
        font-size: 5vw;
        align-self: flex-end;
    }

    .circle {
        display: flex; 
        align-items: center; 
        overflow: hidden;
    }
</style>
