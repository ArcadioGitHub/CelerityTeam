const Page = require('./page');
const Pasajeros = require('../../constantes/constantes')

class ReservarVuelo extends Page {
    /**
     * definimos selectores usando metodos get
     */
    get botonAceptarLasCondiciones() { return $("//button[text()=' Entiendo y acepto las condiciones ']") }
    get vueloIdaBasico() { return $("(//div[@class='radio-buttons-wingo-maestro'])[1]") }
    get vueloIdaPlus() { return $("(//div[@class='radio-buttons-wingo-maestro'])[2]") }
    get vueloIdaPremium() { return $("(//div[@class='radio-buttons-wingo-maestro'])[3]") }
    get vueloRegresoBasico() { return $("(//div[@class='radio-buttons-wingo-maestro'])[4]") }
    get vueloRegresoPlus() { return $("(//div[@class='radio-buttons-wingo-maestro'])[5]") }
    get vueloRegresoPremium() { return $("(//div[@class='radio-buttons-wingo-maestro'])[6]") }
    get botonContinue() { return $("(//button[text()='Continue'])[2]") }

    get nombreAdulto() { return $('#name-ad-1') }
    get apellidoAdulto() { return $('#lastname-ad-1') }
    get emailAdulto() { return $('#email-ad-1') }
    get confirmarEmailAdulto() { return $('#email-confirm-ad-1') }
    get celularAdulto() { return $('#phone-ad-1') }
    get documentoAdulto() { return $('#numero-ad-1') }
    get selectSexo() { return $('#sex-ad-1') }
    get sexoHombre() { return $("//div[@id='sex-ad-1']//ul//li[text()='Male']") }
    get sexoMujer() { return $("//div[@id='sex-ad-1']//ul//li[text()='Female']") }
    get añoNacimientoAdulto() { return $("//ngx-combo-datepicker[@id='1-birthday-0']//select//option[contains(text(),'1995')]") }
    get mesNacimientoAdulto() { return $("//ngx-combo-datepicker[@id='1-birthday-0']//select//option[contains(text(),'Sep')]") }
    get diaNacimientoAdulto() { return $("//ngx-combo-datepicker[@id='1-birthday-0']//select//option[contains(text(),' 30')]") }

    /**
     * Metodo para reservar el vuelo
     * 
     */
    async reservarVuelo() {
        const openTabs = await browser.getWindowHandles();
        console.log(openTabs)
        await browser.switchToWindow(openTabs[1]);
        await this.botonAceptarLasCondiciones.click();
        await this.vueloIdaPlus.waitForClickable({ timeout: 5000 });
        await this.vueloIdaPlus.click();
        await this.vueloRegresoPlus.waitForClickable({ timeout: 5000 });
        await this.vueloRegresoPlus.click();
        await this.botonContinue.waitForClickable({ timeout: 5000 });
        await this.botonContinue.click();
    }

    async llenarInformacionDelAdulto() {
        const pasajeros = await Pasajeros.getPasajeros();
        await this.nombreAdulto.setValue(pasajeros.adulto.nombre);
        await this.apellidoAdulto.setValue(pasajeros.adulto.apellido);
        await this.selectSexo.click();
        await this.sexoHombre.click();
        await this.añoNacimientoAdulto.click();
        await this.mesNacimientoAdulto.click();
        await this.diaNacimientoAdulto.click();
        await this.emailAdulto.setValue(pasajeros.adulto.email);
        await this.confirmarEmailAdulto.setValue(pasajeros.adulto.email);
        await this.celularAdulto.setValue(pasajeros.adulto.celular);
        await this.documentoAdulto.setValue(pasajeros.adulto.documento);
    }

    /**
     * Sobreescribimos el metodo para levantar el navegador.
     */
    open() {
        return super.open('');
    }
}

module.exports = new ReservarVuelo();
