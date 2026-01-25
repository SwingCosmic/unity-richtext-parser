import { DefaultProcessor } from "./DefaultProcessor";


export interface InterpolationProcessor {
  process(text: string, data?: Record<string, any>): string | HTMLElement;
}


export default new DefaultProcessor();