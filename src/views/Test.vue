<template>
    <div :class="$style.blueColor">
        {{test}}
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            test: 'test页面'
        }
    }
}
</script>

<style lang="stylus" module>
    .blueColor
        color blue
</style>
