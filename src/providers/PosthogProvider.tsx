'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from '@posthog/react';
import { useEffect, useRef } from 'react';
import { useConsent } from '@/providers/ConsentProvider';

export const PostHogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const { consentStatus } = useConsent();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isProduction) {
      return;
    }

    if (!isInitialized.current) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: '/ph',
        defaults: '2025-11-30',
        persistence: 'memory',
        disable_session_recording: true,
        autocapture: true,
      });
      isInitialized.current = true;
    }
  }, [isProduction]);

  useEffect(() => {
    if (!isProduction || !isInitialized.current) {
      return;
    }

    if (consentStatus === 'accepted') {
      posthog.set_config({ persistence: 'localStorage+cookie' });
      posthog.startSessionRecording();
    } else {
      posthog.stopSessionRecording();
    }
  }, [consentStatus, isProduction]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
};
