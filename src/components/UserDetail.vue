<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}, age {{ userAge }}</p>
        <button @click="resetName">Reset the name</button>
        <button @click="resetFn">Reset the name via cb</button>

    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            name: { 
                type:String, 
                required: true
                },
            userAge: Number,
            resetFn: Function
        },
        methods: {
            resetName() {
                this.name='Joshua';
                this.$emit('nameReset', this.name);
            }
        },
        created() {
           // listen for events from the event bus
            eventBus.$on('ageEdited', (data) => {
                console.log(data);
                this.userAge = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
