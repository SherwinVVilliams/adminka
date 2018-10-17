@extends('admin.template.master')
@section('pageName', $page_name.' | Язык: '.strtoupper('en'))

@if(isset($input) && $input)
    @section('pageSubName')
        <a href="/superuser/{{$folder}}/delete/{{$input["id"]}}" class="btn btn-sm btn-danger deleteButton">Удалить</a>
    @endsection
@endif

@section('content')
    <div class="col-xs-12">
        {!! F::o('/superuser/'.$folder.'/edit') !!}

            

            {!! F::delimiter('Общее') !!}

                {!! F::hide('id', $id)!!}

                {!! F::input('Title', 'Название', ['require' => true]) !!}

                {!! F::input('Description', 'Описание', ['require' => true]) !!}
               
                {!! F::image('image_id', 'Картинка', [
                    'require' => true,
                    'size' => '245x245',
                    'folder'    => 'articles'
                ]) !!}


            {!! F::delimiter('Repeater') !!}
                {!! F::repeaterOpen('articles', 'Article') !!}
                        {!! F::hide('id')!!}
                        
                        {!! F::input('Title', 'Название', ['require' => true]) !!}

                        {!! F::input('Description', 'Описание', ['require' => true]) !!}

                        {!! F::image('image_id', 'Картинка', [
                            'require' => true,
                            'size' => '245x245',
                            'folder'    => 'articles'
                        ]) !!}
                        
                        

                {!! F::repeaterClose('articles') !!}

        {!!F::c()!!}
    </div>

@endsection