import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useCounter } from '../../../hooks/useCounter'
import { useFetch } from '../../../hooks/useFetch'
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach(() => {

        useCounter.mockReturnValue({
            counter: 10,
            increment: () => { }
        })

    })

    test('debe mostrarse correctamente el componente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar la información ', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Walter White',
                quote: 'Say my name'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)
        //console.log(wrapper.html())

        expect(wrapper.find('.alert').exists()).toBeTruthy
        expect(wrapper.find('p').text().trim()).toBe('Say my name')
        expect(wrapper.find('footer').text().trim()).toBe('Walter White')

    })

})
