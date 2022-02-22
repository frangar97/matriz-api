import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CrearRiesgoDto {
    @IsString()
    @IsNotEmpty({ message: "El nombre del riesgo es obligatorio" })
    nombre: string;

    @IsNotEmpty({ message: "El riesgo debe tener un impacto" })
    impactoId: number;

    @IsNotEmpty({ message: "El riesgo debe tener una probabilidad" })
    probabilidadId: number;

    @IsNotEmpty({ message: "El riesgo debe tener una respuesta" })
    respuestaId: number;
}