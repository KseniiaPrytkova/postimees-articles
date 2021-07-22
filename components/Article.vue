<template>
<!-- <div class="article"> -->
    <div class="card">

        <div class="card-header rounded-0"  :style="{ backgroundImage: `url('${image}')` }">
            {{image}}
        </div>

        <div class="card-body">
            <div class="row g-0">

                <div class="col-7 left-block">
                    <div class="card-block">
                        <p>Change around the content for awsomenes</p>
                    </div>
                </div>

                <div class="col-5 right-block p-0">
                    <!-- <div class="container right-block"></div> -->
                    <div class="container" >fsf</div>
                </div>

            </div>
        </div>
    </div>
<!-- </div> -->

</template>

<script>
export default {
    //  props: ['headline', 'image'],
  name: 'params',
  props: {
    headline: {
      type: String,
      default: "ddd"
    },
    image: {
      type: String,
      default: "ddd"
    }
  },

  
//    data() {
//     return {
//       member: {
//         name: "Jakz",
//         coverImage: this.image,
//       },
//     };
//   },
//   computed: {
//     imgStyle() {
//       return {
//     "background": red,
//       };
//     }
//   }
};
</script>

<style scoped>
    .card-header {
        /* background: url(https://images.unsplash.com/photo-1610850826190-8120a84d03af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80) no-repeat; */
         /* background: url({{image}}) no-repeat; */
        background-size: cover;
        width: 100%;
        height: 60vh;
    }

    /* .card-header img {
         background-repeat: no-repeat;
         width: 100%;
    } */

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
    }
/* 
    .card-block {
        padding-left:0px;
    } */

    .card-body {
        padding: 0px;
    }

   
</style>
