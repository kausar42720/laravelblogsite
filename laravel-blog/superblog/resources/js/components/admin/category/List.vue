<template>
        <div>
                    
           
           
              <!-- Main content -->
                <section class="content">
                    <div class="row">
                        <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                            <h3 class="card-title">Category List</h3>
                                <div class="card-tools">
                                    <router-link to="/add-category">
                                        <button type="button" class="btn btn-primary btn-tool text-right">
                                        <i class="fa fa-plus"></i>  Add Category</button>
                                    </router-link>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Category Name</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for=" (category,index) in getallcategory" :key="category.id">
                                    <td>{{index+1}}</td>
                                    <td> {{category.cat_name}} </td>
                                    <td> {{category.created_at | timeformat}} </td>
                                    <td>
                                    <a href="#" class="btn btn-success">Edit</a> | <a href="#" class="btn btn-danger">Delete</a>
                                </td>
                                </tr>
                                </tbody>
                            
                            </table>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </section>
                <!-- /.content -->
          </div>
        </div>


</template>


<script>
export default {
    Name:"List",
    mounted(){
        return this.$store.dispatch("allcategory")
    },
    computed:{
        getallcategory(){
         return this.$store.getters.getCategory
        }
        
    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>