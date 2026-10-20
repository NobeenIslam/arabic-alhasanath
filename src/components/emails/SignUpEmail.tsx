import type { SignUpInput } from '@/features/landing/schemas';

export const SignUpEmail = ({
  fullName,
  phoneNumber,
  emailAddress,
}: SignUpInput) => (
  <div>
    <b>New sign up</b>
    <br />
    Name: {fullName}
    <br />
    Phone: {phoneNumber}
    <br />
    Email: {emailAddress}
  </div>
);
