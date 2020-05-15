<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\posts;
use App\category;

class PostController extends Controller
{
    public function all_post(){
        // $posts = posts::all();
        // $posts = posts::with('category','user')->get();
        // return $posts;

        $category = category::all();
        $category = category::with('posts')->get();
        return $category;
        
        /* single post showing code
            $category = category::all();
            foreach ($category as $cat) {
            return $cat->posts;
            } 
        */
        // $category = Category::with('posts')->get();

        

    }
}
