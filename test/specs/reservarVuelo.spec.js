const PaginaPrincipal = require('../pageobjects/paginaPrincipal.page');
const ReservarVuelo = require('../pageobjects/reservarVuelo.page')

describe('Automatizacion E2E Wingo', () => {
    it('Debe buscar y reservar un vuelo de Medellin a Cancun', async () => {
        await PaginaPrincipal.open();
        await PaginaPrincipal.buscarVuelo('Medellín','Cancún');
        await ReservarVuelo.reservarVuelo();
    });
});


