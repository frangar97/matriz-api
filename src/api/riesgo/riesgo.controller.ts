import { Controller } from "@nestjs/common";
import { RiesgoService } from "./riesgo.service";

@Controller("api/riesgo")
export class RiesgoController {
    constructor(private riesgoService: RiesgoService) { }


}