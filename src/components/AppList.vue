<template>
    <v-list two-line>
        <template v-for="(item, index) in items">
            <v-list-item v-bind:key="item.pk">
                <v-list-item-content>
                    <v-list-item-title v-html="item.description"></v-list-item-title>
                    <v-list-item-sub-title v-html="item.value"></v-list-item-sub-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider :key="'D' + index" :light="true"></v-divider>
        </template>
    </v-list>
</template>

<script>
export default {
    name: 'AppList',
    data() {
        return {
        }
    },
    props: {
        items: Array
    }
}
</script>