import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProbabilidadController } from './probabilidad/probabilidad.controller';
import { ProbabilidadRepository } from './probabilidad/probabilidad.repository';
import { ProbabilidadService } from './probabilidad/probabilidad.service';
import { RespuestaController } from './respuesta/respuesta.controller';
import { RespuestaRepository } from './respuesta/respuesta.repository';
import { RespuestaService } from './respuesta/respuesta.service';

@Module({
    imports: [TypeOrmModule.forFeature([RespuestaRepository, ProbabilidadRepository])],
    controllers: [RespuestaController, ProbabilidadController],
    providers: [RespuestaService, ProbabilidadService]
})
export class ApiModule { }
