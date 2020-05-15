<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    // protected $table='categories';
    // protected $primaryKey='id';
    // public $timestamps=true;
    
    public function posts(){
        //    return $this->hasMany('App\Posts');
        
           return $this->hasMany(Posts::class,'id');
    }
}
