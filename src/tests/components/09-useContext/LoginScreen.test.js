import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

//Config para utilizar el mount, ya que hay problemas de compatibilidad con la versión 17 de React
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })


describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de ejecutar el setUser con el argumento esperado', () => {

        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Galileo',
            email: "gali@gmail.com"
        })

    });



})
