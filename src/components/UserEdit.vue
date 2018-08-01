<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'; // import event bus object

    export default {
        props: [
            'userAge'
        ],
        methods: {
            editAge: function() {
                this.userAge = 31;
                //this.$emit('ageEdited', this.userAge);
                eventBus.$emit('ageEdited', this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
