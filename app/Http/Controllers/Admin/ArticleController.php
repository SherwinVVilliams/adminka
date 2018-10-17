<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\System\BREAD;
use App\Model\Article;
use Illuminate\Http\Request;

class ArticleController extends BREAD
{
    public $folder = 'articles';
    public $page_name = 'Статья';
    public $checkbox = [];
    public $choosen = [];

    function __construct() {
        parent::__construct(new Article());
    }


}
