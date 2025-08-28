export interface Route {
  src: string;
  dest?: string;
  headers?: { [key: string]: string };
  methods?: string[];
  status?: number;
}