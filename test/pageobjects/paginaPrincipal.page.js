const Page = require('./page');

class PaginaPrincipal extends Page {
    /**
     * definimos selectores usando metodos get
     */
    get selectOrigen() { return $('.styledSelectOrigen') }
    get inputOrigen() { return $('#inputOrigen') }
    get comboOrigen() { return $('#comboOrigen') }
    get inputDestino() { return $('#inputDestino') }
    get comboDestino() { return $('#comboDestino') }
    get pasajeros() { return $('#tPasajeros') }
    get comboSelecionaPasajero() { return $('.select-passenger') }
    get ninosPlus() { return $("(//div[@class='plus'])[2]") }
    get infantesPlus() { return $("(//div[@class='plus'])[3]") }
    get selectFechaIda() { return $('#fromDate') }
    get fechaIda() { return $(`((//div[@class='month-wrapper'])[1]//div[contains(@class, ' valid')])[3]`) }
    get selectFechaRegreso() { return $('#toDate') }
    get fechaRegreso() { return $(`((//table[@class='month2'])[2]//tbody//tr//td//div[contains(@class,' valid')])[3]`) }
    get botonBuscarVuelo() { return $('.btn-search') }

    /**
     * Metodo para buscar vuelo
     * Incluye validaciones sobre los comboBox que deben mostrarse en origen y destino
     */
    async buscarVuelo(origen, destino) {
        await this.selectOrigen.click();
        await this.inputOrigen.setValue(origen);
        await expect(this.comboOrigen).toBeDisplayed()
        await this.comboOrigen.click();
        await this.inputDestino.setValue(destino);
        await expect(this.comboDestino).toBeDisplayed()
        await this.comboDestino.click();
        await this.pasajeros.click();
        await await expect(this.comboSelecionaPasajero).toBeDisplayed()
        await this.ninosPlus.waitForClickable({ timeout: 5000 });
        await this.ninosPlus.click();
        await this.infantesPlus.waitForClickable({ timeout: 5000 });
        await this.infantesPlus.click();
        await this.selectFechaIda.click();
        await this.fechaIda.click();
        await this.selectFechaRegreso.click();
        await this.fechaRegreso.click();
        await this.botonBuscarVuelo.click();
    }

    /**
     * Sobreescribimos el metodo para levantar el navegador.
     */
    open() {
        return super.open('');
    }
}

module.exports = new PaginaPrincipal();
