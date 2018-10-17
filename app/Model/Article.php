<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\System\BaseModel;

class Article extends BaseModel
{
    protected $table = 'Articles';

    protected $fillable = ['Title', 'Description', 'image_id', 'articles'];

}
