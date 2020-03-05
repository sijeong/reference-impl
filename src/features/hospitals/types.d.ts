declare module 'HospitalModels' {
  // export type Hospital = {
  //     id: number;
  //     name: string;
  //     description: string;
  //     logo: string;
  //     overview: string;
  //     countryId: number;
  //     countryName: string;
  //     reviewCount: number;
  //     reviewTier: string;
  //     awards: [];
  //     medias: []
  // };

  export interface HospitalAward {
    name: string;
    image: string;
    date: string;
  }
  export type HospitalAwards = HospitalAward[];

  export interface HospitalMedia {
    mediaType: number;
    url: string;
    description: string;
    order: number;
  }
  export type HospitalMedias = HospitalMedia[];

  export interface HospitalLocation {
    latitude: number;
    longitude: number;
    country: string;
    city: string;
    zipCode: string;
    address: string;
  }
  export interface MediaViewModel {
    id?: number;
    mediaType?: MediaType;
    url?: string;
    thumbnailUrl?: string;
    description?: string;
    order?: number;
  }

  export interface AwardViewModel {
    id?: number;
    name?: string;
    image?: string;
    date?: string;
  }
  export interface Hospital {
    id?: number;
    name?: string;
    description?: string;
    logo?: string;
    overview?: string;
    countryId?: number;
    countryName?: string;
    reviewCount?: number;
    reviewTier?: string;
    reviewRate?: number;
    awards?: AwardViewModel[];
    medias?: MediaViewModel[];
    // id: number
    // name: string
    // description: string
    // logo: string
    // overview: string
    // bedsCount: number
    // operationRoomsCount: number
    // icuBedsCount: number
    // departmentsCount: number
    // medicalStaffCount: number
    // countryId: number
    // awards: HospitalAwards
    // medias: HospitalMedias
    // location: HospitalLocation
  }
}
