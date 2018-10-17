@extends('admin.template.master')
@section('pageName', $page_name)
@section('pageSubName')
   <a href="/superuser/{{$folder}}/edit/0" class="btn btn-success">Добавить</a>
@endsection
@section('content')
    <div class="table-responsive">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            @foreach($data as $list)
                <tr>
                    <td>{{$list->id}}</td>
                    <td>{{$list->Title}}</td>
                    <td>{{$list->Description}}</td>
                    <td>
                       <a href="/superuser/{{$folder}}/delete/{{$list->id}}"
   class="btn btn-sm btn-danger deleteButton">Удалить</a>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection