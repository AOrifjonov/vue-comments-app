<template>
    <div class="comment">
        <div>
            <div><b>Name: </b>{{comment.name}}</div>
            <div><b>Email: </b>{{comment.email}}</div>
            <div><b>Content: </b>{{comment.body}}</div>
        </div>
        <div>
            <my-button class="btn" @click="$emit('remove', comment)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </my-button>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    }
}
</script>


<style scoped>
    .comment {
        border: 1px solid #ccc;
        border-top-left-radius: 30px!important;
        padding: 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>