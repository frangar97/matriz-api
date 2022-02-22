import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlController } from './control/control.controller';
import { ControlRepository } from './control/control.repository';
import { ControlService } from './control/control.service';
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
import { TipoControlController } from './tipo-control/tipo-control.controller';
import { TipoControlRepository } from './tipo-control/tipo-control.repository';
import { TipoControlService } from './tipo-control/tipo-control.service';
import { TipoEjecucionController } from './tipo-ejecucion/tipo-ejecucion.controller';
import { TipoEjecucionRepository } from './tipo-ejecucion/tipo-ejecucion.repository';
import { TipoEjecucionService } from './tipo-ejecucion/tipo-ejecucion.service';

@Module({
    imports: [TypeOrmModule.forFeature([RespuestaRepository, ProbabilidadRepository, ImpactoRepository, RiesgoRepository, TipoControlRepository, TipoEjecucionRepository, ControlRepository])],
    controllers: [RespuestaController, ProbabilidadController, ImpactoController, RiesgoController, TipoEjecucionController, TipoControlController, ControlController],
    providers: [RespuestaService, ProbabilidadService, ImpactoService, RiesgoService, TipoControlService, TipoEjecucionService, ControlService]
})
export class ApiModule { }
