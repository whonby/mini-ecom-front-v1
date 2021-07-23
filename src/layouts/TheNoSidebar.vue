<template>
    <div>
        <slot />
    </div>

</template>

<script>

export default {
     components:{
            
        },
}
</script>
<style scoped>

    .body {
        background: url('http://i.imgur.com/Eor57Ae.jpg') no-repeat fixed center center !important;
        background-size: cover;
        font-family: Montserrat;
        overflow: hidden !important;
    }

    @media screen and ( height: 400px ) {
        .body {
            background: url('http://i.imgur.com/Eor57Ae.jpg') no-repeat fixed center center !important;
            background-size: cover;
            font-family: Montserrat;
            height: 400px !important ;
            overflow: hidden !important;
        }
    }

    @media screen and ( min-height: 700px ) {
        .body {
            background: url('http://i.imgur.com/Eor57Ae.jpg') no-repeat fixed center center !important;
            background-size: cover;
            font-family: Montserrat;
            height: 700px !important ;
            overflow: hidden !important;
        }
    }


    @media screen and ( max-height: 680px ) {
        .body {
            background: url('http://i.imgur.com/Eor57Ae.jpg') no-repeat fixed center center !important;
            background-size: cover;
            font-family: Montserrat;
            height: 680px !important ;
            overflow: hidden !important;
        }
    }
    @media screen and ( max-height: 800px ) {
        .body {
            background: url('http://i.imgur.com/Eor57Ae.jpg') no-repeat fixed center center !important;
            background-size: cover;
            font-family: Montserrat;
            height: 800px !important ;
            overflow: hidden !important;
        }
    }
    @media screen and ( max-height: 1024px ) {
        .body {
            background: url('http://i.imgur.com/Eor57Ae.jpg') no-repeat fixed center center !important;
            background-size: cover;
            font-family: Montserrat;
            height: 1024px !important ;
            width: 100%;
            overflow: hidden !important;
        }
    }
</style>