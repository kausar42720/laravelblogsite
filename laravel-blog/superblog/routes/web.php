<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//post data 
Route::get('post', 'PostController@all_post')->name('post');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/{anypath}', 'HomeController@index')->where('path','.*');

Route::post('/add-category','AddCategoryController@addCategory');
Route::get('/category','AddCategoryController@all_category');

