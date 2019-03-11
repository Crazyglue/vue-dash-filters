<template>
    <div>
        <span>{{ testItem | startCase }}</span><br>
        <span>{{ array | slice(2, 6) }}</span><br>
        <span>{{ arrayMap | map(({ name }) => name) }}</span><br>
        <span>{{ num | round }}</span>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            testItem: 'hi', // Single string
            array: [ 1, 2, 3, 4, 5, 6, 7, 8 ], // array, multiple params
            arrayMap: [
                { name: 'hi' },
                { name: 'bye' },
                { name: 'foo' },
                { name: 'bar' },
                { name: 'fizz' }
            ],
            num: 3.14159
        };
    }
};
</script>

<style>

</style>
