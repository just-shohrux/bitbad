<template>
    <div>
        <register-container :phone="phone" />
    </div>
</template>

<script>
import RegisterContainer from '../../containers/RegisterContainer.vue'
export default {
    data(){
        return{
            phone:atob(this.$route.params.phone)
        }
    },
    components:{RegisterContainer}
}
</script>