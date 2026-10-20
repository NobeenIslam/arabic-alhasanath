import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  NEXT_PUBLIC_POSTHOG_KEY: z
    .string()
    .min(1, 'NEXT_PUBLIC_POSTHOG_KEY is required'),
  BOOKING_EMAIL_RECIPIENT: z.email(
    'BOOKING_EMAIL_RECIPIENT must be a valid email address'
  ),
  RESEND_FROM_EMAIL: z.string().min(1, 'RESEND_FROM_EMAIL is required'),
  NEXT_PUBLIC_URL: z.string().url('NEXT_PUBLIC_URL must be a valid URL'),
});

type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars: string[] = [];
      const invalidVars: string[] = [];

      error.issues.forEach((issue) => {
        const varName = issue.path.join('.');
        if (
          issue.code === 'invalid_type' &&
          'received' in issue &&
          issue.received === 'undefined'
        ) {
          missingVars.push(varName);
        } else {
          invalidVars.push(`${varName}: ${issue.message}`);
        }
      });

      console.error('\n❌ Environment Variable Validation Failed!\n');

      if (missingVars.length > 0) {
        console.error('🔴 Missing required environment variables:');
        missingVars.forEach((v) => console.error(`   - ${v}`));
        console.error('');
      }

      if (invalidVars.length > 0) {
        console.error('🔴 Invalid environment variables:');
        invalidVars.forEach((v) => console.error(`   - ${v}`));
        console.error('');
      }

      console.error(
        '💡 Please check your .env file and ensure all required variables are set correctly.'
      );
      console.error('   You can use .env.example as a reference.\n');

      process.exit(1);
    }

    throw error;
  }
}

export const env = validateEnv();
