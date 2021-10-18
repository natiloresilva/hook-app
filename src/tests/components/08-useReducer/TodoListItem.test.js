const { shallow } = require("enzyme")
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos'

describe('pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )


    test('Debe de mostrarse correctamente el componente ', () => {
        expect(wrapper).toMatchSnapshot()
    })



    test('Debe de llamar la funcion handleDelete ', () => {
        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(1)
    })



    test('Debe de llamar la funcion handleToggle ', () => {
        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith(1)
    })



    test('Debe de mostrar el texto correctamente ', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    })

    test('debe de tener la clase complete si el TODO.done = true', () => {
        const todo = demoTodos[0]
        todo.done = true

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
    })


})
