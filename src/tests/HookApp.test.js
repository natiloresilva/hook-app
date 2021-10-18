import { shallow } from "enzyme"
import { HookApp } from "../HookApp"

describe('Pruebas en <HookApp/>', () => {

    test('Debe mostrarse correctamente el componente', () => {

        const wrapper = shallow(<HookApp />)
        expect(wrapper).toMatchSnapshot()

    })

})
