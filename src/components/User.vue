<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User! My name is {{ name }}, age: {{ age }}</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name"
                    :userAge="age"
                    @nameReset="name=$event"
                    :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageEdited="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: "Joe",
                age: 36
            }
        },
        methods: {
            changeName() {
                this.name="Mongo";
            },
            resetName() {
                this.name="Joshua";
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
