import type { RegisterInterestInput } from '@/features/landing/schemas';

export const RegistrationEmail = ({
  name,
  phone,
  email,
  level,
  lesson_type,
  preferred_times,
}: RegisterInterestInput) => (
  <div>
    <b>New registration of interest</b>
    <br />
    Name: {name}
    <br />
    Phone: {phone}
    <br />
    Email: {email}
    <br />
    Level: {level}
    <br />
    Lesson type: {lesson_type}
    <br />
    Preferred weekend times: {preferred_times || 'Not given'}
  </div>
);
