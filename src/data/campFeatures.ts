export type CampFeature = {
  icon: "Mountain" | "Tent" | "Flame" | "Leaf" | "Heart" | "Star" | "Users" | "Clock";
  title: string;
  color: "blue" | "orange" | "red" | "green" | "pink" | "purple" | "teal" | "indigo";
  description: string;
  image: string;
};

export const campFeatures: CampFeature[] = [
  { icon: "Mountain", title: "Scenic Himalayan Locations", color: "blue", description: "Camps set at panoramic Himalayan viewpoints with sweeping mountain and valley views.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4ad7cb0b-81cd-4934-b089-b84850f1131f-all-season-camp-and-celebrations-compresso.webp" },
  { icon: "Tent", title: "Multiple Accommodation", color: "orange", description: "Choose from hotels, homestays, traditional houses, luxury cottages, or camping tents.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/bdf066ab-5094-4a6e-8ca6-b8e7e701595d-backup-plans-compresso.webp" },
  { icon: "Flame", title: "Campfire Evenings", color: "red", description: "Every evening ends around a crackling campfire with music, stories, and community.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/5d04924a-ad71-49ad-8833-db649a566836-trekking-and-adventure-compresso.webp" },
  { icon: "Leaf", title: "Gaushala and Organic Farm Experience", color: "green", description: "Participate in herbal farming, organic cultivation, and Gaushala visits.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/246ba92b-fc12-48c3-b0a0-dc7800bda1d3-customizable-packages-compresso.webp" },
  { icon: "Heart", title: "Wellness Programs", color: "pink", description: "Daily yoga, meditation, pranayama, and mindfulness in pristine mountain air.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a8ce1cb9-0fe1-421d-aaf6-962a2c341efd-all-age-groups-compresso.webp" },
  { icon: "Star", title: "Wildlife & Night Safari", color: "purple", description: "Expert-guided jungle safaris and magical night safaris in Himalayan wildlife zones.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/dbec4c2a-8182-4aad-8e81-9f6734c0e6d6-fun-games-and-learning-compresso.webp" },
  { icon: "Users", title: "All Age Groups", color: "teal", description: "Carefully designed programs for children, families, seniors, and solo travelers.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/954d5ea5-530d-4dde-a7a9-5948a9830025-gaushala-and-organic-farming-compresso.webp" },
  { icon: "Clock", title: "Flexible Duration", color: "indigo", description: "One-day outings to weekend trips to extended 45-day programs - your choice.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8f0c9276-0199-45c8-abb8-ebf5e5cceba2-multiple-accommodations-compresso.webp" },
  { icon: "Flame", title: "All Season Camp and Celebration", color: "red", description: "Camp and celebration experiences designed for every season.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/b45ce70e-b3bd-4c0c-a40f-3f9295168617-special-batches-for-groups-compresso.webp" },
  { icon: "Star", title: "Value Driven Experience", color: "purple", description: "Meaningful Himalayan experiences designed around shared memories and discovery.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/702e4624-42af-4ac0-a6c3-7e3ce0e72789-special-batches-on-sundays-and-holidays-compresso.webp" },
  { icon: "Mountain", title: "Near Freezing Temperature, Where Summer Meets Snow", color: "blue", description: "Experience the distinctive Himalayan setting where summer meets snow.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/7452acb4-756b-4ff0-aa7d-71eabdd062ec-well-organized-camping-compresso.webp" },
  { icon: "Tent", title: "Trekking and Adventure", color: "orange", description: "Explore trekking and adventure experiences in the Himalayas.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8758c2b6-2274-4e33-9d58-53a496cb6344-value-driven-experience-compresso.webp" },
  { icon: "Tent", title: "River Edge and Bugyal (Mountain Top) Camping", color: "orange", description: "Camping experiences by the river edge and on bugyals (mountain tops).", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/905cd1dc-1196-4806-b78b-824c71a1a0a9-flexible-duration-compresso.webp" },
  { icon: "Clock", title: "Customizable Packages", color: "indigo", description: "Packages can be tailored to suit your group and camp plans.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/a3bfc7c9-da77-40bb-b143-3e0e8fec8224-campfire-evenings-compresso.webp" },
  { icon: "Heart", title: "CHP Backup Plans", color: "pink", description: "CHP backup plans support the camp experience.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/c41f6cf3-daf9-476b-ab96-cbfad5294158-near-freezing-temp-compresso.webp" },
  { icon: "Star", title: "Fun Games and Learning and Activities", color: "purple", description: "A blend of fun games, learning, and activities.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/0782f3dd-25cd-4beb-a7bf-2c23baadc3f8-river-edge-and-bugyal-camping-compresso.webp" },
  { icon: "Tent", title: "Well Organized Camping", color: "orange", description: "A thoughtfully organized camping experience.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/084bafee-77e8-47ca-9e80-c489632e33a9-scenic-himalyan-location-compresso.webp" },
  { icon: "Users", title: "Special Batches for Different Groups", color: "teal", description: "Special batches for school kids, college students, family groups, and office employees.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/4002ab92-55bf-4125-a41c-28652e21c793-wellness-programs-compresso.webp" },
  { icon: "Users", title: "Special Batches on Sundays and Holidays", color: "teal", description: "Special camp batches are available on Sundays and holidays.", image: "https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/website-images/8d41be39-d044-4cb8-9eba-c54e4a2a2e63-wildlife-and-night-safari-compresso.webp" },
];

export const campFeaturePreviewTitles = [
  "All Age Groups",
  "All Season Camp and Celebration",
  "Value Driven Experience",
];
