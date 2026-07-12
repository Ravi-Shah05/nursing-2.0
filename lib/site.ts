// Central source of truth for Sunrise Group of Education content.
// Real institutional data — do not replace with fabricated figures.

export const site = {
  groupName: 'Sunrise Group of Education',
  nursingName: 'Sunrise College of Nursing',
  schoolName: 'Sunrise Public School',
  city: 'Dahod',
  tagline: 'Excellence in Education | Expertise in Care | Commitment to Society',

  phone: '7567000589',
  phoneDisplay: '+91 75670 00589',
  phoneHref: 'tel:+917567000589',
  whatsapp: 'https://wa.me/917567000589',
  email: 'spsinfo1412@gmail.com',
  address: {
    line1: 'Opp. Ambika Petrol Pump, Chakaliya Road,',
    line2: 'Delsar, Dahod - 389151, Gujarat',
  },

  recognition: {
    government: 'Government of Gujarat',
    council: 'Gujarat Nursing Council, Ahmedabad',
    university: 'Shri Govind Guru University, Godhra',
  },

  clinicalPartners: [
    { name: 'Zydus Medical College & Hospital, Dahod', focus: 'Comprehensive clinical training across specialties' },
    { name: 'Navadha Hospital', focus: 'Specialized psychiatric nursing training' },
    { name: 'Community & Primary Health Centers', focus: 'Community-based and rural healthcare training' },
  ],
} as const;

export type NursingCourse = {
  title: string;
  short: string;
  duration: string;
  type: string;
  eligibility: string;
  intake?: string;
  description: string;
};

export const nursingCourses: NursingCourse[] = [
  {
    title: 'B.Sc. Nursing',
    short: 'B.Sc',
    duration: '4 Years',
    type: 'Undergraduate Degree',
    eligibility: '10+2 (Science) with Physics, Chemistry, Biology & English',
    intake: '60 Seats',
    description:
      'A comprehensive degree program preparing students for senior nursing roles, higher studies, and global healthcare opportunities.',
  },
  {
    title: 'GNM',
    short: 'GNM',
    duration: '3 Years',
    type: 'Diploma — General Nursing & Midwifery',
    eligibility: '10+2 in any stream with required percentage',
    intake: '60 Seats',
    description:
      'General Nursing and Midwifery focused on bedside care, community health, and intensive hospital training.',
  },
  {
    title: 'ANM',
    short: 'ANM',
    duration: '2 Years',
    type: 'Certificate — Auxiliary Nurse Midwife',
    eligibility: '10+2 pass (Arts / Science)',
    intake: '60 Seats',
    description:
      'A vocational nursing program specialized in community healthcare and basic maternity services.',
  },
  {
    title: 'D.M.L.T',
    short: 'DMLT',
    duration: '2 Years',
    type: 'Diploma — Medical Laboratory Technician',
    eligibility: '10+2 (Science, Arts or Commerce)',
    intake: '60 Seats',
    description:
      'Diploma in Medical Laboratory Technology, training skilled technicians for diagnostic and pathology labs.',
  },
  {
    title: 'P.B.B.Sc. Nursing',
    short: 'P.B.B.Sc',
    duration: '2 Years',
    type: 'Post Basic Degree',
    eligibility: 'GNM with RN/RM registration (as per INC & GNC guidelines)',
    description:
      'A diploma-to-degree pathway enabling registered nurses to upgrade their qualification and career prospects.',
  },
  {
    title: 'M.Sc. Nursing',
    short: 'M.Sc',
    duration: '2 Years',
    type: 'Postgraduate Degree',
    eligibility: 'B.Sc / P.B.B.Sc Nursing with RN/RM registration & required marks',
    description:
      'A postgraduate specialization for advanced clinical practice, teaching, research, and leadership roles.',
  },
];

export const schoolLeadership = [
  {
    name: 'Mr. Rajesh Mehta',
    role: 'Campus Director',
    photo: '/img/rajesh-mehta.jpeg',
    message:
      'Education is the foundation of a successful future. At Sunrise Group of Education, we are committed to nurturing knowledge, values, confidence, and skills that empower every student to achieve excellence in life. Together, let us inspire learning, innovation, and lifelong success.',
  },
  {
    name: 'Mr. Mahendra Gehlot',
    role: 'Principal — English Medium (Std 1 to 10)',
    photo: '/img/mahendra-gehlot.jpeg',
    message:
      'Welcome to Sunrise Public School (English Medium). Our goal is to provide quality education in a caring, inspiring environment where every child can learn, grow, and succeed — with a focus on values, discipline, confidence, and overall personality development.',
  },
  {
    name: 'Mrs. Mittal Panchal',
    role: 'Principal — Gujarati Medium (Std 1 to 10)',
    photo: '/img/mittal-panchal.jpeg',
    message:
      'Welcome to Sunrise Public School (Gujarati Medium). We are committed to quality education in a supportive, positive learning environment — focused on academic excellence, strong values, discipline, and the overall development of every student.',
  },
  {
    name: 'Mrs. Minaxi Shah',
    role: 'Principal — Std 11 & 12 (English & Gujarati)',
    photo: '/img/minaxi-shah.jpeg',
    message:
      'Welcome to New Sunrise Public School (Higher Secondary). With experienced faculty, modern teaching methods, and a supportive environment, we prepare students for academic excellence and future careers — encouraging them to dream big and become responsible citizens.',
  },
];

export const leadership = [
  {
    name: 'Mr. Mithalal Gandhi',
    role: 'Managing Trustee',
    photo: '/img/mithalal-gandhi.jpeg',
    quote: 'Service with Compassion and Excellence.',
    message:
      'Nursing is not just a profession, but a noble service to humanity. At Sunrise we provide quality education, modern infrastructure, and meaningful clinical exposure — with special emphasis on serving the rural and tribal communities of Dahod.',
  },
  {
    name: 'Mr. Ravi Pancholi',
    role: 'Managing Trustee',
    photo: '/img/ravi-pancholi.jpeg',
    quote: "We don't just build careers, we shape responsible caregivers for society.",
    message:
      'Education is the foundation for building a progressive and compassionate society. We nurture future professionals who are clinically competent and compassionate caregivers, supported by experienced faculty, modern facilities, and a strong value system.',
  },
  {
    name: 'Mr. Narendra Soni',
    role: 'Public Representative',
    photo: '/img/narendra-soni.jpeg',
    quote: 'Empowering minds today to care for lives tomorrow.',
    message:
      'A strong nation is built on the pillars of education and healthcare. This institution nurtures not only skilled professionals but responsible citizens with a deep sense of service and humanity.',
  },
  {
    name: 'Prof. Shelin Damor',
    role: 'Principal, College of Nursing',
    photo: '/img/nursing-staff.jpeg',
    quote: 'Step in with a dream, walk out with a purpose.',
    message:
      'We shape future nurses who are clinically proficient, deeply compassionate, and ethically strong — leaders who combine knowledge with kindness and skill with sensitivity.',
  },
];
