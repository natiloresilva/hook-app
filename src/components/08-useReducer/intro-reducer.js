
// Tenemos nuestro estado inicial
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

// Definimos nuestro reducer
// El Reducer recibe 2 argumentos, un initialState y una accón que va a modificar ese estado. SIEMPRE retorna un nuevo estado! 
const todoReducer = ( state = initialState, action ) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }

    return state
}

// Inicialización de mi lista de to do
let todos = todoReducer()


// Nuevo elemento para agregar a la lista
const newTodo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}]


// Lo voy a hacer mediante una acción, en la acción debemos mandarle la propiedad type y el payload(puede tener otro nombre)
const agregarTodoAction = {
    type:'agregar',
    payload: newTodo
}

// Para agregar un nuevo todo a nuestra lista debemos llamar al reducer
todos = todoReducer(todos, agregarTodoAction)

//console.log(todos)