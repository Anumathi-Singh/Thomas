export const college = { name: 'St. Thomas', address: 'Pegadapally Road, Achanpally, Bodhan, Nizamabad, Telangana – 503180', society: 'K.P. Educational Society' };
export const photos = {
 hero: '/images/official/campus.jpg',
 campus: '/images/official/campus.jpg',
 library: '/images/official/gallery-1.jpg',
 students: '/images/official/entrance.jpg',
 teaching: '/images/official/gallery-7.jpg',
};
export const programmes = [
 { code: 'B.Ed', name: 'Bachelor of Education', text: 'Build your understanding of learners, classrooms, and the craft of teaching.', tags: ['Teacher education', 'Undergraduate'], detail: 'Explore a pathway into teaching through educational theory, pedagogy, and classroom practice. Contact the college to confirm current eligibility, programme duration, intake, fees, and admission requirements.' },
 { code: 'D.Ed', name: 'Diploma in Education', text: 'Lay the foundations for a meaningful journey in elementary education.', tags: ['Elementary education', 'Diploma'], detail: 'Discover foundational teacher education at St. Thomas Institution of Elementary Teachers Education. The existing college website lists this programme as D.Ed. Confirm the current course designation, eligibility, duration, and admission process with the college.' },
];
export type Role = 'student' | 'faculty' | 'admin';
export const roles: Role[] = ['student', 'faculty', 'admin'];
