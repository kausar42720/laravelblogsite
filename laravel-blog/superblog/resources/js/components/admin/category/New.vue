<template>
    <div>
      
        <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @submit.prevent="add_category()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="InputCategory">Input Category Name</label>
                    <input type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" v-model="form.cat_name" name="cat_name" placeholder="Enter categeory name..">
                    <has-error :form="form" field="cat_name"></has-error>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Save Cagetory</button>
                </div>
              </form>
            </div>
    </div>
</template>


<script>
export default {
    name:"New",
      data () {
    return {
      // Create a new form instance
      form: new Form({
       cat_name : ''
      })
    }
  },
    methods: {
        add_category () {
        // Submit the form via a POST request
        // console.log('kausar method is okkkkk.')
        this.form.post('/add-category')
            .then( ({ response }) => { this.$router.push('/category-list') 
            
                Toast.fire({
                icon: 'success',
                title: 'Category Added successfully'
                })

            })
            
            
            // .then(({ data }) => { console.log(data) })
            .catch(()=>{})
        }
  }
}
</script>

<style scoped>

</style>