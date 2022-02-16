import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespuestaController } from './respuesta/respuesta.controller';
import { RespuestaRepository } from './respuesta/respuesta.repository';
import { RespuestaService } from './respuesta/respuesta.service';

@Module({
    imports: [TypeOrmModule.forFeature([RespuestaRepository])],
    controllers: [RespuestaController],
    providers: [RespuestaService]
})
export class ApiModule { }
