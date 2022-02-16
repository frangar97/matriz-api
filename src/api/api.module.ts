import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImpactoController } from './impacto/impacto.controller';
import { ImpactoRepository } from './impacto/impacto.repository';
import { ImpactoService } from './impacto/impacto.service';
import { ProbabilidadController } from './probabilidad/probabilidad.controller';
import { ProbabilidadRepository } from './probabilidad/probabilidad.repository';
import { ProbabilidadService } from './probabilidad/probabilidad.service';
import { RespuestaController } from './respuesta/respuesta.controller';
import { RespuestaRepository } from './respuesta/respuesta.repository';
import { RespuestaService } from './respuesta/respuesta.service';

@Module({
    imports: [TypeOrmModule.forFeature([RespuestaRepository, ProbabilidadRepository, ImpactoRepository])],
    controllers: [RespuestaController, ProbabilidadController, ImpactoController],
    providers: [RespuestaService, ProbabilidadService, ImpactoService]
})
export class ApiModule { }
