export interface Org {
  OrgId: string;
  Name: string;
  LogoUrl: string;
}

export interface TimelinePost {
  Timestamp: number;
  OrgId: string;
  UserId: string;
  ContentType: "text" | "url";
  ContentData: string;
}
