<template>
        <div>
            <h1>
                Hello World
            </h1>
            <h1>
                {{ name }}
            </h1>
        </div>
</template>

<script>
export default {
    setup() {
        return{
            name: 'Hello Basil',
        }
    },

    mounted() {
        console.log('comp mounted')
    },
}
</script>
