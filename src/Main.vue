<template>
    <main
        class="c-main"
        :class="{
            'without-right': withoutRight,
            'without-left': expanding,
            'without-bread': withoutBread,
        }"
    >
        <slot></slot>
    </main>
</template>

<script>
import Bus from "../service/bus";
export default {
    name: "Main",
    props: ["withoutRight", "withoutLeft", "withoutBread"],
    data: function() {
        return {
            expanding: false,
        };
    },
    computed: {
        stickyHeader: function() {
            return this.withoutBread;
        },
    },
    watch: {
        withoutLeft: function(newval) {
            this.expanding = this.withoutLeft === undefined ? false : newval;
        },
    },
    methods: {},
    mounted: function() {
        Bus.$on("toggleLeftSide", (data) => {
            this.expanding = !data;
        });
    },
    created: function() {
        this.expanding =
            this.withoutLeft === undefined ? false : !!this.withoutLeft;
    },
};
</script>

<style lang="less">
@import "../assets/css/main.less";
</style>
