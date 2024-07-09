import { Selector } from 'testcafe';

fixture `Mis Tests`
    .page `https://javiercastillodemos.com/`;

test('Iniciar Sesión y Consultar Datos', async t => {
    const loginButton = Selector('input[value="Iniciar Sesion"]');
    const consultarDatosButton = Selector('a').withText('Consultar Datos')
    await t
        .typeText('#email', 'pruebademo@gmail.com')
        .typeText('#password', 'Holitas12')
        .click(loginButton)
        .wait(5000);
    await t.navigateTo('https://javiercastillodemos.com/home');
    await t.click(consultarDatosButton);
});
