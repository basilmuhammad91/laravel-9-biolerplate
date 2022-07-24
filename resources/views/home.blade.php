@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <h1 class="text-black-50">You are logged in!</h1>
        {{-- <Test></Test> --}}

        <router-view></router-view>
    </div>
@endsection
