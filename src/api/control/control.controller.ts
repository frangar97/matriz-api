import { Body, Controller, Get, Post } from "@nestjs/common";
import { Control } from "./control.entity";
import { ControlService } from "./control.service";
import { CrearControlDto } from "./dto/crear-control.dto";

@Controller("api/control")
export class ControlController {
    constructor(private controlService: ControlService) { }

    @Get()
    getAll(): Promise<Control[]> {
        return this.controlService.getAll();
    }

    @Post()
    createControl(@Body() crearControlDto: CrearControlDto): Promise<Control> {
        return this.controlService.createControl(crearControlDto);
    }
}