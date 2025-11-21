import { DefaultProcessor } from "./DefaultProcessor";


export interface InterpolationProcessor {
  process(text: string, data?: Record<string, any>): string;
}


export default new DefaultProcessor();