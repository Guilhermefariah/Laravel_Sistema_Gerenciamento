<?php

use App\Http\Controllers\SellerController;
use App\Http\Controllers\TicketController;
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

Route::get('/', [SellerController::class, 'index']);

Route::get('/sellers', [SellerController::class, 'index'])->name('sellers.index');
Route::get('/show-seller/{seller}', [SellerController::class, 'show'])->name('sellers.show');
Route::get('/create-seller', [SellerController::class, 'create'])->name('sellers.create');
Route::post('/store-seller', [SellerController::class, 'store'])->name('sellers.store');
Route::get('/edit-seller/{seller}', [SellerController::class, 'edit'])->name('sellers.edit');
Route::put('/update-seller/{seller}', [SellerController::class, 'update'])->name('sellers.update');
Route::delete('/destroy-seller/{seller}', [SellerController::class, 'destroy'])->name('sellers.destroy');

Route::get('/tickets', [TicketController::class, 'index'])->name('tickets.index');
Route::get('/show-ticket/{ticket}', [TicketController::class, 'show'])->name('tickets.show');
Route::get('/create-ticket', [TicketController::class, 'create'])->name('tickets.create');
Route::post('/store-ticket', [TicketController::class, 'store'])->name('tickets.store');
Route::get('/edit-ticket/{ticket}', [TicketController::class, 'edit'])->name('tickets.edit');
Route::put('/update-ticket/{ticket}', [TicketController::class, 'update'])->name('tickets.update');
Route::delete('/destroy-ticket/{ticket}', [TicketController::class, 'destroy'])->name('tickets.destroy');
