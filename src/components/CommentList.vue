<template>
    <div>
        <div v-if="comments.length > 0">
            <transition-group name="list" >
                <comment-item 
                    class="comment" 
                    v-for="comment in comments"
                    :comment="comment" 
                    :key="comment.id"
                    @remove="$emit('remove', comment)" 
                />
            </transition-group>
        </div>
        <div v-else>
            <h3 class="text-center text-secondary mt-5">We can not found any comments!</h3>
        </div>
    </div>
</template>

<script>
import CommentItem from './CommentItem';
export default {
    components: {
        CommentItem,
    },

    props: {
        comments: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
    .comment {
        margin-top: 2rem;
        border-radius: 3px;
        border: 2px solid #ccc;
        padding: 7px;
    }

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active,
    .list-leave-active {
        transition: all .3s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .list-move {
        transition: transform 1s ease;
    }
</style>