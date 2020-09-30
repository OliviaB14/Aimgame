<template>
    <div class="p-grid">
        <div class="p-col-12">
            <PlayButton></PlayButton>
        </div>
        <div class="p-col-12">
            <ColorCircle></ColorCircle>
        </div>
    </div>
</template>

<script>
    import ColorCircle from "@/components/ColorCircle";
    import PlayButton from "@/components/PlayButton";
    export default {
        name: "Game",
        components: {PlayButton, ColorCircle}
    }
</script>

<style scoped>

</style>
