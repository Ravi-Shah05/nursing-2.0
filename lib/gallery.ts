// Single source of truth for every campus photo shown on the site.
// Categories drive the filter tabs on /gallery; institution separates
// Sunrise Public School content from the College of Nursing.

export type GalleryCategory = 'campus' | 'classrooms' | 'labs' | 'offices' | 'people' | 'activities' | 'nursing';
export type Institution = 'school' | 'nursing';

export type GalleryImage = {
  src: string;
  title: string;
  category: GalleryCategory;
  institution: Institution;
};

export const categoryLabels: Record<GalleryCategory, string> = {
  campus: 'Campus & Grounds',
  classrooms: 'Classrooms',
  labs: 'Laboratories',
  offices: 'Offices',
  people: 'People & Events',
  activities: 'Student Activities',
  nursing: 'Nursing College',
};

export const galleryImages: GalleryImage[] = [
  { src: '/img/campus-nursing.jpeg', title: 'Sunrise College of Nursing', category: 'nursing', institution: 'nursing' },
  { src: '/img/nursing-staff.jpeg', title: 'Nursing Faculty & Students', category: 'nursing', institution: 'nursing' },
  { src: '/img/english-staff.jpeg', title: 'English Medium Faculty', category: 'people', institution: 'school' },
  { src: '/img/gujarati-staff.jpeg', title: 'Gujarati Medium Faculty', category: 'people', institution: 'school' },
  { src: '/img/gallery/corridor-garden.jpg', title: "Open Corridors with Garden View", category: 'campus', institution: 'school' },
  { src: '/img/gallery/corridor-2.jpg', title: "Ventilated Walkways", category: 'campus', institution: 'school' },
  { src: '/img/gallery/corridor-3.jpg', title: "Classroom Corridor", category: 'campus', institution: 'school' },
  { src: '/img/gallery/corridor-4.jpg', title: "Quiet Study Corridor", category: 'campus', institution: 'school' },
  { src: '/img/gallery/building-side.jpg', title: "School Building \u2014 Side View", category: 'campus', institution: 'school' },
  { src: '/img/gallery/building-lawn.jpg', title: "Campus Building & Lawn", category: 'campus', institution: 'school' },
  { src: '/img/gallery/building-front.jpg', title: "School Building \u2014 Front View", category: 'campus', institution: 'school' },
  { src: '/img/gallery/entrance-arch.jpg', title: "Main Entrance", category: 'campus', institution: 'school' },
  { src: '/img/gallery/campus-greenery.jpg', title: "Green Campus Approach", category: 'campus', institution: 'school' },
  { src: '/img/gallery/grounds-wide.jpg', title: "Playground & Open Grounds", category: 'campus', institution: 'school' },
  { src: '/img/gallery/building-grounds.jpg', title: "Campus Panorama", category: 'campus', institution: 'school' },
  { src: '/img/gallery/building-main.jpg', title: "Sunrise Public School", category: 'campus', institution: 'school' },
  { src: '/img/gallery/grounds-far.jpg', title: "Sports Ground", category: 'campus', institution: 'school' },
  { src: '/img/gallery/playground.jpg', title: "Playground Equipment", category: 'campus', institution: 'school' },
  { src: '/img/gallery/building-angle.jpg', title: "Campus View", category: 'campus', institution: 'school' },
  { src: '/img/gallery/expansion-1.jpg', title: "Campus Expansion \u2014 In Progress", category: 'campus', institution: 'school' },
  { src: '/img/gallery/expansion-2.jpg', title: "Growing Infrastructure", category: 'campus', institution: 'school' },
  { src: '/img/gallery/reception.jpg', title: "Reception & Admin Office", category: 'offices', institution: 'school' },
  { src: '/img/gallery/office-admin.jpg', title: "Administrative Office", category: 'offices', institution: 'school' },
  { src: '/img/gallery/office-principal.jpg', title: "Principal's Office", category: 'offices', institution: 'school' },
  { src: '/img/gallery/classroom-1.jpg', title: "Classroom Block", category: 'classrooms', institution: 'school' },
  { src: '/img/gallery/classroom-2.jpg', title: "Bright Classrooms", category: 'classrooms', institution: 'school' },
  { src: '/img/gallery/classroom-3.jpg', title: "Spacious Classrooms", category: 'classrooms', institution: 'school' },
  { src: '/img/gallery/classroom-4.jpg', title: "Learning Spaces", category: 'classrooms', institution: 'school' },
  { src: '/img/gallery/science-lab-1.jpg', title: "Science Laboratory", category: 'labs', institution: 'school' },
  { src: '/img/gallery/science-lab-2.jpg', title: "Chemistry Apparatus", category: 'labs', institution: 'school' },
  { src: '/img/gallery/science-lab-3.jpg', title: "Science Lab Workbenches", category: 'labs', institution: 'school' },
  { src: '/img/gallery/science-lab-4.jpg', title: "Laboratory Facilities", category: 'labs', institution: 'school' },
  { src: '/img/gallery/staircase.jpg', title: "Campus Interiors", category: 'campus', institution: 'school' },
  { src: '/img/gallery/computer-lab-1.jpg', title: "Computer Lab", category: 'labs', institution: 'school' },
  { src: '/img/gallery/computer-lab-2.jpg', title: "Digital Learning Stations", category: 'labs', institution: 'school' },
  { src: '/img/gallery/skill-lab-1.jpg', title: "Vocational Skill Lab", category: 'labs', institution: 'school' },
  { src: '/img/gallery/skill-lab-2.jpg', title: "Skill Development Machines", category: 'labs', institution: 'school' },
  { src: '/img/gallery/skill-lab-3.jpg', title: "Hands-on Skill Training", category: 'labs', institution: 'school' },
  { src: '/img/gallery/skill-lab-4.jpg', title: "Vocational Training Centre", category: 'labs', institution: 'school' },
  { src: '/img/gallery/garden-lawn.jpg', title: "Campus Green Lawn", category: 'campus', institution: 'school' },
  { src: '/img/gallery/garden-aerial-1.jpg', title: "Landscaped Gardens", category: 'campus', institution: 'school' },
  { src: '/img/gallery/garden-aerial-2.jpg', title: "Garden \u2014 Aerial View", category: 'campus', institution: 'school' },
  { src: '/img/gallery/students-entrance.jpg', title: "Students at the Entrance", category: 'people', institution: 'school' },
  { src: '/img/gallery/team-entrance.jpg', title: "Faculty at the Main Gate", category: 'people', institution: 'school' },
  { src: '/img/gallery/management-visit-1.jpg', title: "Management Campus Visit", category: 'people', institution: 'school' },
  { src: '/img/gallery/campus-community.jpg', title: "Campus Community", category: 'people', institution: 'school' },
  { src: '/img/gallery/management-visit-2.jpg', title: "Leadership at the School", category: 'people', institution: 'school' },
  { src: '/img/gallery/leadership-1.jpg', title: "Trustees on Campus", category: 'people', institution: 'school' },
  { src: '/img/gallery/leadership-2.jpg', title: "Management Members", category: 'people', institution: 'school' },
  { src: '/img/gallery/leadership-3.jpg', title: "Leadership Visit", category: 'people', institution: 'school' },
  { src: '/img/gallery/leadership-4.jpg', title: "Guests & Management", category: 'people', institution: 'school' },
  { src: '/img/activities/activity-computer.jpg', title: "Digital Learning in Action", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-sports.jpg', title: "Football on the School Ground", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-science.jpg', title: "Science Fair \u2014 Volcano Project", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-smartclass.jpg', title: "Smart Classroom Session", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-mentoring.jpg', title: "Teacher-Student Mentoring", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-chemistry.jpg', title: "Chemistry Practicals", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-music.jpg', title: "Music & Arts on the Lawn", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-community.jpg', title: "Proud Sunrisers", category: 'activities', institution: 'school' },
  { src: '/img/activities/activity-evening.jpg', title: "Study Circle at Dusk", category: 'activities', institution: 'school' },];
