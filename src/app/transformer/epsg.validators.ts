import { AbstractControl } from '@angular/forms';



export class EPSGValidators {

    static allEPSGs() {
        const commonEPSG = ['2100', '4326', '23035', '23034']
        const allEPSG = require('epsg-index/all.json');
        const options = [];
        for (let epsg in allEPSG) {
            if (commonEPSG.includes(allEPSG[epsg].code))
                options.push('EPSG:' + allEPSG[epsg].code + ', ' + allEPSG[epsg].name)
        }
        return options;

    }
    
    static validEPSG(control: AbstractControl) {
        const options = this.allEPSGs()

        // return new Promise((resolve) => {
        //     if (!(options.includes(control.value.split(',')[0].split(':')[1]) || options.includes(control.value.split(',')[1])))
        //         resolve({ invalidEPSG: true });
        //     else
        //         resolve(null);
        // });
    }

    
}
