import { Controller, Get } from "@nestjs/common";
import { Probabilidad } from "./probabilidad.entity";
import { ProbabilidadService } from "./probabilidad.service";

@Controller("api/probabilidad")
export class ProbabilidadController {
    constructor(private probabilidadService: ProbabilidadService) { }

    @Get()
    getAll(): Promise<Probabilidad[]> {
        return this.probabilidadService.getAll();
    }
}