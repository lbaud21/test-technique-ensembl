export interface Program {
    title: string;
    programType: string;
    images: any;
    releaseYear: number
  }
  
interface FetchResultData {
    total: number;
    entries: Program[];
  }

export interface FetchResult {
  data: FetchResultData
}