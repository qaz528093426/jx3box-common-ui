<template>
    <div class="c-author">
        <AuthorInfo :uid="uid" @ready="installModules" />
        <template v-if="data">
            <div class="u-interact">
                <AuthorFollow style="margin-right: 8px;" :uid="uid" />
                <AuthorGift :uid="uid" />
            </div>
            <!-- <AuthorMsg :uid="uid" /> -->
            <AuthorLink class="u-links" :uid="uid" :data="data" />
            <AuthorMedals class="u-trophy" :uid="uid" />
            <AuthorTeams class="u-teams" :uid="uid" />
            <AuthorFans class="u-fans" :uid="uid" />
            <slot></slot>
            <AuthorPosts class="u-posts" :uid="uid" />
        </template>
    </div>
</template>

<script>
import AuthorInfo from "./author/AuthorInfo.vue";
import AuthorLink from "./author/AuthorLink.vue";
import AuthorFollow from "./author/AuthorFollow.vue";
// import AuthorMsg from "./author/AuthorMsg.vue";
import AuthorGift from "./author/AuthorGift.vue";
import AuthorFans from "./author/AuthorFans.vue";
import AuthorMedals from "./author/AuthorMedals.vue";
import AuthorTeams from "./author/AuthorTeams.vue";
import AuthorPosts from "./author/AuthorPosts.vue";
export default {
    name: "Author",
    props: ["uid"],
    data: function () {
        return {
            data: "",
        };
    },
    methods: {
        installModules: function (data) {
            this.data = data;
        },
    },
    components: {
        AuthorInfo,
        AuthorLink,
        AuthorFollow,
        // AuthorMsg,
        AuthorGift,
        AuthorMedals,
        AuthorTeams,
        AuthorPosts,
        AuthorFans,
    },
};
</script>

<style lang="less">
@import "../assets/css/author.less";
</style>
