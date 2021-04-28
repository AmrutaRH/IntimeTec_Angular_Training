import { Bus } from "./bus.model";
import { Journey_Route } from "./route";

export interface Journey {
    bus:Bus;
    seats:string;
    fare:number;
    journey_route:Journey_Route
}

