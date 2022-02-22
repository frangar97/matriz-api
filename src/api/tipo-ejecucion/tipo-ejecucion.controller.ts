import { Controller, Get } from "@nestjs/common";
import { TipoEjecucion } from "./tipo-ejecucion.entity";
import { TipoEjecucionService } from "./tipo-ejecucion.service";

@Controller("api/tipoejecucion")
export class TipoEjecucionController {
    constructor(private tipoEjecucionService: TipoEjecucionService) { }

    @Get()
    getAll(): Promise<TipoEjecucion[]> {
        return this.tipoEjecucionService.getAll();
    }
}