import { Controller, Get } from "@nestjs/common";
import { TipoControl } from "./tipo-control.entity";
import { TipoControlService } from "./tipo-control.service";

@Controller("api/tipocontrol")
export class TipoControlController {
    constructor(private tipoControlService: TipoControlService) { }

    @Get()
    getAll(): Promise<TipoControl[]> {
        return this.tipoControlService.getAll();
    }
}