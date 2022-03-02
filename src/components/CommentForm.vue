<template>
  <div>
    <form class="mt-4" @submit.prevent>
      <h3>Add Comment:</h3>
      <my-input
        v-model="comment.name"
        placeholder="Enter Your Name ..."
        class="form-control"
      />
      <my-input
        v-model="comment.email"
        placeholder="Enter Your Email ..."
        class="form-control my-2"
      />
      <my-input
        v-model="comment.body"
        placeholder="Enter Your Content ..."
        class="form-control"
      />
      <div class="d-flex flex-row-reverse mt-2">
        <my-button @click="createElement" class="btn btn-primary">
          Add comment
        </my-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            comment: {
                name: "",
                email: "",
                body: "",
            },
        }
    }, 
    methods: {
        createElement(){
            this.comment.id = Date.now();
            this.$emit('addComment', this.comment);
            this.comment = {
                name: '',
                email: '',
                body: '',
            }
        }
    }
}
        
        
</script>

<style>
</style>