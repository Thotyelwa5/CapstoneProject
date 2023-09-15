<template>
    <div>
      <button @click="showUpdateModal(book.bookID)">
        <i class="far fa-pen-to-square"></i>
      </button>
  
      <!-- Bootstrap Modal -->
      <div class="modal fade" id="updateBookModal" tabindex="-1" aria-labelledby="updateBookModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="updateBookModalLabel">Edit Book</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- Your form for updating the book goes here -->
              <form>
                <div class="mb-3">
                    <label for="bookID" class="form-label">Book ID</label>
                    <input type="number" class="form-control" id="bookID">
                  </div>
               
                <div class="mb-3">
                  <label for="bookTitle" class="form-label">Book Title</label>
                  <input type="text" class="form-control" id="bookTitle">
                </div>

                <div class="mb-3">
                  <label for="amount" class="form-label">Amount</label>
                  <input type="number" class="form-control" id="amount">
                </div>

                <div class="mb-3">
                    <label for="category" class="form-label">category</label>
                    <input type="text" class="form-control" id="bookUrl">
                  </div>

                  <div class="mb-3">
                    <label for="bookUrl" class="form-label">bookUrl</label>
                    <input type="text" class="form-control" id="bookurl">
                  </div>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="updateBookData">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  methods: {
    showUpdateModal(book) {
        
      if (book && book.bookID) {
        this.$store.commit('setSelectedBookID', book.bookID);
        this.$store.dispatch('fetchBook', book.bookID); 
        $('#updateBookModal').modal('show'); 
      } else {
        
        console.error("Invalid book data:", book);
      }
    },
    
  },
};
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Exo+2&family=Lora:ital,wght@0,700;1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap');
 
  </style>
  