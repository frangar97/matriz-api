import { Controller, Get } from "@nestjs/common";
import { Impacto } from "./impacto.entity";
import { ImpactoService } from "./impacto.service";

@Controller("api/impacto")
export class ImpactoController {
    constructor(private impactoService: ImpactoService) { }

    @Get()
    getAll(): Promise<Impacto[]> {
        return this.impactoService.getAll();
    }
}