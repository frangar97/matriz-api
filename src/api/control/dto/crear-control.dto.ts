import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CrearControlDto {
    @IsString()
    @IsNotEmpty({ message: "El nombre del control es obligatorio" })
    nombre: string;

    @IsNotEmpty({ message: "El control debe tener un tipo de control" })
    tipoControlId: number;

    @IsNotEmpty({ message: "El control debe tener un tipo de ejecucion" })
    tipoEjecucionId: number;
}