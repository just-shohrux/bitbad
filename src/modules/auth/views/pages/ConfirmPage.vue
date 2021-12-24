<template>
    <div>
        <confirm-container :phone="phone" :name="name"/>
    </div>
</template>

<script>
import ConfirmContainer from '../../containers/ConfirmContainer.vue'
    export default {
        data(){
            return {
                phone:atob(this.$route.params.phone),
                name:atob(this.$route.params.name)
            }
        },
        components:{
                ConfirmContainer
        }
    }
</script>
