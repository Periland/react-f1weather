export type Race = {
  meeting_name: string;
  meeting_official_name: string;
  location: string;
  country_key: number;
  country_code: string;
  country_name: string;
  circuit_key: number;
  circuit_short_name: string;
  date_start: string;
  gmt_offset: Date;
  meeting_key: number;
  year: number;
};
  

export type Position = {
    date : Date;
    driver_number : number;
    meeting_key : number;
    position : number;
    session_key : number;
}