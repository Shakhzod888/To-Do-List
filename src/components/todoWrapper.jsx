import React from "react";
import { v4 as uuidv4 } from 'uuid'; //modul
import TodoForm from "./todoForm";
import Todo from "./todo";

export default class TodoWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    // boshlangich holatni saqlaydi

    addTodo = (todo) => { //todo qoshish uchun
        this.setState((prevState) => ({
            todos: [
                ...prevState.todos,
                { id: uuidv4(), task: todo, completed: false, isEditing: false }
            ]
        }), () => {
            console.log(this.state.todos);
        });
    }

    toggleComplete = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        }));
    }

    deleteTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }));
    }

    render() {
        return (
            <div className="TodoWrapper">
                <h1>Get Things Done!</h1>
                <TodoForm addTodo={this.addTodo} />
                {
                    this.state.todos.map((todo, index) => (
                        <Todo
                            task={todo}
                            key={index}
                            toggleComplete={this.toggleComplete}
                            deleteTodo={this.deleteTodo}
                        />
                    ))
                }
            </div>
        );
    }
}



/*
  Sizga berilgan koddagi TodoWrapper nomli React komponenti bir to'plamni yoki ro'yxatni ko'rsatuvchi foydalanuvchi interfeysini tasvirlaydi. Endi koddan qanday tushuntirishni olib bering:

U React va uuidv4 modullarini chaqiradi. uuidv4 modulini v4 sifatida uuidv4 nomi bilan import qilib oladi.
TodoForm va Todo komponentlarini import qiladi.
TodoWrapper nomli komponentni React.Component sinfidan extend qilgan bir sinf sifatida aniqlaydi.
constructor metodi orqali komponent obyektining boshlang'ich holatini sozlaydi. todos nomli maydon ro'yxatni boshlang'ich qiymati bo'sh ro'yxat ([]) bo'ladi.
addTodo metodi, yangi todo qo'shish uchun ishga tushiriladi. U holatni oldini olish uchun setState ni ishlatadi. Yangi todo ro'yxatga qo'shiladi. Bunda avvalgi ro'yxat ma'lumotlari (prevState.todos) olib, yangi todo obyektini qo'shish uchun ...prevState.todos va yangi todo obyektini qo'shadi. Yangi todo obyektida unikal id (uuidv4 orqali generatsiyalangan), vazifa (task), tugaganlik (completed) va tahrir qilish holati (isEditing) maydonlari mavjud. setState tugagandan so'ng ro'yxatni konsolga chiqaradi.
toggleComplete metodi, vazifani tugatish/ajratishni o'zgartirish uchun ishga tushiriladi. U holatni oldini olish uchun setState ni ishlatadi. Ro'yxatdagi to'g'ri todo obyektini topib, completed maydonini o'zgartiradi. Agar todo ning id si berilgan id ga teng bo'lsa, completed ni qaytadan !todo.completed (qarshilik qiymatiga o'zgartiradi), aks holda todo ni oldi-qachon qaytaradi.
deleteTodo metodi, todo ni o'chirish uchun ishga tushiriladi. U holatni oldini olish uchun setState ni ishlatadi. Ro'yxatdagi todo obyektini topib, id si berilgan id ga teng bo'lmagan barcha todolarni olib qaytaradi.
render metodi komponentning JSX-ni ko'rsatadi. Komponentning ichida sarlavha (<h1>Get Things Done!</h1>), TodoForm komponenti va todo ro'yxatini ko'rsatuvchi Todo komponentlari mavjud. Ro'yxatdagi har bir
*/