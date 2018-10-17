<?php

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


Route::post('/superuser/login', 'Auth\LoginController@login');
Route::get('/superuser/login', 'Auth\LoginController@form');


Route::group(['middleware' => 'super'], function() {

	//BREAD

	Route::get('/superuser/articles', 'Admin\ArticleController@All');
	Route::get('/superuser/articles/edit/{id}', 'Admin\ArticleController@Edit');
	Route::post('/superuser/articles/edit', 'Admin\ArticleController@Save');
	Route::get('/superuser/articles/delete/{id}', 'Admin\ArticleController@Delete');


	//BREAD

	Route::get('/superuser', 'Admin\ArticleController@All');

	Route::get('/superuser/auth/logout', 'Auth\LoginController@logout');

	Route::post('/superuser/upload/image/{folder}/{size}', 'System\UploadController@upload');
	Route::delete('/superuser/upload/delete', 'System\UploadController@delete');

	Route::get('/superuser/upload/gallery/{folder}/{size}', 'System\UploadController@gallery');
	Route::get('/superuser/upload/gallery', 'System\UploadController@gallery');
});

Route::post('/handle', 'System\HandleController@index');
