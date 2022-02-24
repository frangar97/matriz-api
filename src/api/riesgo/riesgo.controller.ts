import { Body, Controller, Get, Post } from "@nestjs/common";
import { CrearRiesgoDto } from "./dto/crear-riesgo.dto";
import { Riesgo } from "./riesgo.entity";
import { RiesgoService } from "./riesgo.service";

@Controller("api/riesgo")
export class RiesgoController {
    constructor(private riesgoService: RiesgoService) { }

    @Get()
    async getAll(): Promise<Riesgo[]> {
        return await this.riesgoService.getAll();
    }

    @Post()
    async createRiesgo(@Body() crearRiesgoDto: CrearRiesgoDto): Promise<Riesgo> {
        return await this.riesgoService.createRiesgo(crearRiesgoDto);
    }

    @Post("/agregarcontrol")
    async agregarControles(@Body() controles: { riesgoId: number, controlesId: number[] }): Promise<Riesgo> {
        return await this.riesgoService.agregarControles(controles);
    }
}