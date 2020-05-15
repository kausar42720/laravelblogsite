<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    public function user()
    {
        //  return $this->belongsTo('App\User', 'foreign_key', 'other_key');
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        //  return $this->belongsTo('App\User', 'foreign_key', 'other_key');
        return $this->belongsTo(category::class, 'cat_id', 'id');
    }


}
