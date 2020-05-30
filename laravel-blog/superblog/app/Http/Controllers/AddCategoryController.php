<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class AddCategoryController extends Controller
{
    public function addCategory(Request $request){

        $this->validate($request,[
            'cat_name'=>'required|min:3|max:30'
            ]);

        $category = New category();
        $category-> cat_name =$request->cat_name;
        $category->save();
        return ['message'=> 'Ok'];
    }

    public function all_category(){
        $categories = Category::all();
        return response()->json([
            'categories'=>$categories
        ],200);
    }



}
