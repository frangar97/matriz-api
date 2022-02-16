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
import { RiesgoController } from './riesgo/riesgo.controller';
import { RiesgoRepository } from './riesgo/riesgo.repository';
import { RiesgoService } from './riesgo/riesgo.service';

@Module({
    imports: [TypeOrmModule.forFeature([RespuestaRepository, ProbabilidadRepository, ImpactoRepository, RiesgoRepository])],
    controllers: [RespuestaController, ProbabilidadController, ImpactoController, RiesgoController],
    providers: [RespuestaService, ProbabilidadService, ImpactoService, RiesgoService]
})
export class ApiModule { }
