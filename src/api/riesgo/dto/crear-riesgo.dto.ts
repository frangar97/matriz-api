import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CrearRiesgoDto {
    @IsString()
    @IsNotEmpty({ message: "El nombre del riesgo es obligatorio" })
    nombre: string;

    @IsNumber()
    @IsNotEmpty({ message: "El riesgo debe tener un impacto" })
    impactoId: number;

    @IsNumber()
    @IsNotEmpty({ message: "El riesgo debe tener una probabilidad" })
    probabilidadId: number;

    @IsNumber()
    @IsNotEmpty({ message: "El riesgo debe tener una respuesta" })
    respuestaId: number;
}