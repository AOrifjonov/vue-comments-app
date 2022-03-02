<template>
  <div class="w-75 mx-auto">
    <my-modal v-model:show="modalVisible">
      <comment-form @addComment="createElement" />
    </my-modal>
    <div class="d-flex">
      <my-select
        class="select-custom bg-info text-bolt"
        v-model="selectedSort"
        :options="selectOptions"
      />
      <my-input
        class="form-control w240"
        placeholder="Search..."
        v-model="searchQuery"
      />
      <my-button @click="showModal" class="btn btn-primary btn-custom"
        >Add</my-button
      >
    </div>
    <comment-list
      :comments="sortedAndSearchComments"
      @remove="removeComment"
      v-if="!isLoading"
    />
    <div v-else class="text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
      <p>Loading...</p>
    </div>
  </div>
</template>



<script>
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import axios from "axios";

export default {
  components: {
    CommentForm,
    CommentList,
  },

  data() {
    return {
      comments: [],
      modalVisible: false,
      isLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPage: 0,
      selectOptions: [
        { value: "name", name: "Filter by name" },
        { value: "email", name: "Filter by email" },
      ],
    };
  },

  methods: {
    createElement(comment) {
      this.comments.push(comment);
      this.modalVisible = false;
    },
    removeComment(comment) {
      this.comments = this.comments.filter((c) => c.id !== comment.id);
    },
    showModal() {
      this.modalVisible = true;
    },

    changePage() {
      this.page += 1;
      this.fetchComment();
    },
    async fetchComment() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.comments = response.data;
      } catch (e) {
        alert("Internet bilan bo'gliq muammo yuz berdi!");
      } finally {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.fetchComment();
  },

  computed: {
    filteredComments() {
      return [...this.comments].sort((a, b) => {
        if (this.selectedSort === "name") {
          return a.name.localeCompare(b.name);
        } else if (this.selectedSort === "email") {
          return a.email.localeCompare(b.email);
        }
      });
    },
    sortedAndSearchComments() {
      return this.filteredComments.filter((comment) => {
        return (
          comment.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          comment.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
};
</script>


<style scoped>
  .text-bolt {
    font-family: 'Times New Roman', Times, serif;
  }

  .select-custom {
    width: 180px;
    margin-right: 60%;
  }

  .select-custom:hover {
    cursor: pointer;
  }

  .current-page {
    background-color: #fff;
    color: #000;
  }

</style>