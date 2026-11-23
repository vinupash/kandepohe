import Welcome from "@/assets/images/Welcome.jpg";
import Profile_1 from "@/assets/images/profile_1.jpg";
import Profile_2 from "@/assets/images/profile_2.jpg";
import Profile_3 from "@/assets/images/profile_3.jpg";
import Profile_4 from "@/assets/images/profile_4.jpg";
import Profile_5 from "@/assets/images/profile_5.jpg";

export const images = {
  Welcome,
  Profile_1,
  Profile_2,
  Profile_3,
  Profile_4,
  Profile_5,
} as const;

export type ImageName = keyof typeof images;
