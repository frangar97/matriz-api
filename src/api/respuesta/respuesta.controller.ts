import { Controller, Get } from '@nestjs/common';
import { Respuesta } from './respuesta.entity';
import { RespuestaService } from './respuesta.service';

@Controller("/api/respuesta")
export class RespuestaController {
    constructor(private respuestaService: RespuestaService) { }


    @Get()
    getAll(): Promise<Respuesta[]> {
        return this.respuestaService.getAll();
    }
}
