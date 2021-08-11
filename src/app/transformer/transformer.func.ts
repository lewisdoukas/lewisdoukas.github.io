
// import * as proj4 from "proj4";
import * as proj4x from "proj4"; 

export class Transformation {

    constructor() {}

    static transform(from:any, to:any, x:any, y:any, z?:any) {
        const epsg = require('epsg-index/all.json')
        // const proj4 = require('proj4')
        const proj4 = (proj4x as any).default;
    
        const leadingEPSG = /^epsg:/i

        if ('string' !== typeof from) throw new Error('from must be a string')
        from = from.replace(leadingEPSG, '')
        const fromEPSG = epsg[from]
        if (!fromEPSG) throw new Error(from + ' is not a valid EPSG coordinate system')
    
        if ('string' !== typeof to) throw new Error('to must be a string')
        to = to.replace(leadingEPSG, '')
        const toEPSG = epsg[to]
        if (!toEPSG) throw new Error(to + ' is not a valid EPSG coordinate system')
    
        const transf = proj4(fromEPSG.proj4, toEPSG.proj4);

        return transf.forward({ x: x, y: y, z: z})
    }
}


// module.exports = transform